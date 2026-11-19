import { Color, DoubleSide, ShaderMaterial, type Texture } from 'three';

// World-space ripples flow up the face and over the lip. Both surfaces
// sample the same sky, with stronger transmitted light in the thin curtain.
export function breakingWater(water: Color, sky: string, ripples: Texture, lip = false) {
  return new ShaderMaterial({
    side: DoubleSide,
    vertexColors: true,
    uniforms: {
      sea: { value: water },
      sky: { value: new Color(sky) },
      clock: { value: 0 },
      rippleMap: { value: ripples },
      curtain: { value: lip ? 1 : 0 },
    },
    vertexShader: `
      varying vec3 vWorld, vNormalWorld, vTint;
      varying vec2 sheet;
      void main() {
        vec4 world = modelMatrix * vec4(position,1.);
        vWorld = world.xyz;
        vNormalWorld = mat3(modelMatrix) * normal;
        vTint = color;
        sheet = uv;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform vec3 sea,sky;
      uniform sampler2D rippleMap;
      uniform float clock,curtain;
      varying vec3 vWorld,vNormalWorld,vTint;
      varying vec2 sheet;
      void main() {
        vec3 N=normalize(vNormalWorld), V=normalize(cameraPosition-vWorld);
        vec3 axial=normalize(vec3(0.,0.,1.)-N*N.z + vec3(.0001,0.,0.));
        vec3 upFace=normalize(cross(axial,N));
        // Streaks stretch across the arc of the breaking sheet, with smaller
        // capillary ripples moving over the larger undulations.
        vec2 st=vec2(vWorld.z*.072, sheet.x*2.6 + vWorld.y*.035);
        vec2 bend=texture2D(rippleMap, st*.23 + vec2(0.,clock*.018)).rg - .5;
        vec2 a=texture2D(rippleMap, st*.65 + bend*.56 + vec2(clock*.025,-clock*.11)).rg*2.-1.;
        vec2 b=texture2D(rippleMap, st*1.75 + a*.19 + vec2(-clock*.031,-clock*.17)).rg*2.-1.;
        N=normalize(N + axial*(a.x*.38+b.y*.12) + upFace*(a.y*.34+b.x*.10));
        if(dot(N,V)<0.) N=-N;
        vec3 reflected=reflect(-V,N);
        float fresnel=.045+.72*pow(1.-max(0.,dot(N,V)),3.4);
        vec3 reflectedSky=mix(sky*.22,sky*1.06,smoothstep(-.32,.67,reflected.y));
        float rim=smoothstep(.79,.99,sheet.x);
        float crestLight=curtain*(.16+.69*rim) + .12*smoothstep(.54,.78,sheet.x);
        float band=.5+.5*sin(st.x*24.+4.5*a.x + 2.8*b.y + sheet.x*10. - clock*.9);
        float filament=pow(band,5.) * smoothstep(-.24,.26,a.y);
        float lightThrough=clamp(crestLight*(.78 + a.x*.40 + filament*.32),0.,1.);
        vec3 transmitted=mix(sea*.48 + vTint*.34,vec3(.045,.50,.37),lightThrough);
        transmitted+=vec3(.028,.085,.067)*filament*(.22+.78*curtain);
        vec3 sunDir=normalize(vec3(-.42,.55,.68));
        float glint=pow(max(0.,dot(reflected,sunDir)),128.);
        vec3 water=mix(transmitted,reflectedSky,fresnel)+glint*vec3(.82,.79,.67)*.72;
        float foam=smoothstep(.19,.76,dot(vTint,vec3(.21,.72,.07)));
        float streak = smoothstep(.02,.23,b.x + a.y*.65);
        water=mix(water,vec3(.76,.88,.85),foam*(.44+.52*streak));
        float haze=smoothstep(150.,700.,distance(cameraPosition,vWorld));
        gl_FragColor=vec4(mix(water,sky,haze),1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

// Foam breaks into irregular bubbles and streaks as water tears off the crest.
export function breakingFoam(edge: boolean) {
  return new ShaderMaterial({
    vertexColors: true,
    side: DoubleSide,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
    uniforms: {
      clock: { value: 0 },
      tip: { value: edge ? 1 : 0 },
    },
    vertexShader:`
      varying vec3 p;
      varying float across, breaking;
      void main(){p=(modelMatrix*vec4(position,1.)).xyz;across=uv.x;breaking=color.r;
        gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
    fragmentShader:`
      varying vec3 p;
      varying float across, breaking;
      uniform float clock,tip;
      float hash(vec2 q){return fract(sin(dot(q,vec2(41.7,187.3)))*18361.51);}
      float noise(vec2 q){vec2 i=floor(q),f=fract(q); f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
      void main(){
        vec2 q=vec2(p.z*.85,p.x*2.2+p.y*.7);
        float n=noise(q+vec2(clock*.32,-clock*.9))*.62+noise(q*3.7-clock*.8)*.38;
        float width=tip>.5?smoothstep(.966,.988,across):sin(3.14159*across);
        float alpha=smoothstep(.34,.68,n)*width*breaking*.88;
        if(alpha<.025) discard;
        gl_FragColor=vec4(mix(vec3(.4,.66,.64),vec3(.94,.98,.95),n),alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}
