// The run records earned points immediately. A critically damped counter
// accelerates into each award and arrives at the same total without overshoot.
export class ScoreCounter {
  value = 0;
  rate = 0;

  advance(target: number, dtS: number): void {
    if (dtS <= 0) return;
    const gap = target - this.value;
    const response = 4.6;
    const decay = Math.exp(-response * dtS);
    const slope = this.rate - response * gap;
    const remaining = (gap - slope * dtS) * decay;
    if (remaining <= .025) {
      this.value = target;
      this.rate = 0;
    } else {
      this.value = target - remaining;
      this.rate = (this.rate - response * slope * dtS) * decay;
    }
  }

  reset(): void {
    this.value = this.rate = 0;
  }
}
