import {
  BufferGeometry,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  SphereGeometry,
  DodecahedronGeometry,
  type Scene,
} from 'three';
import type { EnvironmentHandle, GameSettings, MapDefinition } from '../shared/contracts';

const zStart = -160;
const zEnd = 780;
const coastX = (z: number) => -48 - Math.sin(z * 0.011) * 8 - Math.sin(z * 0.031) * 3;
const bluffHeight = (x: number, z: number) => {
  const t = Math.max(0, Math.min(1, (-x - 155) / 185));
  return 2 + 38 * Math.pow(t, 1.25) +
    t * (2.7 * Math.sin(z * 0.021) + 1.4 * Math.sin(z * 0.063));
};

function terrain(
  rows: number,
  columns: number,
  sample: (z: number, across: number) => { x: number; y: number; color: Color },
): Mesh<BufferGeometry, MeshStandardMaterial> {
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  for (let row = 0; row <= rows; row++) {
    const z = zStart + (zEnd - zStart) * row / rows;
    for (let column = 0; column <= columns; column++) {
      const samplePoint = sample(z, column / columns);
      positions.push(samplePoint.x, samplePoint.y, z);
      colors.push(samplePoint.color.r, samplePoint.color.g, samplePoint.color.b);
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const a = row * (columns + 1) + column;
      const b = a + columns + 1;
      indices.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const material = new MeshStandardMaterial({ vertexColors: true,
    roughness: 1, side: DoubleSide });
  return new Mesh(geometry, material);
}

// Original procedural scenery. The real Mavericks break is offshore from
// Pillar Point; the sandy cove and bluff are visible from the riding route.
export function createMavericksEnvironment(
  scene: Scene, map: MapDefinition, settings: GameSettings,
): EnvironmentHandle {
  if (map.id !== 'mavericks') throw new Error('Mavericks scenery requires the Mavericks map');
  const group = new Group();
  const previousFog = scene.fog;
  const oceanGeometry = new PlaneGeometry(2200, 2200);
  const oceanMaterial = new MeshPhongMaterial({ color: '#1b596d',
    specular: '#6ca7ae', shininess: 75, side: DoubleSide });
  const ocean = new Mesh(oceanGeometry, oceanMaterial);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = -0.06;
  group.add(ocean);

  const wetSand = new Color('#988c7a');
  const drySand = new Color('#c6b79b');
  const beach = terrain(84, 14, (z, across) => ({
    x: coastX(z) - 145 * across,
    y: -0.02 + 2.2 * Math.pow(across, 1.55) +
      0.09 * Math.sin(z * 0.12 + across * 5),
    color: wetSand.clone().lerp(drySand, Math.min(1, across * 1.5)),
  }));
  group.add(beach);

  const rockColor = new Color('#787468');
  const grassColor = new Color('#65785f');
  const bluff = terrain(84, 18, (z, across) => {
    const x = -155 - 185 * across;
    const grass = Math.min(0.85, 0.25 + across * 0.55 +
      Math.sin(z * 0.045 + across * 9) * 0.08);
    return { x, y: bluffHeight(x, z), color: rockColor.clone().lerp(grassColor, grass) };
  });
  group.add(bluff);

  const foamGeometry = new BufferGeometry();
  const foamPositions: number[] = [];
  const foamIndices: number[] = [];
  for (let row = 0; row <= 84; row++) {
    const z = zStart + (zEnd - zStart) * row / 84;
    const edgeX = coastX(z);
    foamPositions.push(edgeX + 0.3, 0.06, z, edgeX + 2.6, 0.06, z);
    if (row < 84) {
      const a = row * 2;
      foamIndices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  foamGeometry.setIndex(foamIndices);
  foamGeometry.setAttribute('position', new Float32BufferAttribute(foamPositions, 3));
  foamGeometry.computeVertexNormals();
  const foamMaterial = new MeshBasicMaterial({ color: map.visual.foamColor,
    transparent: true, opacity: 0.55, depthWrite: false, side: DoubleSide });
  const shorelineFoam = new Mesh(foamGeometry, foamMaterial);
  group.add(shorelineFoam);

  const rockGeometry = new DodecahedronGeometry(1, 0);
  const scatteredRockMaterial = new MeshStandardMaterial({ color: '#555d5d', roughness: 1 });
  for (let i = 0; i < 16; i++) {
    const z = -70 + i * 45 + Math.sin(i * 11) * 9;
    const rock = new Mesh(rockGeometry, scatteredRockMaterial);
    rock.position.set(coastX(z) - 5 - Math.abs(Math.sin(i * 8.7)) * 17,
      0.2, z);
    const scale = 0.8 + Math.abs(Math.sin(i * 3.13)) * 2.2;
    rock.scale.set(scale * 1.25, scale * 0.7, scale);
    rock.rotation.y = i * 1.3;
    group.add(rock);
  }

  const scrubGeometry = new SphereGeometry(1, 7, 5);
  const scrubMaterial = new MeshStandardMaterial({ color: '#465d48', roughness: 1 });
  const scrub = new Group();
  for (let i = 0; i < 40; i++) {
    const z = -130 + i * 22 + Math.sin(i * 7.1) * 12;
    const x = -180 - Math.abs(Math.sin(i * 4.3)) * 110;
    const bush = new Mesh(scrubGeometry, scrubMaterial);
    bush.position.set(x, bluffHeight(x, z) + 0.4, z);
    const scale = 0.9 + Math.abs(Math.sin(i * 2.9)) * 1.8;
    bush.scale.set(scale * 1.5, scale * 0.7, scale);
    scrub.add(bush);
  }
  group.add(scrub);
  scene.add(group);
  scene.fog = new Fog(map.visual.skyColor, 190, 850);

  let disposed = false;
  const setSettings = (next: GameSettings) => {
    scrub.visible = next.quality !== 'low';
    scene.fog = new Fog(map.visual.skyColor,
      next.quality === 'low' ? 150 : 190, next.quality === 'low' ? 650 : 850);
  };
  setSettings(settings);
  return {
    update(timeS) {
      if (disposed) return;
      shorelineFoam.material.opacity = 0.49 + 0.09 * Math.sin(timeS * 1.5);
    },
    setSettings,
    dispose() {
      if (disposed) return;
      disposed = true;
      scene.remove(group);
      scene.fog = previousFog;
      oceanGeometry.dispose(); oceanMaterial.dispose();
      beach.geometry.dispose(); beach.material.dispose();
      bluff.geometry.dispose(); bluff.material.dispose();
      foamGeometry.dispose(); foamMaterial.dispose();
      rockGeometry.dispose(); scatteredRockMaterial.dispose();
      scrubGeometry.dispose(); scrubMaterial.dispose();
    },
  };
}
