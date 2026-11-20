import {
  BackSide,
  BufferGeometry,
  CatmullRomCurve3,
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
  ShaderMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  Shape,
  type Scene,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  type Material,
} from 'three';
import type { GameSettings, RiderState } from '../shared/contracts';
import type { SurfSimulation } from './simulation';
import type { WaveModel } from './wave';
import { createSprayTexture, createWaterNormalMap } from './waterTexture';

import { penguinBody, penguinBill, penguinFlipper, penguinTail, plumage, rockhopperCrest, shellPendant, webbedFoot } from './penguin';
import { breakingFoam, breakingWater } from './breakingWater';

export function createSurfSky(skyColor: string) {
  const material = new ShaderMaterial({
    side: BackSide, depthWrite: false, depthTest: false,
    uniforms: { horizon: { value: new Color(skyColor) } },
    vertexShader: `
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }`,
    fragmentShader: `
      uniform vec3 horizon;
      varying vec3 direction;
      void main() {
        vec3 ray = normalize(direction);
        float elevation = smoothstep(-.035, .75, ray.y);
        vec3 sky = mix(horizon, horizon * vec3(.38, .64, .86), elevation);
        float sunlight = max(0., dot(ray, normalize(vec3(-.42, .55, .68))));
        sky += vec3(.20, .15, .09) * pow(sunlight, 18.) +
          vec3(.82, .78, .65) * smoothstep(.99972, .99995, sunlight);
        gl_FragColor = vec4(sky, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new Mesh(new SphereGeometry(1100, 32, 16), material);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

export class WaveVisual {
  readonly mesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly backMesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly lipMesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly lipFoam: Mesh<BufferGeometry, ShaderMaterial>;
  readonly impactFoam: Mesh<BufferGeometry, ShaderMaterial>;
  readonly curlSpray: Points;
  private readonly rows = 140;
  private readonly sampleRows = new Float32Array(this.rows + 1);
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
    const samples = this.sampleRows;
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
        const hollow = Math.min(1, (barrel?.radiusM ?? 0) / 1.4);
        const insideShade = 1 - hollow * .38 * Math.sin(Math.PI * curl);
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
  private readonly boardUp = new Vector3();
  private readonly boardSide = new Vector3();
  readonly group = new Group();
  readonly boardColor: MeshStandardMaterial;
  private readonly body = new Group();
  private readonly crest: Mesh;
  private readonly featherMap = plumage();
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

    const coat = this.material('#ffffff', .63);
    coat.map = this.featherMap;
    this.body.add(this.part(penguinBody(), coat, [0,0,0]));
    const charcoal = this.material('#26323b', .62);
    const feathers = this.material('#ffffff', .70);
    feathers.vertexColors = true;
    this.crest = this.part(rockhopperCrest(), feathers, [0,1.55,.12]);
    this.body.add(this.crest);
    const eyes = this.material('#161715', .18);
    const sclera = this.material('#f0dfb8', .30);
    const iris = this.material('#92552e', .24);
    const catchlight = this.material('#f3eee2', .22);
    const feet = this.material('#d5824b', .66);
    const bill = this.material('#ffffff', .46);
    bill.vertexColors = true;
    this.body.add(this.part(penguinBill(), bill, [0,1.405,.317]));
    const cord = new CatmullRomCurve3([
      new Vector3(0,1.23,-.087), new Vector3(.17,1.214,.036), new Vector3(.19,1.18,.193),
      new Vector3(.125,1.11,.258), new Vector3(0,1.055,.294), new Vector3(-.125,1.11,.258),
      new Vector3(-.19,1.18,.193), new Vector3(-.17,1.214,.036),
    ], true);
    this.body.add(this.part(new TubeGeometry(cord, 48, .009, 5, true), this.material('#76482e', .83), [0,0,0]));
    const shell = this.material('#fff', .54);
    shell.vertexColors = true;
    shell.side = DoubleSide;
    const charm = this.part(shellPendant(), shell, [0,1.058,.299]);
    charm.rotation.x = -.12;
    this.body.add(charm);
    for (const side of [-1,1]) {
      this.body.add(this.part(new SphereGeometry(1,16,12), sclera,
        [side*.150,1.478,.299],[.053,.050,.046]));
      this.body.add(this.part(new SphereGeometry(1,16,12), iris,
        [side*.165,1.478,.328],[.036,.037,.026]));
      this.body.add(this.part(new SphereGeometry(1,12,8), eyes,
        [side*.170,1.477,.345],[.022,.026,.016]));
      this.body.add(this.part(new SphereGeometry(1,8,6), catchlight,
        [side*.178,1.491,.359],[.008,.008,.006]));
      const flipper = this.part(penguinFlipper(), charcoal, [side*.279,1.035,.022]);
      this.flippers.push(flipper);
      this.body.add(flipper);
      const foot = this.part(webbedFoot(), feet, [side*.13,.205,side*.19+.025]);
      foot.rotation.y = .29 + side*.20;
      this.group.add(foot);
      this.group.add(this.part(new SphereGeometry(1,12,8), feet,
        [side*.128,.249,side*.16-.025],[.049,.078,.050]));
    }
    this.body.add(this.part(penguinTail(), charcoal, [0,.27,-.20]));
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
    const compression = Math.min(.37, .09 * sim.jumpLoad + .16 * sim.landingPulse +
      .18 * sim.airTuck + (state === 'barrel' ? .095 : 0));
    this.body.scale.set(1 + compression * .12, 1 - compression, 1 + compression * .1);
    this.body.position.y = compression * .20;
    const bank = Math.max(-1, Math.min(1, sim.lateralMps * sim.wave.direction / 7));
    const stance = sim.stance;
    this.body.rotation.x = state === 'wipeout' ? .78 : .09 + compression * .55 + .15 * stance;
    this.body.rotation.y = .23 + bank * .14;
    this.crest.rotation.x = -.09 * (Math.max(0, stance) + sim.airTuck);
    this.body.rotation.z = state === 'wipeout' ? .4 : -bank * .19;
    const spread = state === 'airborne' || sim.wallRideActive ? .90 - sim.airTuck * .6 :
      .29 + Math.abs(bank) * .33 + sim.landingPulse * .25;
    for (let i=0; i<this.flippers.length; i++) {
      const side = i === 0 ? -1 : 1;
      this.flippers[i].rotation.z = side * spread - bank * .23;
      this.flippers[i].rotation.x = .12 + side * bank * .20;
    }
    const positions = this.sprayGeometry.getAttribute('position');
    const count = settings.quality === 'low' ? 20 : settings.quality === 'medium' ? 42 : 70;
    const active = state !== 'airborne' && sim.speedMps > 3;
    this.boardUp.set(0, 1, 0).applyQuaternion(sim.orientation);
    this.boardSide.set(1, 0, 0).applyQuaternion(sim.orientation);
    for (let i = 0; i < positions.count; i++) {
      if (!active || i >= count) {
        positions.setXYZ(i, 0, -1000, 0);
        continue;
      }
      const phase = ((sim.simulationTimeS * (1.8 + (i % 7) * 0.12) + i * 0.31) % 1);
      const spread = Math.sin(i * 17.23) * (0.3 + phase * 0.7);
      const rear = .2 + phase * (1.4 + sim.speedMps * .04);
      const side = spread * (1 + sim.skid * 2);
      const lift = .08 + Math.sin(phase * Math.PI) * (state === 'wipeout' ? 1.2 : .55);
      positions.setXYZ(i, sim.position.x + this.boardSide.x * side + this.boardUp.x * lift - sim.heading.x * rear,
        sim.position.y + this.boardSide.y * side + this.boardUp.y * lift - sim.heading.y * rear,
        sim.position.z + this.boardSide.z * side + this.boardUp.z * lift - sim.heading.z * rear);
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
    this.featherMap.dispose();
  }
}
