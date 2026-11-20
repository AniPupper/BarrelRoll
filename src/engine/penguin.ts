import { BufferGeometry, Color, DataTexture, ExtrudeGeometry, Float32BufferAttribute,
  LinearFilter, LinearMipmapLinearFilter, RepeatWrapping, Shape, SRGBColorSpace } from 'three';

// Each ring sets height, half-width, half-depth and the fore/aft center.
// The neck and head share the torso surface, so the markings follow the silhouette.
type Ring = [number, number, number, number];
function skin(rings: Ring[], sides = 40) {
  const positions: number[] = [], uv: number[] = [], indices: number[] = [];
  const rows = (rings.length - 1) * 4;
  for (let row = 0; row <= rows; row++) {
    const k = Math.min(rings.length - 2, Math.floor(row / 4));
    const t = row / 4 - k;
    const a = rings[Math.max(0,k-1)], b = rings[k], c = rings[k+1], d = rings[Math.min(k+2,rings.length-1)];
    const sample = (i: number) => b[i] + .5 * t * ((c[i]-a[i]) +
      t * ((2*a[i]-5*b[i]+4*c[i]-d[i]) + t*(3*b[i]-3*c[i]+d[i]-a[i])));
    const y=sample(0), width=Math.max(.001,sample(1)), depth=Math.max(.001,sample(2)), center=sample(3);
    for (let col = 0; col <= sides; col++) {
      const angle = (col / sides - .5) * 2 * Math.PI;
      positions.push(width * Math.sin(angle), y, center + depth * Math.cos(angle));
      uv.push(col / sides, (y-rings[0][0]) / (rings.at(-1)![0]-rings[0][0]));
      if (row < rows && col < sides) {
        const i = row * (sides+1) + col;
        indices.push(i,i+1,i+sides+1,i+1,i+sides+2,i+sides+1);
      }
    }
  }
  const g=new BufferGeometry();
  g.setIndex(indices); g.setAttribute('position',new Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new Float32BufferAttribute(uv,2)); g.computeVertexNormals();
  // The texture wraps at the spine. The normal should wrap there too.
  const normal=g.getAttribute('normal');
  for (let row=0;row<=rows;row++) {
    const a=row*(sides+1), b=a+sides;
    const x=normal.getX(a)+normal.getX(b), y=normal.getY(a)+normal.getY(b), z=normal.getZ(a)+normal.getZ(b);
    const length=Math.hypot(x,y,z)||1;
    normal.setXYZ(a,x/length,y/length,z/length); normal.setXYZ(b,x/length,y/length,z/length);
  }
  return g;
}

export const penguinBody = () => skin([
  [.20,.012,.025,-.10],[.28,.19,.22,-.09],[.47,.32,.34,-.07],
  [.72,.36,.35,-.055],[.94,.33,.32,-.015],[1.10,.255,.25,.045],
  [1.23,.188,.196,.10],[1.36,.207,.222,.135],[1.46,.194,.204,.145],
  [1.55,.14,.15,.143],[1.59,.080,.086,.138],[1.603,.031,.034,.135],[1.605,.002,.003,.134],
]);

// Local root is at the shoulder; the tapered, swept tip points aft.
export const penguinFlipper = () => skin([
  [-.63,.008,.012,-.23],[-.56,.022,.053,-.19],[-.40,.038,.10,-.13],
  [-.23,.049,.14,-.069],[-.085,.067,.14,-.012],[0,.077,.107,.015],[.055,.015,.022,.017],
],20);

export const penguinTail = () => skin([
  [0,.013,.010,-.27],[.045,.083,.018,-.23],[.105,.135,.036,-.15],
  [.165,.15,.052,-.06],[.22,.085,.053,0],[.23,.015,.016,.01],
],24);

export function plumage() {
  const width=384, height=256, data=new Uint8Array(width*height*4);
  const clamp=(x:number)=>Math.min(1,Math.max(0,x));
  // The staggered, close-packed strokes are baked once. They stay attached
  // to the bird during turns and mipmap into a quiet sheen at chase distance.
  for(let y=0;y<height;y++) for(let x=0;x<width;x++) {
    const u=x/width, v=y/(height-1), angle=(u-.5)*Math.PI*2;
    const front=Math.cos(angle), side=Math.abs(Math.sin(angle));
    const row=Math.floor(v*72), strand=u*96+(row%2)*.5;
    const scallop=Math.cos(strand*Math.PI*2)*.5+.5;
    const grain=Math.sin((x*19+y*43)*1.131)*1.4;
    const feathers=(Math.cos((v*72+scallop*.29)*Math.PI*2)*.5+.5)**5;
    const breast=clamp((front-(.09+.87*clamp((v-.62)/.16)+.48*clamp((.23-v)/.23)))*12) *
      clamp((.82-v)*20);
    const headBand=.845+.136*(1-side)+.012*front;
    const crown=clamp((.038-Math.abs(v-headBand))*100)*clamp((.42-front)*7)*clamp((v-.80)*20);
    const white=Math.max(breast,crown), wet=4*scallop+5*feathers+grain;
    const i=(y*width+x)*4;
    for(const [c,dark,light] of [[0,27,218],[1,35,222],[2,39,215]]) {
      data[i+c]=dark+(light-dark)*white+wet*(1-white*.5);
    }
    data[i+3]=255;
  }
  const texture=new DataTexture(data,width,height);
  texture.colorSpace=SRGBColorSpace; texture.wrapS=RepeatWrapping;
  texture.generateMipmaps=true; texture.magFilter=LinearFilter; texture.minFilter=LinearMipmapLinearFilter;
  texture.needsUpdate=true;
  return texture;
}

export function penguinBill() {
  const g=skin([[0,.080,.046,0],[.075,.080,.044,0],[.17,.057,.035,-.003],
    [.24,.026,.022,-.008],[.266,.004,.006,-.018]],24);
  g.rotateX(Math.PI/2);
  const positions=g.getAttribute('position'), colors=[];
  for(let i=0;i<positions.count;i++) {
    const z=positions.getZ(i), y=positions.getY(i);
    const dark=z>.206 || y>.026 || Math.abs(y+.011)<.004;
    const color=new Color(dark?'#383332':y<0?'#9d502e':'#d28748');
    colors.push(color.r,color.g,color.b);
  }
  g.setAttribute('color',new Float32BufferAttribute(colors,3));
  return g;
}

export function webbedFoot() {
  const s=new Shape();
  s.moveTo(-.05,-.07); s.quadraticCurveTo(-.08,.015,-.115,.135);
  s.quadraticCurveTo(-.064,.111,-.008,.205); s.quadraticCurveTo(.045,.118,.108,.153);
  s.quadraticCurveTo(.067,.006,.043,-.07); s.closePath();
  const g=new ExtrudeGeometry(s,{depth:.021,bevelEnabled:true,bevelSegments:2,bevelSize:.009,bevelThickness:.007});
  g.rotateX(Math.PI/2);
  return g;
}
