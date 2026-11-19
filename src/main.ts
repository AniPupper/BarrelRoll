import { MAP_CARDS } from './app/mapCards';
import { locationArt } from './app/locationArt';
import heroWaveUrl from './assets/hero-wave.svg?url';
import { MAP_ORDER, STARTING_MAP_ID } from './maps';
import { createProgressStore } from './progress';
import type { MapId } from './shared/contracts';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('BarrelRoll app mount is missing');

const progress = createProgressStore();
let screen: 'title' | 'maps' = 'title';
let selectedMap: MapId = STARTING_MAP_ID;

function mapCard(id: MapId): string {
  const card = MAP_CARDS[id];
  const available = id === STARTING_MAP_ID;
  const snapshot = progress.getSnapshot();
  const best = snapshot.bestRuns[id]?.['score-run']?.score;
  const earned = progress.challenges.filter((goal) => goal.mapId === id &&
    snapshot.earnedMedalIds.includes(goal.id)).length;
  const total = progress.challenges.filter((goal) => goal.mapId === id).length;

  return `
    <li class="map-card map-card--${card.tone}${selectedMap === id ? ' is-selected' : ''}">
      ${available ? `<button type="button" class="map-card__button" data-map="${id}" aria-pressed="${selectedMap === id}">` : '<div class="map-card__static">'}
        <span class="map-card__preview" aria-hidden="true">${locationArt(id)}<span class="map-card__number">0${MAP_ORDER.indexOf(id) + 1} / 06</span></span>
        <span class="map-card__body">
          <span class="map-card__top"><span>${card.difficulty}</span><span>${available ? 'First up' : 'On the horizon'}</span></span>
          <strong>${card.name}</strong>
          <span class="map-card__region">${card.region}</span>
          <span class="map-card__signature">${card.signature}</span>
          <span class="map-card__stats"><span>Score Run best: ${best?.toLocaleString() ?? '—'}</span><span>Medals: ${earned}/${total}</span></span>
        </span>
      ${available ? '</button>' : '</div>'}
    </li>
  `;
}

function render(): void {
  if (screen === 'title') {
    app!.innerHTML = `
      <main class="landing">
        <img class="landing__art" src="${heroWaveUrl}" alt="" />
        <div class="landing__veil" aria-hidden="true"></div>
        <header class="site-header"><span class="site-header__mark">BR<span>↗</span></span><span>Surf beyond the possible</span><span class="site-header__edition">Arcade surf / 2026</span></header>
        <div class="content">
          <p class="eyebrow"><span class="eyebrow__dash"></span> An arcade surfing game</p>
          <h1>Barrel<br><span>Roll.</span></h1>
          <p class="tagline">Find the barrel, launch from the lip, land the impossible</p>
          <button type="button" class="primary-button" id="play-button">Explore locations <span aria-hidden="true">↗</span></button>
          <p class="location"><span class="location__dot"></span> First break: Mavericks, California</p>
        </div>
        <div class="hero-caption" aria-hidden="true"><strong>01 / 06</strong><span>Find your line<br>across the world</span></div>
      </main>
    `;
    app!.querySelector('#play-button')?.addEventListener('click', () => {
      screen = 'maps';
      render();
      app!.querySelector<HTMLButtonElement>('#back-button')?.focus();
    });
    return;
  }

  const selected = MAP_CARDS[selectedMap];
  app!.innerHTML = `
    <main class="map-select">
      <div class="map-select__inner">
        <div class="map-select__masthead"><span class="site-header__mark">BR<span>↗</span></span><span>The surf atlas</span><span>01 — 06</span></div>
        <header class="map-select__header">
          <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> Back</button>
          <p class="eyebrow"><span class="eyebrow__dash"></span> Choose your break</p>
          <h1>Where to <span>surf?</span></h1>
          <p class="map-select__intro">Six destinations, six ways to ride<br>Mavericks opens the atlas</p>
        </header>
        <ul class="map-grid">${MAP_ORDER.map(mapCard).join('')}</ul>
        <section class="selected-details" aria-live="polite" aria-label="Selected location">
          <div>
            <p class="selected-details__label">Selected location</p>
            <h2>${selected.name}</h2>
            <p>${selected.preview}</p>
          </div>
          <span class="selected-details__status">Gameplay integration in progress</span>
        </section>
      </div>
    </main>
  `;
  app!.querySelector('#back-button')?.addEventListener('click', () => {
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

render();

