import type { MapId, RunResult } from '../shared/contracts';

export const campaign: readonly MapId[] = ['mavericks', 'jbay', 'pipeline', 'teahupoo', 'nazare'];
export const objectives: Record<MapId, string> = {
  mavericks: 'Land two clean jumps',
  jbay: 'Bank a 2,000-point combo',
  pipeline: 'Exit a barrel after riding it for 3 seconds',
  teahupoo: 'Exit a 3.5-second barrel and bank 4,000 points',
  nazare: 'Drop down the face and ride between the two yellow buoys',
  uluwatu: 'Freeplay',
};

export function clearedLevel(run: RunResult): boolean {
  if (run.mode !== 'score-run') return false;
  if (run.mapId === 'nazare') return run.reason === 'ride-out' && run.wipeouts === 0;
  if (run.reason !== 'timer') return false;
  switch (run.mapId) {
    case 'mavericks': return run.cleanLandings >= 2;
    case 'jbay': return run.bestCombo >= 2000;
    case 'pipeline': return (run.cleanExitS ?? 0) >= 3;
    case 'teahupoo': return (run.cleanExitS ?? 0) >= 3.5 && run.score >= 4000;
    default: return false;
  }
}
