import './style.css';
import heroWaveUrl from './assets/hero-wave.svg?url';
import { locationArt } from './app/locationArt';
import { MAP_CARDS } from './app/mapCards';
import { SurfAudio } from './app/surfAudio';
import { createSurfSession } from './engine';
import { createTrickController } from './engine/tricks';
import { maps, MAP_ORDER } from './maps';
import { finishedTutorial, rideMode } from './maps/campaign';
import { createProgressStore } from './progress';
import { createEnvironment } from './worlds/tour';
import type { GameEvent, HudSnapshot, MapId, Mode, RunResult, SurfSession } from './shared/contracts';

const app = document.querySelector<HTMLDivElement>('#app')!;
const progress = createProgressStore();
const audio = new SurfAudio();
let session: SurfSession | undefined;
let screen: 'title'|'atlas'|'ride'|'paused'|'results'|'error' = 'title';
let selected:MapId = 'mavericks';
let mode:Mode = 'score-run';
let lastCallout = '', calloutUntil = 0, previousTrick = '';
const byId = (id:string) => document.getElementById(id)!;
const button = (label:string,action:string,primary=false) =>
  `<button type="button" class="${primary?'primary-button':'surf-button'}" data-action="${action}">${label}</button>`;
const number = (n:number) => Math.round(n).toLocaleString();
const snap = () => progress.getSnapshot();
const instructions = 'A/D carve. Ride up a steep ramp to launch, or hold and release Space for a bigger air. In the air, A/D spin and W/S flip. Hold Space again to tuck. Shift + carve rides the barrel wall.';
const rideTips:Record<MapId,string> = {
  mavericks:'Use A to climb toward the curl. Ease off to hold your line.',
  jbay:'Climb high and carve back down for a cutback. Link it into an air, then ride clear to bank.',
  pipeline:'Stay under the lip and follow the daylight through the opening.',
  teahupoo:'Carve toward the hollow and follow the opening before the lip closes.',
  nazare:'Start high. Carve down toward the yellow buoys and cross between them on your board.',
  uluwatu:'Alternate between the cliffside barrels and the open launch sections.',
};

function stopRide() {
  audio.pause();
  session?.dispose();
  session=undefined;
}
function title() {
  screen='title'; stopRide();
  const open = snap().levelsCleared > 0;
  app.innerHTML=`<main class="landing"><img class="landing__art" src="${heroWaveUrl}" alt="">
    <div class="landing__veil"></div><div class="content"><p class="eyebrow"><span class="eyebrow__dash"></span> Single-player surfing</p>
    <h1>Barrel<br><span>Roll.</span></h1>
    <p class="tagline">${open ? 'Choose a break for your next ride.' : 'Mavericks · Half Moon Bay, California'}</p>
    <div class="actions">${button(open ? 'Enter Freeplay' : 'Start Mavericks tutorial', open ? 'atlas' : 'continue', true)}
    ${open ? '' : button('View locations', 'atlas')}</div>
    ${open ? '' : '<p class="location">Finish one wave to open all six locations.</p>'}
    </div></main>`;
}
function atlas() {
  screen='atlas'; stopRide();
  const {levelsCleared,bestRuns,earnedMedalIds}=snap();
  app.innerHTML=`<main class="map-select"><div class="map-select__inner">
    <header>${button('← Title','title')}<h1>${levelsCleared ? 'Freeplay' : 'Surf locations'}</h1></header>
    <ul class="map-grid">${MAP_ORDER.map(id=>{
      const available = rideMode(id, levelsCleared);
      const card=MAP_CARDS[id];
      const best=available ? bestRuns[id]?.[available]?.score : undefined;
      const medals=progress.challenges.filter(c=>c.mapId===id&&earnedMedalIds.includes(c.id)).length;
      return `<li class="map-card map-card--${card.tone}"><button type="button" class="map-card__button" data-action="ride-${id}" ${available?'':'disabled'}>
        <span class="map-card__preview">${locationArt(id)}</span><span class="map-card__body"><span class="map-card__top">${available === 'free-surf' ? 'Freeplay' : available ? 'Tutorial' : 'Finish Mavericks to unlock'}</span>
        <strong>${maps[id].name}</strong><span class="map-card__region">${maps[id].region}</span>
        <span class="map-card__signature">${card.signature}</span>
        <span class="map-card__stats">Best ${best===undefined?'—':number(best)} · ${medals}/3 medals</span></span></button></li>`;
    }).join('')}</ul></div></main>`;
}
function tutorialHint(h: HudSnapshot): string {
  const travelled = maps.mavericks.wave.rideLengthM - h.distanceLeftM;
  if (h.state === 'barrel') return 'Follow the opening';
  if (h.state === 'airborne') return 'Release the keys to line up your landing';
  if (travelled < 64) return 'A climbs the face · D drops toward the flats';
  if (travelled < 212) return 'Climb toward the curling lip · ease off to hold your line';
  if (travelled < 330) return 'Hold Space and release to try a jump';
  return 'Ride to the end of the wave to unlock Freeplay';
}
function showRide(id:MapId) {
  const {levelsCleared,settings}=snap();
  const nextMode = rideMode(id, levelsCleared);
  if (!nextMode) return;
  stopRide(); selected=id; mode=nextMode; screen='ride';
  const tutorial = mode === 'score-run';
  app.innerHTML=`<main class="ride"><div id="water"></div>
    <div class="run-head"><div class="readout"><small>${maps[id].name}</small><strong id="goal"></strong></div>
    <div class="actions"><span id="clock"></span>${button('Pause','pause')}</div></div>
    <div class="run-bottom"><span class="score"><small>${tutorial ? 'Wave remaining' : 'Score'}</small><strong id="score">—</strong><span id="combo"></span></span>
    <span id="callout"></span></div><div id="overlay"></div></main>`;
  try {
    session=createSurfSession({mount:byId('water'),map:maps[id],mode,seed:8,settings,
      createEnvironment,createTrickController,onEvent});
    audio.start(settings);
    session.start();
  } catch (error) {
    screen='error';stopRide();
    app.innerHTML=`<main class="interlude"><section><h1>Couldn’t start the wave</h1><p id="problem"></p>
    <div class="actions">${button('Try again','retry',true)}${button('Back to levels','back')}</div></section></main>`;
    byId('problem').textContent=String(error);
  }
}
function onEvent(event:GameEvent) {
  if(event.type==='run-started') {
    previousTrick='';
    lastCallout=mode === 'free-surf' ? rideTips[selected] : '';
    calloutUntil=performance.now()+9500;
  } else if(event.type==='hud' && screen==='ride') {
    const h=event.data;
    audio.update(h);
    const tutorial = mode === 'score-run';
    byId('goal').textContent=tutorial ? tutorialHint(h) : 'Freeplay';
    byId('clock').textContent='';
    byId('score').textContent=tutorial ? number(h.distanceLeftM) + ' m' : number(h.score);
    byId('combo').textContent=!tutorial && h.pendingCombo ? `+${number(h.pendingCombo)}  ·  ${h.multiplier}×` : '';
    if (h.trickLabel !== previousTrick && (h.trickLabel.includes('landing') || ['Barrel exit', 'Driving bottom turn', 'Cutback'].includes(h.trickLabel))) {
      lastCallout = h.trickLabel;
      calloutUntil = performance.now() + 1650;
    }
    previousTrick = h.trickLabel;
    const live=h.state==='airborne'?h.trickLabel:h.state==='barrel'?`In the barrel · ${h.barrelS.toFixed(1)} s`:'';
    byId('callout').textContent=live || (performance.now()<calloutUntil?lastCallout:'');
  } else if(event.type==='score-banked' && mode==='free-surf') {
    lastCallout='Banked +'+number(event.points); calloutUntil=performance.now()+1200;
  } else if(event.type==='wipeout') {
    lastCallout=event.reason;calloutUntil=performance.now()+1350;
  } else if(event.type==='run-ended') results(event.result);
}
function results(run:RunResult) {
  const record=progress.recordResult(run);
  screen='results'; stopRide();
  const clear = finishedTutorial(run);
  const heading = clear ? 'Freeplay unlocked' : mode === 'free-surf' ? 'Session complete' : 'Tutorial ended';
  const detail = clear ? 'All six surf locations are open. Pick any break and ride as long as you like.' : '';
  app.innerHTML=`<main class="interlude"><section><p class="eyebrow">${maps[selected].name}</p><h1>${heading}</h1>
    ${detail ? `<p>${detail}</p>` : ''}<dl class="run-stats"><div><dt>Score</dt><dd>${number(run.score)}</dd></div>
    <div><dt>Best combo</dt><dd>${number(run.bestCombo)}</dd></div><div><dt>Longest barrel</dt><dd>${run.longestBarrelS.toFixed(1)} s</dd></div>
    <div><dt>Clean landings</dt><dd>${run.cleanLandings}</dd></div></dl>
    ${record.newMedalIds.map(id=>`<p>Medal · ${progress.challenges.find(c=>c.id===id)?.label}</p>`).join('')}
    ${!record.snapshot.storageAvailable?'<p>Progress is available for this session only.</p>':''}
    <div class="actions">${button(clear ? 'Choose a freeplay location' : 'Locations','atlas',true)}
    ${button('Surf again','retry')}</div></section></main>`;
  app.querySelector('button')?.focus();
}
function pause() {
  if(screen!=='ride'||!session) return;
  screen='paused';session.pause();audio.pause();
  byId('overlay').innerHTML=`<section class="pause-card"><p class="eyebrow">${maps[selected].name}</p><h2>Paused</h2><p>${rideTips[selected]}</p><p>${instructions}</p>
    <div class="actions">${button('Resume','resume',true)}${button('Restart run','retry')}${button(snap().settings.muted?'Sound off':'Sound on','mute')}
    ${mode==='free-surf'?button('Finish session','finish'):''}${button('Discard run','back')}</div></section>`;
  byId('overlay').querySelector('button')?.focus();
}
function resume() {
  if(screen!=='paused') return;
  screen='ride';byId('overlay').replaceChildren();
  audio.start(snap().settings);session?.resume();
}
app.addEventListener('click',event=>{
  const target=(event.target as HTMLElement).closest<HTMLButtonElement>('button[data-action]');
  if(!target || target.disabled) return;
  const action=target.dataset.action!;
  if(action.startsWith('ride-')) showRide(action.slice(5) as MapId);
  else switch(action) {
    case 'title':title();break;
    case 'atlas':atlas();break;
    case 'back':atlas();break;
    case 'continue':showRide('mavericks');break;
    case 'retry':showRide(selected);break;
    case 'pause':pause();break;
    case 'resume':resume();break;
    case 'finish':session?.finish();break;
    case 'mute': {
      const settings=progress.updateSettings({muted:!snap().settings.muted}).settings;
      audio.settings(settings);target.textContent=settings.muted?'Sound off':'Sound on';break;
    }
  }
});
window.addEventListener('keydown',e=>{
  if(e.key==='Escape' && !e.repeat) {
    if(screen==='ride') pause(); else if(screen==='paused') resume();
  }
  if(screen==='results' && e.key.toLowerCase()==='r' && !e.repeat) showRide(selected);
});
window.addEventListener('blur',pause);
document.addEventListener('visibilitychange',()=>{if(document.hidden) pause();});
title();
