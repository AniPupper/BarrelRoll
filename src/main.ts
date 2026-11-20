import { MAP_CARDS } from './app/mapCards';
import { creditsContent, howToPlayContent } from './app/infoContent';
import { locationArt } from './app/locationArt';
import heroPhotoUrl from './assets/mavericks-hero.webp?url';
import { maps, MAP_ORDER, STARTING_MAP_ID } from './maps';
import { createProgressStore } from './progress';
import { BOARD_COLOR_UNLOCKS } from './progress/challenges';
import type { GameSettings, MapId, Quality, GameEvent, HudSnapshot, Mode, RunResult, SurfSession } from './shared/contracts';
import { SurfAudio } from './app/surfAudio';
import { ScoreCounter } from './app/scoreCounter';
import { createSurfSession } from './engine';
import { createTrickController } from './engine/tricks';
import { finishedTutorial, rideMode } from './maps/campaign';
import { createEnvironment } from './worlds/tour';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
if (!app) throw new Error('BarrelRoll app mount is missing');

const progress = createProgressStore();
type Screen = 'title' | 'maps' | 'how' | 'settings' | 'credits' | 'ride' | 'paused' | 'results' | 'error';
let screen: Screen = 'title';
let selectedMap: MapId = STARTING_MAP_ID;
let settingsNotice = '';
let resetPending = false;

const audio = new SurfAudio();
const scoreCounter = new ScoreCounter();
let session: SurfSession | undefined;
let mode:Mode = 'score-run';
let lastCallout = '', calloutUntil = 0, previousTrick = '';
const byId = (id:string) => document.getElementById(id)!;
const button = (label:string,action:string,primary=false) =>
  `<button type="button" class="${primary?'primary-button':'surf-button'}" data-action="${action}">${label}</button>`;
const number = (n:number) => Math.round(n).toLocaleString();
const snap = () => progress.getSnapshot();
const instructions = 'A/D carve. W tucks for speed and S brakes. Keep steering up the face to loop inside the barrel. Steer the other way to reverse, hold S to stay on the wall, or release to settle. Hold and release Space to jump. In the air, hold E to grab a rail, A/D to spin, W/S to flip, and ←/→ to roll. Hold Space again to tuck.';
const rideTips:Record<MapId,string> = {
  mavericks:'Hold A to enter the barrel. Keep holding it to ride across the ceiling.',
  jbay:'Climb high and carve back down for a cutback. Link it into an air, then ride clear to bank.',
  pipeline:'Hold D into the hollow and keep holding to loop. Ease off to follow the daylight.',
  teahupoo:'Carve toward the hollow and follow the opening before the lip closes.',
  nazare:'Start high. Carve down toward the yellow buoys and cross between them on your board.',
  uluwatu:'Alternate between the cliffside barrels and the open launch sections.',
};

function stopRide() {
  audio.pause();
  session?.dispose();
  session=undefined;
}

const indexOf = (id: MapId) => String(MAP_ORDER.indexOf(id) + 1).padStart(2, '0');

function brand(): string {
  return `<span class="brand" aria-label="BarrelRoll">
    <span class="brand__symbol" aria-hidden="true"><svg viewBox="0 0 38 38" fill="none"><path d="M3 24c5-11 9-15 15-15 7 0 10 4 16 11-6-2-10-2-14 1-4 3-6 7-8 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M4 31c6-3 10-3 14 0m6-5c4-2 7-2 10 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
    <span class="brand__word">BARREL<span>ROLL</span></span>
  </span>`;
}

function mapButton(id: MapId): string {
  const card = MAP_CARDS[id];
  const active = selectedMap === id;
  const locked = !rideMode(id, progress.getSnapshot().levelsCleared);
  return `<li class="break-list__item">
    <button type="button" class="break-button${active ? ' is-active' : ''}${locked ? ' is-locked' : ''}" data-map="${id}" aria-pressed="${active}">
      <span class="break-button__index">${indexOf(id)}</span>
      <span class="break-button__art" aria-hidden="true">${locationArt(id, 'list')}</span>
      <span class="break-button__copy"><strong>${card.name}</strong><small>${card.region}</small></span>
      <span class="break-button__arrow" aria-hidden="true">↗</span>
    </button>
  </li>`;
}

function renderTitle(): void {
  const freeplay = progress.getSnapshot().levelsCleared > 0;
  app.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="landing" id="main-content">
      <header class="landing__header shell">
        ${brand()}
        <nav class="landing__nav" aria-label="Game information">
          <button type="button" data-screen="how">HOW TO PLAY</button>
          <button type="button" data-screen="settings">SETTINGS</button>
          <button type="button" data-screen="credits">CREDITS</button>
        </nav>
        <span class="header-edition">EST 2026 &nbsp;/&nbsp; SOLO SURF</span>
      </header>
      <div class="landing__body shell">
        <section class="landing__copy">
          <p class="kicker"><span class="kicker__line"></span> AN ARCADE SURF ADVENTURE</p>
          <h1>BARREL<br><span>ROLL</span></h1>
          <p class="landing__lead">Find your line on the world's most legendary waves</p>
          <button type="button" class="action-button" data-action="${freeplay ? 'atlas' : 'continue'}"><span>${freeplay ? 'ENTER FREEPLAY' : 'START MAVERICKS TUTORIAL'}</span><span class="action-button__icon" aria-hidden="true">↗</span></button>
          <button type="button" class="landing__play-link" id="play-button">EXPLORE THE BREAKS <span aria-hidden="true">↗</span></button>
        </section>
        <div class="landing__visual">
          <img src="${heroPhotoUrl}" alt="A towering wave at Mavericks under a foggy California sky" />
          <div class="landing__visual-caption"><span>FIRST BREAK</span><strong>MAVERICKS</strong><span>HALF MOON BAY, CALIFORNIA</span></div>
          <span class="landing__visual-index" aria-hidden="true">01</span>
        </div>
      </div>
      <footer class="landing__footer shell">
        <span class="footer-label">BARRELROLL <span aria-hidden="true">/</span> SOLO SURF</span>
        <span class="footer-line" aria-hidden="true"></span>
        <span class="footer-location">THE OCEAN IS YOUR PLAYGROUND</span>
      </footer>
    </main>`;
  app.querySelector<HTMLButtonElement>('#play-button')?.addEventListener('click', () => openScreen('maps'));
  app.querySelectorAll<HTMLButtonElement>('[data-screen]').forEach((button) => {
    button.addEventListener('click', () => openScreen(button.dataset.screen as Screen));
  });
}

function renderMaps(): void {
  const card = MAP_CARDS[selectedMap];
  const snapshot = progress.getSnapshot();
  const available = rideMode(selectedMap, snapshot.levelsCleared);
  const best = available ? snapshot.bestRuns[selectedMap]?.[available]?.score : undefined;
  const goals = progress.challenges.filter((goal) => goal.mapId === selectedMap);
  const earned = goals.filter((goal) => snapshot.earnedMedalIds.includes(goal.id)).length;

  app.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="atlas atlas--${card.tone}" id="main-content">
      <header class="atlas__header shell">
        ${brand()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> EXPLORE THE COAST</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="atlas__body shell">
        <div class="atlas__intro">
          <div><p class="kicker"><span class="kicker__line"></span> THE SURF ATLAS</p><h1>CHOOSE A <span>BREAK</span></h1></div>
          <p>${snapshot.levelsCleared ? 'Freeplay is open. Choose any of the six breaks.' : 'Finish one wave at Mavericks to unlock all six breaks.'}</p>
        </div>
        <div class="atlas__stage">
          <section class="feature" aria-live="polite" aria-label="Selected location">
            <div class="feature__art" aria-hidden="true">${locationArt(selectedMap, 'feature')}<span class="feature__number">LOCATION ${indexOf(selectedMap)}</span></div>
            <div class="feature__info">
              <div class="feature__eyebrow"><span>${card.difficulty.toUpperCase()} BREAK</span><span>${available === 'free-surf' ? 'FREEPLAY' : available ? 'TUTORIAL' : 'LOCKED'}</span></div>
              <h2>${card.name}</h2>
              <p class="feature__region">${card.region}</p>
              <p class="feature__signature">${card.signature}</p>
              <div class="feature__metrics"><span><small>PERSONAL BEST</small><strong>${best?.toLocaleString() ?? '—'}</strong></span><span><small>MEDALS EARNED</small><strong>${earned} <i>/ ${goals.length}</i></strong></span></div>
              <button type="button" class="feature__play-link" data-action="ride-${selectedMap}" ${available ? '' : 'disabled'}>${available === 'free-surf' ? 'SURF THIS BREAK' : available ? 'START TUTORIAL' : 'FINISH MAVERICKS TO UNLOCK'} <span aria-hidden="true">↗</span></button>
            </div>
          </section>
          <section class="breaks" aria-label="Surf locations">
            <div class="breaks__heading"><span>DESTINATIONS</span><span>SELECT TO PREVIEW</span></div>
            <ul class="break-list">${MAP_ORDER.map(mapButton).join('')}</ul>
            <p class="breaks__foot">MORE THAN A POSTCARD <span aria-hidden="true">↗</span><br><small>Each break has its own wave and riding style</small></p>
          </section>
        </div>
      </div>
    </main>`;
  app.querySelector<HTMLButtonElement>('#back-button')?.addEventListener('click', () => {
    screen = 'title';
    render();
    app.querySelector<HTMLButtonElement>('#play-button')?.focus();
  });
  app.querySelectorAll<HTMLButtonElement>('[data-map]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMap = button.dataset.map as MapId;
      render();
      app.querySelector<HTMLButtonElement>(`[data-map="${selectedMap}"]`)?.focus();
    });
  });
}

function renderInfo(kicker: string, title: string, content: string): void {
  app.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="info-page" id="main-content">
      <header class="atlas__header shell">
        ${brand()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> FIELD NOTES</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="info-page__body shell">
        <div class="info-page__hero"><p class="kicker"><span class="kicker__line"></span> ${kicker}</p><h1>${title}</h1></div>
        ${content}
      </div>
    </main>`;
  app.querySelector<HTMLButtonElement>('#back-button')?.addEventListener('click', returnToTitle);
}

function renderSettings(): void {
  const snapshot = progress.getSnapshot();
  const settings = snapshot.settings;
  const qualities: readonly Quality[] = ['low', 'medium', 'high'];
  const qualityButtons = qualities.map((quality) => `<button type="button" class="choice-button${settings.quality === quality ? ' is-selected' : ''}" data-quality="${quality}" aria-pressed="${settings.quality === quality}">${quality.toUpperCase()}</button>`).join('');
  const colorNames = ['Coral', 'Lagoon', 'Sun', 'Violet'];
  const colors = BOARD_COLOR_UNLOCKS.map(({ color }, index) => {
    const unlocked = snapshot.unlockedBoardColors.includes(color);
    return `<button type="button" class="color-choice${settings.boardColor === color ? ' is-selected' : ''}" data-board="${color}" aria-pressed="${settings.boardColor === color}" ${unlocked ? '' : 'disabled'} aria-label="${colorNames[index] ?? 'Board color'}${unlocked ? '' : ', locked'}"><span class="color-choice__swatch" style="--swatch:${color}"></span><span>${colorNames[index] ?? 'Color'}</span><small>${unlocked ? 'UNLOCKED' : 'LOCKED'}</small></button>`;
  }).join('');
  const percent = Math.round(settings.masterVolume * 100);
  const warning = snapshot.storageAvailable ? '' : '<p class="save-warning" role="status">Saving is unavailable in this browser — changes will last for this session</p>';
  const resetConfirmation = resetPending ? `<div class="reset-confirm" role="group" aria-label="Confirm reset progress"><p>Delete saved records, medals and settings?</p><div><button type="button" id="cancel-reset">KEEP PROGRESS</button><button type="button" id="confirm-reset">RESET EVERYTHING</button></div></div>` : '';
  const content = `<div class="settings-intro"><p>Make the ride feel right for you</p><span>CHANGES SAVE AUTOMATICALLY</span></div>
    ${warning}<p class="settings-notice" role="status" aria-live="polite">${settingsNotice}</p>
    <div class="settings-grid">
      <fieldset class="setting-group"><legend>Picture</legend><p>Choose the level of detail that suits your device</p><div class="choice-row">${qualityButtons}</div></fieldset>
      <fieldset class="setting-group"><legend>Motion</legend><p>Reduce decorative movement and camera effects</p><label class="toggle-row" for="reduced-motion"><span>REDUCED MOTION</span><input type="checkbox" id="reduced-motion" ${settings.reducedMotion ? 'checked' : ''}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group"><legend>Sound</legend><p>Set the volume for ocean and game audio</p><label class="volume-row" for="volume"><span>MASTER VOLUME</span><output id="volume-value" for="volume">${percent}%</output></label><input type="range" id="volume" min="0" max="100" step="1" value="${percent}"><label class="toggle-row" for="muted"><span>MUTE AUDIO</span><input type="checkbox" id="muted" ${settings.muted ? 'checked' : ''}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group setting-group--colors"><legend>Ice board tint</legend><p>Earn medals to unlock more colors — the board always stays ice</p><div class="color-choices">${colors}</div></fieldset>
    </div>
    <div class="settings-danger"><div><strong>Start fresh</strong><p>Remove local records, medals, unlocks and settings</p></div><button type="button" id="reset-button">RESET PROGRESS</button></div>${resetConfirmation}`;
  renderInfo('MAKE IT YOURS', 'SETTINGS', content);

  app.querySelectorAll<HTMLButtonElement>('[data-quality]').forEach((button) => {
    button.addEventListener('click', () => saveSettings({ quality: button.dataset.quality as Quality }, `[data-quality="${button.dataset.quality}"]`));
  });
  app.querySelector<HTMLInputElement>('#reduced-motion')?.addEventListener('change', (event) => {
    saveSettings({ reducedMotion: (event.currentTarget as HTMLInputElement).checked }, '#reduced-motion');
  });
  app.querySelector<HTMLInputElement>('#muted')?.addEventListener('change', (event) => {
    saveSettings({ muted: (event.currentTarget as HTMLInputElement).checked }, '#muted');
  });
  const volume = app.querySelector<HTMLInputElement>('#volume');
  volume?.addEventListener('input', () => {
    const output = app.querySelector<HTMLOutputElement>('#volume-value');
    if (output) output.value = `${volume.value}%`;
  });
  volume?.addEventListener('change', () => saveSettings({ masterVolume: Number(volume.value) / 100 }, '#volume'));
  app.querySelectorAll<HTMLButtonElement>('[data-board]').forEach((button) => {
    button.addEventListener('click', () => saveSettings({ boardColor: button.dataset.board }, `[data-board="${button.dataset.board}"]`));
  });
  app.querySelector<HTMLButtonElement>('#reset-button')?.addEventListener('click', () => {
    resetPending = true;
    renderSettings();
    app.querySelector<HTMLButtonElement>('#cancel-reset')?.focus();
  });
  app.querySelector<HTMLButtonElement>('#cancel-reset')?.addEventListener('click', () => {
    resetPending = false;
    renderSettings();
    app.querySelector<HTMLButtonElement>('#reset-button')?.focus();
  });
  app.querySelector<HTMLButtonElement>('#confirm-reset')?.addEventListener('click', () => {
    const next = progress.reset();
    settingsNotice = next.storageAvailable ? 'Progress reset' : 'Progress reset for this session';
    resetPending = false;
    renderSettings();
    app.querySelector<HTMLButtonElement>('#reset-button')?.focus();
  });
}

function saveSettings(patch: Partial<GameSettings>, focusSelector: string): void {
  try {
    const next = progress.updateSettings(patch);
    settingsNotice = next.storageAvailable ? 'Settings saved' : 'Settings active for this session';
  } catch {
    settingsNotice = 'That setting could not be saved';
  }
  renderSettings();
  app.querySelector<HTMLElement>(focusSelector)?.focus();
}

function returnToTitle(): void {
  const previous = screen;
  screen = 'title';
  resetPending = false;
  render();
  app.querySelector<HTMLButtonElement>(previous === 'maps' ? '#play-button' : `[data-screen="${previous}"]`)?.focus();
}

function openScreen(next: Screen): void {
  screen = next;
  resetPending = false;
  settingsNotice = '';
  render();
  app.querySelector<HTMLButtonElement>('#back-button')?.focus();
}

function render(): void {
  document.documentElement.dataset.reducedMotion = String(progress.getSnapshot().settings.reducedMotion);
  if (screen === 'title') renderTitle();
  else if (screen === 'maps') renderMaps();
  else if (screen === 'how') renderInfo('A QUICK FIELD GUIDE', 'HOW TO<br><span>PLAY</span>', howToPlayContent());
  else if (screen === 'credits') renderInfo('THE PEOPLE BEHIND THE WAVE', 'CREDITS', creditsContent());
  else if (screen === 'settings') renderSettings();
}

function tutorialHint(h: HudSnapshot): string {
  const travelled = maps.mavericks.wave.rideLengthM - h.distanceLeftM;
  if (h.wallRiding) return 'A/D choose direction · S holds your line';
  if (h.state === 'barrel') return 'Hold A to loop · D carves out from the floor';
  if (h.state === 'airborne') return 'Hold E to grab a rail · release to open up';
  if (travelled < 64) return 'Hold A to climb toward the first barrel';
  if (travelled < 212) return 'Hold A toward the curl · release to trim';
  if (travelled < 330) return 'Hold Space and release to try a jump';
  return 'Ride to the end of the wave to unlock Freeplay';
}
function showRide(id:MapId) {
  const {levelsCleared,settings}=snap();
  const nextMode = rideMode(id, levelsCleared);
  if (!nextMode) return;
  stopRide(); selectedMap=id; mode=nextMode; screen='ride';
  const tutorial = mode === 'score-run';
  app.innerHTML=`<main class="ride"><div id="water"></div>
    <div class="run-head"><div class="readout"><small>${maps[id].name}</small><strong id="goal"></strong>
      ${tutorial ? '<span id="wave-left"></span><span class="wave-progress" aria-hidden="true"><i id="wave-progress-fill"></i></span>' : ''}</div>
    <div class="actions">${button('Pause','pause')}</div></div>
    <div class="run-bottom"><span class="score"><small>Score</small><span class="score-line"><strong id="score">0</strong>
      <span id="score-rate">+0 pts/s</span></span><span id="combo"></span><span id="speed" aria-label="Board speed"></span></span>
    <span id="callout"></span></div><div id="overlay"></div></main>`;
  try {
    const scoreText = byId('score'), rateText = byId('score-rate');
    session=createSurfSession({mount:byId('water'),map:maps[id],mode,seed:8,settings,
      createEnvironment,createTrickController,onEvent,
      onScoreFrame(target, dtS) {
        scoreCounter.advance(target, dtS);
        const points = number(Math.floor(scoreCounter.value));
        const pace = '+' + number(scoreCounter.rate) + ' pts/s';
        if (scoreText.textContent !== points) scoreText.textContent = points;
        if (rateText.textContent !== pace) rateText.textContent = pace;
      }});
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
    scoreCounter.reset();
    previousTrick='';
    lastCallout=mode === 'free-surf' ? rideTips[selectedMap] : '';
    calloutUntil=performance.now()+9500;
  } else if(event.type==='hud' && screen==='ride') {
    const h=event.data;
    audio.update(h);
    const tutorial = mode === 'score-run';
    byId('goal').textContent=tutorial ? tutorialHint(h) : 'Freeplay';
    byId('speed').textContent = Math.round(h.speedMps * 3.6) + ' km/h';
    if (tutorial) {
      byId('wave-left').textContent = number(h.distanceLeftM) + ' m remaining';
      const fraction = 1 - h.distanceLeftM / maps[selectedMap].wave.rideLengthM;
      byId('wave-progress-fill').style.transform = `scaleX(${Math.max(0, Math.min(1, fraction))})`;
    }
    byId('combo').textContent = h.pendingCombo ? 'Combo ×' + h.multiplier : '';
    if (h.trickLabel !== previousTrick && (h.trickLabel.includes('landing') || ['Barrel exit', 'Driving bottom turn', 'Cutback'].includes(h.trickLabel))) {
      lastCallout = h.trickLabel;
      calloutUntil = performance.now() + 1650;
    }
    previousTrick = h.trickLabel;
    let live = '';
    if (h.state === 'airborne') live = h.trickLabel;
    if (h.state === 'barrel') {
      const uphill = maps[selectedMap].wave.breakDirection === 'right' ? 'A' : 'D';
      const label = h.wallRiding ? h.trickLabel : tutorial ? 'In the barrel' : 'Hold ' + uphill + ' to loop';
      live = label + ' · ' + h.barrelS.toFixed(1) + ' s';
    }
    byId('callout').textContent=live || (performance.now()<calloutUntil?lastCallout:'');
  } else if(event.type==='score-banked' && mode==='free-surf') {
    lastCallout='Combo banked'; calloutUntil=performance.now()+1200;
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
  app.innerHTML=`<main class="interlude"><section><p class="eyebrow">${maps[selectedMap].name}</p><h1>${heading}</h1>
    ${detail ? `<p>${detail}</p>` : ''}<dl class="run-stats"><div><dt>Score</dt><dd id="final-score">${number(Math.floor(scoreCounter.value))}</dd></div>
    <div><dt>Best combo</dt><dd>${number(run.bestCombo)}</dd></div><div><dt>Longest barrel</dt><dd>${run.longestBarrelS.toFixed(1)} s</dd></div>
    <div><dt>Clean landings</dt><dd>${run.cleanLandings}</dd></div></dl>
    ${record.newMedalIds.map(id=>`<p>Medal · ${progress.challenges.find(c=>c.id===id)?.label}</p>`).join('')}
    ${!record.snapshot.storageAvailable?'<p>Progress is available for this session only.</p>':''}
    <div class="actions">${button(clear ? 'Choose a freeplay location' : 'Locations','atlas',true)}
    ${button('Surf again','retry')}</div></section></main>`;
  const finalScore = byId('final-score');
  let previous = performance.now();
  function finishCounting(now: number) {
    if (!finalScore.isConnected) return;
    scoreCounter.advance(run.score, Math.min(.1, (now - previous) / 1000));
    finalScore.textContent = number(Math.floor(scoreCounter.value));
    previous = now;
    if (scoreCounter.value < run.score) requestAnimationFrame(finishCounting);
  }
  if (scoreCounter.value < run.score) requestAnimationFrame(finishCounting);
  app.querySelector('button')?.focus();
}
function pause() {
  if(screen!=='ride'||!session) return;
  screen='paused';session.pause();audio.pause();
  byId('overlay').innerHTML=`<section class="pause-card"><p class="eyebrow">${maps[selectedMap].name}</p><h2>Paused</h2><p>${rideTips[selectedMap]}</p><p>${instructions}</p>
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
    case 'atlas':
    case 'back':
      stopRide();
      openScreen('maps');
      break;
    case 'continue':showRide('mavericks');break;
    case 'retry':showRide(selectedMap);break;
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
  if(screen==='results' && e.key.toLowerCase()==='r' && !e.repeat) showRide(selectedMap);
});
window.addEventListener('blur',pause);
document.addEventListener('visibilitychange',()=>{if(document.hidden) pause();});

render();
