import type { LandingReport, RiderState, RunMetrics, TrickFamily } from '../shared/contracts';

type ComboFamily = TrickFamily | 'barrel' | 'cutback';
const REPETITION = [1, 0.7, 0.4];

export class RuntimeScore {
  private earned = 0;
  get score(): number { return Math.floor(this.earned); }
  bestCombo = 0;
  pendingCombo = 0;
  multiplier = 1;
  private pendingBase = 0;
  private actionCount = 0;
  private lastActionS = -Infinity;
  private families = new Map<ComboFamily, number>();
  private creditedAirs = new Set<string>();

  addRideTime(dtS: number, speedMps: number, state: RiderState, onWall: boolean, grabbing: boolean): void {
    if (state === 'wipeout') return;
    let pace = speedMps;
    if (state === 'barrel') pace += onWall ? 65 : 30;
    if (state === 'airborne') pace += grabbing ? 48 : 12;
    if (this.pendingCombo) pace += 24 * this.multiplier;
    this.earned += pace * dtS;
  }

  private action(family: ComboFamily, base: number, nowS: number): number {
    if (base <= 0) return 0;
    if (this.actionCount > 0 && nowS - this.lastActionS > 3) this.bank();
    const previous = this.families.get(family) ?? 0;
    const adjusted = base * REPETITION[Math.min(previous, 2)];
    this.families.set(family, previous + 1);
    this.actionCount++;
    this.pendingBase += adjusted;
    this.multiplier = Math.min(3, 1 + (this.actionCount - 1) * 0.25);
    this.pendingCombo = Math.round(this.pendingBase * this.multiplier);
    this.lastActionS = nowS;
    return this.pendingCombo;
  }

  addAerial(report: LandingReport, qualifyingLaunch: boolean, nowS: number): boolean {
    if (this.creditedAirs.has(report.airId)) return false;
    this.creditedAirs.add(report.airId);
    if (report.quality === 'wipeout') return true;
    const spin = Math.max(0, report.completedSpinDeg);
    const flips = Math.max(0, report.completedFlips);
    let base = (qualifyingLaunch ? 100 : 0) + (spin / 180) * 200 + flips * 600;
    if (spin > 0 && flips > 0) base *= 1.25;
    base += 200 * (report.completedGrabs ?? 0);
    base *= report.quality === 'sketchy' ? 0.5 : 1;
    this.action(report.family, base, nowS);
    return true;
  }

  addBarrel(durationS: number, nowS: number): void {
    if (durationS >= 0.3) this.action('barrel', 150 * durationS + 300, nowS);
  }

  addCutback(faceDistance: number, nowS: number): void {
    this.action('cutback', Math.round(180 + 240 * Math.min(1, faceDistance)), nowS);
  }

  sustainBarrel(nowS: number): void {
    if (this.pendingCombo > 0) this.lastActionS = nowS;
  }

  tick(nowS: number, safe: boolean): number {
    return safe && nowS - this.lastActionS >= 3 ? this.bank() : 0;
  }

  bank(): number {
    const points = this.pendingCombo;
    if (points > 0) {
      this.earned += points;
      this.bestCombo = Math.max(this.bestCombo, points);
    }
    this.clearPending();
    return points;
  }

  losePending(): void {
    this.clearPending();
  }

  private clearPending(): void {
    this.pendingBase = 0;
    this.pendingCombo = 0;
    this.actionCount = 0;
    this.multiplier = 1;
    this.lastActionS = -Infinity;
    this.families.clear();
  }

  reset(): void {
    this.earned = 0;
    this.bestCombo = 0;
    this.creditedAirs.clear();
    this.clearPending();
  }
}

export const emptyMetrics = (): RunMetrics => ({
  longestBarrelS: 0,
  largestLandedSpinDeg: 0,
  bestCombo: 0,
  cleanLandings: 0,
  wipeouts: 0,
});
