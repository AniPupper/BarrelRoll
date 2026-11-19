import type { TrickInput } from '../shared/contracts';

export interface ControlFrame {
  steer: -1 | 0 | 1;
  wallRide: -1 | 0 | 1;
  jumpChargeS: number | null;
  charge01?: number;
  trick: TrickInput;
}

const axis = (negative: boolean, positive: boolean): -1 | 0 | 1 =>
  negative === positive ? 0 : negative ? -1 : 1;

function normalize(key: string): string {
  return key === ' ' || key === 'Spacebar' ? 'space' : key.toLowerCase();
}

export class GameplayInput {
  private held = new Set<string>();
  private blockedFlip = new Set<string>();
  private chargingS: number | null = null;
  private releasedChargeS: number | null = null;

  press(key: string, onWave: boolean): boolean {
    const name = normalize(key);
    if (!['w', 'a', 's', 'd', 'space', 'r'].includes(name)) return false;
    if (this.held.has(name)) return true;
    this.held.add(name);
    if (name === 'space' && onWave) this.chargingS = 0;
    return true;
  }

  release(key: string): boolean {
    const name = normalize(key);
    if (!['w', 'a', 's', 'd', 'space', 'r'].includes(name)) return false;
    this.held.delete(name);
    this.blockedFlip.delete(name);
    if (name === 'space' && this.chargingS !== null) {
      this.releasedChargeS = this.chargingS;
      this.chargingS = null;
    }
    return true;
  }

  advance(dtS: number, onWave: boolean): void {
    if (this.chargingS !== null) {
      if (onWave) this.chargingS = Math.min(0.6, this.chargingS + dtS);
      else this.chargingS = null;
    }
  }

  beginAir(): void {
    this.blockedFlip.clear();
    if (this.held.has('w')) this.blockedFlip.add('w');
    if (this.held.has('s')) this.blockedFlip.add('s');
    this.chargingS = null;
    this.releasedChargeS = null;
  }

  frame(): ControlFrame {
    const jumpChargeS = this.releasedChargeS;
    this.releasedChargeS = null;
    return {
      steer: axis(this.held.has('a'), this.held.has('d')),
      wallRide: axis(this.held.has('a'), this.held.has('d')),
      jumpChargeS,
      charge01: (this.chargingS ?? 0) / .6,
      trick: {
        spinAxis: axis(this.held.has('a'), this.held.has('d')),
        flipAxis: axis(this.held.has('s') && !this.blockedFlip.has('s'),
          this.held.has('w') && !this.blockedFlip.has('w')),
      },
    };
  }

  clear(): void {
    this.held.clear();
    this.blockedFlip.clear();
    this.chargingS = null;
    this.releasedChargeS = null;
  }
}
