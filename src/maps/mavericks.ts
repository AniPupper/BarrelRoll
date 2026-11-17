import type { MapDefinition } from '../shared/contracts';

// An approachable arcade day at the offshore Mavericks break. The scenery
// places a beach and bluffs in the distance, outside the rideable corridor.
export const mavericks: MapDefinition = {
  id: 'mavericks',
  name: 'Mavericks',
  region: 'Half Moon Bay, California',
  difficulty: 'easy',
  wave: {
    breakDirection: 'right',
    heightM: 8,
    faceWidthM: 20,
    rideLengthM: 560,
    peelSpeedMps: 12,
    barrelSections: [
      { start01: 0.18, end01: 0.47, radiusM: 2.5, closeAfterEntryS: null },
      { start01: 0.62, end01: 0.80, radiusM: 2.1, closeAfterEntryS: 14 },
    ],
    launchSections: [
      { start01: 0.08, end01: 0.16, liftMultiplier: 1.1 },
      { start01: 0.49, end01: 0.58, liftMultiplier: 1.5 },
      { start01: 0.83, end01: 0.93, liftMultiplier: 1.7 },
    ],
  },
  spawn: { along01: 0.05, face01: 0.35 },
  visual: {
    waterColor: '#1b6177',
    foamColor: '#e5f2f0',
    skyColor: '#b9ced9',
  },
};
