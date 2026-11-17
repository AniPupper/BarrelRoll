import type { MapId } from '../shared/contracts';
import { mavericks } from './mavericks';

export const STARTING_MAP_ID: MapId = 'mavericks';
export const STARTING_MAP = mavericks;
export const MAP_ORDER: readonly MapId[] = [
  'mavericks', 'pipeline', 'jbay', 'uluwatu', 'teahupoo', 'nazare',
];

export { mavericks };
