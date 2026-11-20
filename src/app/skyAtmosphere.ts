import { BackSide, Color, Mesh, ShaderMaterial, SphereGeometry, Vector3 } from 'three';
import type { EnvironmentFactory } from '../shared/contracts';
import { createEnvironment } from '../worlds/tour';

// A camera-centered sky keeps the horizon at a natural distance on every break.
// It renders after the engine's flat sky and before the rideable world.
export const createEnvironmentWithSky: EnvironmentFactory = (scene, map, settings) => {
  const environment = createEnvironment(scene, map, settings);
  const sunDirection = new Vector3(-0.25, 0.22,
    map.wave.breakDirection === 'right' ? 0.94 : -0.94).normalize();
  const material = new ShaderMaterial({
    side: BackSide,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      horizon: { value: new Color(map.visual.skyColor) },
      sunDirection: { value: sunDirection },
    },
    vertexShader: `
      varying vec3 skyRay;
      void main() {
        skyRay = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 horizon;
      uniform vec3 sunDirection;
      varying vec3 skyRay;
      void main() {
        vec3 ray = normalize(skyRay);
        float height = smoothstep(-0.10, 0.82, ray.y);
        vec3 seaHaze = mix(horizon, vec3(1.0, 0.79, 0.61), 0.13);
        vec3 highSky = mix(horizon, vec3(0.20, 0.43, 0.66), 0.37);
        vec3 sky = mix(seaHaze, highSky, pow(height, 0.82));
        float sun = max(0.0, dot(ray, normalize(sunDirection)));
        float broadGlow = pow(sun, 8.0) * 0.025;
        float softHalo = pow(sun, 46.0) * 0.16;
        float sunDisk = smoothstep(0.99955, 0.99986, sun);
        sky += vec3(1.0, 0.79, 0.57) * (broadGlow + softHalo);
        sky = mix(sky, vec3(1.0, 0.96, 0.83), sunDisk * 0.88);
        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const atmosphere = new Mesh(new SphereGeometry(1090, 32, 16), material);
  atmosphere.renderOrder = -9;
  atmosphere.frustumCulled = false;
  atmosphere.onBeforeRender = (_renderer, _scene, camera) => {
    atmosphere.position.copy(camera.position);
    atmosphere.updateMatrixWorld();
  };
  scene.add(atmosphere);

  return {
    update(timeS, dtS) { environment.update(timeS, dtS); },
    setSettings(next) { environment.setSettings(next); },
    dispose() {
      atmosphere.removeFromParent();
      atmosphere.geometry.dispose();
      material.dispose();
      environment.dispose();
    },
  };
};
