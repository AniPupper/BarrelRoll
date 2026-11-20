import {
  BoxGeometry, BufferGeometry, Color, CylinderGeometry, DoubleSide, Float32BufferAttribute,
  Fog, Group, Mesh, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry,
  SphereGeometry, Vector2, type Material,
} from 'three';
import { createWaterNormalMap } from '../engine/waterTexture';
import type { EnvironmentFactory } from '../shared/contracts';
import { createMavericksEnvironment } from './mavericks';
import { createPipelineEnvironment } from './pipeline';

export const createEnvironment: EnvironmentFactory = (scene,map,settings) => {
  if (map.id === 'mavericks') return createMavericksEnvironment(scene,map,settings);
  if (map.id === 'pipeline') return createPipelineEnvironment(scene,map,settings);
  const root = new Group();
  const direction = map.wave.breakDirection === 'right' ? 1 : -1;
  const length = map.wave.rideLengthM;
  const priorFog = scene.fog;
  const normal = createWaterNormalMap();
  normal.repeat.set(76,76);
  const sea = new Mesh(new PlaneGeometry(2000,2400),new MeshPhongMaterial({
    color:map.visual.waterColor,normalMap:normal,normalScale:new Vector2(.35,.35),shininess:92,
  }));
  sea.rotation.x = -Math.PI/2;
  sea.position.y = -.15;
  root.add(sea);
  const tahiti = map.id === 'teahupoo', bali = map.id === 'uluwatu', portugal = map.id === 'nazare';
  const sand = new Color(bali ? '#c1bda0' : '#d3b181');
  const stone = new Color(portugal ? '#625e58' : bali ? '#9d987f' : '#766b56');
  const green = new Color(tahiti ? '#27544b' : bali ? '#486548' : '#818064');
  const verts:number[] = [], colors:number[] = [], indices:number[] = [];
  const rows=100, cols=12;
  for (let i=0;i<=rows;i++) {
    const along=-150+(length+450)*i/rows;
    const shore=-(72+14*Math.sin(along*.017)+8*Math.sin(along*.038));
    for (let j=0;j<=cols;j++) {
      const t=j/cols;
      const ridge=.52+.22*Math.sin(along*.027)+.17*Math.cos(along*.054)+.09*Math.sin(along*.091);
      const bluff = Math.min(1,Math.max(0,(t-.12)*9));
      const y = tahiti ? t*t*(55+ridge*145) : bali ? bluff*(20+12*ridge)+t*12 :
        portugal ? bluff*(10+12*ridge)+t*17 : 2*t + t*t*(13+ridge*22);
      verts.push(shore-t*180,y-.4,along*direction);
      const c=t<.1 ? sand : stone.clone().lerp(green,Math.min(1,bluff*(.2+t)));
      colors.push(c.r,c.g,c.b);
      if (i<rows && j<cols) {
        const a=i*(cols+1)+j,b=a+cols+1;
        indices.push(a,b,a+1,a+1,b,b+1);
      }
    }
  }
  const coast=new BufferGeometry();
  coast.setAttribute('position',new Float32BufferAttribute(verts,3));
  coast.setAttribute('color',new Float32BufferAttribute(colors,3));
  coast.setIndex(indices);
  coast.computeVertexNormals();
  root.add(new Mesh(coast,new MeshStandardMaterial({vertexColors:true,side:DoubleSide,flatShading:true})));
  function add(geo:BufferGeometry,color:string,x:number,y:number,z:number) {
    const mesh=new Mesh(geo,new MeshStandardMaterial({color}));
    mesh.position.set(x,y,z*direction);
    root.add(mesh);
    return mesh;
  }
  if (portugal) {
    // Fort and red lighthouse at the headland; twin gold buoys frame the ride-out.
    add(new BoxGeometry(25,12,17),'#9b846d',-59,4,length-35);
    add(new CylinderGeometry(1.8,2.4,9,14),'#d4bca3',-54,14,length-34);
    add(new CylinderGeometry(2.3,2.3,2.4,14),'#b44838',-54,19,length-34);
    add(new CylinderGeometry(.15,2.6,1.6,14),'#8f3329',-54,21,length-34);
    for(const fraction of [.10,.42]) {
      const x=map.wave.faceWidthM*fraction;
      const y=map.wave.heightM*.14*(.5*fraction**1.4+.5*fraction**4.2);
      add(new SphereGeometry(.95,12,9),'#ffce32',x,y+.25,length);
      add(new CylinderGeometry(.11,.11,3.2,8),'#ffce32',x,y+1.7,length);
    }
  } else if (bali) {
    for(let i=0;i<3;i++) {
      add(new BoxGeometry(6-i,2.2,6-i),'#605c4a',-129,32+i*2.1,170);
      add(new CylinderGeometry(.7,5-i,2,4),'#494636',-129,33+i*2.1,170);
    }
  } else if (!tahiti) {
    for(let i=0;i<14;i++) {
      const along=85+i*34;
      add(new BoxGeometry(6,3.8,5),i%2 ? '#e5d2ab':'#eee3c9',-110,3,along);
      const roof=add(new CylinderGeometry(.3,4.9,2.3,4),'#9d6a52',-110,5.8,along);
      roof.rotation.y=Math.PI/4;
    }
  }
  scene.add(root);
  const setSettings:ReturnType<EnvironmentFactory>['setSettings'] = next => {
    scene.fog = new Fog(map.visual.skyColor,180,next.quality === 'low' ? 650 : 980);
  };
  setSettings(settings);
  return {
    update(time) { normal.offset.set(time*.002,-time*.0015); },setSettings,
    dispose() {
      root.removeFromParent();
      scene.fog=priorFog;
      root.traverse(obj=>{
        if (obj instanceof Mesh) {
          obj.geometry.dispose();
          const materials:Material[] = Array.isArray(obj.material) ? obj.material : [obj.material];
          for(const material of materials) material.dispose();
        }
      });
      normal.dispose();
    },
  };
};
