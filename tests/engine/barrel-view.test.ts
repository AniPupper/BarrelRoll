import assert from 'node:assert/strict';
import test from 'node:test';
import { Raycaster, Vector3 } from 'three';
import { WaveVisual } from '../../src/engine/visuals';
import { WaveModel } from '../../src/engine/wave';
import { maps } from '../../src/maps';

test('each breaking wave gives the chase camera water overhead and daylight down the line', () => {
  for (const map of Object.values(maps)) {
    const wave = new WaveModel(map);
    if (!map.wave.barrelSections.length) continue;
    const visual = new WaveVisual(wave, map.visual.waterColor, map.visual.foamColor);
    const water = [visual.mesh, visual.lipMesh, visual.backMesh];
    for (const section of map.wave.barrelSections) {
      const along = map.wave.rideLengthM * (section.start01 + section.end01) / 2;
      wave.setPeelPosition(along);
      visual.update(3);
      for (const mesh of water) mesh.geometry.computeBoundingSphere();
      const eye = wave.tubeCameraAt(along - 3.8, 3);
      assert.ok(eye, map.name);
      const origin = new Vector3().copy(eye);
      const firstHit = (direction: Vector3) =>
        new Raycaster(origin, direction.normalize(), 0, 80).intersectObjects(water)[0];
      assert.equal(firstHit(new Vector3(0, 1, 0))?.object, visual.lipMesh, map.name);
      assert.equal(firstHit(new Vector3(0, -1, 0))?.object, visual.mesh, map.name);
      assert.equal(firstHit(new Vector3(-.8, .16, wave.direction * 10.8)), undefined, map.name);
      const tip = wave.crossSectionAt(along, 1, 3);
      const outerTip = wave.backAt(along, 1, 3);
      assert.ok(new Vector3().copy(tip).distanceTo(outerTip) < .001, map.name);
    }
    visual.dispose();
  }
});
