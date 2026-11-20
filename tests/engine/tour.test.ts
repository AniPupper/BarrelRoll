import assert from 'node:assert/strict';
import test from 'node:test';
import { Quaternion, Vector3 } from 'three';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { finishedTutorial, rideMode } from '../../src/maps/campaign';
import { maps, MAP_ORDER } from '../../src/maps';
import { createProgressStore } from '../../src/progress';
import type { RunResult } from '../../src/shared/contracts';

test('contact alignment distinguishes a clean landing, skid and wipeout', () => {
  for (const [degrees,quality] of [[0,'clean'],[43,'sketchy'],[90,'wipeout']] as const) {
    const trick = createTrickController();
    trick.beginAir({airId:'jump',orientation:new Quaternion().setFromAxisAngle(new Vector3(0,1,0),degrees*Math.PI/180)});
    const contact={surfaceNormal:{x:0,y:1,z:0},travelDirection:{x:0,y:0,z:1},impactSpeedMps:12};
    assert.equal(trick.land(contact).quality,quality);
    assert.throws(()=>trick.land(contact));
  }
});

test('one zero-point tutorial wave unlocks every location and freeplay keeps rolling', () => {
  const values = new Map<string,string>();
  const storage = {getItem:(key:string)=>values.get(key)??null,
    setItem:(key:string,value:string)=>{values.set(key,value);}, removeItem:(key:string)=>{values.delete(key);}};
  const store = createProgressStore({storage});
  const neutral = {steer:0, wallRide:0, jumpChargeS:null, trick:{spinAxis:0,flipAxis:0}} as const;
  assert.equal(rideMode('mavericks',0),'score-run');
  assert.equal(rideMode('pipeline',0),null);
  const results: RunResult[] = [];
  const tutorial = new SurfSimulation(maps.mavericks,'score-run',8,createTrickController(),e=>{
    if (e.type==='run-ended') results.push(e.result);
  });
  tutorial.start();
  for (let i=0;i<3600 && !tutorial.ended;i++) tutorial.step(neutral);
  assert.equal(results.length,1);
  assert.equal(results[0].score,0);
  assert.ok(finishedTutorial(results[0]));
  store.recordResult(results[0]);
  assert.equal(finishedTutorial({...results[0],reason:'player-ended'}),false);
  const saved = createProgressStore({storage}).getSnapshot();
  for (const id of MAP_ORDER) {
    assert.equal(rideMode(id,saved.levelsCleared),'free-surf');
    const sim = new SurfSimulation(maps[id],'free-surf',8,createTrickController(),()=>{});
    sim.start();
    for(let i=0;i<60*125;i++) sim.step(neutral);
    assert.equal(sim.remainingS,null);
    assert.equal(sim.ended,false);
    assert.equal(sim.finish()?.reason,'player-ended');
  }
});
