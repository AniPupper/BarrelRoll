import {
  BufferGeometry,
  Color,
  ConeGeometry,
  type DataTexture,
  DoubleSide,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  Mesh,
  type ShaderMaterial,
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
import { createSprayTexture, createWaterNormalMap } from './waterTexture';

import { breakingFoam, breakingWater } from './breakingWater';

export class WaveVisual {
  readonly mesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly backMesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly lipMesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly lipFoam: Mesh<BufferGeometry, ShaderMaterial>;
  readonly impactFoam: Mesh<BufferGeometry, ShaderMaterial>;
  readonly curlSpray: Points;
  private readonly rows = 140;
  private readonly faceColumns = 28;
  private readonly lipColumns = 28;
  private readonly backColumns = 30;
  private readonly base: Color;
  private readonly foam: Color;
  private readonly wave: WaveModel;
  private readonly waterNormal: DataTexture;
  private readonly sprayTexture: DataTexture;

  constructor(wave: WaveModel, waterColor: string, foamColor: string) {
    this.wave = wave;
    this.base = new Color(waterColor);
    this.foam = new Color(foamColor);
    this.waterNormal = createWaterNormalMap();
    const sky = wave.map.visual.skyColor;
    const faceMaterial = breakingWater(this.base, sky, this.waterNormal);
    this.mesh = new Mesh(this.makeSheet(this.faceColumns, 0, .78), faceMaterial);
    this.backMesh = new Mesh(this.makeSheet(this.backColumns), faceMaterial);
    this.lipMesh = new Mesh(this.makeSheet(this.lipColumns, .78, 1),
      breakingWater(this.base, sky, this.waterNormal, true));
    this.lipFoam = new Mesh(this.makeSheet(4, .965, 1), breakingFoam(true));
    this.impactFoam = new Mesh(this.makeSheet(4), breakingFoam(false));
    for (const sheet of [this.mesh, this.backMesh, this.lipMesh, this.lipFoam, this.impactFoam]) {
      sheet.frustumCulled = false;
    }
    this.lipFoam.renderOrder = 1;
    const sprayGeometry = new BufferGeometry();
    sprayGeometry.setAttribute('position',
      new Float32BufferAttribute(new Float32Array(480 * 3), 3));
    this.sprayTexture = createSprayTexture();
    const sprayMaterial = new PointsMaterial({ color: foamColor, size: 0.13,
      map: this.sprayTexture, alphaTest: 0.03,
      transparent: true, opacity: 0.72, depthWrite: false });
    this.curlSpray = new Points(sprayGeometry, sprayMaterial);
    this.curlSpray.frustumCulled = false;
    this.update(0);
  }

  private makeSheet(columns: number, startU = 0, endU = 1): BufferGeometry {
    const geometry = new BufferGeometry();
    const vertexCount = (this.rows + 1) * (columns + 1);
    geometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(vertexCount * 3), 3));
    geometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(vertexCount * 3), 3));
    const uvs = new Float32Array(vertexCount * 2);
    for (let row = 0; row <= this.rows; row++) {
      for (let column = 0; column <= columns; column++) {
        const index = row * (columns + 1) + column;
        uvs[index * 2] = startU + (endU - startU) * column / columns;
        uvs[index * 2 + 1] = row / this.rows;
      }
    }
    geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
    const indices: number[] = [];
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < columns; column++) {
        const a = row * (columns + 1) + column;
        const b = a + columns + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    geometry.setIndex(indices);
    return geometry;
  }

  private alongSamples(): Float32Array {
    const samples = new Float32Array(this.rows + 1);
    const length = this.wave.map.wave.rideLengthM;
    const peel = this.wave.peelPositionM;
    if (peel === null) {
      for (let row = 0; row <= this.rows; row++) samples[row] = length * row / this.rows;
      return samples;
    }
    const nearStart = Math.max(0, peel - 36);
    const nearEnd = Math.min(length, peel + 28);
    // Give the folding edge sub-meter detail even on a long wave. Without
    // these samples the curve around the daylight opening has visible corners.
    const pocketStart = Math.max(nearStart, peel - 7);
    const pocketEnd = Math.min(nearEnd, peel + 7);
    const nearRows = 96;
    const farRows = this.rows - nearRows;
    const beforeLength = nearStart;
    const afterLength = length - nearEnd;
    const beforeRows = beforeLength === 0 ? 0 : afterLength === 0 ? farRows :
      Math.max(1, Math.min(farRows - 1,
        Math.round(farRows * beforeLength / (beforeLength + afterLength))));
    const afterRows = farRows - beforeRows;
    for (let row = 0; row <= this.rows; row++) {
      if (row <= beforeRows) {
        samples[row] = beforeRows === 0 ? 0 : nearStart * row / beforeRows;
      } else if (row <= beforeRows + nearRows) {
        const near = row - beforeRows;
        if (near <= 28) samples[row] = nearStart + (pocketStart - nearStart) * near / 28;
        else if (near <= 78) samples[row] = pocketStart + (pocketEnd - pocketStart) * (near - 28) / 50;
        else samples[row] = pocketEnd + (nearEnd - pocketEnd) * (near - 78) / 18;
      } else {
        samples[row] = nearEnd + (length - nearEnd) *
          (row - beforeRows - nearRows) / Math.max(1, afterRows);
      }
    }
    return samples;
  }

  private updateSheet(geometry: BufferGeometry, columns: number,
    startU: number, endU: number, timeS: number, alongSamples: Float32Array): void {
    const positions = geometry.getAttribute('position');
    const colors = geometry.getAttribute('color');
    const uvs = geometry.getAttribute('uv');
    const tint = new Color();
    for (let row = 0; row <= this.rows; row++) {
      const alongM = alongSamples[row];
      const barrel = this.wave.barrelAt(alongM, 0, 0, timeS);
      const whitewater = this.wave.whitewaterAt(alongM);
      const impactX = this.wave.crossSectionAt(alongM, 1, timeS).x;
      for (let column = 0; column <= columns; column++) {
        const u = startU + (endU - startU) * column / columns;
        const index = row * (columns + 1) + column;
        const point = this.wave.crossSectionAt(alongM, u, timeS);
        positions.setXYZ(index, point.x, point.y, point.z);
        uvs.setXY(index, u, alongM / this.wave.map.wave.rideLengthM);
        const crestBreak = 0.78 + 0.22 * Math.sin(alongM * 0.19 - timeS * 2.1 + u * 13);
        const curl = Math.max(0, (u - 0.78) / 0.22);
        const lipFoam = Math.pow(Math.max(0, (curl - 0.70) / 0.30), 1.1) * crestBreak;
        const closingFoam = (barrel?.foam ?? 0) * Math.max(0, (u - 0.66) / 0.34);
        const insideShade = (barrel?.radiusM ?? 0) > 0.6 && u > 0.80 && u < 0.95 ?
          0.56 + 0.18 * (u - 0.80) / 0.15 : 1;
        const faceT = Math.min(1, u / 0.78);
        const faceShade = u < 0.78 ? 0.68 + 0.32 * faceT : 1;
        const faceGlow = u < 0.78 ? Math.pow(faceT, 3.5) * 0.16 : 0;
        const crestFoam = Math.exp(-Math.pow((u - 0.79) / 0.023, 2)) * 0.19;
        const flowLine = u < 0.78 ?
          Math.pow(Math.max(0, Math.sin(alongM * 0.19 - timeS * 1.5 +
            faceT * 22 + Math.sin(alongM * 0.035) * 1.4)), 12) *
            (0.03 + 0.12 * faceT) : 0;
        const impactColor = u < 0.78 ?
          Math.exp(-Math.pow((point.x - impactX) / 0.85, 2)) *
            Math.min(0.3, 0.10 + (barrel?.radiusM ?? 0) * 0.04) : 0;
        const brokenWater = whitewater * (u < 0.78 ?
          Math.pow(faceT, 0.9) * (0.38 + 0.18 *
            Math.sin(alongM * 0.31 - timeS * 3.2 + faceT * 18)) :
          0.52 + 0.32 * curl);
        tint.copy(this.base).multiplyScalar(insideShade * faceShade).lerp(this.foam,
          Math.min(0.97, lipFoam * 0.86 + closingFoam * 0.54 + crestFoam +
            flowLine + impactColor + faceGlow + brokenWater));
        colors.setXYZ(index, tint.r, tint.g, tint.b);
      }
    }
    positions.needsUpdate = true;
    colors.needsUpdate = true;
    uvs.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  update(timeS: number): void {
    for (const sheet of [this.mesh, this.lipMesh, this.lipFoam, this.impactFoam]) {
      sheet.material.uniforms.clock.value = timeS;
    }
    const alongSamples = this.alongSamples();
    this.updateSheet(this.mesh.geometry, this.faceColumns, 0, 0.78, timeS, alongSamples);
    this.updateSheet(this.lipMesh.geometry, this.lipColumns, 0.78, 1, timeS, alongSamples);
    const edgePositions = this.lipFoam.geometry.getAttribute('position');
    const edgeColors = this.lipFoam.geometry.getAttribute('color');
    const impactColors = this.impactFoam.geometry.getAttribute('color');
    const foamPositions = this.impactFoam.geometry.getAttribute('position');
    const back = this.backMesh.geometry;
    const backPositions = back.getAttribute('position');
    const backColors = back.getAttribute('color');
    const tint = new Color();
    for (let row = 0; row <= this.rows; row++) {
      const alongM = alongSamples[row];
      const tip = this.wave.crossSectionAt(alongM, 1, timeS);
      const radius = this.wave.barrelAt(alongM, 0, 0, timeS)?.radiusM ?? 0;
      const whitewater = this.wave.whitewaterAt(alongM);
      for (let column = 0; column <= this.backColumns; column++) {
        const across = column / this.backColumns;
        const point = this.wave.backAt(alongM, across, timeS);
        const index = row * (this.backColumns + 1) + column;
        backPositions.setXYZ(index, point.x, point.y, point.z);
        const edge = Math.max(0, (across - .85) / .15);
        tint.copy(this.base).lerp(this.foam, edge * (.32 + whitewater * .45));
        backColors.setXYZ(index, tint.r, tint.g, tint.b);
      }
      const tipFloor = this.wave.crossSectionAt(alongM, .78 * tip.x / this.wave.joinX, timeS);
      const feather = Math.min(1, radius * .65 + whitewater);
      const contact = feather * Math.max(0, 1 - Math.max(0, tip.y - tipFloor.y - .45) / .9);
      const width = 0.18 + Math.min(0.7, radius * 0.22) + whitewater * 1.2;
      for (let column = 0; column <= 4; column++) {
        const across = column / 4;
        const edge = this.wave.crossSectionAt(alongM, .965 + .035 * across, timeS);
        const index = row * 5 + column;
        edgePositions.setXYZ(index, edge.x, edge.y, edge.z);
        edgeColors.setX(index, feather);
        impactColors.setX(index, contact);
        const boil = .65 + .35 * Math.sin(alongM * 1.1 + timeS * 2.8 + across * 9);
        const x = tip.x + (across - .5) * width * (1.6 + .65 * boil);
        const face = this.wave.crossSectionAt(alongM, .78 * x / this.wave.joinX, timeS);
        const mound = Math.sin(Math.PI * across) * boil * Math.min(.72, radius * .10 + whitewater * .65);
        foamPositions.setXYZ(row * 5 + column, x, face.y + .045 + mound, face.z);
      }
    }
    backPositions.needsUpdate = backColors.needsUpdate = true;
    back.computeVertexNormals();
    edgePositions.needsUpdate = edgeColors.needsUpdate = true;
    foamPositions.needsUpdate = impactColors.needsUpdate = true;
    const sprayPositions = this.curlSpray.geometry.getAttribute('position');
    for (let i = 0; i < sprayPositions.count; i++) {
      const rideLength = this.wave.map.wave.rideLengthM;
      const peel = this.wave.peelPositionM;
      const alongM = peel === null ? rideLength * (i + 0.5) / sprayPositions.count :
        Math.max(0, Math.min(rideLength,
          peel - 42 + 62 * (i + 0.5) / sprayPositions.count));
      const barrel = this.wave.barrelAt(alongM, 0, 0, timeS);
      const whitewater = this.wave.whitewaterAt(alongM);
      if (!barrel || (barrel.radiusM < 0.6 && whitewater < 0.2)) {
        sprayPositions.setXYZ(i, 0, -1000, 0);
        continue;
      }
      const phase = (timeS * (0.7 + (i % 5) * 0.06) + i * 0.43) % 1;
      if (whitewater > 0.2 && i % 3 !== 0) {
        const lipTip = this.wave.crossSectionAt(alongM, 1, timeS);
        const x = lipTip.x + Math.sin(i * 8.3) * (0.4 + whitewater * 1.7);
        const surface = this.wave.surfaceAt(alongM, x, timeS).position;
        sprayPositions.setXYZ(i, x, surface.y + 0.2 + phase *
          (0.5 + whitewater * 1.8), surface.z + Math.sin(i * 4.4) * 0.35);
        continue;
      }
      if (barrel.radiusM < 0.6) {
        sprayPositions.setXYZ(i, 0, -1000, 0);
        continue;
      }
      const u = i % 3 === 0 ? 0.83 + 0.10 * Math.abs(Math.sin(i * 6.7)) :
        0.94 + 0.06 * Math.abs(Math.sin(i * 6.7));
      const lip = this.wave.crossSectionAt(alongM, u, timeS);
      const crestPlume = i % 3 === 0;
      const loft = crestPlume ? phase * (2.3 - 1.55 * phase) : phase * (.4 - 1.8 * phase);
      sprayPositions.setXYZ(i, lip.x + (crestPlume ? .95 : -.3) * phase + Math.sin(i * 13.2) * .2,
        lip.y + loft, lip.z + this.wave.direction * phase * .8 + Math.sin(i * 4.4) * .2);
    }
    sprayPositions.needsUpdate = true;
  }

  dispose(): void {
    this.backMesh.geometry.dispose();
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.lipMesh.geometry.dispose();
    this.lipMesh.material.dispose();
    this.lipFoam.geometry.dispose();
    this.lipFoam.material.dispose();
    this.impactFoam.geometry.dispose();
    this.impactFoam.material.dispose();
    this.waterNormal.dispose();
    this.sprayTexture.dispose();
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
  private readonly sprayTexture: DataTexture;
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
    this.sprayTexture = createSprayTexture();
    this.sprayMaterial = new PointsMaterial({ color: foam, size: 0.075,
      map: this.sprayTexture, alphaTest: 0.03,
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
    this.body.position.y = -crouch * 0.14 - sim.jumpLoad * .18 - sim.landingPulse * .19 - sim.airTuck * .24;
    this.body.scale.y = 1 - .10 * sim.jumpLoad - .09 * sim.landingPulse - (state === 'barrel' ? .05 : 0) - .21 * sim.airTuck;
    this.body.rotation.x = state === 'wipeout' ? 0.75 : state === 'airborne' ? -0.1 :
      Math.max(-0.18, Math.min(0.12, sim.lateralMps * 0.02));
    this.body.rotation.z = state === 'wipeout' ? 0.4 : state === 'airborne' ? 0 :
      Math.max(-0.22, Math.min(0.22, -sim.lateralMps * sim.wave.direction * 0.028));
    const flipperLift = state === 'airborne' || sim.wallRideActive ? .48 - .64 * sim.airTuck :
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
        positions.setXYZ(i, sim.position.x + spread * (1 + sim.skid * 2) - sim.lateralMps * phase * .2,
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
    this.sprayTexture.dispose();
  }
}
