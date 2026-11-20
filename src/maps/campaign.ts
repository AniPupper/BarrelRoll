import type { MapId, Mode, RunResult } from '../shared/contracts';

export function finishedTutorial(run: RunResult): boolean {
  // Older releases finished Mavericks on a timer. Honor those completed rides.
  return run.mapId === 'mavericks' && run.mode === 'score-run' &&
    (run.reason === 'ride-out' || run.reason === 'timer');
}

export function rideMode(id: MapId, levelsCleared: number): Mode | null {
  if (levelsCleared > 0) return 'free-surf';
  return id === 'mavericks' ? 'score-run' : null;
}
