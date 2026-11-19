import type { MapDefinition } from '../shared/contracts';

// Original arcade interpretation of Pipeline's fast, hollow left break.
export const pipeline: MapDefinition = {
  id: 'pipeline',
  name: 'Pipeline',
  region: 'Oʻahu, Hawaiʻi',
  difficulty: 'hard',
  wave: {
    breakDirection: 'left',
    heightM: 7,
    faceWidthM: 12,
    rideLengthM: 360,
    peelSpeedMps: 14,
    barrelSections: [
      { start01: 0.20, end01: 0.70, radiusM: 1.8, closeAfterEntryS: 14 },
    ],
    launchSections: [
      { start01: 0.75, end01: 0.90, liftMultiplier: 1.2 },
    ],
  },
  spawn: { along01: 0.05, face01: 0.35 },
  visual: {
    waterColor: '#157d89',
    foamColor: '#e6faf3',
    skyColor: '#a7d9dc',
  },
};
