import type { MapDefinition } from '../shared/contracts';

const positive = (value: number) => Number.isFinite(value) && value > 0;
const unit = (value: number) => Number.isFinite(value) && value >= 0 && value <= 1;

export function validateMap(map: MapDefinition): void {
  if (!map || !map.wave || !map.spawn || !map.visual ||
      !['mavericks', 'pipeline', 'jbay', 'uluwatu', 'teahupoo', 'nazare'].includes(map.id) ||
      typeof map.name !== 'string' || !map.name.trim() ||
      typeof map.region !== 'string' || !map.region.trim() ||
      !['easy', 'medium', 'hard', 'expert'].includes(map.difficulty) ||
      !['left', 'right'].includes(map.wave.breakDirection) ||
      !positive(map.wave.heightM) || !positive(map.wave.faceWidthM) ||
      !positive(map.wave.rideLengthM) || !positive(map.wave.peelSpeedMps) ||
      !unit(map.spawn.along01) || !unit(map.spawn.face01) || map.spawn.face01 > 0.95 ||
      !Array.isArray(map.wave.barrelSections) || !Array.isArray(map.wave.launchSections) ||
      ![map.visual.waterColor, map.visual.foamColor, map.visual.skyColor]
        .every((color) => typeof color === 'string' && color.trim().length > 0)) {
    throw new Error('Invalid map definition: dimensions, spawn, or wave data');
  }
  for (const section of map.wave.barrelSections) {
    if (!unit(section.start01) || !unit(section.end01) || section.start01 >= section.end01 ||
        !positive(section.radiusM) ||
        (section.closeAfterEntryS !== null && !positive(section.closeAfterEntryS))) {
      throw new Error('Invalid map definition: barrel section');
    }
  }
  for (const section of map.wave.launchSections) {
    if (!unit(section.start01) || !unit(section.end01) || section.start01 >= section.end01 ||
        !positive(section.liftMultiplier)) {
      throw new Error('Invalid map definition: launch section');
    }
  }
  if (map.wave.barrelSections.some((section) => section.closeAfterEntryS !== null &&
      map.spawn.along01 >= section.start01 && map.spawn.along01 <= section.end01)) {
    throw new Error('Invalid map definition: spawn inside a closing barrel');
  }
}
