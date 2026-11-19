import type { MapId } from '../shared/contracts';

const art: Record<MapId, { sky: string; sea: string; land: string; shape: string }> = {
  mavericks: { sky: '#a9c9cf', sea: '#236a81', land: '#637c7e', shape: 'M0 133 35 119 70 126 105 94 143 113 177 107 213 139v23H0z' },
  pipeline: { sky: '#b3dcd3', sea: '#168f9a', land: '#477d70', shape: 'M0 151c58-28 109-19 145-34 42-17 74-8 109 12v33H0z' },
  jbay: { sky: '#f2d5ae', sea: '#528e91', land: '#b99269', shape: 'M0 153c52-18 87-7 124-22 52-21 85-6 128 11v20H0z' },
  uluwatu: { sky: '#c9d5c9', sea: '#398c93', land: '#9c9d80', shape: 'M0 162V107l52-10 33-24 52 9 32 23 75-4 8 61z' },
  teahupoo: { sky: '#90afb5', sea: '#245b73', land: '#527076', shape: 'M0 152 38 105 70 115 120 63 163 108 200 82 252 146v16H0z' },
  nazare: { sky: '#a6b1b2', sea: '#315f74', land: '#64717c', shape: 'M0 162v-37l55-24 62 9 35-28 65 19 35 32v29z' },
};

const detail: Record<MapId, string> = {
  mavericks: '<path d="M0 151c66-8 123-8 185 0" stroke="#e2dac3" stroke-width="7" fill="none"/>',
  pipeline: '<path d="M73 128V58m0 14c-15-18-31-20-45-15m45 15c14-24 30-26 42-22m-42 24c-21-8-38-3-49 4m49-5c19-12 34-10 47-4" stroke="#315e55" stroke-width="7" stroke-linecap="round" fill="none"/>',
  jbay: '<path d="M0 151c77-8 145-6 221 2" stroke="#e5c998" stroke-width="9" fill="none"/>',
  uluwatu: '<path d="M91 79V59h11v21m-18 1V67h25v14" fill="#586d64"/>',
  teahupoo: '<path d="m120 63 14 39 22 7" stroke="#c2d1c8" stroke-width="4" opacity=".6" fill="none"/>',
  nazare: '<path d="M153 87V47h17v42m-20-41h23l-4-8h-15z" fill="#e5e0cb"/><path d="M155 62h13" stroke="#ba705f" stroke-width="6"/>',
};

// Original vector postcards. Their shapes preview scenery; they do not define wave physics.
export function locationArt(id: MapId): string {
  const { sky, sea, land, shape } = art[id];
  return `<svg viewBox="0 0 420 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs><linearGradient id="sea-${id}" x2="0" y2="1"><stop stop-color="${sea}"/><stop offset="1" stop-color="#0a3449"/></linearGradient></defs>
    <path fill="${sky}" d="M0 0h420v220H0z"/>
    <circle cx="321" cy="51" r="27" fill="#fff0c0" opacity=".8"/>
    <path fill="${land}" d="${shape}"/>${detail[id]}
    <path fill="url(#sea-${id})" d="M0 152c120-13 195 4 292-4 50-4 86-11 128-7v79H0z"/>
    <path fill="${sea}" stroke="#eaffea" stroke-width="6" d="M0 209c68-36 126-59 172-55 59 5 88 30 141 32 46 2 74-6 107-20v54H0z"/>
  </svg>`;
}
