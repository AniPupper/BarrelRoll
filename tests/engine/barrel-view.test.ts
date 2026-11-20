import assert from 'node:assert/strict';
import test from 'node:test';
import { PerspectiveCamera, Raycaster, Vector3 } from 'three';
import { GameplayInput } from '../../src/engine/input';
import { ChaseCamera } from '../../src/engine/chaseCamera';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
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

test('the entry camera tracks the rider continuously without crossing the lip', () => {
  for (const map of Object.values(maps)) {
    const section = map.wave.barrelSections[0];
    if (!section) continue;
    const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
    const visual = new WaveVisual(sim.wave, map.visual.waterColor, map.visual.foamColor);
    const water = [visual.mesh, visual.lipMesh, visual.backMesh];
    const camera = new ChaseCamera();
    const start = section.start01 * map.wave.rideLengthM;
    const targetX = sim.wave.joinX - section.radiusM;
    sim.start();
    for (let tick=0; sim.alongM<start+30; tick++) {
      assert.ok(tick<4000);
      const steer = sim.position.x<targetX-.38 ? -sim.wave.direction as -1|1 : 0;
      sim.step({steer,wallRide:0,jumpChargeS:null,trick:{spinAxis:0,flipAxis:0}});
      const previous = camera.eye.clone();
      camera.update(sim.wave,sim.position,sim.heading,0,true,sim.simulationTimeS,1/60);
      if (sim.alongM<start-20) continue;
      assert.ok(Math.hypot(camera.eye.x-previous.x,camera.eye.y-previous.y)<.12,map.name);
      if (tick%6) continue;
      visual.update(sim.simulationTimeS);
      for(const mesh of water) mesh.geometry.computeBoundingSphere();
      const rider = new Vector3().copy(sim.position);
      rider.y+=.85;
      const direction = rider.sub(camera.eye);
      const ray = new Raycaster(camera.eye,direction.clone().normalize(),.055,direction.length()-.12);
      assert.equal(ray.intersectObjects(water).length,0,map.name);
    }
  }
});


test('the camera sees a full-speed wall loop in either direction on every barreling map', () => {
  for (const map of Object.values(maps)) {
    const section = map.wave.barrelSections[0];
    if (!section) continue;
    for (const reverse of [false, true]) {
      const sim = new SurfSimulation(map, 'free-surf', 8, createTrickController(), () => {});
      const input = new GameplayInput(), chase = new ChaseCamera();
      const camera = new PerspectiveCamera(65, 16 / 9, .05, 1500);
      const visual = new WaveVisual(sim.wave, map.visual.waterColor, map.visual.foamColor);
      const water = [visual.mesh, visual.lipMesh, visual.backMesh];
      const uphill = sim.wave.direction === 1 ? 'a' : 'd';
      const start = section.start01 * map.wave.rideLengthM;
      let engaged = false, inverted = false, turned = false;
      sim.start();
      input.press('w', true);
      for (let i = 0; i < 3000 && sim.alongM < section.end01 * map.wave.rideLengthM; i++) {
        if (!engaged && sim.alongM >= start - 2.4 * map.wave.peelSpeedMps) input.press(uphill, true);
        if (!engaged && sim.state === 'barrel') {
          engaged = true;
          input.release(uphill);
          input.press('Shift', true);
          if (reverse) input.press(uphill === 'a' ? 'd' : 'a', true);
        }
        sim.step(input.frame());
        chase.update(sim.wave, sim.position, sim.heading, 0, true, sim.simulationTimeS, 1 / 60, sim.wallRideActive);
        if (!sim.wallRideActive) continue;
        const up = new Vector3(0, 1, 0).applyQuaternion(sim.orientation);
        inverted ||= up.y < -.8;
        if (i % 7 === 0) {
          camera.position.copy(chase.eye);
          camera.lookAt(chase.focus);
          camera.updateMatrixWorld();
          const torso = up.multiplyScalar(.80).add(sim.position);
          const projected = torso.clone().project(camera);
          assert.ok(Math.abs(projected.x) < .95 && Math.abs(projected.y) < .90, map.name);
          visual.update(sim.simulationTimeS);
          for (const mesh of water) mesh.geometry.computeBoundingSphere();
          const direction = torso.sub(chase.eye);
          const ray = new Raycaster(chase.eye, direction.clone().normalize(), .055, direction.length() - .12);
          assert.equal(ray.intersectObjects(water).length, 0, map.name);
        }
        if (sim.wallRideAngle * (reverse ? -1 : 1) >= 2 * Math.PI) { turned = true; break; }
      }
      assert.ok(turned && inverted, map.name);
      assert.equal(sim.metrics.wipeouts, 0, map.name);
      visual.dispose();
    }
  }
});
