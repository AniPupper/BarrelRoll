import {
  Color, Float32BufferAttribute, Mesh, MeshPhongMaterial, PlaneGeometry, Vector2,
  type Texture,
} from 'three';

// A softly rolling open sea with a muted transition beside the rideable wave.
// The rideable wave remains entirely owned by the surf engine.
export function createOceanSurface(
  width: number, depth: number, waterColor: string, normal: Texture,
) {
  const geometry = new PlaneGeometry(width, depth, 48, 48);
  const positions = geometry.getAttribute('position');
  const colors = new Float32Array(positions.count * 3);
  const water = new Color(waterColor).offsetHSL(0, -.20, -.02);
  const edgeWater = water.clone().offsetHSL(0, -.15, .11);
  const tint = new Color();
  for (let i = 0; i < positions.count; i++) {
    const across = positions.getX(i) / (width / 2);
    // Keep the existing plane wide, but place more samples close to the join.
    const x = Math.sign(across) * Math.pow(Math.abs(across), 1.6) * width / 2;
    const along = positions.getY(i);
    const nearWave = Math.exp(-Math.pow(x / 80, 2));
    const swell = (0.11 * Math.sin(x * 0.026 + along * 0.021) +
      0.07 * Math.cos(along * 0.039 - x * 0.017)) * (1 - nearWave);
    positions.setXYZ(i, x, along, swell);
    const variation = 0.047 * Math.sin(x * 0.027 + along * 0.019) +
      0.029 * Math.cos(along * 0.047 - x * 0.014);
    tint.copy(water).lerp(edgeWater, nearWave).multiplyScalar(1 + variation);
    const offset = i * 3;
    colors[offset] = tint.r;
    colors[offset + 1] = tint.g;
    colors[offset + 2] = tint.b;
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  const material = new MeshPhongMaterial({
    vertexColors: true,
    normalMap: normal,
    normalScale: new Vector2(0.43, 0.43),
    specular: '#77acae',
    shininess: 82,
  });
  const surface = new Mesh(geometry, material);
  surface.rotation.x = -Math.PI / 2;
  return surface;
}
