import { MAP_CARDS } from './app/mapCards';
import { creditsContent, howToPlayContent } from './app/infoContent';
import { locationArt } from './app/locationArt';
import heroWaveUrl from './assets/hero-wave.svg?url';
import { locationArt } from './app/locationArt';
import { MAP_CARDS } from './app/mapCards';
import { SurfAudio } from './app/surfAudio';
import { createSurfSession } from './engine';
import { createTrickController } from './engine/tricks';
import { maps, MAP_ORDER } from './maps';
import { campaign, clearedLevel, objectives } from './maps/campaign';
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
const instructions = 'A/D carve. Ride up a steep ramp to launch, or hold and release Space for a bigger air. In the air, A/D spin and W/S flip. Hold Space again to tuck and rotate faster.';
const rideTips:Record<MapId,string> = {
  mavericks:'Drop low, turn back uphill, then release Space at the lip.',
  jbay:'Climb high and carve back down for a cutback. Link it into an air, then ride clear to bank.',
  pipeline:'Stay under the lip and follow the daylight through the opening.',
  teahupoo:'Hold the tube through its taper, then link airs to build your score.',
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
  const cleared=snap().levelsCleared, next=campaign[Math.min(cleared,4)];
  app.innerHTML=`<main class="landing"><img class="landing__art" src="${heroWaveUrl}" alt="">
    <div class="landing__veil"></div><div class="content"><p class="eyebrow"><span class="eyebrow__dash"></span> Single-player surf tour</p>
    <h1>Barrel<br><span>Roll.</span></h1>
    <p class="tagline">${cleared===5?'Five breaks cleared. The ocean is yours.':maps[next].name+' · '+maps[next].region}</p>
    <div class="actions">${button(cleared===0?'Surf Mavericks':cleared===5?'Enter Freeplay':'Continue campaign',cleared===5?'free':'continue',true)}
    ${button('Campaign levels','atlas')}</div>
    <p class="location">${cleared===5?'Uluwatu unlocked':cleared+' / 5 cleared · Freeplay unlocks after Nazaré'}</p>
    </div></main>`;
}
function atlas(free=false) {
  screen='atlas'; stopRide();
  const {levelsCleared,bestRuns,earnedMedalIds}=snap();
  mode=free && levelsCleared===5?'free-surf':'score-run';
  const order=mode==='free-surf'?MAP_ORDER:campaign;
  app.innerHTML=`<main class="map-select"><div class="map-select__inner">
    <header>${button('← Title','title')}<h1>${mode==='free-surf'?'Freeplay':'Campaign'}</h1></header>
    <ul class="map-grid">${order.map((id,i)=>{
      const available=mode==='free-surf'||i<=levelsCleared;
      const card=MAP_CARDS[id];
      const best=bestRuns[id]?.[mode]?.score;
      const medals=progress.challenges.filter(c=>c.mapId===id&&earnedMedalIds.includes(c.id)).length;
      return `<li class="map-card map-card--${card.tone}"><button type="button" class="map-card__button" data-action="ride-${id}" ${available?'':'disabled'}>
        <span class="map-card__preview">${locationArt(id)}</span><span class="map-card__body"><span class="map-card__top">${mode==='free-surf'?'Freeplay':i<levelsCleared?'Cleared':available?'Level '+(i+1):'Clear '+maps[campaign[i-1]].name}</span>
        <strong>${maps[id].name}</strong><span class="map-card__region">${maps[id].region}</span>
        <span class="map-card__signature">${mode==='free-surf'?card.signature:objectives[id]}</span>
        <span class="map-card__stats">Best ${best===undefined?'—':number(best)} · ${medals}/3 medals</span></span></button></li>`;
    }).join('')}</ul></div></main>`;
}
function hint(h:HudSnapshot | RunResult) {
  if(mode==='free-surf') return 'Freeplay';
  const exit=(h.cleanExitS??0).toFixed(1);
  switch(selected) {
    case 'mavericks':return `Clean landings  ${Math.min(2,h.cleanLandings)} / 2`;
    case 'jbay':return `Best combo  ${number(h.bestCombo)} / 2,000`;
    case 'pipeline':return `Clean barrel exit  ${exit} / 3 s`;
    case 'teahupoo':return `Clean exit  ${exit} / 3.5 s · Score  ${number(h.score)} / 4,000`;
    case 'nazare':return 'distanceLeftM' in h?`Ride between the buoys · ${number(h.distanceLeftM)} m`:objectives.nazare;
    default:return '';
  }
}
function showRide(id:MapId, free:boolean) {
  const {levelsCleared,settings}=snap();
  if(free ? levelsCleared!==5 : !campaign.slice(0,levelsCleared+1).includes(id)) return;
  stopRide(); selected=id; mode=free?'free-surf':'score-run'; screen='ride';
  app.innerHTML=`<main class="ride"><div id="water"></div>
    <div class="run-head"><div class="readout"><small>${maps[id].name}</small><strong id="goal"></strong></div>
    <div class="actions"><span id="clock"></span>${button('Pause','pause')}</div></div>
    <div class="run-bottom"><span class="score"><small>Score</small><strong id="score">0</strong><span id="combo"></span></span>
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
    lastCallout=rideTips[selected]+' '+instructions;
    calloutUntil=performance.now()+9500;
  } else if(event.type==='hud' && screen==='ride') {
    const h=event.data;
    audio.update(h);
    byId('goal').textContent=hint(h);
    byId('clock').textContent=h.remainingS===null?'':Math.floor(Math.ceil(h.remainingS)/60)+':'+String(Math.ceil(h.remainingS)%60).padStart(2,'0');
    byId('score').textContent=number(h.score);
    byId('combo').textContent=h.pendingCombo?`+${number(h.pendingCombo)}  ·  ${h.multiplier}×`:'';
    if (h.trickLabel !== previousTrick && (h.trickLabel.includes('landing') || ['Barrel exit', 'Driving bottom turn', 'Cutback'].includes(h.trickLabel))) {
      lastCallout = h.trickLabel;
      calloutUntil = performance.now() + 1650;
    }
    previousTrick = h.trickLabel;
    const live=h.state==='airborne'?h.trickLabel:h.state==='barrel'?`In the barrel · ${h.barrelS.toFixed(1)} s`:'';
    byId('callout').textContent=live || (performance.now()<calloutUntil?lastCallout:'');
  } else if(event.type==='score-banked') {
    lastCallout='Banked +'+number(event.points); calloutUntil=performance.now()+1200;
  } else if(event.type==='wipeout') {
    lastCallout=event.reason;calloutUntil=performance.now()+1350;
  } else if(event.type==='run-ended') results(event.result);
}
function results(run:RunResult) {
  const record=progress.recordResult(run);
  screen='results'; stopRide();
  const clear=clearedLevel(run), i=campaign.indexOf(selected);
  const heading=mode==='free-surf'?'Session complete':clear?'Level cleared':'Try that wave again';
  const detail=run.reason==='missed-exit'?'You missed the marked shoulder exit.':run.reason==='wipeout'?'The wave took you down.':hint(run);
  app.innerHTML=`<main class="interlude"><section><p class="eyebrow">${maps[selected].name}</p><h1>${heading}</h1>
    <p>${detail}</p><dl class="run-stats"><div><dt>Score</dt><dd>${number(run.score)}</dd></div>
    <div><dt>Best combo</dt><dd>${number(run.bestCombo)}</dd></div><div><dt>Longest barrel</dt><dd>${run.longestBarrelS.toFixed(1)} s</dd></div>
    <div><dt>Clean landings</dt><dd>${run.cleanLandings}</dd></div></dl>
    ${record.newMedalIds.map(id=>`<p>Medal · ${progress.challenges.find(c=>c.id===id)?.label}</p>`).join('')}
    ${!record.snapshot.storageAvailable?'<p>Progress is available for this session only.</p>':''}
    <div class="actions">${clear?button(i===4?'Enter Freeplay':'Next level',i===4?'free':'next',true):''}${button('Retry','retry',!clear)}${button('Locations','back')}</div></section></main>`;
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
  if(action.startsWith('ride-')) showRide(action.slice(5) as MapId,mode==='free-surf');
  else switch(action) {
    case 'title':title();break;
    case 'atlas':atlas();break;
    case 'back':atlas(mode==='free-surf');break;
    case 'free':atlas(true);break;
    case 'continue':showRide(campaign[Math.min(snap().levelsCleared,4)],false);break;
    case 'next':showRide(campaign[campaign.indexOf(selected)+1],false);break;
    case 'retry':showRide(selected,mode==='free-surf');break;
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
  if(screen==='results' && e.key.toLowerCase()==='r' && !e.repeat) showRide(selected,mode==='free-surf');
});
window.addEventListener('blur',pause);
document.addEventListener('visibilitychange',()=>{if(document.hidden) pause();});
title();
