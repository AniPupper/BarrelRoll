import {
  BufferGeometry,
  Color,
  ConeGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  Mesh,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  Shape,
  type Scene,
  SphereGeometry,
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
  private readonly flippers: Mesh[] = [];
  private readonly materials: Material[] = [];
  private readonly geometries: BufferGeometry[] = [];
  private readonly sprayGeometry: BufferGeometry;
  private readonly sprayMaterial: PointsMaterial;
  private readonly spray: Points;

  constructor(settings: GameSettings, foamColor: string) {
    const foam = new Color(foamColor);
    const ice = new MeshPhysicalMaterial({ color: '#bceaf4', roughness: 0.14,
      metalness: 0, clearcoat: 0.7, clearcoatRoughness: 0.08,
      transparent: true, opacity: 0.9, side: DoubleSide });
    this.materials.push(ice);
    const outline: Array<[number, number]> = [
      [0, 1.22], [0.20, 1.09], [0.34, 0.68], [0.40, 0.08],
      [0.36, -0.52], [0.24, -0.95], [0.10, -1.16], [0, -1.20],
      [-0.10, -1.16], [-0.24, -0.95], [-0.36, -0.52],
      [-0.40, 0.08], [-0.34, 0.68], [-0.20, 1.09],
    ];
    const boardShape = new Shape();
    boardShape.moveTo(...outline[0]);
    for (const point of outline.slice(1)) boardShape.lineTo(...point);
    boardShape.closePath();
    const boardGeometry = new ExtrudeGeometry(boardShape, { depth: 0.1,
      bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.035,
      bevelSegments: 2, steps: 1 });
    this.geometries.push(boardGeometry);
    const board = new Mesh(boardGeometry, ice);
    board.rotation.x = Math.PI / 2;
    board.position.y = 0.13;
    this.group.add(board);

    const railGeometry = new BufferGeometry();
    railGeometry.setAttribute('position', new Float32BufferAttribute(
      outline.flatMap(([x, z]) => [x, 0.165, z]), 3));
    const railMaterial = new LineBasicMaterial({ color: '#f1ffff',
      transparent: true, opacity: 0.85 });
    this.geometries.push(railGeometry);
    this.materials.push(railMaterial);
    this.group.add(new LineLoop(railGeometry, railMaterial));

    const crackGeometry = new BufferGeometry();
    crackGeometry.setAttribute('position', new Float32BufferAttribute([
      -0.22, 0.166, 0.70, -0.03, 0.166, 0.35,
      -0.03, 0.166, 0.35, 0.16, 0.166, 0.23,
      0.23, 0.166, -0.54, 0.02, 0.166, -0.31,
      0.02, 0.166, -0.31, -0.14, 0.166, -0.40,
    ], 3));
    const crackMaterial = new LineBasicMaterial({ color: '#e6ffff',
      transparent: true, opacity: 0.65 });
    this.geometries.push(crackGeometry);
    this.materials.push(crackMaterial);
    this.group.add(new LineSegments(crackGeometry, crackMaterial));

    this.boardColor = this.material(settings.boardColor, 0.24);
    this.boardColor.transparent = true;
    this.boardColor.opacity = 0.38;
    this.group.add(this.part(new SphereGeometry(1, 12, 8), this.boardColor,
      [0, 0.175, 0], [0.055, 0.012, 0.72]));
    const iceFin = this.material('#a9e6f4', 0.18);
    iceFin.transparent = true;
    iceFin.opacity = 0.75;
    for (const x of [-0.14, 0.14]) {
      const fin = this.part(new ConeGeometry(0.11, 0.28, 4), iceFin,
        [x, -0.07, -0.72], [0.65, 1, 0.65]);
      fin.rotation.z = Math.PI;
      this.group.add(fin);
    }

    const feathers = this.material('#17242b', 0.9);
    const belly = this.material('#f3f5ed', 0.88);
    const beakAndFeet = this.material('#e3a048', 0.65);
    const eyes = this.material('#111c23', 0.35);
    this.body.add(this.part(new SphereGeometry(1, 22, 16), feathers,
      [0, 0.82, 0], [0.34, 0.56, 0.31]));
    this.body.add(this.part(new SphereGeometry(1, 18, 14), belly,
      [0, 0.84, 0.265], [0.25, 0.42, 0.085]));
    this.body.add(this.part(new SphereGeometry(1, 20, 16), feathers,
      [0, 1.46, 0.02], [0.27, 0.28, 0.27]));
    this.body.add(this.part(new SphereGeometry(1, 14, 10), belly,
      [0, 1.64, -0.07], [0.23, 0.065, 0.17]));
    for (const side of [-1, 1]) {
      this.body.add(this.part(new SphereGeometry(1, 12, 10), belly,
        [side * 0.29, 0.84, -0.02], [0.055, 0.30, 0.16]));
      const eyePatch = this.part(new SphereGeometry(1, 12, 10), belly,
        [side * 0.125, 1.49, 0.235], [0.095, 0.12, 0.045]);
      this.body.add(eyePatch);
      this.body.add(this.part(new SphereGeometry(1, 10, 8), eyes,
        [side * 0.125, 1.49, 0.278], [0.035, 0.05, 0.02]));
      const flipper = this.part(new SphereGeometry(1, 14, 10), feathers,
        [side * 0.39, 0.92, 0.015], [0.13, 0.36, 0.13]);
      this.flippers.push(flipper);
      this.body.add(flipper);
      this.body.add(this.part(new SphereGeometry(1, 12, 8), beakAndFeet,
        [side * 0.16, 0.22, side < 0 ? 0.27 : -0.19], [0.15, 0.055, 0.23]));
    }
    const beak = this.part(new ConeGeometry(0.105, 0.25, 5), beakAndFeet,
      [0, 1.34, 0.31]);
    beak.rotation.x = Math.PI / 2;
    this.body.add(beak);
    const tail = this.part(new ConeGeometry(0.12, 0.28, 5), feathers,
      [0, 0.47, -0.33]);
    tail.rotation.x = -Math.PI / 2;
    this.body.add(tail);
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

  private part(geometry: BufferGeometry,
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
    this.body.position.y = -crouch * 0.14;
    this.body.scale.y = state === 'barrel' ? 0.95 : 1;
    this.body.rotation.x = state === 'wipeout' ? 0.75 : state === 'airborne' ? -0.1 :
      Math.max(-0.18, Math.min(0.12, sim.lateralMps * 0.02));
    this.body.rotation.z = state === 'wipeout' ? 0.4 : state === 'airborne' ? 0 :
      Math.max(-0.22, Math.min(0.22, -sim.lateralMps * sim.wave.direction * 0.028));
    const flipperLift = state === 'airborne' || sim.wallRideActive ? 0.48 :
      state === 'barrel' ? 0.22 : 0.12;
    this.flippers[0].rotation.z = 0.35 + flipperLift;
    this.flippers[1].rotation.z = -0.35 - flipperLift;
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
