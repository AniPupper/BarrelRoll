import { MAP_CARDS } from './app/mapCards';
import { creditsContent, howToPlayContent } from './app/infoContent';
import { locationArt } from './app/locationArt';
import heroWaveUrl from './assets/hero-wave.svg?url';
import { MAP_ORDER, STARTING_MAP_ID } from './maps';
import { createProgressStore } from './progress';
import { BOARD_COLOR_UNLOCKS } from './progress/challenges';
import type { GameSettings, MapId, Quality } from './shared/contracts';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('BarrelRoll app mount is missing');

const progress = createProgressStore();
type Screen = 'title' | 'maps' | 'how' | 'settings' | 'credits';
let screen: Screen = 'title';
let selectedMap: MapId = STARTING_MAP_ID;
let settingsNotice = '';
let resetPending = false;

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
  return `<li class="break-list__item">
    <button type="button" class="break-button${active ? ' is-active' : ''}" data-map="${id}" aria-pressed="${active}">
      <span class="break-button__index">${indexOf(id)}</span>
      <span class="break-button__art" aria-hidden="true">${locationArt(id, 'list')}</span>
      <span class="break-button__copy"><strong>${card.name}</strong><small>${card.region}</small></span>
      <span class="break-button__arrow" aria-hidden="true">↗</span>
    </button>
  </li>`;
}

function renderTitle(): void {
  app!.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="landing" id="main-content">
      <img class="landing__art" src="${heroWaveUrl}" alt="" />
      <div class="landing__shade" aria-hidden="true"></div>
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
        <div class="landing__copy">
          <p class="kicker"><span class="kicker__line"></span> THE OCEAN IS YOUR PLAYGROUND</p>
          <h1>BARREL<br><span>ROLL</span><i aria-hidden="true">↗</i></h1>
          <p class="landing__lead">Chase the curl, throw the impossible and find your own line across the world</p>
          <button type="button" class="action-button" id="play-button"><span>EXPLORE THE BREAKS</span><span class="action-button__icon" aria-hidden="true">↗</span></button>
          <p class="landing__hint">STARTING AT MAVERICKS <span aria-hidden="true">/</span> CALIFORNIA</p>
        </div>
        <div class="landing__stamp" aria-hidden="true"><span>NO TWO<br>WAVES<br>ALIKE</span><b>✳</b></div>
      </div>
      <footer class="landing__footer shell">
        <span class="footer-label">ARCADE SURFING<br>WITH A WILD SIDE</span>
        <span class="footer-line" aria-hidden="true"></span>
        <span class="footer-location"><b>01</b><span>FIRST BREAK<br>MAVERICKS, CALIFORNIA</span></span>
        <span class="footer-scroll">PICK A DESTINATION <span aria-hidden="true">↓</span></span>
      </footer>
    </main>`;
  app!.querySelector<HTMLButtonElement>('#play-button')?.addEventListener('click', () => openScreen('maps'));
  app!.querySelectorAll<HTMLButtonElement>('[data-screen]').forEach((button) => {
    button.addEventListener('click', () => openScreen(button.dataset.screen as Screen));
  });
}

function renderMaps(): void {
  const card = MAP_CARDS[selectedMap];
  const snapshot = progress.getSnapshot();
  const best = snapshot.bestRuns[selectedMap]?.['score-run']?.score;
  const goals = progress.challenges.filter((goal) => goal.mapId === selectedMap);
  const earned = goals.filter((goal) => snapshot.earnedMedalIds.includes(goal.id)).length;
  const isOpeningMap = selectedMap === STARTING_MAP_ID;

  app!.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="atlas atlas--${card.tone}" id="main-content">
      <header class="atlas__header shell">
        ${brand()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> EXPLORE THE COAST</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="atlas__body shell">
        <div class="atlas__intro">
          <p class="kicker"><span class="kicker__line"></span> CHOOSE YOUR BREAK</p>
          <h1>FIND YOUR<br><span>LINE</span></h1>
          <p>Every coast has its own rhythm<br>Explore the breaks and pick your next challenge</p>
        </div>
        <div class="atlas__stage">
          <section class="feature" aria-live="polite" aria-label="Selected location">
            <div class="feature__art" aria-hidden="true">${locationArt(selectedMap, 'feature')}<span class="feature__number">${indexOf(selectedMap)}</span></div>
            <div class="feature__info">
              <div class="feature__eyebrow"><span>${card.difficulty.toUpperCase()} BREAK</span><span>${isOpeningMap ? 'FIRST IN LINE' : 'ON THE HORIZON'}</span></div>
              <h2>${card.name}</h2>
              <p class="feature__region">${card.region}</p>
              <p class="feature__signature">${card.signature}</p>
              <div class="feature__metrics"><span><small>SCORE RUN BEST</small><strong>${best?.toLocaleString() ?? '—'}</strong></span><span><small>MEDALS EARNED</small><strong>${earned} <i>/ ${goals.length}</i></strong></span></div>
              <div class="feature__status"><span class="feature__status-dot" aria-hidden="true"></span><span>${isOpeningMap ? 'Gameplay integration in progress' : 'Location preview · gameplay to follow'}</span></div>
            </div>
          </section>
          <section class="breaks" aria-label="Surf locations">
            <div class="breaks__heading"><span>DESTINATIONS</span><span>SELECT TO PREVIEW</span></div>
            <ul class="break-list">${MAP_ORDER.map(mapButton).join('')}</ul>
            <p class="breaks__foot">MORE THAN A POSTCARD <span aria-hidden="true">↗</span><br><small>Each break will have its own wave and riding style</small></p>
          </section>
        </div>
      </div>
    </main>`;
  app!.querySelector<HTMLButtonElement>('#back-button')?.addEventListener('click', () => {
    screen = 'title';
    render();
    app!.querySelector<HTMLButtonElement>('#play-button')?.focus();
  });
  app!.querySelectorAll<HTMLButtonElement>('[data-map]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMap = button.dataset.map as MapId;
      render();
      app!.querySelector<HTMLButtonElement>(`[data-map="${selectedMap}"]`)?.focus();
    });
  });
}

function renderInfo(kicker: string, title: string, content: string): void {
  app!.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>
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
  app!.querySelector<HTMLButtonElement>('#back-button')?.addEventListener('click', returnToTitle);
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
      <fieldset class="setting-group"><legend>Sound</legend><p>Set the volume for future ocean and game audio</p><label class="volume-row" for="volume"><span>MASTER VOLUME</span><output id="volume-value" for="volume">${percent}%</output></label><input type="range" id="volume" min="0" max="100" step="1" value="${percent}"><label class="toggle-row" for="muted"><span>MUTE AUDIO</span><input type="checkbox" id="muted" ${settings.muted ? 'checked' : ''}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group setting-group--colors"><legend>Ice board tint</legend><p>Earn medals to unlock more colors — the board always stays ice</p><div class="color-choices">${colors}</div></fieldset>
    </div>
    <div class="settings-danger"><div><strong>Start fresh</strong><p>Remove local records, medals, unlocks and settings</p></div><button type="button" id="reset-button">RESET PROGRESS</button></div>${resetConfirmation}`;
  renderInfo('MAKE IT YOURS', 'SETTINGS', content);

  app!.querySelectorAll<HTMLButtonElement>('[data-quality]').forEach((button) => {
    button.addEventListener('click', () => saveSettings({ quality: button.dataset.quality as Quality }, `[data-quality="${button.dataset.quality}"]`));
  });
  app!.querySelector<HTMLInputElement>('#reduced-motion')?.addEventListener('change', (event) => {
    saveSettings({ reducedMotion: (event.currentTarget as HTMLInputElement).checked }, '#reduced-motion');
  });
  app!.querySelector<HTMLInputElement>('#muted')?.addEventListener('change', (event) => {
    saveSettings({ muted: (event.currentTarget as HTMLInputElement).checked }, '#muted');
  });
  const volume = app!.querySelector<HTMLInputElement>('#volume');
  volume?.addEventListener('input', () => {
    const output = app!.querySelector<HTMLOutputElement>('#volume-value');
    if (output) output.value = `${volume.value}%`;
  });
  volume?.addEventListener('change', () => saveSettings({ masterVolume: Number(volume.value) / 100 }, '#volume'));
  app!.querySelectorAll<HTMLButtonElement>('[data-board]').forEach((button) => {
    button.addEventListener('click', () => saveSettings({ boardColor: button.dataset.board }, `[data-board="${button.dataset.board}"]`));
  });
  app!.querySelector<HTMLButtonElement>('#reset-button')?.addEventListener('click', () => {
    resetPending = true;
    renderSettings();
    app!.querySelector<HTMLButtonElement>('#cancel-reset')?.focus();
  });
  app!.querySelector<HTMLButtonElement>('#cancel-reset')?.addEventListener('click', () => {
    resetPending = false;
    renderSettings();
    app!.querySelector<HTMLButtonElement>('#reset-button')?.focus();
  });
  app!.querySelector<HTMLButtonElement>('#confirm-reset')?.addEventListener('click', () => {
    const next = progress.reset();
    settingsNotice = next.storageAvailable ? 'Progress reset' : 'Progress reset for this session';
    resetPending = false;
    renderSettings();
    app!.querySelector<HTMLButtonElement>('#reset-button')?.focus();
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
  app!.querySelector<HTMLElement>(focusSelector)?.focus();
}

function returnToTitle(): void {
  const previous = screen;
  screen = 'title';
  resetPending = false;
  render();
  app!.querySelector<HTMLButtonElement>(previous === 'maps' ? '#play-button' : `[data-screen="${previous}"]`)?.focus();
}

function openScreen(next: Screen): void {
  screen = next;
  resetPending = false;
  settingsNotice = '';
  render();
  app!.querySelector<HTMLButtonElement>('#back-button')?.focus();
}

function render(): void {
  document.documentElement.dataset.reducedMotion = String(progress.getSnapshot().settings.reducedMotion);
  if (screen === 'title') renderTitle();
  else if (screen === 'maps') renderMaps();
  else if (screen === 'how') renderInfo('A QUICK FIELD GUIDE', 'HOW TO<br><span>PLAY</span>', howToPlayContent());
  else if (screen === 'credits') renderInfo('THE PEOPLE BEHIND THE WAVE', 'CREDITS', creditsContent());
  else renderSettings();
}

render();
