import { BufferGeometry, DoubleSide, Float32BufferAttribute, Mesh, MeshBasicMaterial, type Scene } from 'three';
import type { SurfSimulation } from './simulation';

const capacity = 38;
type Sample = {x:number; along:number; time:number; edge:number};

export class CarveWake {
  private readonly points: Sample[] = [];
  private readonly geometry = new BufferGeometry();
  private readonly vertices = new Float32BufferAttribute(new Float32Array(capacity * 4 * 3), 3);
  private readonly material = new MeshBasicMaterial({color:'#dafaf3',transparent:true,opacity:.48,depthWrite:false,side:DoubleSide});
  private readonly mesh = new Mesh(this.geometry, this.material);
  constructor(scene: Scene) {
    const index: number[] = [];
    for (let i=0; i<capacity-1; i++) {
      for (const rail of [0,2]) {
        const a = i*4+rail;
        index.push(a,a+1,a+4,a+4,a+1,a+5);
      }
    }
    this.geometry.setAttribute('position',this.vertices);
    this.geometry.setIndex(index);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }
  update(sim: SurfSimulation) {
    const last = this.points.at(-1);
    if (last && (sim.alongM < last.along || sim.elapsedS < last.time)) this.points.length = 0;
    while (this.points.length && sim.elapsedS - this.points[0].time > 1.28) this.points.shift();
    if (sim.state === 'airborne' || sim.wallRideActive) {
      this.geometry.setDrawRange(0,0);
      this.points.length = 0;
      return;
    }
    if (!this.points.length || sim.elapsedS - this.points[this.points.length-1].time >= .032) {
      this.points.push({x:sim.position.x,along:sim.alongM,time:sim.elapsedS,edge:Math.abs(sim.railAngle)});
      if (this.points.length > capacity) this.points.shift();
    }
    this.points.forEach((point,i) => {
      const age = sim.elapsedS - point.time;
      const width = .045 * Math.max(0,1-age/1.28) * (1+point.edge*4);
      for (let v=0; v<4; v++) {
        const side = v<2 ? -1 : 1;
        const x = point.x + side * (.17 + age*.55) + (v%2 ? width : -width);
        const p = sim.wave.crossSectionAt(point.along,.78*x/sim.wave.joinX,sim.simulationTimeS);
        this.vertices.setXYZ(i*4+v,p.x,p.y+.042,p.z);
      }
    });
    this.vertices.needsUpdate = true;
    this.geometry.setDrawRange(0, Math.max(0,this.points.length-1)*12);
  }
  dispose() { this.mesh.removeFromParent(); this.geometry.dispose(); this.material.dispose(); }
}
