import { BufferGeometry, Color, DataTexture, ExtrudeGeometry, Float32BufferAttribute,
  LinearFilter, LinearMipmapLinearFilter, RepeatWrapping, Shape, SRGBColorSpace, Vector3 } from 'three';

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
  [.20,.012,.025,-.10],[.29,.17,.20,-.09],[.48,.276,.30,-.07],
  [.73,.318,.314,-.042],[.98,.308,.286,.012],[1.12,.247,.222,.054],
  [1.25,.171,.18,.114],[1.38,.223,.223,.141],[1.49,.223,.218,.146],
  [1.57,.187,.184,.137],[1.635,.104,.112,.124],[1.66,.037,.041,.117],[1.665,.002,.003,.114],
]);

// Local root is at the shoulder; the tapered, swept tip points aft.
export const flipperTip = new Vector3(0, -.73, -.25);
export const penguinFlipper = () => skin([
  [flipperTip.y,.008,.012,flipperTip.z],[-.64,.024,.054,-.21],[-.44,.038,.10,-.14],
  [-.23,.049,.14,-.069],[-.085,.067,.14,-.012],[0,.077,.107,.015],[.055,.015,.022,.017],
],20);

export const penguinTail = () => skin([
  [0,.013,.010,-.27],[.045,.083,.018,-.23],[.105,.135,.036,-.15],
  [.165,.15,.052,-.06],[.22,.085,.053,0],[.23,.015,.016,.01],
],24);

// Swept, tapered feather vanes. The layered fans at the brows also read from
// behind the rider, where a painted eyebrow would disappear against the sea.
export function rockhopperCrest() {
  const positions: number[] = [], colors: number[] = [], indices: number[] = [];
  const rootGold = new Color('#b76d21'), honey = new Color('#ffc740'), straw = new Color('#fff0a0');
  const rootDark = new Color('#24303b'), tipDark = new Color('#53606b');
  const point = new Vector3(), tangent = new Vector3(), widthAxis = new Vector3(), normal = new Vector3();
  const tint = new Color();
  function feather(a: Vector3, bend: Vector3, b: Vector3, width: number, gold: boolean) {
    const start = positions.length / 3;
    widthAxis.set(b.z - a.z, 0, a.x - b.x).normalize();
    for (let row = 0; row <= 7; row++) {
      const t = row / 7, s = 1 - t;
      point.copy(a).multiplyScalar(s * s).addScaledVector(bend, 2 * s * t).addScaledVector(b, t * t);
      tangent.copy(bend).sub(a).multiplyScalar(s).addScaledVector(b, t).addScaledVector(bend, -t).normalize();
      normal.crossVectors(tangent, widthAxis).normalize();
      const radius = width * (.44 + .90 * Math.sin(Math.PI * t ** .82)) * (1 - .98 * t);
      if (gold) tint.copy(rootGold).lerp(honey, Math.min(1, t * 3)).lerp(straw, t ** 1.4);
      else tint.copy(rootDark).lerp(tipDark, t);
      for (let side = 0; side < 4; side++) {
        const w = side === 0 ? radius : side === 2 ? -radius : 0;
        const h = side === 1 ? radius * .41 : side === 3 ? -radius * .28 : 0;
        positions.push(point.x + widthAxis.x * w + normal.x * h, point.y + normal.y * h,
          point.z + widthAxis.z * w + normal.z * h);
        const light = side === 3 ? .70 : 1;
        colors.push(tint.r * light, tint.g * light, tint.b * light);
        if (row < 7) {
          const i = start + row * 4 + side, next = start + row * 4 + (side + 1) % 4;
          indices.push(i, next, i + 4, next, next + 4, i + 4);
        }
      }
    }
  }
  for (const side of [-1, 1]) {
    for (let layer = 0; layer < 2; layer++) {
      for (let i = 0; i < 10; i++) {
        const f = (i + layer * .4) / 10;
        const variation = Math.sin(i * 2.3 + side + layer);
        const root = new Vector3(side * (.073 + .135 * Math.sin(f * Math.PI * .86)),
          1.54 + .044 * Math.sin(f * Math.PI), .322 - .32 * f);
        const bend = new Vector3(side * (.24 + .11 * f), 1.80 - .065 * f + layer * .052, .244 - .40 * f);
        const tip = new Vector3(side * (.32 + .16 * Math.sin(f * Math.PI) + .03 * variation),
          1.76 - .16 * f + layer * .085 + .052 * variation, .086 - .40 * f - .040 * variation);
        feather(root, bend, tip, .031 - .006 * layer, true);
      }
    }
  }
  for (let i = 0; i < 11; i++) {
    const x = (i - 5) * .025, stagger = Math.sin(i * 2.7);
    feather(new Vector3(x, 1.612, .17 + stagger * .02), new Vector3(x * 1.12, 1.74, .11),
      new Vector3(x * 1.4, 1.735 + .054 * stagger, -.09 - .08 * stagger), .029, false);
  }
  const g = new BufferGeometry();
  g.setIndex(indices);
  g.setAttribute('position', new Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new Float32BufferAttribute(colors, 3));
  g.translate(0, -1.55, -.12);
  g.computeVertexNormals();
  return g;
}

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
    const browLine=.912+.034*side;
    const brow=clamp((.027-Math.abs(v-browLine))*90)*clamp((side-.26)*4)*clamp((front+.52)*3);
    const wet=4*scallop+5*feathers+grain;
    const i=(y*width+x)*4;
    for(const [c,dark,light,gold] of [[0,25,237,227],[1,33,231,154],[2,40,209,46]]) {
      const base=dark+(light-dark)*breast;
      data[i+c]=base+(gold-base)*brow+wet*(1-breast*.5);
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
  const g=skin([[0,.090,.054,0],[.075,.091,.054,0],[.17,.065,.041,.003],
    [.255,.028,.025,.012],[.285,.004,.007,.032]],24);
  g.rotateX(Math.PI/2);
  const positions=g.getAttribute('position'), colors=[];
  for(let i=0;i<positions.count;i++) {
    const z=positions.getZ(i), y=positions.getY(i);
    const dark=z>.273 || Math.abs(y+.013)<.004;
    const color=new Color(dark?'#713f2b':y<0?'#ce6933':'#ef963d');
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

export function shellPendant() {
  const vertices: number[] = [], colors: number[] = [], indices: number[] = [];
  const coral = new Color('#c75637'), sand = new Color('#ffca89'), tint = new Color();
  for (let row = 0; row <= 5; row++) {
    const t = row / 5;
    for (let col = 0; col <= 32; col++) {
      const angle = (col / 32 - .5) * 2.38;
      const ridge = .5 + .5 * Math.cos(angle * 23);
      const r = .006 + t * (.105 + .006 * ridge);
      vertices.push(Math.sin(angle) * r, -Math.cos(angle) * r,
        Math.sin(t * Math.PI) * .014 + ridge * .007 * t);
      tint.copy(coral).lerp(sand, .17 + .50 * ridge + .22 * t);
      colors.push(tint.r, tint.g, tint.b);
      if (row < 5 && col < 32) {
        const i = row * 33 + col;
        indices.push(i, i + 33, i + 1, i + 1, i + 33, i + 34);
      }
    }
  }
  const g = new BufferGeometry();
  g.setIndex(indices);
  g.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  g.setAttribute('color', new Float32BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return g;
}
