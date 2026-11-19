import {
  BoxGeometry,
  BufferGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  type Scene,
} from 'three';
import type { EnvironmentHandle, GameSettings, MapDefinition } from '../shared/contracts';

const zStart = 90;
const zEnd = -490;
const shoreX = (z: number) => -43 - 5 * Math.sin(z * 0.014) - 2 * Math.sin(z * 0.043);

function strip(
  rows: number,
  columns: number,
  point: (z: number, across: number) => { x: number; y: number; color: Color },
): Mesh<BufferGeometry, MeshStandardMaterial> {
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  for (let row = 0; row <= rows; row++) {
    const z = zStart + (zEnd - zStart) * row / rows;
    for (let column = 0; column <= columns; column++) {
      const sample = point(z, column / columns);
      positions.push(sample.x, sample.y, z);
      colors.push(sample.color.r, sample.color.g, sample.color.b);
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const a = row * (columns + 1) + column;
      const b = a + columns + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const material = new MeshStandardMaterial({ vertexColors: true, roughness: 1, side: DoubleSide });
  return new Mesh(geometry, material);
}

function palmFrond(): BufferGeometry {
  const positions: number[] = [];
  const indices: number[] = [];
  for (let i = 0; i <= 5; i++) {
    const t = i / 5;
    const x = t * 5.8;
    const y = 1.25 * Math.sin(t * Math.PI) - 1.1 * t * t;
    const width = 0.03 + 0.62 * Math.sin(t * Math.PI);
    positions.push(x, y, -width, x, y, width);
    if (i < 5) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function palm(
  x: number, z: number, scale: number,
  trunkGeometry: CylinderGeometry,
  trunkMaterial: MeshStandardMaterial,
  frondGeometry: BufferGeometry,
  frondMaterial: MeshStandardMaterial,
): Group {
  const tree = new Group();
  tree.position.set(x, 1.7, z);
  tree.scale.setScalar(scale);
  tree.rotation.z = 0.07 * Math.sin(z * 0.17);
  const trunk = new Mesh(trunkGeometry, trunkMaterial);
  trunk.position.y = 3.5;
  tree.add(trunk);
  for (let i = 0; i < 7; i++) {
    const leaf = new Mesh(frondGeometry, frondMaterial);
    leaf.position.set(0, 7, 0);
    leaf.rotation.y = i * Math.PI * 2 / 7;
    tree.add(leaf);
  }
  return tree;
}

// Original procedural beach and palms. All solids stay west of x=-40; the
// rideable face and folded lip are near x=0..12 and remain owned by the engine.
export function createPipelineEnvironment(
  scene: Scene, map: MapDefinition, settings: GameSettings,
): EnvironmentHandle {
  if (map.id !== 'pipeline') throw new Error('Pipeline scenery requires the Pipeline map');

  const group = new Group();
  const detail = new Group();
  const previousFog = scene.fog;

  const oceanGeometry = new PlaneGeometry(1800, 1800);
  const oceanMaterial = new MeshStandardMaterial({
    color: '#13798a', roughness: 0.53, metalness: 0.08, side: DoubleSide,
  });
  const ocean = new Mesh(oceanGeometry, oceanMaterial);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = -0.24;
  group.add(ocean);

  const wetSand = new Color('#c9b38a');
  const drySand = new Color('#ecd8a8');
  const beach = strip(72, 12, (z, t) => ({
    x: shoreX(z) - 92 * t,
    y: -0.08 + 2.6 * Math.pow(t, 1.5) + 0.08 * Math.sin(z * 0.09 + t * 6),
    color: wetSand.clone().lerp(drySand, Math.min(1, t * 1.6)),
  }));
  group.add(beach);

  const stone = new Color('#787d69');
  const green = new Color('#3f7450');
  const ridge = strip(72, 16, (z, t) => ({
    x: -135 - 170 * t,
    y: 2.6 + 26 * Math.pow(t, 1.4) +
      t * (3.5 * Math.sin(z * 0.027) + 1.4 * Math.sin(z * 0.081)),
    color: stone.clone().lerp(green, Math.min(0.9, 0.35 + t * 0.6)),
  }));
  group.add(ridge);

  const foamStrip = strip(72, 1, (z, t) => ({
    x: shoreX(z) + 0.3 + 2.3 * t,
    y: 0.05,
    color: new Color('#edfff6'),
  }));
  const foamGeometry = foamStrip.geometry;
  foamStrip.material.dispose();
  const foamMaterial = new MeshBasicMaterial({
    color: map.visual.foamColor, transparent: true, opacity: 0.65,
    depthWrite: false, side: DoubleSide,
  });
  const shorelineFoam = new Mesh(foamGeometry, foamMaterial);
  group.add(shorelineFoam);

  const trunkGeometry = new CylinderGeometry(0.20, 0.37, 7, 6);
  const trunkMaterial = new MeshStandardMaterial({ color: '#715e47', roughness: 1 });
  const frondGeometry = palmFrond();
  const frondMaterial = new MeshStandardMaterial({ color: '#2b704b',
    roughness: 1, side: DoubleSide });
  for (let i = 0; i < 13; i++) {
    const z = 42 - i * 39 + 5 * Math.sin(i * 2.4);
    const x = shoreX(z) - 29 - 10 * Math.abs(Math.sin(i * 1.8));
    const tree = palm(x, z, 0.8 + 0.22 * Math.abs(Math.sin(i * 3.1)),
      trunkGeometry, trunkMaterial, frondGeometry, frondMaterial);
    (i % 3 === 0 ? group : detail).add(tree);
  }

  // A small original beach lookout supplies a recognizable silhouette without
  // placing a gameplay obstacle in the surf corridor.
  const boxGeometry = new BoxGeometry(1, 1, 1);
  const woodMaterial = new MeshStandardMaterial({ color: '#9d6848', roughness: 1 });
  const cabinMaterial = new MeshStandardMaterial({ color: '#e9d2a2', roughness: 1 });
  const roofMaterial = new MeshStandardMaterial({ color: '#b45e4d', roughness: 1 });
  const roofGeometry = new ConeGeometry(3.5, 2.1, 4);
  const lookout = new Group();
  lookout.position.set(-106, 2.2, -190);
  for (const x of [-2.2, 2.2]) {
    for (const z of [-2.2, 2.2]) {
      const post = new Mesh(boxGeometry, woodMaterial);
      post.position.set(x, 2.4, z);
      post.scale.set(0.28, 4.8, 0.28);
      lookout.add(post);
    }
  }
  const cabin = new Mesh(boxGeometry, cabinMaterial);
  cabin.position.y = 5.5;
  cabin.scale.set(5.5, 2.6, 5.5);
  lookout.add(cabin);
  const roof = new Mesh(roofGeometry, roofMaterial);
  roof.position.y = 7.7;
  roof.rotation.y = Math.PI / 4;
  lookout.add(roof);
  detail.add(lookout);

  group.add(detail);
  const warmLight = new DirectionalLight('#ffe5b2', 0.9);
  warmLight.position.set(-120, 100, -200);
  group.add(warmLight);
  scene.add(group);

  let disposed = false;
  const setSettings = (next: GameSettings) => {
    if (disposed) return;
    detail.visible = next.quality !== 'low';
    scene.fog = new Fog(map.visual.skyColor,
      next.quality === 'low' ? 135 : 185,
      next.quality === 'low' ? 570 : 760);
  };
  setSettings(settings);

  return {
    update(timeS) {
      if (disposed) return;
      shorelineFoam.material.opacity = 0.6 + 0.08 * Math.sin(timeS * 1.2);
    },
    setSettings,
    dispose() {
      if (disposed) return;
      disposed = true;
      scene.remove(group);
      scene.fog = previousFog;
      oceanGeometry.dispose(); oceanMaterial.dispose();
      beach.geometry.dispose(); beach.material.dispose();
      ridge.geometry.dispose(); ridge.material.dispose();
      foamGeometry.dispose(); foamMaterial.dispose();
      trunkGeometry.dispose(); trunkMaterial.dispose();
      frondGeometry.dispose(); frondMaterial.dispose();
      boxGeometry.dispose(); woodMaterial.dispose(); cabinMaterial.dispose();
      roofGeometry.dispose(); roofMaterial.dispose();
    },
  };
}
