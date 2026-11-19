import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
  SRGBColorSpace,
} from 'three';
import type {
  EnvironmentFactory,
  GameEvent,
  GameSettings,
  MapDefinition,
  Mode,
  SurfSession,
  TrickController,
  EnvironmentHandle,
} from '../shared/contracts';
import { CarveWake } from './wake';
import { GameplayInput } from './input';
import { validateMap } from './map';
import { SurfSimulation } from './simulation';
import { SurferVisual, WaveVisual } from './visuals';

export interface SurfSessionOptions {
  mount: HTMLElement;
  map: MapDefinition;
  mode: Mode;
  seed: number;
  settings: GameSettings;
  createEnvironment: EnvironmentFactory;
  createTrickController: () => TrickController;
  onEvent: (event: GameEvent) => void;
}

export function createSurfSession(options: SurfSessionOptions): SurfSession {
  validateMap(options.map);
  if (!options.mount || !Number.isFinite(options.seed) ||
      !['free-surf', 'score-run'].includes(options.mode)) {
    throw new Error('Invalid surfing session options');
  }
  const trickController = options.createTrickController();
  const scene = new Scene();
  scene.background = new Color(options.map.visual.skyColor);
  const camera = new PerspectiveCamera(65, 1, 0.05, 1500);
  const renderer = new WebGLRenderer({ antialias: options.settings.quality !== 'low' });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.domElement.tabIndex = 0;
  renderer.domElement.setAttribute('aria-label', 'BarrelRoll penguin surfing game');
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  options.mount.appendChild(renderer.domElement);

  const ambient = new AmbientLight('#bde4f7', 2.1);
  const sun = new DirectionalLight('#fff7dc', 2.2);
  sun.position.set(20, 32, -24);
  scene.add(ambient, sun);
  const simulation = new SurfSimulation(options.map, options.mode, options.seed,
    trickController, options.onEvent);
  const waveVisual = new WaveVisual(simulation.wave, options.map.visual.waterColor,
    options.map.visual.foamColor);
  const surfer = new SurferVisual(options.settings, options.map.visual.foamColor);
  scene.add(waveVisual.mesh, waveVisual.lipMesh, waveVisual.lipFoam, waveVisual.impactFoam,
    waveVisual.curlSpray, surfer.group);
  surfer.addSprayTo(scene);
  const wake = new CarveWake(scene);
  let environment: EnvironmentHandle;
  try {
    environment = options.createEnvironment(scene, options.map, options.settings);
  } catch (error) {
    trickController.reset();
    waveVisual.dispose();
    surfer.dispose();
    renderer.dispose();
    renderer.domElement.remove();
    throw new Error(`Could not load the map environment: ${String(error)}`);
  }
  const input = new GameplayInput();
  let settings = { ...options.settings };
  let paused = true;
  let disposed = false;
  let rafId: number | null = null;
  let lastFrameMs: number | null = null;
  let accumulatorS = 0;
  let cameraReady = false;
  let focusReady = false;
  const cameraFocus = new Vector3();

  const size = () => {
    const width = Math.max(1, options.mount.clientWidth || window.innerWidth);
    const height = Math.max(1, options.mount.clientHeight || window.innerHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const pixelRatio = () => {
    const cap = settings.quality === 'low' ? 1 : settings.quality === 'medium' ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
    size();
  };
  pixelRatio();
  const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(size) : null;
  resizeObserver?.observe(options.mount);
  if (!resizeObserver) window.addEventListener('resize', size);

  const render = (frameDtS: number) => {
    waveVisual.update(simulation.simulationTimeS);
    wake.update(simulation);
    surfer.update(simulation, settings);
    const alpha = Math.min(1, accumulatorS / (1 / 60));
    const prev = simulation.previousPosition;
    const current = simulation.position;
    const rider = new Vector3(
      prev.x + (current.x - prev.x) * alpha,
      prev.y + (current.y - prev.y) * alpha,
      prev.z + (current.z - prev.z) * alpha,
    );
    surfer.group.position.copy(rider);
    const q = simulation.orientation;
    surfer.group.quaternion.copy(new Quaternion(q.x, q.y, q.z, q.w));
    if (simulation.state === 'surfing') {
      surfer.group.rotateZ(simulation.railAngle);
      surfer.group.rotateY(Math.sin(simulation.skid * Math.PI) * .32);
    }
    const heading = new Vector3(simulation.heading.x, 0, simulation.heading.z).normalize();
    const airHeight = Math.max(0, rider.y - simulation.wave.surfaceAt(simulation.alongM,
      rider.x, simulation.simulationTimeS).position.y);
    const inBarrel = simulation.state === 'barrel';
    const onWall = simulation.wallRideActive;
    const barrel = inBarrel ? simulation.wave.barrelAt(simulation.alongM, 0, 0,
      simulation.simulationTimeS) : null;
    const barrelCameraX = barrel ? barrel.centerX - Math.min(3,
      Math.max(0, (options.map.wave.barrelSections[barrel.sectionIndex].radiusM - 1.2) * 1.5)) : 0;
    const distance = barrel ? onWall ? 4.6 : 4.0 : 8 + Math.min(4, airHeight * 0.22);
    const desired = barrel ?
      new Vector3(barrelCameraX, barrel.centerY - Math.min(0.5, barrel.radiusM * 0.2), rider.z)
        .addScaledVector(new Vector3(0, 0, simulation.wave.direction), -distance) :
      rider.clone().addScaledVector(heading, -distance);
    if (!barrel) desired.y += 3.2 + Math.min(2, airHeight * 0.13);
    if (!cameraReady) {
      camera.position.copy(desired);
      cameraReady = true;
    } else camera.position.lerp(desired, 1 - Math.exp(-6 * Math.max(0, frameDtS)));
    // Look ahead mainly along the wave. Leading the lateral heading by several
    // meters made a rightward carve appear to move left on screen.
    const target = barrel ?
      new Vector3(barrelCameraX - .65, barrel.centerY + .35,
        rider.z + simulation.wave.direction * 7) :
      rider.clone().addScaledVector(new Vector3(0, 0, simulation.wave.direction), 5);
    if (!barrel) {
      target.x += heading.x * 0.45;
      target.y += 1.4;
    }
    if (!focusReady) {
      cameraFocus.copy(target);
      focusReady = true;
    } else cameraFocus.lerp(target, 1 - Math.exp(-8 * Math.max(0, frameDtS)));
    camera.up.set(0, 1, 0);
    camera.lookAt(cameraFocus);
    const fov = settings.reducedMotion ? 65 :
      63 + Math.min(9, simulation.speedMps * 0.25) + Math.min(5, airHeight * 0.3) +
      (inBarrel ? 3 : 0);
    if (Math.abs(camera.fov - fov) > 0.05) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
  };

  const schedule = () => {
    if (!paused && !disposed && !simulation.ended && rafId === null) rafId = requestAnimationFrame(frame);
  };
  const frame = (nowMs: number) => {
    rafId = null;
    if (paused || disposed || simulation.ended) return;
    const deltaS = lastFrameMs === null ? 0 : Math.min(0.25, (nowMs - lastFrameMs) / 1000);
    lastFrameMs = nowMs;
    accumulatorS = Math.min(accumulatorS + deltaS, 8 / 60);
    let steps = 0;
    while (accumulatorS >= 1 / 60 && steps < 8 && !simulation.ended) {
      const wasAirborne = simulation.state === 'airborne';
      input.advance(1 / 60, simulation.state === 'surfing' || simulation.state === 'barrel');
      simulation.step(input.frame(), 1 / 60);
      if (!wasAirborne && simulation.state === 'airborne') input.beginAir();
      if (!simulation.ended) environment.update(simulation.simulationTimeS, 1 / 60);
      accumulatorS -= 1 / 60;
      steps++;
    }
    if (disposed) return;
    if (simulation.ended) pause();
    render(deltaS);
    schedule();
  };

  const pause = () => {
    if (paused || disposed) return;
    paused = true;
    input.clear();
    lastFrameMs = null;
    accumulatorS = 0;
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
  };
  const resume = () => {
    if (!paused || disposed || !simulation.started || simulation.ended) return;
    paused = false;
    input.clear();
    lastFrameMs = null;
    renderer.domElement.focus();
    schedule();
  };
  const restart = () => {
    if (disposed) return;
    input.clear();
    simulation.reset();
    simulation.start();
    accumulatorS = 0;
    lastFrameMs = null;
    paused = false;
    cameraReady = false;
    focusReady = false;
    renderer.domElement.focus();
    schedule();
  };
  const finish = () => {
    if (disposed) return;
    simulation.finish();
    pause();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (paused || disposed || simulation.ended ||
        document.activeElement !== renderer.domElement) return;
    if (event.key.toLowerCase() === 'r' && !event.repeat) {
      event.preventDefault();
      restart();
      return;
    }
    if (input.press(event.key, simulation.state === 'surfing' || simulation.state === 'barrel')) {
      event.preventDefault();
    }
  };
  const onKeyUp = (event: KeyboardEvent) => {
    if (input.release(event.key) && document.activeElement === renderer.domElement) {
      event.preventDefault();
    }
  };
  const onBlur = () => pause();
  const focusCanvas = () => renderer.domElement.focus();
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  renderer.domElement.addEventListener('blur', onBlur);
  renderer.domElement.addEventListener('pointerdown', focusCanvas);
  render(0);

  return {
    start() {
      if (disposed || simulation.started) return;
      simulation.start();
      resume();
    },
    pause,
    resume,
    restart,
    finish,
    setSettings(next) {
      if (disposed) return;
      settings = { ...next };
      environment.setSettings(settings);
      pixelRatio();
      if (paused) render(0);
    },
    dispose() {
      if (disposed) return;
      pause();
      disposed = true;
      input.clear();
      simulation.trick.reset();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      renderer.domElement.removeEventListener('blur', onBlur);
      renderer.domElement.removeEventListener('pointerdown', focusCanvas);
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener('resize', size);
      wake.dispose();
      environment.dispose();
      waveVisual.dispose();
      surfer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
