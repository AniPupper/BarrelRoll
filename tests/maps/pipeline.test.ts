import assert from 'node:assert/strict';
import test from 'node:test';
import { Fog, Scene } from 'three';
import { validateMap } from '../../src/engine/map';
import { SurfSimulation } from '../../src/engine/simulation';
import type { ControlFrame } from '../../src/engine/input';
import { pipeline } from '../../src/maps/pipeline';
import { DEFAULT_SETTINGS } from '../../src/progress';
import { createPipelineEnvironment } from '../../src/worlds/pipeline';
import { FixtureTrickController } from '../engine/fixtures';

const neutral: ControlFrame = {
  steer: 0,
  wallRide: 0,
  jumpChargeS: null,
  trick: { spinAxis: 0, flipAxis: 0 },
};

test('production Pipeline meets its barrel goal through the shared simulation', () => {
  assert.doesNotThrow(() => validateMap(pipeline));
  const simulation = new SurfSimulation(
    pipeline, 'free-surf', 1, new FixtureTrickController(), () => {},
  );
  simulation.start();
  for (let frame = 0; frame < 60 * 18; frame++) {
    simulation.step({ ...neutral, steer: frame < 60 * 0.95 ? 1 : 0 });
  }
  assert.ok(simulation.metrics.longestBarrelS >= 6);
  assert.ok(simulation.score.score > 0);
  assert.equal(simulation.metrics.wipeouts, 0);
});

test('Pipeline scenery uses the supplied scene and restores it on disposal', () => {
  const scene = new Scene();
  const originalFog = new Fog('#ffffff', 10, 20);
  scene.fog = originalFog;
  const environment = createPipelineEnvironment(scene, pipeline, { ...DEFAULT_SETTINGS });
  assert.equal(scene.children.length, 1);
  assert.notEqual(scene.fog, originalFog);
  environment.update(1, 1 / 60);
  environment.setSettings({ ...DEFAULT_SETTINGS, quality: 'low' });
  environment.setSettings({ ...DEFAULT_SETTINGS, quality: 'high' });
  environment.dispose();
  environment.dispose();
  assert.equal(scene.children.length, 0);
  assert.equal(scene.fog, originalFog);
});
