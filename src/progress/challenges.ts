import type { ChallengeDefinition } from '../shared/contracts';

// Stable IDs are save data. Rename labels freely, but retain IDs after release.
const definitions: ChallengeDefinition[] = [
  { id: 'mavericks-clean-3', mapId: 'mavericks', label: 'Land cleanly 3 times in one run', metric: 'cleanLandings', target: 3 },
  { id: 'mavericks-barrel-4', mapId: 'mavericks', label: 'Ride a continuous 4-second barrel', metric: 'longestBarrelS', target: 4 },
  { id: 'mavericks-score-2000', mapId: 'mavericks', label: 'Score 2,000 in one session', metric: 'score', target: 2000 },
  { id: 'pipeline-barrel-3', mapId: 'pipeline', label: 'Ride a continuous 3-second barrel', metric: 'longestBarrelS', target: 3 },
  { id: 'pipeline-barrel-6', mapId: 'pipeline', label: 'Ride a continuous 6-second barrel', metric: 'longestBarrelS', target: 6 },
  { id: 'pipeline-combo-2500', mapId: 'pipeline', label: 'Bank a 2,500-point combo', metric: 'bestCombo', target: 2500 },
  { id: 'jbay-clean-6', mapId: 'jbay', label: 'Land cleanly 6 times in one run', metric: 'cleanLandings', target: 6 },
  { id: 'jbay-combo-3000', mapId: 'jbay', label: 'Bank a 3,000-point combo', metric: 'bestCombo', target: 3000 },
  { id: 'jbay-score-6000', mapId: 'jbay', label: 'Score 6,000 in one session', metric: 'score', target: 6000 },
  { id: 'uluwatu-barrel-3', mapId: 'uluwatu', label: 'Ride a continuous 3-second barrel', metric: 'longestBarrelS', target: 3 },
  { id: 'uluwatu-spin-720', mapId: 'uluwatu', label: 'Land a 720', metric: 'largestLandedSpinDeg', target: 720 },
  { id: 'uluwatu-score-5000', mapId: 'uluwatu', label: 'Score 5,000 in one session', metric: 'score', target: 5000 },
  { id: 'teahupoo-barrel-2', mapId: 'teahupoo', label: 'Ride a continuous 2-second barrel', metric: 'longestBarrelS', target: 2 },
  { id: 'teahupoo-barrel-3-5', mapId: 'teahupoo', label: 'Ride a continuous 3.5-second barrel', metric: 'longestBarrelS', target: 3.5 },
  { id: 'teahupoo-score-4000', mapId: 'teahupoo', label: 'Score 4,000 in one session', metric: 'score', target: 4000 },
  { id: 'nazare-spin-720', mapId: 'nazare', label: 'Land a 720', metric: 'largestLandedSpinDeg', target: 720 },
  { id: 'nazare-spin-1080', mapId: 'nazare', label: 'Land a 1080', metric: 'largestLandedSpinDeg', target: 1080 },
  { id: 'nazare-combo-5000', mapId: 'nazare', label: 'Bank a 5,000-point combo', metric: 'bestCombo', target: 5000 },
];

export const CHALLENGES: readonly ChallengeDefinition[] = Object.freeze(
  definitions.map((challenge) => Object.freeze(challenge)),
);

export const BOARD_COLOR_UNLOCKS = Object.freeze([
  { color: '#ff6f59', medals: 0 },
  { color: '#48c9b0', medals: 3 },
  { color: '#f7c548', medals: 6 },
  { color: '#a17cf2', medals: 12 },
]);
