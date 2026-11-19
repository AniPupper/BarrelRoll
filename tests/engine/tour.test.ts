import assert from 'node:assert/strict';
import test from 'node:test';
import { Quaternion, Vector3 } from 'three';
import { SurfSimulation } from '../../src/engine/simulation';
import { createTrickController } from '../../src/engine/tricks';
import { campaign, clearedLevel } from '../../src/maps/campaign';
import { maps } from '../../src/maps';
import { createProgressStore } from '../../src/progress';
import type { MapId, RunResult } from '../../src/shared/contracts';

test('contact alignment distinguishes a clean landing, skid and wipeout', () => {
  for (const [degrees,quality] of [[0,'clean'],[43,'sketchy'],[90,'wipeout']] as const) {
    const trick = createTrickController();
    trick.beginAir({airId:'jump',orientation:new Quaternion().setFromAxisAngle(new Vector3(0,1,0),degrees*Math.PI/180)});
    const contact={surfaceNormal:{x:0,y:1,z:0},travelDirection:{x:0,y:0,z:1},impactSpeedMps:12};
    assert.equal(trick.land(contact).quality,quality);
    assert.throws(()=>trick.land(contact));
  }
});

// Exercise actual wave contact, scoring, timers, tricks and exit geometry.
// Steer toward a line and issue jump inputs; the engine produces every result.
function rideLevel(id:MapId, missExit=false):RunResult {
  const results:RunResult[]=[];
  const sim=new SurfSimulation(maps[id],'score-run',8,createTrickController(),e=>{
    if(e.type==='run-ended') results.push(e.result);
  });
  let airTime=0;
  sim.start();
  for(let tick=0; tick<7300 && !sim.ended; tick++) {
    const targetFace = id==='nazare' ? (missExit?.80:.23) :
      id==='pipeline' || id==='teahupoo' ? .79 : .52;
    const error=sim.position.x/maps[id].wave.faceWidthM-targetFace;
    const steer = Math.abs(error)>.018 ? Math.sign(error)*sim.wave.direction as -1|1 : 0;
    const aerialLine = id==='jbay' || (id==='teahupoo' && sim.cleanExitS>=3.5);
    const airborne=sim.state==='airborne';
    airTime=airborne?airTime+1/60:0;
    const spin=aerialLine && airTime>0 && airTime<1.18 ? 1 : 0;
    const jump=(id==='mavericks' || aerialLine) && tick%130===0;
    sim.step({steer:airborne?spin:steer,wallRide:0,jumpChargeS:jump?.6:null,trick:{spinAxis:spin,flipAxis:0}});
  }
  assert.equal(results.length,1);
  return results[0];
}

test('all five goals are reachable in order and unlocks survive reload', () => {
  const values=new Map<string,string>();
  const storage={getItem:(k:string)=>values.get(k)??null,setItem:(k:string,v:string)=>{values.set(k,v);},removeItem:(k:string)=>{values.delete(k);}};
  let store=createProgressStore({storage});
  for(const [level,id] of campaign.entries()) {
    const result=rideLevel(id);
    assert.ok(clearedLevel(result),id);
    store.recordResult(result);
    store=createProgressStore({storage});
    assert.equal(store.getSnapshot().levelsCleared,level+1);
  }
  const miss=rideLevel('nazare',true);
  assert.equal(miss.reason,'missed-exit');
  assert.equal(clearedLevel(miss),false);
});
