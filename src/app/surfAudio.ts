import type { GameSettings, HudSnapshot } from '../shared/contracts';

// One continuous foam bed. Its spectrum narrows as the lip closes overhead.
export class SurfAudio {
  private context?: AudioContext;
  private noise?: AudioBuffer;
  private master?: GainNode;
  private filter?: BiquadFilterNode;
  private level?: GainNode;
  private last?: HudSnapshot;

  start(settings:GameSettings) {
    if (!this.context) {
      if (typeof AudioContext === 'undefined') return;
      const ctx = this.context = new AudioContext();
      this.noise = ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate);
      const samples = this.noise.getChannelData(0);
      let previous=0;
      for(let i=0;i<samples.length;i++) {
        previous=(previous + .16*(Math.random()*2-1))/1.16;
        samples[i]=previous*2;
      }
      const source=ctx.createBufferSource();
      source.buffer=this.noise; source.loop=true;
      this.filter=ctx.createBiquadFilter(); this.filter.type='lowpass';
      this.level=ctx.createGain(); this.level.gain.value=.2;
      this.master=ctx.createGain();
      source.connect(this.filter).connect(this.level).connect(this.master).connect(ctx.destination);
      source.start();
    }
    this.last=undefined;
    this.settings(settings);
    void this.context.resume().catch(()=>{});
  }
  settings(settings:GameSettings) {
    if(this.master && this.context) this.master.gain.setTargetAtTime(settings.muted?0:settings.masterVolume*.67,this.context.currentTime,.04);
  }
  update(hud:HudSnapshot) {
    const ctx=this.context;
    if(!ctx || !this.filter || !this.level) return;
    const barrel=hud.state==='barrel', air=hud.state==='airborne';
    this.filter.frequency.setTargetAtTime(barrel?520:900+hud.speedMps*110,ctx.currentTime,.12);
    this.level.gain.setTargetAtTime(air?.065:barrel?.82:.14+hud.speedMps*.011,ctx.currentTime,.13);
    const landed=this.last?.state==='airborne' && !air;
    const exit=this.last?.state==='barrel' && !barrel;
    if(landed || exit || (hud.state==='wipeout' && this.last?.state!=='wipeout')) {
      const crash=hud.state==='wipeout', skid=hud.trickLabel.includes('Sketchy');
      this.splash(crash?.8:skid?.44:exit?.31:.15,crash?530:skid?1450:3600);
    }
    this.last=hud;
  }
  private splash(duration:number,frequency:number) {
    if(!this.context || !this.master || !this.noise) return;
    const ctx=this.context, now=ctx.currentTime;
    const source=ctx.createBufferSource(), filter=ctx.createBiquadFilter(), gain=ctx.createGain();
    source.buffer=this.noise;
    filter.type='lowpass'; filter.frequency.setValueAtTime(frequency,now);
    filter.frequency.exponentialRampToValueAtTime(230,now+duration);
    gain.gain.setValueAtTime(.001,now); gain.gain.exponentialRampToValueAtTime(1.3,now+.015);
    gain.gain.exponentialRampToValueAtTime(.001,now+duration);
    source.connect(filter).connect(gain).connect(this.master);
    source.onended=()=>{ source.disconnect();filter.disconnect();gain.disconnect(); };
    source.start(); source.stop(now+duration);
  }
  pause() { if(this.context) void this.context.suspend().catch(()=>{}); }
}
