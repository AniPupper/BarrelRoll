import type { MapDefinition, Quat, TrickController, TrickFrame, LandingReport } from '../../src/shared/contracts';

export const pipeline: MapDefinition = {
  id: 'pipeline', name: 'Pipeline', region: 'Hawaii', difficulty: 'hard',
  wave: {
    breakDirection: 'left', heightM: 7, faceWidthM: 12, rideLengthM: 360,
    peelSpeedMps: 14,
    barrelSections: [{ start01: 0.2, end01: 0.7, radiusM: 1.8,
      closeAfterEntryS: 14 }],
    launchSections: [{ start01: 0.75, end01: 0.9, liftMultiplier: 1.2 }],
  },
  spawn: { along01: 0.05, face01: 0.35 },
  visual: { waterColor: '#136d83', foamColor: '#edf9f6', skyColor: '#8ecde2' },
};

export class FixtureTrickController implements TrickController {
  airId = '';
  orientation: Quat = { x: 0, y: 0, z: 0, w: 1 };
  landCount = 0;
  stepCount = 0;
  beginAir({ airId, orientation }: { airId: string; orientation: Quat }) {
    this.airId = airId;
    this.orientation = orientation;
  }
  step(): TrickFrame {
    this.stepCount++;
    return { orientation: this.orientation, label: '360' };
  }
  land(): LandingReport {
    this.landCount++;
    return { airId: this.airId, quality: 'clean', family: 'spin', label: '360',
      completedSpinDeg: 360, completedFlips: 0, speedMultiplier: 1 };
  }
  reset() { this.airId = ''; }
}
