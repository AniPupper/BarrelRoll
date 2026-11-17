import {
  BufferGeometry,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  type Scene,
  SphereGeometry,
  BoxGeometry,
  CylinderGeometry,
  type Material,
} from 'three';
import type { GameSettings, RiderState } from '../shared/contracts';
import type { SurfSimulation } from './simulation';
import type { WaveModel } from './wave';

export class WaveVisual {
  readonly mesh: Mesh<BufferGeometry, MeshPhongMaterial>;
  readonly curlSpray: Points;
  private readonly rows = 176;
  private readonly columns = 52;
  private readonly base: Color;
  private readonly foam: Color;
  private readonly wave: WaveModel;

  constructor(wave: WaveModel, waterColor: string, foamColor: string) {
    this.wave = wave;
    this.base = new Color(waterColor);
    this.foam = new Color(foamColor);
    const geometry = new BufferGeometry();
    const vertexCount = (this.rows + 1) * (this.columns + 1);
    geometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(vertexCount * 3), 3));
    geometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(vertexCount * 3), 3));
    const indices: number[] = [];
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const a = row * (this.columns + 1) + column;
        const b = a + this.columns + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    geometry.setIndex(indices);
    const material = new MeshPhongMaterial({ vertexColors: true, side: DoubleSide,
      shininess: 80, specular: new Color('#8bd8d5') });
    this.mesh = new Mesh(geometry, material);
    this.mesh.frustumCulled = false;
    const sprayGeometry = new BufferGeometry();
    sprayGeometry.setAttribute('position',
      new Float32BufferAttribute(new Float32Array(240 * 3), 3));
    const sprayMaterial = new PointsMaterial({ color: foamColor, size: 0.24,
      transparent: true, opacity: 0.76, depthWrite: false });
    this.curlSpray = new Points(sprayGeometry, sprayMaterial);
    this.curlSpray.frustumCulled = false;
    this.update(0);
  }

  update(timeS: number): void {
    const positions = this.mesh.geometry.getAttribute('position');
    const colors = this.mesh.geometry.getAttribute('color');
    const tint = new Color();
    for (let row = 0; row <= this.rows; row++) {
      const alongM = this.wave.map.wave.rideLengthM * row / this.rows;
      const barrel = this.wave.barrelAt(alongM, 0, 0, timeS);
      for (let column = 0; column <= this.columns; column++) {
        const u = column / this.columns;
        const index = row * (this.columns + 1) + column;
        const point = this.wave.crossSectionAt(alongM, u, timeS);
        positions.setXYZ(index, point.x, point.y, point.z);
        const crestBreak = 0.78 + 0.22 * Math.sin(alongM * 0.19 - timeS * 2.1 + u * 13);
        const lipFoam = Math.pow(Math.max(0, (u - 0.945) / 0.055), 1.2) * crestBreak;
        const closingFoam = (barrel?.foam ?? 0) * Math.max(0, (u - 0.66) / 0.34);
        const insideShade = (barrel?.radiusM ?? 0) > 0.6 && u > 0.80 && u < 0.95 ?
          0.58 + 0.13 * (u - 0.80) / 0.15 : 1;
        const faceShade = u < 0.78 ? 0.82 + 0.18 * u / 0.78 : 1;
        const faceGlow = u < 0.78 ? Math.pow(u / 0.78, 4) * 0.11 : 0;
        const streak = u > 0.58 && u < 0.77 ?
          Math.pow(Math.max(0, Math.sin(alongM * 0.17 - timeS * 1.6 + u * 19)), 10) * 0.14 : 0;
        tint.copy(this.base).multiplyScalar(insideShade * faceShade).lerp(this.foam,
          Math.min(0.97, lipFoam * 0.9 + closingFoam * 0.54 + streak + faceGlow));
        colors.setXYZ(index, tint.r, tint.g, tint.b);
      }
    }
    positions.needsUpdate = true;
    colors.needsUpdate = true;
    this.mesh.geometry.computeVertexNormals();
    const sprayPositions = this.curlSpray.geometry.getAttribute('position');
    for (let i = 0; i < sprayPositions.count; i++) {
      const alongM = this.wave.map.wave.rideLengthM * (i + 0.5) / sprayPositions.count;
      const barrel = this.wave.barrelAt(alongM, 0, 0, timeS);
      if (!barrel || barrel.radiusM < 0.6) {
        sprayPositions.setXYZ(i, 0, -1000, 0);
        continue;
      }
      const phase = (timeS * (0.7 + (i % 5) * 0.06) + i * 0.43) % 1;
      const u = 0.96 + 0.03 * Math.sin(i * 6.7);
      const lip = this.wave.crossSectionAt(alongM, u, timeS);
      sprayPositions.setXYZ(i, lip.x + Math.sin(i * 13.2) * 0.14,
        lip.y + phase * 0.75, lip.z + Math.sin(i * 4.4) * 0.12);
    }
    sprayPositions.needsUpdate = true;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.curlSpray.geometry.dispose();
    (this.curlSpray.material as PointsMaterial).dispose();
  }
}

export class SurferVisual {
  readonly group = new Group();
  readonly boardColor: MeshStandardMaterial;
  private readonly body = new Group();
  private readonly materials: Material[] = [];
  private readonly geometries: Array<BoxGeometry | SphereGeometry | CylinderGeometry> = [];
  private readonly sprayGeometry: BufferGeometry;
  private readonly sprayMaterial: PointsMaterial;
  private readonly spray: Points;

  constructor(settings: GameSettings, foamColor: string) {
    this.boardColor = this.material(settings.boardColor, 0.25);
    const foam = new Color(foamColor);
    const suit = this.material('#1b2839', 0.85);
    const skin = this.material('#c89068', 0.9);
    const accent = this.material('#f2e9d8', 0.5);
    const finColor = this.material('#253c4d', 0.45);

    const board = this.part(new SphereGeometry(1, 18, 10), this.boardColor,
      [0, 0.08, 0], [0.36, 0.065, 1.1]);
    this.group.add(board);
    const fin = this.part(new BoxGeometry(0.04, 0.18, 0.24), finColor,
      [0, -0.06, -0.68]);
    this.group.add(fin);
    const stripe = this.part(new BoxGeometry(0.055, 0.012, 1.38), accent,
      [0, 0.145, 0]);
    this.group.add(stripe);

    const legs = [
      { x: -0.15, z: 0.34, tilt: -0.25 },
      { x: 0.15, z: -0.26, tilt: 0.2 },
    ];
    for (const leg of legs) {
      const limb = this.part(new CylinderGeometry(0.083, 0.09, 0.7, 8), suit,
        [leg.x, 0.48, leg.z]);
      limb.rotation.x = leg.tilt;
      this.body.add(limb);
      this.body.add(this.part(new SphereGeometry(0.115, 10, 8), skin,
        [leg.x, 0.18, leg.z + leg.tilt * 0.14], [1.15, 0.48, 1.6]));
    }
    this.body.add(this.part(new SphereGeometry(1, 14, 10), suit,
      [0, 1.02, 0.03], [0.23, 0.37, 0.18]));
    this.body.add(this.part(new SphereGeometry(0.17, 12, 10), skin,
      [0, 1.49, 0.11]));
    for (const side of [-1, 1]) {
      const arm = this.part(new CylinderGeometry(0.055, 0.07, 0.61, 8), skin,
        [side * 0.33, 1.05, 0.12]);
      arm.rotation.z = side * 0.8;
      this.body.add(arm);
    }
    this.group.add(this.body);

    const count = 70;
    this.sprayGeometry = new BufferGeometry();
    this.sprayGeometry.setAttribute('position',
      new Float32BufferAttribute(new Float32Array(count * 3), 3));
    this.sprayMaterial = new PointsMaterial({ color: foam, size: 0.11,
      transparent: true, opacity: 0.62, depthWrite: false });
    this.spray = new Points(this.sprayGeometry, this.sprayMaterial);
    this.spray.frustumCulled = false;
  }

  private material(color: string, roughness: number): MeshStandardMaterial {
    const material = new MeshStandardMaterial({ color, roughness });
    this.materials.push(material);
    return material;
  }

  private part(geometry: BoxGeometry | SphereGeometry | CylinderGeometry,
    material: MeshStandardMaterial, position: [number, number, number],
    scale?: [number, number, number]): Mesh {
    this.geometries.push(geometry);
    const mesh = new Mesh(geometry, material);
    mesh.position.set(...position);
    if (scale) mesh.scale.set(...scale);
    return mesh;
  }

  addSprayTo(scene: Scene): void {
    scene.add(this.spray);
  }

  update(sim: SurfSimulation, settings: GameSettings): void {
    const state: RiderState = sim.state;
    const crouch = state === 'barrel' ? 0.25 : state === 'airborne' ? -0.08 :
      state === 'wipeout' ? 0.6 : Math.max(0, (sim.speedMps - 14) * 0.012);
    this.body.position.y = -crouch;
    this.body.rotation.x = state === 'wipeout' ? 0.75 : state === 'airborne' ? -0.1 :
      Math.max(-0.18, Math.min(0.12, sim.lateralMps * 0.02));
    this.body.rotation.z = state === 'wipeout' ? 0.4 : state === 'airborne' ? 0 :
      Math.max(-0.22, Math.min(0.22, -sim.lateralMps * sim.wave.direction * 0.028));
    const positions = this.sprayGeometry.getAttribute('position');
    const count = settings.quality === 'low' ? 20 : settings.quality === 'medium' ? 42 : 70;
    const active = state !== 'airborne' && sim.speedMps > 3;
    for (let i = 0; i < positions.count; i++) {
      if (!active || i >= count) {
        positions.setXYZ(i, 0, -1000, 0);
        continue;
      }
      const phase = ((sim.simulationTimeS * (1.8 + (i % 7) * 0.12) + i * 0.31) % 1);
      if (state === 'barrel' && i >= count * 0.45) {
        const alongAhead = sim.alongM + 1 + phase * 7;
        const u = 0.82 + ((i * 7) % 17) / 17 * 0.17;
        const lip = sim.wave.crossSectionAt(alongAhead, u, sim.simulationTimeS);
        positions.setXYZ(i, lip.x + Math.sin(i * 12.7) * 0.08,
          lip.y - 0.12 - phase * 0.3, lip.z);
      } else {
        const spread = Math.sin(i * 17.23) * (0.3 + phase * 0.7);
        const rear = -sim.wave.direction * (0.2 + phase * (1.4 + sim.speedMps * 0.04));
        positions.setXYZ(i, sim.position.x + spread,
          sim.position.y + 0.08 + Math.sin(phase * Math.PI) * (state === 'wipeout' ? 1.2 : 0.55),
          sim.position.z + rear);
      }
    }
    positions.needsUpdate = true;
    this.boardColor.color.set(settings.boardColor);
  }

  dispose(): void {
    for (const geometry of this.geometries) geometry.dispose();
    for (const material of this.materials) material.dispose();
    this.sprayGeometry.dispose();
    this.sprayMaterial.dispose();
  }
}
