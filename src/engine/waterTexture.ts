import {
  DataTexture,
  LinearFilter,
  LinearMipmapLinearFilter,
  RGBAFormat,
  RepeatWrapping,
} from 'three';

// A small seamless normal map gives the water moving highlights without
// loading an image or repeating a photograph across the whole wave.
export function createWaterNormalMap(): DataTexture {
  const size = 128;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      const a = Math.PI * 2 * (5 * u + 2 * v);
      const b = Math.PI * 2 * (11 * u - 6 * v);
      const c = Math.PI * 2 * (3 * u - 13 * v);
      const nx = -0.18 * Math.cos(a) - 0.09 * Math.cos(b) - 0.06 * Math.cos(c);
      const ny = -0.07 * Math.cos(a) + 0.11 * Math.cos(b) + 0.10 * Math.cos(c);
      const length = Math.hypot(nx, ny, 1);
      const index = (y * size + x) * 4;
      pixels[index] = Math.round(255 * (nx / length * 0.5 + 0.5));
      pixels[index + 1] = Math.round(255 * (ny / length * 0.5 + 0.5));
      pixels[index + 2] = Math.round(255 * (1 / length * 0.5 + 0.5));
      pixels[index + 3] = 255;
    }
  }
  const texture = new DataTexture(pixels, size, size, RGBAFormat);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

export function createSprayTexture(): DataTexture {
  const size = 32;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const radius = Math.hypot((x + 0.5 - size / 2) / (size / 2),
        (y + 0.5 - size / 2) / (size / 2));
      const alpha = Math.pow(Math.max(0, 1 - radius * radius), 2);
      const index = (y * size + x) * 4;
      pixels[index] = 255;
      pixels[index + 1] = 255;
      pixels[index + 2] = 255;
      pixels[index + 3] = Math.round(alpha * 255);
    }
  }
  const texture = new DataTexture(pixels, size, size, RGBAFormat);
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}
