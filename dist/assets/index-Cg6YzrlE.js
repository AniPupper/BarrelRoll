(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ic={mavericks:{name:"Mavericks",region:"Half Moon Bay, California",difficulty:"easy",signature:"Broad Pacific face · generous first barrel",preview:"Carve the face, loop the hollow, launch from the lip",tone:"pacific"},pipeline:{name:"Pipeline",region:"Oʻahu, Hawaiʻi",difficulty:"hard",signature:"Fast hollow tube · clear exit",preview:"Hold your line deep in the barrel",tone:"tropical"},jbay:{name:"J-Bay",region:"Jeffreys Bay, South Africa",difficulty:"medium",signature:"Long clean right-hand wave · open sections",preview:"Build a chain of tricks along the open face",tone:"golden"},uluwatu:{name:"Uluwatu",region:"Bali, Indonesia",difficulty:"hard",signature:"Open faces · curling tubes · steep cliffs",preview:"Switch between aerial lines and barrel rides",tone:"limestone"},teahupoo:{name:"Teahupoo",region:"Tahiti, French Polynesia",difficulty:"expert",signature:"Steep face · narrow tube · quick closeout",preview:"Find the opening, then make your exit count",tone:"deep"},nazare:{name:"Nazaré",region:"Portugal",difficulty:"expert",signature:"Towering Atlantic faces · huge launch zones",preview:"Take impossible combinations into the air",tone:"storm"}};function mh(){return`<div class="guide-intro">
    <p>Ride Mavericks to the end of the wave. Then choose any of the six breaks in Freeplay.</p>
    <span>DESKTOP KEYBOARD</span>
  </div>
  <div class="guide-grid">
    <article class="guide-card"><div class="guide-card__top"><span>01 / CARVE</span><kbd>A</kbd><kbd>D</kbd><kbd>W</kbd><kbd>S</kbd></div><h2>Find the line</h2><p>Hold A or D to lean into a turn. Tuck with W to build speed, or brake with S for a tighter turn.</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>02 / LAUNCH</span><kbd>SPACE</kbd></div><h2>Charge the jump</h2><p>Hold Space, then release to take off — launch near the lip for more height</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>03 / ROTATE</span><kbd>←</kbd><kbd>→</kbd><kbd>W</kbd><kbd>S</kbd></div><h2>Own the air</h2><p>A and D spin. Tap W or S after takeoff to start a flip. The arrow keys roll the board sideways. Combine them for an off-axis trick.</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>04 / BARREL</span><kbd>SHIFT</kbd><kbd>A</kbd><kbd>D</kbd></div><h2>Loop the barrel</h2><p>At Mavericks, hold A to get under the lip. Hold Shift to ride around the inside. A or D picks the direction. Hold S to stay on one part of the wall. Release Shift to settle, then carve out with D.</p></article>
  </div>
  <div class="guide-bottom"><div><span>LAND THE MOMENT</span><p>Bring the board level with the water and align it with your travel to land cleanly</p></div><div><span>KEEP THE RUN MOVING</span><p>Escape pauses or resumes. After a run, press R to surf the same break again.</p></div></div>`}function gh(){return`<div class="credits-lead"><p>Built together, from the first wave to the final landing</p><span>AN ORIGINAL ARCADE SURF ADVENTURE</span></div>
    <div class="credits-grid">
      <div class="credit-card"><span>01 / GAMEPLAY &amp; SYSTEMS</span><h2>Teddy Kindler</h2><p>Surfing engine, wave and barrel systems, penguin and ice board, Mavericks environment, scoring and progression</p></div>
      <div class="credit-card"><span>02 / WORLD &amp; INTERFACE</span><h2>Anika Kumar</h2><p>Interface, location previews, Pipeline environment and upcoming trick and landing controls</p></div>
    </div>
    <p class="credits-note">The current interface illustrations and 3D scenery are original project assets<br>BarrelRoll takes inspiration from the spirit of arcade sports games while building its own world</p>`}const _h=""+new URL("jbay-DzXyHKV-.webp",import.meta.url).href,vh=""+new URL("mavericks-B3R_YRyy.webp",import.meta.url).href,xh=""+new URL("nazare-DnmQmzS0.webp",import.meta.url).href,Mh=""+new URL("pipeline-BJASxMtc.webp",import.meta.url).href,Sh=""+new URL("teahupoo-Db9s3Yt0.webp",import.meta.url).href,yh=""+new URL("uluwatu-DX9Gw_oZ.webp",import.meta.url).href,bh={mavericks:vh,pipeline:Mh,jbay:_h,uluwatu:yh,teahupoo:Sh,nazare:xh};function sc(i,t="card"){const e=bh[i];if(!e)throw new Error(`Missing preview image for ${i}`);return`<img src="${e}" alt="" aria-hidden="true" width="1536" height="1024" decoding="async" loading="${t==="feature"?"eager":"lazy"}">`}const Eh=""+new URL("mavericks-hero-DscC_BTQ.webp",import.meta.url).href,wh={id:"mavericks",name:"Mavericks",region:"Half Moon Bay, California",difficulty:"easy",wave:{breakDirection:"right",heightM:8,faceWidthM:20,rideLengthM:560,peelSpeedMps:12,barrelSections:[{start01:.18,end01:.38,radiusM:3.2,closeAfterEntryS:null},{start01:.62,end01:.8,radiusM:2.1,closeAfterEntryS:14}],launchSections:[{start01:.08,end01:.16,liftMultiplier:1.1},{start01:.49,end01:.58,liftMultiplier:1.5},{start01:.83,end01:.93,liftMultiplier:1.7}]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#1b6177",foamColor:"#e5f2f0",skyColor:"#b9ced9"}},Th={id:"pipeline",name:"Pipeline",region:"Oʻahu, Hawaiʻi",difficulty:"hard",wave:{breakDirection:"left",heightM:7,faceWidthM:12,rideLengthM:360,peelSpeedMps:14,barrelSections:[{start01:.2,end01:.7,radiusM:1.8,closeAfterEntryS:14}],launchSections:[{start01:.75,end01:.9,liftMultiplier:1.2}]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#157d89",foamColor:"#e6faf3",skyColor:"#a7d9dc"}},Ah="mavericks",rc=["mavericks","jbay","pipeline","teahupoo","nazare","uluwatu"],Es=(i,t,e,n)=>({start01:i,end01:t,radiusM:e,closeAfterEntryS:n}),Hn=(i,t,e)=>({start01:i,end01:t,liftMultiplier:e}),Pi={mavericks:wh,pipeline:Th,jbay:{id:"jbay",name:"Supertubes",region:"Jeffreys Bay, South Africa",difficulty:"medium",wave:{breakDirection:"right",heightM:4,faceWidthM:12,rideLengthM:700,peelSpeedMps:11,barrelSections:[Es(.45,.58,1.2,null)],launchSections:[Hn(.15,.25,1.3),Hn(.6,.7,1.3),Hn(.85,.95,1.3)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#367c82",foamColor:"#fff0d4",skyColor:"#eec8a6"}},teahupoo:{id:"teahupoo",name:"Teahupoʻo",region:"Tahiti, French Polynesia",difficulty:"expert",wave:{breakDirection:"left",heightM:6,faceWidthM:8,rideLengthM:300,peelSpeedMps:13,barrelSections:[Es(.2,.65,1.35,11)],launchSections:[Hn(.75,.9,1.3)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#165568",foamColor:"#ddf6ec",skyColor:"#9bc6ce"}},nazare:{id:"nazare",name:"Praia do Norte",region:"Nazaré, Portugal",difficulty:"expert",wave:{breakDirection:"right",heightM:25,faceWidthM:45,rideLengthM:650,peelSpeedMps:19,barrelSections:[],launchSections:[Hn(.35,.68,2)]},spawn:{along01:.05,face01:.8},visual:{waterColor:"#25485e",foamColor:"#e4f0ed",skyColor:"#adbfc8"}},uluwatu:{id:"uluwatu",name:"Uluwatu",region:"Bali, Indonesia",difficulty:"hard",wave:{breakDirection:"left",heightM:5,faceWidthM:10,rideLengthM:480,peelSpeedMps:12,barrelSections:[Es(.25,.42,1.4,7),Es(.65,.8,1.4,7)],launchSections:[Hn(.45,.6,1.4),Hn(.84,.94,1.4)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#228b8a",foamColor:"#e8f8e8",skyColor:"#c5dbcc"}}};function ro(i){return i.mapId==="mavericks"&&i.mode==="score-run"&&(i.reason==="ride-out"||i.reason==="timer")}function ao(i,t){return t>0?"free-surf":i==="mavericks"?"score-run":null}const Rh=[{id:"mavericks-clean-3",mapId:"mavericks",label:"Land cleanly 3 times in one run",metric:"cleanLandings",target:3},{id:"mavericks-barrel-4",mapId:"mavericks",label:"Ride a continuous 4-second barrel",metric:"longestBarrelS",target:4},{id:"mavericks-score-2000",mapId:"mavericks",label:"Score 2,000 in one session",metric:"score",target:2e3},{id:"pipeline-barrel-3",mapId:"pipeline",label:"Ride a continuous 3-second barrel",metric:"longestBarrelS",target:3},{id:"pipeline-barrel-6",mapId:"pipeline",label:"Ride a continuous 6-second barrel",metric:"longestBarrelS",target:6},{id:"pipeline-combo-2500",mapId:"pipeline",label:"Bank a 2,500-point combo",metric:"bestCombo",target:2500},{id:"jbay-clean-6",mapId:"jbay",label:"Land cleanly 6 times in one run",metric:"cleanLandings",target:6},{id:"jbay-combo-3000",mapId:"jbay",label:"Bank a 3,000-point combo",metric:"bestCombo",target:3e3},{id:"jbay-score-6000",mapId:"jbay",label:"Score 6,000 in one session",metric:"score",target:6e3},{id:"uluwatu-barrel-3",mapId:"uluwatu",label:"Ride a continuous 3-second barrel",metric:"longestBarrelS",target:3},{id:"uluwatu-spin-720",mapId:"uluwatu",label:"Land a 720",metric:"largestLandedSpinDeg",target:720},{id:"uluwatu-score-5000",mapId:"uluwatu",label:"Score 5,000 in one session",metric:"score",target:5e3},{id:"teahupoo-barrel-2",mapId:"teahupoo",label:"Ride a continuous 2-second barrel",metric:"longestBarrelS",target:2},{id:"teahupoo-barrel-3-5",mapId:"teahupoo",label:"Ride a continuous 3.5-second barrel",metric:"longestBarrelS",target:3.5},{id:"teahupoo-score-4000",mapId:"teahupoo",label:"Score 4,000 in one session",metric:"score",target:4e3},{id:"nazare-spin-720",mapId:"nazare",label:"Land a 720",metric:"largestLandedSpinDeg",target:720},{id:"nazare-spin-1080",mapId:"nazare",label:"Land a 1080",metric:"largestLandedSpinDeg",target:1080},{id:"nazare-combo-5000",mapId:"nazare",label:"Bank a 5,000-point combo",metric:"bestCombo",target:5e3}],ua=Object.freeze(Rh.map(i=>Object.freeze(i))),oo=Object.freeze([{color:"#ff6f59",medals:0},{color:"#48c9b0",medals:3},{color:"#f7c548",medals:6},{color:"#a17cf2",medals:12}]),yr="barrelroll.save.v1",ac=128,oc=["mavericks","pipeline","jbay","uluwatu","teahupoo","nazare"],lc=["free-surf","score-run"],cc=Object.freeze({quality:"medium",reducedMotion:!1,masterVolume:.7,muted:!1,boardColor:oo[0].color}),br=()=>({version:1,levelsCleared:0,settings:{...cc},bestRuns:{},earnedMedalIds:[],recentRunIds:[]}),ts=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),es=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0,Si=i=>es(i)&&Number.isInteger(i),hc=i=>typeof i=="string"&&i.length>0&&i.length<=128,uc=i=>oc.includes(i),dc=i=>lc.includes(i);function fc(i){return!ts(i)||!["low","medium","high"].includes(i.quality)||typeof i.reducedMotion!="boolean"||!es(i.masterVolume)||i.masterVolume>1||typeof i.muted!="boolean"||typeof i.boardColor!="string"?null:{quality:i.quality,reducedMotion:i.reducedMotion,masterVolume:i.masterVolume,muted:i.muted,boardColor:i.boardColor}}function pc(i){return!ts(i)||!hc(i.runId)||!uc(i.mapId)||!dc(i.mode)||!Si(i.score)||!es(i.durationS)||!["timer","player-ended","ride-out","missed-exit","wipeout"].includes(i.reason)||!es(i.longestBarrelS)||!Si(i.largestLandedSpinDeg)||!Si(i.bestCombo)||!Si(i.cleanLandings)||!Si(i.wipeouts)?null:{runId:i.runId,mapId:i.mapId,mode:i.mode,score:i.score,...es(i.cleanExitS)?{cleanExitS:i.cleanExitS}:{},durationS:i.durationS,reason:i.reason,longestBarrelS:i.longestBarrelS,largestLandedSpinDeg:i.largestLandedSpinDeg,bestCombo:i.bestCombo,cleanLandings:i.cleanLandings,wipeouts:i.wipeouts}}function Ch(i){try{const t=JSON.parse(i);if(!ts(t)||t.version!==1||!ts(t.bestRuns)||!Array.isArray(t.earnedMedalIds)||!Array.isArray(t.recentRunIds))return null;const e=fc(t.settings);if(!e||!t.earnedMedalIds.every(o=>typeof o=="string")||!t.recentRunIds.every(hc))return null;const n={};for(const[o,l]of Object.entries(t.bestRuns))if(!(!uc(o)||!ts(l)))for(const[c,h]of Object.entries(l)){if(!dc(c))continue;const u=pc(h);if(!u||u.mapId!==o||u.mode!==c)return null;(n[o]??={})[c]=u}const s=new Set(ua.map(o=>o.id)),r=[...new Set(t.earnedMedalIds)].filter(o=>s.has(o));return ns(r.length).includes(e.boardColor)||(e.boardColor=cc.boardColor),{version:1,levelsCleared:Math.max(Si(t.levelsCleared)?Math.min(5,t.levelsCleared):0,n.mavericks?.["score-run"]&&ro(n.mavericks["score-run"])?1:0),settings:e,bestRuns:n,earnedMedalIds:r,recentRunIds:[...new Set(t.recentRunIds)].slice(-ac)}}catch{return null}}function ns(i){return oo.filter(({medals:t})=>i>=t).map(({color:t})=>t)}function Ph(i,t){const e={};for(const n of oc){const s=i.bestRuns[n];if(s){e[n]={};for(const r of lc){const a=s[r];a&&(e[n][r]={...a})}}}return{settings:{...i.settings},bestRuns:e,earnedMedalIds:[...i.earnedMedalIds],unlockedBoardColors:ns(i.earnedMedalIds.length),storageAvailable:t,levelsCleared:i.levelsCleared}}function Lh(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Ih(i={}){const t=i.storage===void 0?Lh():i.storage;let e=br(),n=t!==null;if(t)try{const a=t.getItem(yr);a!==null&&(e=Ch(a)??br())}catch{n=!1}function s(){if(t)try{t.setItem(yr,JSON.stringify(e)),n=!0}catch{n=!1}}function r(){return Ph(e,n)}return{challenges:ua,getSnapshot:r,recordResult(a){const o=pc(a);if(!o)throw new Error("Invalid completed run result");if(e.recentRunIds.includes(o.runId))return{snapshot:r(),newMedalIds:[],newBoardColors:[],duplicate:!0};const l=ns(e.earnedMedalIds.length),c=new Set(e.earnedMedalIds),h=[];for(const p of ua)p.mapId!==o.mapId||p.mode&&p.mode!==o.mode||c.has(p.id)||o[p.metric]<p.target||(c.add(p.id),h.push(p.id));e.earnedMedalIds=[...c];const u=e.bestRuns[o.mapId]?.[o.mode];(!u||o.score>u.score)&&((e.bestRuns[o.mapId]??={})[o.mode]=o),ro(o)&&(e.levelsCleared=Math.max(1,e.levelsCleared)),e.recentRunIds.push(o.runId),e.recentRunIds=e.recentRunIds.slice(-ac),s();const f=ns(e.earnedMedalIds.length).filter(p=>!l.includes(p));return{snapshot:r(),newMedalIds:h,newBoardColors:f,duplicate:!1}},updateSettings(a){const o=fc({...e.settings,...a});if(!o)throw new Error("Invalid game settings");if(!ns(e.earnedMedalIds.length).includes(o.boardColor))throw new Error("Board color is locked");return e.settings=o,s(),r()},reset(){if(e=br(),t)try{t.removeItem(yr),n=!0}catch{n=!1}return r()}}}class Dh{context;noise;master;filter;level;last;start(t){if(!this.context){if(typeof AudioContext>"u")return;const e=this.context=new AudioContext;this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const n=this.noise.getChannelData(0);let s=0;for(let a=0;a<n.length;a++)s=(s+.16*(Math.random()*2-1))/1.16,n[a]=s*2;const r=e.createBufferSource();r.buffer=this.noise,r.loop=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.level=e.createGain(),this.level.gain.value=.2,this.master=e.createGain(),r.connect(this.filter).connect(this.level).connect(this.master).connect(e.destination),r.start()}this.last=void 0,this.settings(t),this.context.resume().catch(()=>{})}settings(t){this.master&&this.context&&this.master.gain.setTargetAtTime(t.muted?0:t.masterVolume*.67,this.context.currentTime,.04)}update(t){const e=this.context;if(!e||!this.filter||!this.level)return;const n=t.state==="barrel",s=t.state==="airborne";this.filter.frequency.setTargetAtTime(n?520:900+t.speedMps*110,e.currentTime,.12),this.level.gain.setTargetAtTime(s?.065:n?.82:.14+t.speedMps*.011,e.currentTime,.13);const r=this.last?.state==="airborne"&&!s,a=this.last?.state==="barrel"&&!n;if(r||a||t.state==="wipeout"&&this.last?.state!=="wipeout"){const o=t.state==="wipeout",l=t.trickLabel.includes("Sketchy");this.splash(o?.8:l?.44:a?.31:.15,o?530:l?1450:3600)}this.last=t}splash(t,e){if(!this.context||!this.master||!this.noise)return;const n=this.context,s=n.currentTime,r=n.createBufferSource(),a=n.createBiquadFilter(),o=n.createGain();r.buffer=this.noise,a.type="lowpass",a.frequency.setValueAtTime(e,s),a.frequency.exponentialRampToValueAtTime(230,s+t),o.gain.setValueAtTime(.001,s),o.gain.exponentialRampToValueAtTime(1.3,s+.015),o.gain.exponentialRampToValueAtTime(.001,s+t),r.connect(a).connect(o).connect(this.master),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()},r.start(),r.stop(s+t)}pause(){this.context&&this.context.suspend().catch(()=>{})}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="180",Uh=0,zo=1,Nh=2,mc=1,Fh=2,vn=3,Nn=0,Pe=1,me=2,In=0,Ai=1,ko=2,Ho=3,Vo=4,Oh=5,Jn=100,Bh=101,zh=102,kh=103,Hh=104,Vh=200,Gh=201,Wh=202,Xh=203,da=204,fa=205,qh=206,Yh=207,$h=208,Zh=209,Kh=210,Jh=211,jh=212,Qh=213,tu=214,pa=0,ma=1,ga=2,Li=3,_a=4,va=5,xa=6,Ma=7,co=0,eu=1,nu=2,Dn=0,iu=1,su=2,ru=3,au=4,ou=5,lu=6,cu=7,gc=300,Ii=301,Di=302,Sa=303,ya=304,fr=306,Ui=1e3,Qn=1001,ba=1002,Ge=1003,hu=1004,ws=1005,Ne=1006,Er=1007,Mn=1008,hn=1009,_c=1010,vc=1011,ls=1012,ho=1013,ti=1014,Sn=1015,xs=1016,uo=1017,fo=1018,cs=1020,xc=35902,Mc=35899,Sc=1021,yc=1022,He=1023,hs=1026,us=1027,bc=1028,po=1029,Ec=1030,mo=1031,go=1033,Qs=33776,tr=33777,er=33778,nr=33779,Ea=35840,wa=35841,Ta=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,La=37808,Ia=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Ha=37818,Va=37819,Ga=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,$a=36283,Za=36284,Ka=36285,Ja=36286,uu=3200,du=3201,_o=0,fu=1,Ln="",De="srgb",Ni="srgb-linear",rr="linear",ie="srgb",ri=7680,Go=519,pu=512,mu=513,gu=514,wc=515,_u=516,vu=517,xu=518,Mu=519,Wo=35044,Xo="300 es",ln=2e3,ar=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const is=Math.PI/180,ds=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function vo(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yu(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(vo(i,t*2)-t)}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Au(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ru(i,t){return i+Math.random()*(t-i)}function Cu(i){return i*(.5-Math.random())}function Pu(i){i!==void 0&&(qo=i);let t=qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*is}function Iu(i){return i*ds}function Du(i){return(i&i-1)===0&&i!==0}function Uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:is,RAD2DEG:ds,generateUUID:ii,clamp:Xt,euclideanModulo:vo,mapLinear:Su,inverseLerp:yu,lerp:ss,damp:bu,pingpong:Eu,smoothstep:wu,smootherstep:Tu,randInt:Au,randFloat:Ru,randFloatSpread:Cu,seededRandom:Pu,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Du,ceilPowerOfTwo:Uu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Fu,normalize:Ae,denormalize:yi};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*v,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,d*b);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const _=o*b;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new I,Yo=new ke;class Gt{constructor(t,e,n,s,r,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],b=s[1],x=s[4],_=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*v+o*b+l*T,r[3]=a*m+o*x+l*E,r[6]=a*d+o*_+l*P,r[1]=c*v+h*b+u*T,r[4]=c*m+h*x+u*E,r[7]=c*d+h*_+u*P,r[2]=f*v+p*b+g*T,r[5]=f*m+p*x+g*E,r[8]=f*d+p*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new Gt;function Tc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){const i=or("canvas");return i.style.display="block",i}const $o={};function fs(i){i in $o||($o[i]=!0,console.warn(i))}function Bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Zo=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Zo,fromXYZ:Ko,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Zo,fromXYZ:Ko,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const jt=zu();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ai;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ai===void 0&&(ai=or("canvas")),ai.width=t.width,ai.height=t.height;const s=ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hu=0;class xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ar(s[a].image)):r.push(Ar(s[a]))}else r=Ar(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vu=0;const Rr=new I;class Le extends zi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Qn,s=Qn,r=Ne,a=Mn,o=He,l=hn,c=Le.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ii(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=gc;Le.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,T=(d+1)/2,E=(h+f)/4,P=(u+v)/4,R=(g+m)/4;return x>_&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=P/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=R/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Le(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new xo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ac extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),As.subVectors(this.max,Wi),oi.subVectors(t.a,Wi),li.subVectors(t.b,Wi),ci.subVectors(t.c,Wi),En.subVectors(li,oi),wn.subVectors(ci,li),Vn.subVectors(oi,ci);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!Cr(e,oi,li,ci,As)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,oi,li,ci,As))?!1:(Rs.crossVectors(En,wn),e=[Rs.x,Rs.y,Rs.z],Cr(e,oi,li,ci,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fn=[new I,new I,new I,new I,new I,new I,new I,new I],Je=new I,Ts=new Ms,oi=new I,li=new I,ci=new I,En=new I,wn=new I,Vn=new I,Wi=new I,As=new I,Rs=new I,Gn=new I;function Cr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xu=new Ms,Xi=new I,Pr=new I;class Ss{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Pr)),this.expandByPoint(Xi.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pn=new I,Lr=new I,Cs=new I,Tn=new I,Ir=new I,Ps=new I,Dr=new I;class Mo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),o=Tn.dot(this.direction),l=-Tn.dot(Cs),c=Tn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lr).addScaledVector(Cs,f),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Ir.subVectors(e,t),Ps.subVectors(n,t),Dr.crossVectors(Ir,Ps);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(Ps.crossVectors(Tn,Ps));if(l<0)return null;const c=o*this.direction.dot(Ir.cross(Tn));if(c<0||l+c>a)return null;const h=-o*Tn.dot(Dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),An.crossVectors(n,Be),An.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),An.crossVectors(n,Be)),An.normalize(),Ls.crossVectors(Be,An),s[0]=An.x,s[4]=Ls.x,s[8]=Be.x,s[1]=An.y,s[5]=Ls.y,s[9]=Be.y,s[2]=An.z,s[6]=Ls.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],b=n[3],x=n[7],_=n[11],T=n[15],E=s[0],P=s[4],R=s[8],S=s[12],M=s[1],A=s[5],D=s[9],U=s[13],N=s[2],k=s[6],V=s[10],Y=s[14],z=s[3],tt=s[7],dt=s[11],Mt=s[15];return r[0]=a*E+o*M+l*N+c*z,r[4]=a*P+o*A+l*k+c*tt,r[8]=a*R+o*D+l*V+c*dt,r[12]=a*S+o*U+l*Y+c*Mt,r[1]=h*E+u*M+f*N+p*z,r[5]=h*P+u*A+f*k+p*tt,r[9]=h*R+u*D+f*V+p*dt,r[13]=h*S+u*U+f*Y+p*Mt,r[2]=g*E+v*M+m*N+d*z,r[6]=g*P+v*A+m*k+d*tt,r[10]=g*R+v*D+m*V+d*dt,r[14]=g*S+v*U+m*Y+d*Mt,r[3]=b*E+x*M+_*N+T*z,r[7]=b*P+x*A+_*k+T*tt,r[11]=b*R+x*D+_*V+T*dt,r[15]=b*S+x*U+_*Y+T*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],b=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,_=h*v*c-g*u*c+g*o*p-a*v*p-h*o*d+a*u*d,T=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,E=e*b+n*x+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return t[0]=b*P,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*P,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*P,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*P,t[4]=x*P,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*P,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*P,t[8]=_*P,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*P,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*d+e*o*d)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*P,t[12]=T*P,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,b=l*c,x=l*h,_=l*u,T=n.x,E=n.y,P=n.z;return s[0]=(1-(v+d))*T,s[1]=(p+_)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+x)*P,s[9]=(m-b)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ar)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===ln)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ar)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new I,je=new ce,qu=new I(0,0,0),Yu=new I(1,1,1),An=new I,Ls=new I,Be=new I,Jo=new ce,jo=new ke;class nn{constructor(t=0,e=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $u=0;const Qo=new I,ui=new ke,mn=new ce,Is=new I,qi=new I,Zu=new I,Ku=new ke,tl=new I(1,0,0),el=new I(0,1,0),nl=new I(0,0,1),il={type:"added"},Ju={type:"removed"},di={type:"childadded",child:null},Ur={type:"childremoved",child:null};class be extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new I,e=new nn,n=new ke,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(tl,t)}rotateY(t){return this.rotateOnAxis(el,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return Qo.copy(t).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tl,t)}translateY(t){return this.translateOnAxis(el,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(qi,Is,this.up):mn.lookAt(Is,qi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(il),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ju),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(il),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new I,gn=new I,Nr=new I,_n=new I,fi=new I,pi=new I,sl=new I,Fr=new I,Or=new I,Br=new I,zr=new ge,kr=new ge,Hr=new ge;class en{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),gn.subVectors(n,e),Nr.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(gn),l=Qe.dot(Nr),c=gn.dot(gn),h=gn.dot(Nr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return zr.setScalar(0),kr.setScalar(0),Hr.setScalar(0),zr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Hr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zr,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Hr,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),Fr.subVectors(t,n);const l=fi.dot(Fr),c=pi.dot(Fr);if(l<=0&&c<=0)return e.copy(n);Or.subVectors(t,s);const h=fi.dot(Or),u=pi.dot(Or);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fi,a);Br.subVectors(t,r);const p=fi.dot(Br),g=pi.dot(Br);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(pi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return sl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(sl,o);const d=1/(m+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=vo(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return jt.workingToColorSpace(we.copy(this),t),Math.round(Xt(we.r*255,0,255))*65536+Math.round(Xt(we.g*255,0,255))*256+Math.round(Xt(we.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=De){jt.workingToColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ds);const n=ss(Rn.h,Ds.h,e),s=ss(Rn.s,Ds.s,e),r=ss(Rn.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new xt;xt.NAMES=Cc;let ju=0;class On extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ai,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ki extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,Us=new ct;let Qu=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}}class Pc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ft extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let td=0;const qe=new ce,Gr=new be,mi=new I,ze=new Ms,Yi=new Ms,Se=new I;class se extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Lc:Pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(ze.min,Yi.min),ze.expandByPoint(Se),Se.addVectors(ze.max,Yi.max),ze.expandByPoint(Se)):(ze.expandByPoint(Yi.min),ze.expandByPoint(Yi.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),Se.add(mi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,f=new ct,p=new ct,g=new ct,v=new I,m=new I;function d(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[R].add(v),o[S].add(v),o[M].add(v),l[R].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,S=b.length;R<S;++R){const M=b[R],A=M.start,D=M.count;for(let U=A,N=A+D;U<N;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new I,_=new I,T=new I,E=new I;function P(R){T.fromBufferAttribute(s,R),E.copy(T);const S=o[R];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(E,S);const A=_.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,A)}for(let R=0,S=b.length;R<S;++R){const M=b[R],A=M.start,D=M.count;for(let U=A,N=A+D;U<N;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new ce,Wn=new Mo,Ns=new Ss,al=new I,Fs=new I,Os=new I,Bs=new I,Wr=new I,zs=new I,ol=new I,ks=new I;class $t extends be{constructor(t=new se,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Wr.fromBufferAttribute(u,t),a?zs.addScaledVector(Wr,h):zs.addScaledVector(Wr.sub(e),h))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ns,al)===null||Wn.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(rl.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(rl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,T=x;_<T;_+=3){const E=o.getX(_),P=o.getX(_+1),R=o.getX(_+2);s=Hs(this,d,t,n,c,h,u,E,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const b=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=Hs(this,a,t,n,c,h,u,b,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,T=x;_<T;_+=3){const E=_,P=_+1,R=_+2;s=Hs(this,d,t,n,c,h,u,E,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const b=m,x=m+1,_=m+2;s=Hs(this,a,t,n,c,h,u,b,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ed(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nn,o),l===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:i}}function Hs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(c,Bs);const h=ed(i,t,e,n,Fs,Os,Bs,ol);if(h){const u=new I;en.getBarycoord(ol,Fs,Os,Bs,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=en.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};en.getNormal(Fs,Os,Bs,f.normal),h.face=f,h.barycoord=u}return h}class bn extends se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(v,m,d,b,x,_,T,E,P,R,S){const M=_/P,A=T/R,D=_/2,U=T/2,N=E/2,k=P+1,V=R+1;let Y=0,z=0;const tt=new I;for(let dt=0;dt<V;dt++){const Mt=dt*A-U;for(let Bt=0;Bt<k;Bt++){const Yt=Bt*M-D;tt[v]=Yt*b,tt[m]=Mt*x,tt[d]=N,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[d]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Bt/P),u.push(1-dt/R),Y+=1}}for(let dt=0;dt<R;dt++)for(let Mt=0;Mt<P;Mt++){const Bt=f+Mt+k*dt,Yt=f+Mt+k*(dt+1),Kt=f+(Mt+1)+k*(dt+1),qt=f+(Mt+1)+k*dt;l.push(Bt,Yt,qt),l.push(Yt,Kt,qt),z+=6}o.addGroup(p,z,S),p+=z,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Fi(i[e]);for(const s in n)t[s]=n[s]}return t}function nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ic(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const id={clone:Fi,merge:Ce};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dc extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new I,ll=new ct,cl=new ct;class Ye extends Dc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,ll,cl),e.subVectors(cl,ll)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class ad extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new Ye(gi,_i,t,e);r.layers=this.layers,this.add(r);const a=new Ye(gi,_i,t,e);a.layers=this.layers,this.add(a);const o=new Ye(gi,_i,t,e);o.layers=this.layers,this.add(o);const l=new Ye(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new Ye(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uc extends Le{constructor(t=[],e=Ii,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bn(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:In});r.uniforms.tEquirect.value=e;const a=new $t(s,r),o=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Ne),new ad(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Ve extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ld={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Oi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new Oi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cd extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class So extends Le{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qr=new I,hd=new I,ud=new Gt;class Zn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qr.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Ss,dd=new ct(.5,.5),Vs=new I;class yo{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],b=r[12],x=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,d-g,T-b).normalize(),s[1].setComponents(c+a,p+h,d+g,T+b).normalize(),s[2].setComponents(c+o,p+u,d+v,T+x).normalize(),s[3].setComponents(c-o,p-u,d-v,T-x).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,d-m,T-_).normalize();else if(s[4].setComponents(c-l,p-f,d-m,T-_).normalize(),e===ln)s[5].setComponents(c+l,p+f,d+m,T+_).normalize();else if(e===ar)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);const e=dd.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ja extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lr=new I,cr=new I,hl=new ce,$i=new Mo,Gs=new Ss,Yr=new I,ul=new I;class Nc extends be{constructor(t=new se,e=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)lr.fromBufferAttribute(e,s-1),cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;hl.copy(s).invert(),$i.copy(t.ray).applyMatrix4(hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const d=h.getX(v),b=h.getX(v+1),x=Ws(this,t,$i,l,d,b,v);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=Ws(this,t,$i,l,v,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const d=Ws(this,t,$i,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=Ws(this,t,$i,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,r),e.distanceSqToSegment(lr,cr,Yr,ul)>n)return;Yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yr);if(!(c<t.near||c>t.far))return{distance:c,point:ul.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const dl=new I,fl=new I;class fd extends Nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)dl.fromBufferAttribute(e,s),fl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dl.distanceTo(fl);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pd extends Nc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class bo extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pl=new ce,Qa=new Mo,Xs=new Ss,qs=new I;class Fc extends be{constructor(t=new se,e=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;pl.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);qs.fromBufferAttribute(u,m),ml(qs,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)qs.fromBufferAttribute(u,g),ml(qs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ml(i,t,e,n,s,r,a){const o=Qa.distanceSqToPoint(i);if(o<e){const l=new I;Qa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oc extends Le{constructor(t,e,n=ti,s,r,a,o=Ge,l=Ge,c,h=hs,u=1){if(h!==hs&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bc extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rn extends se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(p,2));function b(){const _=new I,T=new I;let E=0;const P=(e-t)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,A=M*(e-t)+t;for(let D=0;D<=s;D++){const U=D/s,N=U*l+o,k=Math.sin(N),V=Math.cos(N);T.x=A*k,T.y=-M*n+m,T.z=A*V,u.push(T.x,T.y,T.z),_.set(k,P,V).normalize(),f.push(_.x,_.y,_.z),p.push(U,1-M),S.push(g++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const M=v[S][R],A=v[S+1][R],D=v[S+1][R+1],U=v[S][R+1];(t>0||S!==0)&&(h.push(M,A,U),E+=3),(e>0||S!==r-1)&&(h.push(A,D,U),E+=3)}c.addGroup(d,E,0),d+=E}function x(_){const T=g,E=new ct,P=new I;let R=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let D=0;D<=s;D++){const N=D/s*l+o,k=Math.cos(N),V=Math.sin(N);P.x=S*V,P.y=m*M,P.z=S*k,u.push(P.x,P.y,P.z),f.push(0,M,0),E.x=k*.5+.5,E.y=V*.5*M+.5,p.push(E.x,E.y),g++}for(let D=0;D<s;D++){const U=T+D,N=A+D;_===!0?h.push(N,N+1,U):h.push(N+1,N,U),R+=3}c.addGroup(d,R,_===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends rn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new I,_=new I,T=new I;for(let E=0;E<e.length;E+=3)p(e[E+0],x),p(e[E+1],_),p(e[E+2],T),l(x,_,T,b)}function l(b,x,_,T){const E=T+1,P=[];for(let R=0;R<=E;R++){P[R]=[];const S=b.clone().lerp(_,R/E),M=x.clone().lerp(_,R/E),A=E-R;for(let D=0;D<=A;D++)D===0&&R===E?P[R][D]=S:P[R][D]=S.clone().lerp(M,D/A)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(P[R][M+1]),f(P[R+1][M]),f(P[R][M])):(f(P[R][M+1]),f(P[R+1][M+1]),f(P[R+1][M]))}}function c(b){const x=new I;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(b),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const b=new I;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const _=m(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;a.push(_,1-T)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const x=a[b+0],_=a[b+2],T=a[b+4],E=Math.max(x,_,T),P=Math.min(x,_,T);E>.9&&P<.1&&(x<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,x){const _=b*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const b=new I,x=new I,_=new I,T=new I,E=new ct,P=new ct,R=new ct;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),P.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),T.copy(b).add(x).add(_).divideScalar(3);const A=m(T);v(E,M+0,b,A),v(P,M+2,x,A),v(R,M+4,_,A)}}function v(b,x,_,T){T<0&&b.x===1&&(a[x]=b.x-1),_.x===0&&_.z===0&&(a[x]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}class wo extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new ce;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Xt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Xt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class To extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class md extends To{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ys=new I,$r=new Ao,Zr=new Ao,Kr=new Ao;class zc extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ys.subVectors(s[0],s[1]).add(s[0]),c=Ys);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ys.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),$r.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Zr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Kr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&($r.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Zr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Kr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set($r.calc(l),Zr.calc(l),Kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function gd(i,t){const e=1-i;return e*e*t}function _d(i,t){return 2*(1-i)*i*t}function vd(i,t){return i*i*t}function rs(i,t,e,n){return gd(i,t)+_d(i,e)+vd(i,n)}function xd(i,t){const e=1-i;return e*e*e*t}function Md(i,t){const e=1-i;return 3*e*e*i*t}function Sd(i,t){return 3*(1-i)*i*i*t}function yd(i,t){return i*i*i*t}function as(i,t,e,n,s){return xd(i,t)+Md(i,e)+Sd(i,n)+yd(i,s)}class kc extends un{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bd extends un{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y),as(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hc extends un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends un{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vc extends un{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends un{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y),rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(gl(o,l.x,c.x,h.x,u.x),gl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var hr=Object.freeze({__proto__:null,ArcCurve:md,CatmullRomCurve3:zc,CubicBezierCurve:kc,CubicBezierCurve3:bd,EllipseCurve:To,LineCurve:Hc,LineCurve3:Ed,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Gc,SplineCurve:Wc});class wd extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new hr[s.type]().fromJSON(s))}return this}}class _l extends wd{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hc(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Vc(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new kc(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new To(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ro extends _l{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _l().fromJSON(s))}return this}}function Td(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Xc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ld(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ps(r,a,e,o,l,c,0),a}function Xc(i,t,e,n,s){let r;if(s===Vd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vl(a/n|0,i[a],i[a+1],r);return r&&Bi(r,r.next)&&(gs(r),r=r.next),r}function ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bi(e,e.next)||de(e.prev,e,e.next)===0)){if(gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ps(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Fd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Rd(i,n,s,r):Ad(i)){t.push(l.i,i.i,c.i),gs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cd(ni(i),t),ps(i,t,e,n,s,r,2)):a===2&&Pd(i,t,e,n,s,r):ps(ni(i),t,e,n,s,r,1);break}}}function Ad(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ji(s,o,r,l,a,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(de(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),d=to(p,g,t,e,n),b=to(v,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=d&&_&&_.z<=b;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ji(o,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ji(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ji(o,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ji(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Cd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Bi(n,s)&&Yc(n,e,e.next,s)&&ms(n,s)&&ms(s,n)&&(t.push(n.i,e.i,s.i),gs(e),gs(e.next),e=i=s),e=e.next}while(e!==i);return ni(e)}function Pd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zd(a,o)){let l=$c(a,o);a=ni(a,a.next),l=ni(l,l.next),ps(a,t,e,n,s,r,0),ps(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ld(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Xc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Bd(c))}s.sort(Id);for(let r=0;r<s.length;r++)e=Dd(s[r],e);return e}function Id(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Dd(i,t){const e=Ud(i,t);if(!e)return t;const n=$c(e,i);return ni(n,n.next),ni(e,e.next)}function Ud(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Bi(i,e))return e;do{if(Bi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ms(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Nd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Nd(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function Fd(i,t,e,n){let s=i;do s.z===0&&(s.z=to(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Od(s)}function Od(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function to(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ji(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&qc(i,t,e,n,s,r,a,o)}function zd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kd(i,t)&&(ms(i,t)&&ms(t,i)&&Hd(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Bi(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bi(i,t){return i.x===t.x&&i.y===t.y}function Yc(i,t,e,n){const s=Zs(de(i,t,e)),r=Zs(de(i,t,n)),a=Zs(de(e,n,i)),o=Zs(de(e,n,t));return!!(s!==r&&a!==o||s===0&&$s(i,e,t)||r===0&&$s(i,n,t)||a===0&&$s(e,i,n)||o===0&&$s(e,t,n))}function $s(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function kd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ms(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function Hd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $c(i,t){const e=eo(i.i,i.x,i.y),n=eo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vl(i,t,e,n){const s=eo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Gd{static triangulate(t,e,n=2){return Td(t,e,n)}}class bi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xl(t),Ml(n,t);let a=t.length;e.forEach(xl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ml(n,e[l]);const o=Gd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function xl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ml(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mr extends se{constructor(t=new Ro([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ft(s,3)),this.setAttribute("uv",new Ft(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Wd;let x,_=!1,T,E,P,R;d&&(x=d.getSpacedPoints(h),_=!0,f=!1,T=d.computeFrenetFrames(h,!1),E=new I,P=new I,R=new I),f||(m=0,p=0,g=0,v=0);const S=o.extractPoints(c);let M=S.shape;const A=S.holes;if(!bi.isClockWise(M)){M=M.reverse();for(let et=0,J=A.length;et<J;et++){const K=A[et];bi.isClockWise(K)&&(A[et]=K.reverse())}}function U(et){const K=10000000000000001e-36;let j=et[0];for(let ht=1;ht<=et.length;ht++){const it=ht%et.length,ut=et[it],zt=ut.x-j.x,Ot=ut.y-j.y,C=zt*zt+Ot*Ot,y=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(j.x),Math.abs(j.y)),H=K*y*y;if(C<=H){et.splice(it,1),ht--;continue}j=ut}}U(M),A.forEach(U);const N=A.length,k=M;for(let et=0;et<N;et++){const J=A[et];M=M.concat(J)}function V(et,J,K){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(J,K)}const Y=M.length;function z(et,J,K){let j,ht,it;const ut=et.x-J.x,zt=et.y-J.y,Ot=K.x-et.x,C=K.y-et.y,y=ut*ut+zt*zt,H=ut*C-zt*Ot;if(Math.abs(H)>Number.EPSILON){const X=Math.sqrt(y),nt=Math.sqrt(Ot*Ot+C*C),q=J.x-zt/X,Ct=J.y+ut/X,lt=K.x-C/nt,Tt=K.y+Ot/nt,At=((lt-q)*C-(Tt-Ct)*Ot)/(ut*C-zt*Ot);j=q+ut*At-et.x,ht=Ct+zt*At-et.y;const st=j*j+ht*ht;if(st<=2)return new ct(j,ht);it=Math.sqrt(st/2)}else{let X=!1;ut>Number.EPSILON?Ot>Number.EPSILON&&(X=!0):ut<-Number.EPSILON?Ot<-Number.EPSILON&&(X=!0):Math.sign(zt)===Math.sign(C)&&(X=!0),X?(j=-zt,ht=ut,it=Math.sqrt(y)):(j=ut,ht=zt,it=Math.sqrt(y/2))}return new ct(j/it,ht/it)}const tt=[];for(let et=0,J=k.length,K=J-1,j=et+1;et<J;et++,K++,j++)K===J&&(K=0),j===J&&(j=0),tt[et]=z(k[et],k[K],k[j]);const dt=[];let Mt,Bt=tt.concat();for(let et=0,J=N;et<J;et++){const K=A[et];Mt=[];for(let j=0,ht=K.length,it=ht-1,ut=j+1;j<ht;j++,it++,ut++)it===ht&&(it=0),ut===ht&&(ut=0),Mt[j]=z(K[j],K[it],K[ut]);dt.push(Mt),Bt=Bt.concat(Mt)}let Yt;if(m===0)Yt=bi.triangulateShape(k,A);else{const et=[],J=[];for(let K=0;K<m;K++){const j=K/m,ht=p*Math.cos(j*Math.PI/2),it=g*Math.sin(j*Math.PI/2)+v;for(let ut=0,zt=k.length;ut<zt;ut++){const Ot=V(k[ut],tt[ut],it);yt(Ot.x,Ot.y,-ht),j===0&&et.push(Ot)}for(let ut=0,zt=N;ut<zt;ut++){const Ot=A[ut];Mt=dt[ut];const C=[];for(let y=0,H=Ot.length;y<H;y++){const X=V(Ot[y],Mt[y],it);yt(X.x,X.y,-ht),j===0&&C.push(X)}j===0&&J.push(C)}}Yt=bi.triangulateShape(et,J)}const Kt=Yt.length,qt=g+v;for(let et=0;et<Y;et++){const J=f?V(M[et],Bt[et],qt):M[et];_?(P.copy(T.normals[0]).multiplyScalar(J.x),E.copy(T.binormals[0]).multiplyScalar(J.y),R.copy(x[0]).add(P).add(E),yt(R.x,R.y,R.z)):yt(J.x,J.y,0)}for(let et=1;et<=h;et++)for(let J=0;J<Y;J++){const K=f?V(M[J],Bt[J],qt):M[J];_?(P.copy(T.normals[et]).multiplyScalar(K.x),E.copy(T.binormals[et]).multiplyScalar(K.y),R.copy(x[et]).add(P).add(E),yt(R.x,R.y,R.z)):yt(K.x,K.y,u/h*et)}for(let et=m-1;et>=0;et--){const J=et/m,K=p*Math.cos(J*Math.PI/2),j=g*Math.sin(J*Math.PI/2)+v;for(let ht=0,it=k.length;ht<it;ht++){const ut=V(k[ht],tt[ht],j);yt(ut.x,ut.y,u+K)}for(let ht=0,it=A.length;ht<it;ht++){const ut=A[ht];Mt=dt[ht];for(let zt=0,Ot=ut.length;zt<Ot;zt++){const C=V(ut[zt],Mt[zt],j);_?yt(C.x,C.y+x[h-1].y,x[h-1].x+K):yt(C.x,C.y,u+K)}}}Z(),$();function Z(){const et=s.length/3;if(f){let J=0,K=Y*J;for(let j=0;j<Kt;j++){const ht=Yt[j];St(ht[2]+K,ht[1]+K,ht[0]+K)}J=h+m*2,K=Y*J;for(let j=0;j<Kt;j++){const ht=Yt[j];St(ht[0]+K,ht[1]+K,ht[2]+K)}}else{for(let J=0;J<Kt;J++){const K=Yt[J];St(K[2],K[1],K[0])}for(let J=0;J<Kt;J++){const K=Yt[J];St(K[0]+Y*h,K[1]+Y*h,K[2]+Y*h)}}n.addGroup(et,s.length/3-et,0)}function $(){const et=s.length/3;let J=0;pt(k,J),J+=k.length;for(let K=0,j=A.length;K<j;K++){const ht=A[K];pt(ht,J),J+=ht.length}n.addGroup(et,s.length/3-et,1)}function pt(et,J){let K=et.length;for(;--K>=0;){const j=K;let ht=K-1;ht<0&&(ht=et.length-1);for(let it=0,ut=h+m*2;it<ut;it++){const zt=Y*it,Ot=Y*(it+1),C=J+j+zt,y=J+ht+zt,H=J+ht+Ot,X=J+j+Ot;Ht(C,y,H,X)}}}function yt(et,J,K){l.push(et),l.push(J),l.push(K)}function St(et,J,K){ee(et),ee(J),ee(K);const j=s.length/3,ht=b.generateTopUV(n,s,j-3,j-2,j-1);L(ht[0]),L(ht[1]),L(ht[2])}function Ht(et,J,K,j){ee(et),ee(J),ee(j),ee(J),ee(K),ee(j);const ht=s.length/3,it=b.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);L(it[0]),L(it[1]),L(it[3]),L(it[1]),L(it[2]),L(it[3])}function ee(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function L(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hr[s.type]().fromJSON(s)),new mr(n,t.options)}}const Wd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(f,1-g),new ct(v,1-d)]:[new ct(o,1-l),new ct(h,1-u),new ct(p,1-g),new ct(m,1-d)]}};function Xd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bn extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const b=d*f-a;for(let x=0;x<c;x++){const _=x*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const x=b+c*d,_=b+c*(d+1),T=b+1+c*(d+1),E=b+1+c*d;p.push(x,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class $e extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const b=[],x=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(E+_,1-x),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const x=h[d][b+1],_=h[d][b],T=h[d+1][b],E=h[d+1][b+1];(d!==0||a>0)&&p.push(x,_,E),(d!==n-1||l<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Co extends se{constructor(t=new Gc(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ct;let h=new I;const u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(p,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),b(),d()}function m(x){h=t.getPointAt(x/e,h);const _=a.normals[x],T=a.binormals[x];for(let E=0;E<=s;E++){const P=E/s*Math.PI*2,R=Math.sin(P),S=-Math.cos(P);l.x=S*_.x+R*T.x,l.y=S*_.y+R*T.y,l.z=S*_.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const T=(s+1)*(x-1)+(_-1),E=(s+1)*x+(_-1),P=(s+1)*x+_,R=(s+1)*(x-1)+_;g.push(T,E,R),g.push(E,P,R)}}function b(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Co(new hr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ue extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qd extends Ue{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Zc extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yd extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $d extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kc extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Jr=new ce,Sl=new I,yl=new I;class Zd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),Jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jc extends Dc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kd extends Zd{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends Kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Kd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jd extends Kc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jd extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function bl(i,t,e,n){const s=Qd(n);switch(e){case Sc:return i*t;case bc:return i*t/s.components*s.byteLength;case po:return i*t/s.components*s.byteLength;case Ec:return i*t*2/s.components*s.byteLength;case mo:return i*t*2/s.components*s.byteLength;case yc:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case go:return i*t*4/s.components*s.byteLength;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qd(i){switch(i){case hn:case _c:return{byteLength:1,components:1};case ls:case vc:case xs:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ti:case ho:case Sn:return{byteLength:4,components:1};case xc:case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:yf,color_pars_vertex:bf,color_vertex:Ef,common:wf,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:$f,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:kf,fog_fragment:Hf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Kf,lights_phong_fragment:Jf,lights_phong_pars_fragment:jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:xp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:yp,normal_vertex:bp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Ip,dithering_fragment:Dp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:kp,skinbase_vertex:Hp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:$p,transmission_fragment:Zp,transmission_pars_fragment:Kp,uv_pars_fragment:Jp,uv_pars_vertex:jp,uv_vertex:Qp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:xm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:ym,meshphong_vert:bm,meshphong_frag:Em,meshphysical_vert:wm,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Um},mt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},an={basic:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ce([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ce([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ce([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ce([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ce([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ce([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ce([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ce([mt.lights,mt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};an.physical={uniforms:Ce([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ks={r:0,b:0,g:0},qn=new nn,Nm=new ce;function Fm(i,t,e,n,s,r,a){const o=new xt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const T=g(x);T===null?d(o,l):T&&T.isColor&&(d(T,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===fr)?(h===void 0&&(h=new $t(new bn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Fi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(_.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(qn)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==ie,(u!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new $t(new Bn(2,2),new Ze({name:"BackgroundMaterial",uniforms:Fi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==ie,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,_){x.getRGB(Ks,Ic(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:v,addToRenderList:m,dispose:b}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,A,D,U,N){let k=!1;const V=u(U,D,A);r!==V&&(r=V,c(r.object)),k=p(M,U,D,N),k&&g(M,U,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(M,A,D,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,D){const U=D.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let k=N[A.id];k===void 0&&(k={},N[A.id]=k);let V=k[U];return V===void 0&&(V=f(l()),k[U]=V),V}function f(M){const A=[],D=[],U=[];for(let N=0;N<e;N++)A[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,A,D,U){const N=r.attributes,k=A.attributes;let V=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){const dt=N[z];let Mt=k[z];if(Mt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(M,A,D,U){const N={},k=A.attributes;let V=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){let dt=k[z];dt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),N[z]=Mt,V++}r.attributes=N,r.attributesNum=V,r.index=U}function v(){const M=r.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function m(M){d(M,0)}function d(M,A){const D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),N[M]!==A&&(i.vertexAttribDivisor(M,A),N[M]=A)}function b(){const M=r.newAttributes,A=r.enabledAttributes;for(let D=0,U=A.length;D<U;D++)A[D]!==M[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function x(M,A,D,U,N,k,V){V===!0?i.vertexAttribIPointer(M,A,D,N,k):i.vertexAttribPointer(M,A,D,U,N,k)}function _(M,A,D,U){v();const N=U.attributes,k=D.getAttributes(),V=A.defaultAttributeValues;for(const Y in k){const z=k[Y];if(z.location>=0){let tt=N[Y];if(tt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const dt=tt.normalized,Mt=tt.itemSize,Bt=t.get(tt);if(Bt===void 0)continue;const Yt=Bt.buffer,Kt=Bt.type,qt=Bt.bytesPerElement,Z=Kt===i.INT||Kt===i.UNSIGNED_INT||tt.gpuType===ho;if(tt.isInterleavedBufferAttribute){const $=tt.data,pt=$.stride,yt=tt.offset;if($.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)d(z.location+St,$.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let St=0;St<z.locationSize;St++)m(z.location+St);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let St=0;St<z.locationSize;St++)x(z.location+St,Mt/z.locationSize,Kt,dt,pt*qt,(yt+Mt/z.locationSize*St)*qt,Z)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)d(z.location+$,tt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let $=0;$<z.locationSize;$++)x(z.location+$,Mt/z.locationSize,Kt,dt,Mt*qt,Mt/z.locationSize*$*qt,Z)}}else if(V!==void 0){const dt=V[Y];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(z.location,dt);break;case 3:i.vertexAttrib3fv(z.location,dt);break;case 4:i.vertexAttrib4fv(z.location,dt);break;default:i.vertexAttrib1fv(z.location,dt)}}}}b()}function T(){R();for(const M in n){const A=n[M];for(const D in A){const U=A[D];for(const N in U)h(U[N].object),delete U[N];delete A[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const D in A){const U=A[D];for(const N in U)h(U[N].object),delete U[N];delete A[D]}delete n[M.id]}function P(M){for(const A in n){const D=n[A];if(D[M.id]===void 0)continue;const U=D[M.id];for(const N in U)h(U[N].object),delete U[N];delete D[M.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Bm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==He&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!R)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function km(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Zn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,x=b*4;let _=d.clippingState||null;l.value=_,_=h(g,f,x,p);for(let T=0;T!==x;++T)_[T]=e[T];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Hm(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Ii:o===ya&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new od(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ei=4,El=[.125,.215,.35,.446,.526,.582],jn=20,jr=new Jc,wl=new xt;let Qr=null,ta=0,ea=0,na=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,Tl=[new I(-Kn,vi,0),new I(Kn,vi,0),new I(-vi,0,Kn),new I(vi,0,Kn),new I(0,Kn,-vi),new I(0,Kn,vi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vm=new I;class Al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Vm}=r;Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,ta,ea),this._renderer.xr.enabled=na,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:xs,format:He,colorSpace:Ni,depthBuffer:!1},s=Rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Wm(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,s,r){const l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(wl),u.toneMapping=Dn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new ki({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new $t(new bn,v);let d=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,d=!0):(v.color.copy(wl),d=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const T=this._cubeSize;Js(s,_*T,x>2?T:0,T,T),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tl[(s-r-1)%Tl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const d=[];let b=0;for(let P=0;P<jn;++P){const R=P/v,S=Math.exp(-R*R/2);d.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[s],T=3*_*(s>x-Ei?s-x+Ei:0),E=4*(this._cubeSize-_);Js(e,T,E,3*_,2*_),l.setRenderTarget(e),l.render(u,jr)}}function Gm(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+El.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ei?l=El[a-i+Ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,b=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){const P=E%3*2/3-1,R=E>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];b.set(S,v*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];_.set(M,d*g*E)}const T=new se;T.setAttribute("position",new cn(b,v)),T.setAttribute("uv",new cn(x,m)),T.setAttribute("faceIndex",new cn(_,d)),t.push(T),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rl(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wm(i,t,e){const n=new Float32Array(jn),s=new I(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Cl(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Pl(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===ya,h=l===Ii||l===Di;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Al(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Al(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let x=0,_=b.length;x<_;x+=3){const T=b[x+0],E=b[x+1],P=b[x+2];f.push(T,E,E,P,P,T)}}else if(g!==void 0){const b=g.array;v=g.version;for(let x=0,_=b.length/3-1;x<_;x+=3){const T=x+0,E=x+1,P=x+2;f.push(T,E,E,P,P,T)}}else return;const m=new(Tc(f)?Lc:Pc)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $m(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*v[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*T*4*u),P=new Ac(E,_,T,u);P.type=Sn,P.needsUpdate=!0;const R=x*4;for(let M=0;M<u;M++){const A=m[M],D=d[M],U=b[M],N=_*T*4*M;for(let k=0;k<A.count;k++){const V=k*R;p===!0&&(s.fromBufferAttribute(A,k),E[N+V+0]=s.x,E[N+V+1]=s.y,E[N+V+2]=s.z,E[N+V+3]=0),g===!0&&(s.fromBufferAttribute(D,k),E[N+V+4]=s.x,E[N+V+5]=s.y,E[N+V+6]=s.z,E[N+V+7]=0),v===!0&&(s.fromBufferAttribute(U,k),E[N+V+8]=s.x,E[N+V+9]=s.y,E[N+V+10]=s.z,E[N+V+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ct(_,T)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const th=new Le,Ll=new Oc(1,1),eh=new Ac,nh=new Wu,ih=new Uc,Il=[],Dl=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),Me(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),Me(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ul.set(n),i.uniformMatrix4fv(this.addr,!1,Ul),Me(e,n)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=wc,r=Ll):r=th,e.setTexture2D(t||r,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nh,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ih,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eh,s)}function _g(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||th,r[a])}function Ug(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nh,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ih,r[a])}function Fg(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eh,r[a])}function Og(i){switch(i){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return Sg;case 35674:return yg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ol(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){const n=i.name,s=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ol(e,c===void 0?new Bg(o,i,t):new zg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new kg(o),Ol(e,u)),e=u}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vg=37297;let Gg=0;function Wg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const zl=new Gt;function Xg(i){jt._getMatrix(zl,jt.workingColorSpace,i);const t=`mat3( ${zl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wg(i.getShaderSource(t),o)}else return r}function qg(i,t){const e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yg(i,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case au:e="ACESFilmic";break;case lu:e="AgX";break;case cu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new I;function $g(){jt.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qi(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(jg,t0)}const Qg=new Map;function t0(i,t){let e=Wt[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return no(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(e0,n0)}function n0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function o0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=i0(e),c=s0(e),h=r0(e),u=a0(e),f=o0(e),p=Zg(e),g=Kg(r),v=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),d.length>0&&(d+=`
`)):(m=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),d=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),a=no(a),a=Hl(a,e),a=Vl(a,e),o=no(o),o=Hl(o,e),o=Vl(o,e),a=Gl(a),o=Gl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=b+m+a,_=b+d+o,T=Bl(s,s.VERTEX_SHADER,x),E=Bl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(A){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(E)||"",k=D.trim(),V=U.trim(),Y=N.trim();let z=!0,tt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,E);else{const dt=kl(s,T,"vertex"),Mt=kl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+dt+`
`+Mt)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||Y==="")&&(tt=!1);tt&&(A.diagnostics={runnable:z,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(T),s.deleteShader(E),R=new ir(s,v),S=Jg(s,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Vg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u0(t),e.set(t,n)),n}}class u0{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}}function d0(i,t,e,n,s,r,a){const o=new Rc,l=new h0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,D,U){const N=D.fog,k=U.geometry,V=S.isMeshStandardMaterial?D.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),z=Y&&Y.mapping===fr?Y.image.height:null,tt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Bt=0;k.morphAttributes.position!==void 0&&(Bt=1),k.morphAttributes.normal!==void 0&&(Bt=2),k.morphAttributes.color!==void 0&&(Bt=3);let Yt,Kt,qt,Z;if(tt){const te=an[tt];Yt=te.vertexShader,Kt=te.fragmentShader}else Yt=S.vertexShader,Kt=S.fragmentShader,l.update(S),qt=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const $=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),yt=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,Ht=!!S.map,ee=!!S.matcap,L=!!Y,et=!!S.aoMap,J=!!S.lightMap,K=!!S.bumpMap,j=!!S.normalMap,ht=!!S.displacementMap,it=!!S.emissiveMap,ut=!!S.metalnessMap,zt=!!S.roughnessMap,Ot=S.anisotropy>0,C=S.clearcoat>0,y=S.dispersion>0,H=S.iridescence>0,X=S.sheen>0,nt=S.transmission>0,q=Ot&&!!S.anisotropyMap,Ct=C&&!!S.clearcoatMap,lt=C&&!!S.clearcoatNormalMap,Tt=C&&!!S.clearcoatRoughnessMap,At=H&&!!S.iridescenceMap,st=H&&!!S.iridescenceThicknessMap,vt=X&&!!S.sheenColorMap,Ut=X&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,gt=!!S.specularColorMap,Vt=!!S.specularIntensityMap,F=nt&&!!S.transmissionMap,ot=nt&&!!S.thicknessMap,ft=!!S.gradientMap,Et=!!S.alphaMap,rt=S.alphaTest>0,Q=!!S.alphaHash,Rt=!!S.extensions;let kt=Dn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=i.toneMapping);const oe={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Yt,fragmentShader:Kt,defines:S.defines,customVertexShaderID:qt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ni,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:ee,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:J,bumpMap:K,normalMap:j,displacementMap:f&&ht,emissiveMap:it,normalMapObjectSpace:j&&S.normalMapType===fu,normalMapTangentSpace:j&&S.normalMapType===_o,metalnessMap:ut,roughnessMap:zt,anisotropy:Ot,anisotropyMap:q,clearcoat:C,clearcoatMap:Ct,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:y,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:st,sheen:X,sheenColorMap:vt,sheenRoughnessMap:Ut,specularMap:Pt,specularColorMap:gt,specularIntensityMap:Vt,transmission:nt,transmissionMap:F,thicknessMap:ot,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:Q,combine:S.combine,mapUv:Ht&&v(S.map.channel),aoMapUv:et&&v(S.aoMap.channel),lightMapUv:J&&v(S.lightMap.channel),bumpMapUv:K&&v(S.bumpMap.channel),normalMapUv:j&&v(S.normalMap.channel),displacementMapUv:ht&&v(S.displacementMap.channel),emissiveMapUv:it&&v(S.emissiveMap.channel),metalnessMapUv:ut&&v(S.metalnessMap.channel),roughnessMapUv:zt&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:Ct&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(S.sheenRoughnessMap.channel),specularMapUv:Pt&&v(S.specularMap.channel),specularColorMapUv:gt&&v(S.specularColorMap.channel),specularIntensityMapUv:Vt&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:ot&&v(S.thicknessMap.channel),alphaMapUv:Et&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(j||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ht||Et),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===me,flipSided:S.side===Pe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(b(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const M=g[S.type];let A;if(M){const D=an[M];A=id.clone(D.uniforms)}else A=S.uniforms;return A}function T(S,M){let A;for(let D=0,U=h.length;D<U;D++){const N=h[D];if(N.cacheKey===M){A=N,++A.usedTimes;break}}return A===void 0&&(A=new l0(i,M,S,r),h.push(A)),A}function E(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:R}}function f0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ql(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||p0),n.length>1&&n.sort(f||Xl),s.length>1&&s.sort(f||Xl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function m0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ql,i.set(n,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new xt};break;case"SpotLight":e={position:new I,direction:new I,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v0=0;function x0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M0(i){const t=new g0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ce,a=new ce;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,b=0,x=0,_=0,T=0,E=0,P=0;c.sort(x0);for(let S=0,M=c.length;S<M;S++){const A=c[S],D=A.color,U=A.intensity,N=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],U);P++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,z=e.get(A);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=V,p++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(D).multiplyScalar(U),V.distance=N,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[v]=V;const Y=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,Y.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[v]=Y.matrix,A.castShadow){const z=e.get(A);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=k,_++}v++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(D).multiplyScalar(U),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const Y=A.shadow,z=e.get(A);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=V,g++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(U),V.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=P,n.version=v0++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const x=c[d];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Yl(i){const t=new M0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Yl(i),t.set(s,[o])):r>=a.length?(o=new Yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E0(i,t,e){let n=new yo;const s=new ct,r=new ct,a=new ge,o=new Yd({depthPacking:du}),l=new $d,c={},h=e.maxTextureSize,u={[Nn]:Pe,[Pe]:Nn,[me]:me},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:y0,fragmentShader:b0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new se;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let d=this.type;this.render=function(E,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(In),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=d!==vn&&this.type===vn,N=d===vn&&this.type!==vn;for(let k=0,V=E.length;k<V;k++){const Y=E[k],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||U===!0||N===!0){const Mt=this.type!==vn?{minFilter:Ge,magFilter:Ge}:{};z.map!==null&&z.map.dispose(),z.map=new ei(s.x,s.y,Mt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const dt=z.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Bt=z.getViewport(Mt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),D.viewport(a),z.updateMatrices(Y,Mt),n=z.getFrustum(),_(P,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===vn&&b(z,R),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,A)};function b(E,P){const R=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,R,p,v,null)}function x(E,P,R,S){let M=null;const A=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=M.uuid,U=P.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let k=N[U];k===void 0&&(k=M.clone(),N[U]=k,P.addEventListener("dispose",T)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,S===vn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=R}return M}function _(E,P,R,S,M){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=t.update(E),N=E.material;if(Array.isArray(N)){const k=U.groups;for(let V=0,Y=k.length;V<Y;V++){const z=k[V],tt=N[z.materialIndex];if(tt&&tt.visible){const dt=x(E,tt,S,M);E.onBeforeShadow(i,E,P,R,U,dt,z),i.renderBufferDirect(R,null,U,dt,E,z),E.onAfterShadow(i,E,P,R,U,dt,z)}}}else if(N.visible){const k=x(E,N,S,M);E.onBeforeShadow(i,E,P,R,U,k,null),i.renderBufferDirect(R,null,U,k,E,null),E.onAfterShadow(i,E,P,R,U,k,null)}}const D=E.children;for(let U=0,N=D.length;U<N;U++)_(D[U],P,R,S,M)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const w0={[pa]:ma,[ga]:xa,[_a]:Ma,[Li]:va,[ma]:pa,[xa]:ga,[Ma]:_a,[va]:Li};function T0(i,t){function e(){let F=!1;const ot=new ge;let ft=null;const Et=new ge(0,0,0,0);return{setMask:function(rt){ft!==rt&&!F&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){F=rt},setClear:function(rt,Q,Rt,kt,oe){oe===!0&&(rt*=kt,Q*=kt,Rt*=kt),ot.set(rt,Q,Rt,kt),Et.equals(ot)===!1&&(i.clearColor(rt,Q,Rt,kt),Et.copy(ot))},reset:function(){F=!1,ft=null,Et.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,ft=null,Et=null,rt=null;return{setReversed:function(Q){if(ot!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;const kt=rt;rt=null,this.setClear(kt)}},getReversed:function(){return ot},setTest:function(Q){Q?$(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Q){ft!==Q&&!F&&(i.depthMask(Q),ft=Q)},setFunc:function(Q){if(ot&&(Q=w0[Q]),Et!==Q){switch(Q){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Q}},setLocked:function(Q){F=Q},setClear:function(Q){rt!==Q&&(ot&&(Q=1-Q),i.clearDepth(Q),rt=Q)},reset:function(){F=!1,ft=null,Et=null,rt=null,ot=!1}}}function s(){let F=!1,ot=null,ft=null,Et=null,rt=null,Q=null,Rt=null,kt=null,oe=null;return{setTest:function(te){F||(te?$(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!F&&(i.stencilMask(te),ot=te)},setFunc:function(te,dn,sn){(ft!==te||Et!==dn||rt!==sn)&&(i.stencilFunc(te,dn,sn),ft=te,Et=dn,rt=sn)},setOp:function(te,dn,sn){(Q!==te||Rt!==dn||kt!==sn)&&(i.stencilOp(te,dn,sn),Q=te,Rt=dn,kt=sn)},setLocked:function(te){F=te},setClear:function(te){oe!==te&&(i.clearStencil(te),oe=te)},reset:function(){F=!1,ot=null,ft=null,Et=null,rt=null,Q=null,Rt=null,kt=null,oe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,b=null,x=null,_=null,T=null,E=null,P=new xt(0,0,0),R=0,S=!1,M=null,A=null,D=null,U=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=Y>=2);let tt=null,dt={};const Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Yt=new ge().fromArray(Mt),Kt=new ge().fromArray(Bt);function qt(F,ot,ft,Et){const rt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(F,Q),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<ft;Rt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return Q}const Z={};Z[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Li),K(!1),j(zo),$(i.CULL_FACE),et(In);function $(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function yt(F,ot){return u[F]!==ot?(i.bindFramebuffer(F,ot),u[F]=ot,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(F,ot){let ft=p,Et=!1;if(F){ft=f.get(ot),ft===void 0&&(ft=[],f.set(ot,ft));const rt=F.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Rt=rt.length;Q<Rt;Q++)ft[Q]=i.COLOR_ATTACHMENT0+Q;ft.length=rt.length,Et=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ft)}function Ht(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ee={[Jn]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};ee[kh]=i.MIN,ee[Hh]=i.MAX;const L={[Vh]:i.ZERO,[Gh]:i.ONE,[Wh]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function et(F,ot,ft,Et,rt,Q,Rt,kt,oe,te){if(F===In){v===!0&&(pt(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),F!==Oh){if(F!==m||te!==S){if((d!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),d=Jn,_=Jn),te)switch(F){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ho:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,x=null,T=null,E=null,P.set(0,0,0),R=0,m=F,S=te}return}rt=rt||ot,Q=Q||ft,Rt=Rt||Et,(ot!==d||rt!==_)&&(i.blendEquationSeparate(ee[ot],ee[rt]),d=ot,_=rt),(ft!==b||Et!==x||Q!==T||Rt!==E)&&(i.blendFuncSeparate(L[ft],L[Et],L[Q],L[Rt]),b=ft,x=Et,T=Q,E=Rt),(kt.equals(P)===!1||oe!==R)&&(i.blendColor(kt.r,kt.g,kt.b,oe),P.copy(kt),R=oe),m=F,S=!1}function J(F,ot){F.side===me?pt(i.CULL_FACE):$(i.CULL_FACE);let ft=F.side===Pe;ot&&(ft=!ft),K(ft),F.blending===Ai&&F.transparent===!1?et(In):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Et=F.stencilWrite;o.setTest(Et),Et&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function j(F){F!==Uh?($(i.CULL_FACE),F!==A&&(F===zo?i.cullFace(i.BACK):F===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),A=F}function ht(F){F!==D&&(V&&i.lineWidth(F),D=F)}function it(F,ot,ft){F?($(i.POLYGON_OFFSET_FILL),(U!==ot||N!==ft)&&(i.polygonOffset(ot,ft),U=ot,N=ft)):pt(i.POLYGON_OFFSET_FILL)}function ut(F){F?$(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function zt(F){F===void 0&&(F=i.TEXTURE0+k-1),tt!==F&&(i.activeTexture(F),tt=F)}function Ot(F,ot,ft){ft===void 0&&(tt===null?ft=i.TEXTURE0+k-1:ft=tt);let Et=dt[ft];Et===void 0&&(Et={type:void 0,texture:void 0},dt[ft]=Et),(Et.type!==F||Et.texture!==ot)&&(tt!==ft&&(i.activeTexture(ft),tt=ft),i.bindTexture(F,ot||Z[F]),Et.type=F,Et.texture=ot)}function C(){const F=dt[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(F){Yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function Ut(F){Kt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Kt.copy(F))}function Pt(F,ot){let ft=c.get(ot);ft===void 0&&(ft=new WeakMap,c.set(ot,ft));let Et=ft.get(F);Et===void 0&&(Et=i.getUniformBlockIndex(ot,F.name),ft.set(F,Et))}function gt(F,ot){const Et=c.get(ot).get(F);l.get(ot)!==Et&&(i.uniformBlockBinding(ot,Et,F.__bindingPointIndex),l.set(ot,Et))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,dt={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,b=null,x=null,_=null,T=null,E=null,P=new xt(0,0,0),R=0,S=!1,M=null,A=null,D=null,U=null,N=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:pt,bindFramebuffer:yt,drawBuffers:St,useProgram:Ht,setBlending:et,setMaterial:J,setFlipSided:K,setCullFace:j,setLineWidth:ht,setPolygonOffset:it,setScissorTest:ut,activeTexture:zt,bindTexture:Ot,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:At,texImage3D:st,updateUBOMapping:Pt,uniformBlockBinding:gt,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:X,texSubImage3D:nt,compressedTexSubImage2D:q,compressedTexSubImage3D:Ct,scissor:vt,viewport:Ut,reset:Vt}}function A0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):or("canvas")}function v(C,y,H){let X=1;const nt=Ot(C);if((nt.width>H||nt.height>H)&&(X=H/Math.max(nt.width,nt.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(X*nt.width),Ct=Math.floor(X*nt.height);u===void 0&&(u=g(q,Ct));const lt=y?g(q,Ct):u;return lt.width=q,lt.height=Ct,lt.getContext("2d").drawImage(C,0,0,q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+q+"x"+Ct+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,y,H,X,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=y;if(y===i.RED&&(H===i.FLOAT&&(q=i.R32F),H===i.HALF_FLOAT&&(q=i.R16F),H===i.UNSIGNED_BYTE&&(q=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.R8UI),H===i.UNSIGNED_SHORT&&(q=i.R16UI),H===i.UNSIGNED_INT&&(q=i.R32UI),H===i.BYTE&&(q=i.R8I),H===i.SHORT&&(q=i.R16I),H===i.INT&&(q=i.R32I)),y===i.RG&&(H===i.FLOAT&&(q=i.RG32F),H===i.HALF_FLOAT&&(q=i.RG16F),H===i.UNSIGNED_BYTE&&(q=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RG8UI),H===i.UNSIGNED_SHORT&&(q=i.RG16UI),H===i.UNSIGNED_INT&&(q=i.RG32UI),H===i.BYTE&&(q=i.RG8I),H===i.SHORT&&(q=i.RG16I),H===i.INT&&(q=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(q=i.RGB16UI),H===i.UNSIGNED_INT&&(q=i.RGB32UI),H===i.BYTE&&(q=i.RGB8I),H===i.SHORT&&(q=i.RGB16I),H===i.INT&&(q=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),H===i.UNSIGNED_INT&&(q=i.RGBA32UI),H===i.BYTE&&(q=i.RGBA8I),H===i.SHORT&&(q=i.RGBA16I),H===i.INT&&(q=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),y===i.RGBA){const Ct=nt?rr:jt.getTransfer(X);H===i.FLOAT&&(q=i.RGBA32F),H===i.HALF_FLOAT&&(q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(q=Ct===ie?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(C,y){let H;return C?y===null||y===ti||y===cs?H=i.DEPTH24_STENCIL8:y===Sn?H=i.DEPTH32F_STENCIL8:y===ls&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===cs?H=i.DEPTH_COMPONENT24:y===Sn?H=i.DEPTH_COMPONENT32F:y===ls&&(H=i.DEPTH_COMPONENT16),H}function T(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==Ne?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function E(C){const y=C.target;y.removeEventListener("dispose",E),R(y),y.isVideoTexture&&h.delete(y)}function P(C){const y=C.target;y.removeEventListener("dispose",P),M(y)}function R(C){const y=n.get(C);if(y.__webglInit===void 0)return;const H=C.source,X=f.get(H);if(X){const nt=X[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(C),Object.keys(X).length===0&&f.delete(H)}n.remove(C)}function S(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const H=C.source,X=f.get(H);delete X[y.__cacheKey],a.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let nt=0;nt<y.__webglFramebuffer[X].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[X][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,nt=H.length;X<nt;X++){const q=n.get(H[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(C)}let A=0;function D(){A=0}function U(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function N(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function k(C,y){const H=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,C,y);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function V(C,y){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Z(H,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function Y(C,y){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Z(H,C,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function z(C,y){const H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const tt={[Ui]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},dt={[Ge]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},Mt={[pu]:i.NEVER,[Mu]:i.ALWAYS,[mu]:i.LESS,[wc]:i.LEQUAL,[gu]:i.EQUAL,[xu]:i.GEQUAL,[_u]:i.GREATER,[vu]:i.NOTEQUAL};function Bt(C,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ne||y.magFilter===Er||y.magFilter===ws||y.magFilter===Mn||y.minFilter===Ne||y.minFilter===Er||y.minFilter===ws||y.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,dt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==ws&&y.minFilter!==Mn||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(C,y){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));const X=y.source;let nt=f.get(X);nt===void 0&&(nt={},f.set(X,nt));const q=N(y);if(q!==C.__cacheKey){nt[q]===void 0&&(nt[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[q].usedTimes++;const Ct=nt[C.__cacheKey];Ct!==void 0&&(nt[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(y)),C.__cacheKey=q,C.__webglTexture=nt[q].texture}return H}function Kt(C,y,H){return Math.floor(Math.floor(C/H)/y)}function qt(C,y,H,X){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,X,y.data);else{q.sort((st,vt)=>st.start-vt.start);let Ct=0;for(let st=1;st<q.length;st++){const vt=q[Ct],Ut=q[st],Pt=vt.start+vt.count,gt=Kt(Ut.start,y.width,4),Vt=Kt(vt.start,y.width,4);Ut.start<=Pt+1&&gt===Vt&&Kt(Ut.start+Ut.count-1,y.width,4)===gt?vt.count=Math.max(vt.count,Ut.start+Ut.count-vt.start):(++Ct,q[Ct]=Ut)}q.length=Ct+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let st=0,vt=q.length;st<vt;st++){const Ut=q[st],Pt=Math.floor(Ut.start/4),gt=Math.ceil(Ut.count/4),Vt=Pt%y.width,F=Math.floor(Pt/y.width),ot=gt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Vt,F,ot,ft,H,X,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Z(C,y,H){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const nt=Yt(C,y),q=y.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+H);const Ct=n.get(q);if(q.version!==Ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);const lt=jt.getPrimaries(jt.workingColorSpace),Tt=y.colorSpace===Ln?null:jt.getPrimaries(y.colorSpace),At=y.colorSpace===Ln||lt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let st=v(y.image,!1,s.maxTextureSize);st=zt(y,st);const vt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type);let Pt=x(y.internalFormat,vt,Ut,y.colorSpace,y.isVideoTexture);Bt(X,y);let gt;const Vt=y.mipmaps,F=y.isVideoTexture!==!0,ot=Ct.__version===void 0||nt===!0,ft=q.dataReady,Et=T(y,st);if(y.isDepthTexture)Pt=_(y.format===us,y.type),ot&&(F?e.texStorage2D(i.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Ut,null));else if(y.isDataTexture)if(Vt.length>0){F&&ot&&e.texStorage2D(i.TEXTURE_2D,Et,Pt,Vt[0].width,Vt[0].height);for(let rt=0,Q=Vt.length;rt<Q;rt++)gt=Vt[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,vt,Ut,gt.data);y.generateMipmaps=!1}else F?(ot&&e.texStorage2D(i.TEXTURE_2D,Et,Pt,st.width,st.height),ft&&qt(y,st,vt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Ut,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Pt,Vt[0].width,Vt[0].height,st.depth);for(let rt=0,Q=Vt.length;rt<Q;rt++)if(gt=Vt[rt],y.format!==He)if(vt!==null)if(F){if(ft)if(y.layerUpdates.size>0){const Rt=bl(gt.width,gt.height,y.format,y.type);for(const kt of y.layerUpdates){const oe=gt.data.subarray(kt*Rt/gt.data.BYTES_PER_ELEMENT,(kt+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,kt,gt.width,gt.height,1,vt,oe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,st.depth,vt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Pt,gt.width,gt.height,st.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,st.depth,vt,Ut,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Pt,gt.width,gt.height,st.depth,0,vt,Ut,gt.data)}else{F&&ot&&e.texStorage2D(i.TEXTURE_2D,Et,Pt,Vt[0].width,Vt[0].height);for(let rt=0,Q=Vt.length;rt<Q;rt++)gt=Vt[rt],y.format!==He?vt!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,vt,Ut,gt.data)}else if(y.isDataArrayTexture)if(F){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Pt,st.width,st.height,st.depth),ft)if(y.layerUpdates.size>0){const rt=bl(st.width,st.height,y.format,y.type);for(const Q of y.layerUpdates){const Rt=st.data.subarray(Q*rt/st.data.BYTES_PER_ELEMENT,(Q+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Ut,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,vt,Ut,st.data);else if(y.isData3DTexture)F?(ot&&e.texStorage3D(i.TEXTURE_3D,Et,Pt,st.width,st.height,st.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,vt,Ut,st.data);else if(y.isFramebufferTexture){if(ot)if(F)e.texStorage2D(i.TEXTURE_2D,Et,Pt,st.width,st.height);else{let rt=st.width,Q=st.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Pt,rt,Q,0,vt,Ut,null),rt>>=1,Q>>=1}}else if(Vt.length>0){if(F&&ot){const rt=Ot(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Pt,rt.width,rt.height)}for(let rt=0,Q=Vt.length;rt<Q;rt++)gt=Vt[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt,Ut,gt):e.texImage2D(i.TEXTURE_2D,rt,Pt,vt,Ut,gt);y.generateMipmaps=!1}else if(F){if(ot){const rt=Ot(st);e.texStorage2D(i.TEXTURE_2D,Et,Pt,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,Pt,vt,Ut,st);m(y)&&d(X),Ct.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function $(C,y,H){if(y.image.length!==6)return;const X=Yt(C,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const q=n.get(nt);if(nt.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+H);const Ct=jt.getPrimaries(jt.workingColorSpace),lt=y.colorSpace===Ln?null:jt.getPrimaries(y.colorSpace),Tt=y.colorSpace===Ln||Ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!At&&!st?vt[Q]=v(y.image[Q],!0,s.maxCubemapSize):vt[Q]=st?y.image[Q].image:y.image[Q],vt[Q]=zt(y,vt[Q]);const Ut=vt[0],Pt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),Vt=x(y.internalFormat,Pt,gt,y.colorSpace),F=y.isVideoTexture!==!0,ot=q.__version===void 0||X===!0,ft=nt.dataReady;let Et=T(y,Ut);Bt(i.TEXTURE_CUBE_MAP,y);let rt;if(At){F&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Vt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){rt=vt[Q].mipmaps;for(let Rt=0;Rt<rt.length;Rt++){const kt=rt[Rt];y.format!==He?Pt!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,kt.width,kt.height,Pt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Vt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,kt.width,kt.height,Pt,gt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Vt,kt.width,kt.height,0,Pt,gt,kt.data)}}}else{if(rt=y.mipmaps,F&&ot){rt.length>0&&Et++;const Q=Ot(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Pt,gt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,vt[Q].width,vt[Q].height,0,Pt,gt,vt[Q].data);for(let Rt=0;Rt<rt.length;Rt++){const oe=rt[Rt].image[Q].image;F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,oe.width,oe.height,Pt,gt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Vt,oe.width,oe.height,0,Pt,gt,oe.data)}}else{F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,gt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,Pt,gt,vt[Q]);for(let Rt=0;Rt<rt.length;Rt++){const kt=rt[Rt];F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Pt,gt,kt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Vt,Pt,gt,kt.image[Q])}}}m(y)&&d(i.TEXTURE_CUBE_MAP),q.__version=nt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function pt(C,y,H,X,nt,q){const Ct=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),Tt=x(H.internalFormat,Ct,lt,H.colorSpace),At=n.get(y),st=n.get(H);if(st.__renderTarget=y,!At.__hasExternalTextures){const vt=Math.max(1,y.width>>q),Ut=Math.max(1,y.height>>q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,q,Tt,vt,Ut,y.depth,0,Ct,lt,null):e.texImage2D(nt,q,Tt,vt,Ut,0,Ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,nt,st.__webglTexture,0,ht(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,nt,st.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const X=y.depthTexture,nt=X&&X.isDepthTexture?X.type:null,q=_(y.stencilBuffer,nt),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ht(y);it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{const X=y.textures;for(let nt=0;nt<X.length;nt++){const q=X[nt],Ct=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),Tt=x(q.internalFormat,Ct,lt,q.colorSpace),At=ht(y);H&&it(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Tt,y.width,y.height):it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);const nt=X.__webglTexture,q=ht(y);if(y.depthTexture.format===hs)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===us)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ht(C){const y=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",nt)};X.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=X}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const X=C.texture.mipmaps;X&&X.length>0?St(y.__webglFramebuffer[0],C):St(y.__webglFramebuffer,C)}else if(H){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[X],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,q)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(C,y,H){const X=n.get(C);y!==void 0&&pt(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ht(C)}function L(C){const y=C.texture,H=n.get(C),X=n.get(y);C.addEventListener("dispose",P);const nt=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)H.__webglFramebuffer[lt][Tt]=i.createFramebuffer()}else H.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)H.__webglFramebuffer[lt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let lt=0,Tt=nt.length;lt<Tt;lt++){const At=n.get(nt[lt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&it(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<nt.length;lt++){const Tt=nt[lt];H.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const At=r.convert(Tt.format,Tt.colorSpace),st=r.convert(Tt.type),vt=x(Tt.internalFormat,At,st,Tt.colorSpace,C.isXRRenderTarget===!0),Ut=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)pt(H.__webglFramebuffer[lt][Tt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else pt(H.__webglFramebuffer[lt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(y)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let lt=0,Tt=nt.length;lt<Tt;lt++){const At=nt[lt],st=n.get(At);let vt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,st.__webglTexture),Bt(vt,At),pt(H.__webglFramebuffer,C,At,i.COLOR_ATTACHMENT0+lt,vt,0),m(At)&&d(vt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),Bt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)pt(H.__webglFramebuffer[Tt],C,y,i.COLOR_ATTACHMENT0,lt,Tt);else pt(H.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,lt,0);m(y)&&d(lt),e.unbindTexture()}C.depthBuffer&&Ht(C)}function et(C){const y=C.textures;for(let H=0,X=y.length;H<X;H++){const nt=y[H];if(m(nt)){const q=b(C),Ct=n.get(nt).__webglTexture;e.bindTexture(q,Ct),d(q),e.unbindTexture()}}}const J=[],K=[];function j(C){if(C.samples>0){if(it(C)===!1){const y=C.textures,H=C.width,X=C.height;let nt=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),lt=y.length>1;if(lt)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<y.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,nt,i.NEAREST),l===!0&&(J.length=0,K.length=0,J.push(i.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(q),K.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function it(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function zt(C,y){const H=C.colorSpace,X=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ni&&H!==Ln&&(jt.getTransfer(H)===ie?(X!==He||nt!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=ee,this.setupRenderTarget=L,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=it}function R0(i,t){function e(n,s=Ln){let r;const a=jt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===vc)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===yc)return i.RGB;if(n===He)return i.RGBA;if(n===hs)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===po)return i.RED_INTEGER;if(n===Ec)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Za||n===Ka||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends zi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new L0,d={},b=e.getContextAttributes();let x=null,_=null;const T=[],E=[],P=new ct;let R=null;const S=new Ye;S.viewport=new ge;const M=new Ye;M.viewport=new ge;const A=[S,M],D=new jd;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=T[Z];return $===void 0&&($=new Xr,T[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=T[Z];return $===void 0&&($=new Xr,T[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=T[Z];return $===void 0&&($=new Xr,T[Z]=$),$.getHandSpace()};function k(Z){const $=E.indexOf(Z.inputSource);if($===-1)return;const pt=T[$];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||a),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<T.length;Z++){const $=E[Z];$!==null&&(E[Z]=null,T[Z].disconnect($))}U=null,N=null,m.reset();for(const Z in d)delete d[Z];t.setRenderTarget(x),p=null,f=null,u=null,s=null,_=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,yt=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=b.stencil?us:hs,yt=b.stencil?cs:ti);const Ht={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new ei(f.textureWidth,f.textureHeight,{format:He,type:hn,depthTexture:new Oc(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ei(p.framebufferWidth,p.framebufferHeight,{format:He,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let $=0;$<Z.removed.length;$++){const pt=Z.removed[$],yt=E.indexOf(pt);yt>=0&&(E[yt]=null,T[yt].disconnect(pt))}for(let $=0;$<Z.added.length;$++){const pt=Z.added[$];let yt=E.indexOf(pt);if(yt===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=E.length){E.push(pt),yt=Ht;break}else if(E[Ht]===null){E[Ht]=pt,yt=Ht;break}if(yt===-1)break}const St=T[yt];St&&St.connect(pt)}}const z=new I,tt=new I;function dt(Z,$,pt){z.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);const yt=z.distanceTo(tt),St=$.projectionMatrix.elements,Ht=pt.projectionMatrix.elements,ee=St[14]/(St[10]-1),L=St[14]/(St[10]+1),et=(St[9]+1)/St[5],J=(St[9]-1)/St[5],K=(St[8]-1)/St[0],j=(Ht[8]+1)/Ht[0],ht=ee*K,it=ee*j,ut=yt/(-K+j),zt=ut*-K;if($.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(zt),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ot=ee+ut,C=L+ut,y=ht-zt,H=it+(yt-zt),X=et*L/C*Ot,nt=J*L/C*Ot;Z.projectionMatrix.makePerspective(y,H,X,nt,Ot,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let $=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),D.near=M.near=S.near=$,D.far=M.far=S.far=pt,(U!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,N=D.far),D.layers.mask=Z.layers.mask|6,S.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const yt=Z.parent,St=D.cameras;Mt(D,yt);for(let Ht=0;Ht<St.length;Ht++)Mt(St[Ht],yt);St.length===2?dt(D,S,M):D.projectionMatrix.copy(S.projectionMatrix),Bt(Z,D,yt)};function Bt(Z,$,pt){pt===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return d[Z]};let Yt=null;function Kt(Z,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let yt=!1;pt.length!==D.cameras.length&&(D.cameras.length=0,yt=!0);for(let L=0;L<pt.length;L++){const et=pt[L];let J=null;if(p!==null)J=p.getViewport(et);else{const j=u.getViewSubImage(f,et);J=j.viewport,L===0&&(t.setRenderTargetTextures(_,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(_))}let K=A[L];K===void 0&&(K=new Ye,K.layers.enable(L),K.viewport=new ge,A[L]=K),K.matrix.fromArray(et.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(et.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),L===0&&(D.matrix.copy(K.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),yt===!0&&D.cameras.push(K)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const L=u.getDepthInformation(pt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<pt.length;L++){const et=pt[L].camera;if(et){let J=d[et];J||(J=new Bc,d[et]=J);const K=u.getCameraImage(et);J.sourceTexture=K}}}}for(let pt=0;pt<T.length;pt++){const yt=E[pt],St=T[pt];yt!==null&&St!==void 0&&St.update(yt,$,c||a)}Yt&&Yt(Z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const qt=new Qc;qt.setAnimationLoop(Kt),this.setAnimationLoop=function(Z){Yt=Z},this.dispose=function(){}}}const Yn=new nn,D0=new ce;function U0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ic(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),x=b.envMap,_=b.envMapRotation;x&&(m.envMap.value=x,Yn.copy(_),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const _=x.program;n.uniformBlockBinding(b,_)}function c(b,x){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(b,T);const E=t.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){const x=u();b.__bindingPointIndex=x;const _=i.createBuffer(),T=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],_=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,P=_.length;E<P;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,M=R.length;S<M;S++){const A=R[S];if(p(A,E,S,T)===!0){const D=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let k=0;k<U.length;k++){const V=U[k],Y=v(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+N,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,x,_,T){const E=b.value,P=x+"_"+_;if(T[P]===void 0)return typeof E=="number"||typeof E=="boolean"?T[P]=E:T[P]=E.clone(),!0;{const R=T[P];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[P]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(b){const x=b.uniforms;let _=0;const T=16;for(let P=0,R=x.length;P<R;P++){const S=Array.isArray(x[P])?x[P]:[x[P]];for(let M=0,A=S.length;M<A;M++){const D=S[M],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,k=U.length;N<k;N++){const V=U[N],Y=v(V),z=_%T,tt=z%Y.boundary,dt=z+tt;_+=tt,dt!==0&&T-dt<Y.storage&&(_+=T-dt),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Y.storage}}}const E=_%T;return E>0&&(_+=T-E),b.__size=_,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class F0{constructor(t={}){const{canvas:e=Ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=De;let E=0,P=0,R=null,S=-1,M=null;const A=new ge,D=new ge;let U=null;const N=new xt(0);let k=0,V=e.width,Y=e.height,z=1,tt=null,dt=null;const Mt=new ge(0,0,V,Y),Bt=new ge(0,0,V,Y);let Yt=!1;const Kt=new yo;let qt=!1,Z=!1;const $=new ce,pt=new I,yt=new ge,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ee(){return R===null?z:1}let L=n;function et(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",rt,!1),L===null){const O="webgl2";if(L=et(O,w),L===null)throw et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,K,j,ht,it,ut,zt,Ot,C,y,H,X,nt,q,Ct,lt,Tt,At,st,vt,Ut,Pt,gt,Vt;function F(){J=new qm(L),J.init(),Pt=new R0(L,J),K=new zm(L,J,t,Pt),j=new T0(L,J),K.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),ht=new Zm(L),it=new f0,ut=new A0(L,J,j,it,K,Pt,ht),zt=new Hm(_),Ot=new Xm(_),C=new tf(L),gt=new Om(L,C),y=new Ym(L,C,ht,gt),H=new Jm(L,y,C,ht),st=new Km(L,K,ut),lt=new km(it),X=new d0(_,zt,Ot,J,K,gt,lt),nt=new U0(_,it),q=new m0,Ct=new S0(J),At=new Fm(_,zt,Ot,j,H,p,l),Tt=new E0(_,H,K),Vt=new N0(L,ht,K,j),vt=new Bm(L,J,ht),Ut=new $m(L,J,ht),ht.programs=X.programs,_.capabilities=K,_.extensions=J,_.properties=it,_.renderLists=q,_.shadowMap=Tt,_.state=j,_.info=ht}F();const ot=new I0(_,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(V,Y,!1))},this.getSize=function(w){return w.set(V,Y)},this.setSize=function(w,O,G=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,Y=O,e.width=Math.floor(w*z),e.height=Math.floor(O*z),G===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*z,Y*z).floor()},this.setDrawingBufferSize=function(w,O,G){V=w,Y=O,z=G,e.width=Math.floor(w*G),e.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,O,G,W){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,G,W),j.viewport(A.copy(Mt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,O,G,W){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,O,G,W),j.scissor(D.copy(Bt).multiplyScalar(z).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){j.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){tt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let B=!1;if(R!==null){const at=R.texture.format;B=at===go||at===mo||at===po}if(B){const at=R.texture.type,_t=at===hn||at===ti||at===ls||at===cs||at===uo||at===fo,wt=At.getClearColor(),bt=At.getClearAlpha(),Dt=wt.r,Nt=wt.g,Lt=wt.b;_t?(g[0]=Dt,g[1]=Nt,g[2]=Lt,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Dt,v[1]=Nt,v[2]=Lt,v[3]=bt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),At.dispose(),q.dispose(),Ct.dispose(),it.dispose(),zt.dispose(),Ot.dispose(),H.dispose(),gt.dispose(),Vt.dispose(),X.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",sn),ot.removeEventListener("sessionend",Do),zn.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ht.autoReset,O=Tt.enabled,G=Tt.autoUpdate,W=Tt.needsUpdate,B=Tt.type;F(),ht.autoReset=w,Tt.enabled=O,Tt.autoUpdate=G,Tt.needsUpdate=W,Tt.type=B}function rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Q(w){const O=w.target;O.removeEventListener("dispose",Q),Rt(O)}function Rt(w){kt(w),it.remove(w)}function kt(w){const O=it.get(w).programs;O!==void 0&&(O.forEach(function(G){X.releaseProgram(G)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,B,at){O===null&&(O=St);const _t=B.isMesh&&B.matrixWorld.determinant()<0,wt=ch(w,O,G,W,B);j.setMaterial(W,_t);let bt=G.index,Dt=1;if(W.wireframe===!0){if(bt=y.getWireframeAttribute(G),bt===void 0)return;Dt=2}const Nt=G.drawRange,Lt=G.attributes.position;let Zt=Nt.start*Dt,ne=(Nt.start+Nt.count)*Dt;at!==null&&(Zt=Math.max(Zt,at.start*Dt),ne=Math.min(ne,(at.start+at.count)*Dt)),bt!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,bt.count)):Lt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,Lt.count));const fe=ne-Zt;if(fe<0||fe===1/0)return;gt.setup(B,W,wt,G,bt);let le,re=vt;if(bt!==null&&(le=C.get(bt),re=Ut,re.setIndex(le)),B.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*ee()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(B.isLine){let It=W.linewidth;It===void 0&&(It=1),j.setLineWidth(It*ee()),B.isLineSegments?re.setMode(L.LINES):B.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else B.isPoints?re.setMode(L.POINTS):B.isSprite&&re.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,he=B._multiDrawCounts,Jt=B._multiDrawCount,Fe=bt?C.get(bt).bytesPerElement:1,si=it.get(W).currentProgram.getUniforms();for(let Oe=0;Oe<Jt;Oe++)si.setValue(L,"_gl_DrawID",Oe),re.render(It[Oe]/Fe,he[Oe])}else if(B.isInstancedMesh)re.renderInstances(Zt,fe,B.count);else if(G.isInstancedBufferGeometry){const It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,he=Math.min(G.instanceCount,It);re.renderInstances(Zt,fe,he)}else re.render(Zt,fe)};function oe(w,O,G){w.transparent===!0&&w.side===me&&w.forceSinglePass===!1?(w.side=Pe,w.needsUpdate=!0,bs(w,O,G),w.side=Nn,w.needsUpdate=!0,bs(w,O,G),w.side=me):bs(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),d=Ct.get(G),d.init(O),x.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const W=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const wt=at[_t];oe(wt,G,B),W.add(wt)}else oe(at,G,B),W.add(at)}),d=x.pop(),W},this.compileAsync=function(w,O,G=null){const W=this.compile(w,O,G);return new Promise(B=>{function at(){if(W.forEach(function(_t){it.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){B(w);return}setTimeout(at,10)}J.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let te=null;function dn(w){te&&te(w)}function sn(){zn.stop()}function Do(){zn.start()}const zn=new Qc;zn.setAnimationLoop(dn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){te=w,ot.setAnimationLoop(w),w===null?zn.stop():zn.start()},ot.addEventListener("sessionstart",sn),ot.addEventListener("sessionend",Do),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,R),d=Ct.get(w,x.length),d.init(O),x.push(d),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Kt.setFromProjectionMatrix($,ln,O.reversedDepth),Z=this.localClippingEnabled,qt=lt.init(this.clippingPlanes,Z),m=q.get(w,b.length),m.init(),b.push(m),ot.enabled===!0&&ot.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Mr(at,O,-1/0,_.sortObjects)}Mr(w,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,dt),Ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ht&&At.addToRenderList(m,w),this.info.render.frame++,qt===!0&&lt.beginShadows();const G=d.state.shadowsArray;Tt.render(G,w,O),qt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(d.setupLights(),O.isArrayCamera){const at=O.cameras;if(B.length>0)for(let _t=0,wt=at.length;_t<wt;_t++){const bt=at[_t];No(W,B,w,bt)}Ht&&At.render(w);for(let _t=0,wt=at.length;_t<wt;_t++){const bt=at[_t];Uo(m,w,bt,bt.viewport)}}else B.length>0&&No(W,B,w,O),Ht&&At.render(w),Uo(m,w,O);R!==null&&P===0&&(ut.updateMultisampleRenderTarget(R),ut.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,O),gt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],qt===!0&&lt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Mr(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Kt.intersectsSprite(w)){W&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const _t=H.update(w),wt=w.material;wt.visible&&m.push(w,_t,wt,G,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Kt.intersectsObject(w))){const _t=H.update(w),wt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),yt.copy(_t.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(wt)){const bt=_t.groups;for(let Dt=0,Nt=bt.length;Dt<Nt;Dt++){const Lt=bt[Dt],Zt=wt[Lt.materialIndex];Zt&&Zt.visible&&m.push(w,_t,Zt,G,yt.z,Lt)}}else wt.visible&&m.push(w,_t,wt,G,yt.z,null)}}const at=w.children;for(let _t=0,wt=at.length;_t<wt;_t++)Mr(at[_t],O,G,W)}function Uo(w,O,G,W){const B=w.opaque,at=w.transmissive,_t=w.transparent;d.setupLightsView(G),qt===!0&&lt.setGlobalState(_.clippingPlanes,G),W&&j.viewport(A.copy(W)),B.length>0&&ys(B,O,G),at.length>0&&ys(at,O,G),_t.length>0&&ys(_t,O,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function No(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new ei(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?xs:hn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const at=d.state.transmissionRenderTarget[W.id],_t=W.viewport||A;at.setSize(_t.z*_.transmissionResolutionScale,_t.w*_.transmissionResolutionScale);const wt=_.getRenderTarget(),bt=_.getActiveCubeFace(),Dt=_.getActiveMipmapLevel();_.setRenderTarget(at),_.getClearColor(N),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&At.render(G);const Nt=_.toneMapping;_.toneMapping=Dn;const Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),qt===!0&&lt.setGlobalState(_.clippingPlanes,W),ys(w,G,W),ut.updateMultisampleRenderTarget(at),ut.updateRenderTargetMipmap(at),J.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ne=0,fe=O.length;ne<fe;ne++){const le=O[ne],re=le.object,It=le.geometry,he=le.material,Jt=le.group;if(he.side===me&&re.layers.test(W.layers)){const Fe=he.side;he.side=Pe,he.needsUpdate=!0,Fo(re,G,W,It,he,Jt),he.side=Fe,he.needsUpdate=!0,Zt=!0}}Zt===!0&&(ut.updateMultisampleRenderTarget(at),ut.updateRenderTargetMipmap(at))}_.setRenderTarget(wt,bt,Dt),_.setClearColor(N,k),Lt!==void 0&&(W.viewport=Lt),_.toneMapping=Nt}function ys(w,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=w.length;B<at;B++){const _t=w[B],wt=_t.object,bt=_t.geometry,Dt=_t.group;let Nt=_t.material;Nt.allowOverride===!0&&W!==null&&(Nt=W),wt.layers.test(G.layers)&&Fo(wt,O,G,bt,Nt,Dt)}}function Fo(w,O,G,W,B,at){w.onBeforeRender(_,O,G,W,B,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,O,G,W,w,at),B.transparent===!0&&B.side===me&&B.forceSinglePass===!1?(B.side=Pe,B.needsUpdate=!0,_.renderBufferDirect(G,O,W,B,w,at),B.side=Nn,B.needsUpdate=!0,_.renderBufferDirect(G,O,W,B,w,at),B.side=me):_.renderBufferDirect(G,O,W,B,w,at),w.onAfterRender(_,O,G,W,B,at)}function bs(w,O,G){O.isScene!==!0&&(O=St);const W=it.get(w),B=d.state.lights,at=d.state.shadowsArray,_t=B.state.version,wt=X.getParameters(w,B.state,at,O,G),bt=X.getProgramCacheKey(wt);let Dt=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?Ot:zt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Q),Dt=new Map,W.programs=Dt);let Nt=Dt.get(bt);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===_t)return Bo(w,wt),Nt}else wt.uniforms=X.getUniforms(w),w.onBeforeCompile(wt,_),Nt=X.acquireProgram(wt,bt),Dt.set(bt,Nt),W.uniforms=wt.uniforms;const Lt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Bo(w,wt),W.needsLights=uh(w),W.lightsStateVersion=_t,W.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function Oo(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Bo(w,O){const G=it.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function ch(w,O,G,W,B){O.isScene!==!0&&(O=St),ut.resetTextureUnits();const at=O.fog,_t=W.isMeshStandardMaterial?O.environment:null,wt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ni,bt=(W.isMeshStandardMaterial?Ot:zt).get(W.envMap||_t),Dt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,ne=!!G.morphAttributes.color;let fe=Dn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=_.toneMapping);const le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=le!==void 0?le.length:0,It=it.get(W),he=d.state.lights;if(qt===!0&&(Z===!0||w!==M)){const Te=w===M&&W.id===S;lt.setState(W,w,Te)}let Jt=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==he.state.version||It.outputColorSpace!==wt||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==bt||W.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Dt||It.vertexTangents!==Nt||It.morphTargets!==Lt||It.morphNormals!==Zt||It.morphColors!==ne||It.toneMapping!==fe||It.morphTargetsCount!==re)&&(Jt=!0):(Jt=!0,It.__version=W.version);let Fe=It.currentProgram;Jt===!0&&(Fe=bs(W,O,B));let si=!1,Oe=!1,Gi=!1;const ue=Fe.getUniforms(),We=It.uniforms;if(j.useProgram(Fe.program)&&(si=!0,Oe=!0,Gi=!0),W.id!==S&&(S=W.id,Oe=!0),si||M!==w){j.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(L,"projectionMatrix",w.projectionMatrix),ue.setValue(L,"viewMatrix",w.matrixWorldInverse);const Ie=ue.map.cameraPosition;Ie!==void 0&&Ie.setValue(L,pt.setFromMatrixPosition(w.matrixWorld)),K.logarithmicDepthBuffer&&ue.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Oe=!0,Gi=!0)}if(B.isSkinnedMesh){ue.setOptional(L,B,"bindMatrix"),ue.setOptional(L,B,"bindMatrixInverse");const Te=B.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ue.setValue(L,"boneTexture",Te.boneTexture,ut))}B.isBatchedMesh&&(ue.setOptional(L,B,"batchingTexture"),ue.setValue(L,"batchingTexture",B._matricesTexture,ut),ue.setOptional(L,B,"batchingIdTexture"),ue.setValue(L,"batchingIdTexture",B._indirectTexture,ut),ue.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(L,"batchingColorTexture",B._colorsTexture,ut));const Xe=G.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&st.update(B,G,Fe),(Oe||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,ue.setValue(L,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(We.envMap.value=bt,We.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(We.envMapIntensity.value=O.environmentIntensity),Oe&&(ue.setValue(L,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&hh(We,Gi),at&&W.fog===!0&&nt.refreshFogUniforms(We,at),nt.refreshMaterialUniforms(We,W,z,Y,d.state.transmissionRenderTarget[w.id]),ir.upload(L,Oo(It),We,ut)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(L,Oo(It),We,ut),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(L,"center",B.center),ue.setValue(L,"modelViewMatrix",B.modelViewMatrix),ue.setValue(L,"normalMatrix",B.normalMatrix),ue.setValue(L,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Te=W.uniformsGroups;for(let Ie=0,Sr=Te.length;Ie<Sr;Ie++){const kn=Te[Ie];Vt.update(kn,Fe),Vt.bind(kn,Fe)}}return Fe}function hh(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function uh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,G){const W=it.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),it.get(w.texture).__webglTexture=O,it.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const G=it.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const dh=L.createFramebuffer();this.setRenderTarget=function(w,O=0,G=0){R=w,E=O,P=G;let W=!0,B=null,at=!1,_t=!1;if(w){const bt=it.get(w);if(bt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)ut.setupRenderTarget(w);else if(bt.__hasExternalTextures)ut.rebindTextures(w,it.get(w.texture).__webglTexture,it.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(bt.__boundDepthTexture!==Lt){if(Lt!==null&&it.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(_t=!0);const Nt=it.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?B=Nt[O][G]:B=Nt[O],at=!0):w.samples>0&&ut.useMultisampledRTT(w)===!1?B=it.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[G]:B=Nt,A.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else A.copy(Mt).multiplyScalar(z).floor(),D.copy(Bt).multiplyScalar(z).floor(),U=Yt;if(G!==0&&(B=dh),j.bindFramebuffer(L.FRAMEBUFFER,B)&&W&&j.drawBuffers(w,B),j.viewport(A),j.scissor(D),j.setScissorTest(U),at){const bt=it.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,G)}else if(_t){const bt=O;for(let Dt=0;Dt<w.textures.length;Dt++){const Nt=it.get(w.textures[Dt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Dt,Nt.__webglTexture,G,bt)}}else if(w!==null&&G!==0){const bt=it.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(w,O,G,W,B,at,_t,wt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){j.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Dt=w.textures[wt],Nt=Dt.format,Lt=Dt.type;if(!K.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-B&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(O,G,W,B,Pt.convert(Nt),Pt.convert(Lt),at))}finally{const Dt=R!==null?it.get(R).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,W,B,at,_t,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt)if(O>=0&&O<=w.width-W&&G>=0&&G<=w.height-B){j.bindFramebuffer(L.FRAMEBUFFER,bt);const Dt=w.textures[wt],Nt=Dt.format,Lt=Dt.type;if(!K.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(O,G,W,B,Pt.convert(Nt),Pt.convert(Lt),0);const ne=R!==null?it.get(R).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,ne);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bu(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(Zt),L.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,G=0){const W=Math.pow(2,-G),B=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),_t=O!==null?O.x:0,wt=O!==null?O.y:0;ut.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,_t,wt,B,at),j.unbindTexture()};const fh=L.createFramebuffer(),ph=L.createFramebuffer();this.copyTextureToTexture=function(w,O,G=null,W=null,B=0,at=null){at===null&&(B!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=B,B=0):at=0);let _t,wt,bt,Dt,Nt,Lt,Zt,ne,fe;const le=w.isCompressedTexture?w.mipmaps[at]:w.image;if(G!==null)_t=G.max.x-G.min.x,wt=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Nt=G.min.y,Lt=G.isBox3?G.min.z:0;else{const Xe=Math.pow(2,-B);_t=Math.floor(le.width*Xe),wt=Math.floor(le.height*Xe),w.isDataArrayTexture?bt=le.depth:w.isData3DTexture?bt=Math.floor(le.depth*Xe):bt=1,Dt=0,Nt=0,Lt=0}W!==null?(Zt=W.x,ne=W.y,fe=W.z):(Zt=0,ne=0,fe=0);const re=Pt.convert(O.format),It=Pt.convert(O.type);let he;O.isData3DTexture?(ut.setTexture3D(O,0),he=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ut.setTexture2DArray(O,0),he=L.TEXTURE_2D_ARRAY):(ut.setTexture2D(O,0),he=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Jt=L.getParameter(L.UNPACK_ROW_LENGTH),Fe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),si=L.getParameter(L.UNPACK_SKIP_PIXELS),Oe=L.getParameter(L.UNPACK_SKIP_ROWS),Gi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);const ue=w.isDataArrayTexture||w.isData3DTexture,We=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Xe=it.get(w),Te=it.get(O),Ie=it.get(Xe.__renderTarget),Sr=it.get(Te.__renderTarget);j.bindFramebuffer(L.READ_FRAMEBUFFER,Ie.__webglFramebuffer),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let kn=0;kn<bt;kn++)ue&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(w).__webglTexture,B,Lt+kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(O).__webglTexture,at,fe+kn)),L.blitFramebuffer(Dt,Nt,_t,wt,Zt,ne,_t,wt,L.DEPTH_BUFFER_BIT,L.NEAREST);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||it.has(w)){const Xe=it.get(w),Te=it.get(O);j.bindFramebuffer(L.READ_FRAMEBUFFER,fh),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,ph);for(let Ie=0;Ie<bt;Ie++)ue?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,B,Lt+Ie):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,B),We?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,at,fe+Ie):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,at),B!==0?L.blitFramebuffer(Dt,Nt,_t,wt,Zt,ne,_t,wt,L.COLOR_BUFFER_BIT,L.NEAREST):We?L.copyTexSubImage3D(he,at,Zt,ne,fe+Ie,Dt,Nt,_t,wt):L.copyTexSubImage2D(he,at,Zt,ne,Dt,Nt,_t,wt);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else We?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(he,at,Zt,ne,fe,_t,wt,bt,re,It,le.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(he,at,Zt,ne,fe,_t,wt,bt,re,le.data):L.texSubImage3D(he,at,Zt,ne,fe,_t,wt,bt,re,It,le):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,at,Zt,ne,_t,wt,re,It,le.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,at,Zt,ne,le.width,le.height,re,le.data):L.texSubImage2D(L.TEXTURE_2D,at,Zt,ne,_t,wt,re,It,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,si),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gi),at===0&&O.generateMipmaps&&L.generateMipmap(he),j.unbindTexture()},this.initRenderTarget=function(w){it.get(w).__webglFramebuffer===void 0&&ut.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ut.setTextureCube(w,0):w.isData3DTexture?ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ut.setTexture2DArray(w,0):ut.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){E=0,P=0,R=null,j.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const sa=38;class O0{points=[];geometry=new se;vertices=new Ft(new Float32Array(sa*4*3),3);material=new ki({color:"#dafaf3",transparent:!0,opacity:.48,depthWrite:!1,side:me});mesh=new $t(this.geometry,this.material);constructor(t){const e=[];for(let n=0;n<sa-1;n++)for(const s of[0,2]){const r=n*4+s;e.push(r,r+1,r+4,r+4,r+1,r+5)}this.geometry.setAttribute("position",this.vertices),this.geometry.setIndex(e),this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t){const e=this.points.at(-1);for(e&&(t.alongM<e.along||t.elapsedS<e.time)&&(this.points.length=0);this.points.length&&t.elapsedS-this.points[0].time>1.28;)this.points.shift();if(t.state==="airborne"||t.wallRideActive){this.geometry.setDrawRange(0,0),this.points.length=0;return}(!this.points.length||t.elapsedS-this.points[this.points.length-1].time>=.032)&&(this.points.push({x:t.position.x,along:t.alongM,time:t.elapsedS,edge:Math.abs(t.railAngle)}),this.points.length>sa&&this.points.shift()),this.points.forEach((n,s)=>{const r=t.elapsedS-n.time,a=.045*Math.max(0,1-r/1.28)*(1+n.edge*4);for(let o=0;o<4;o++){const l=o<2?-1:1,c=n.x+l*(.17+r*.55)+(o%2?a:-a),h=t.wave.crossSectionAt(n.along,.78*c/t.wave.joinX,t.simulationTimeS);this.vertices.setXYZ(s*4+o,h.x,h.y+.042,h.z)}}),this.vertices.needsUpdate=!0,this.geometry.setDrawRange(0,Math.max(0,this.points.length-1)*12)}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}}class B0{eye=new I;focus=new I;desired=new I;target=new I;mix=0;wallFraming=0;ready=!1;reset(){this.ready=!1}update(t,e,n,s,r,a,o,l=!1){const c=e.z*t.direction,h=l?1:0;this.wallFraming=this.ready?ae.damp(this.wallFraming,h,7,o):h;const u=r?t.rideLineAt(c,e.x):null,f=u?Math.max(t.lipCoverageAt(c,e.x,a),t.lipCoverageAt(c-7.5,e.x,a)):0,p=Math.max(u?u.strength*(.32+.68*f):0,this.wallFraming);this.mix=this.ready?ae.damp(this.mix,p,6,o):p;const g=ae.lerp(5.2,Math.min(10,4+(u?.radius??2)*1.65),this.wallFraming),v=ae.lerp(7.5+Math.min(4,s*.22),g,this.mix),m=e.z-t.direction*v,d=e.x-n.x*2;if(this.desired.set(d,e.y+3.2+Math.min(2,s*.13),m),this.target.set(e.x+n.x*.45,e.y+1.4,e.z+t.direction*5),this.mix>.001){const b=m*t.direction,x=t.tubeCameraAt(b,a),_=t.barrelAt(b,0,0,a)?.radiusM??0,T=u?.lineX??e.x,E=ae.lerp(e.x,T,.55),P=u?.radius??2,R=x?1-ae.smoothstep(Math.abs(x.x-E),.16*P,.72*P):0,S=ae.smoothstep(_/P,.4,.85)*R,M=t.surfaceAt(b,E,a).position.y+Math.min(1.55,.38+.62*P),A=ae.lerp(E,x?.x??E,S),D=ae.lerp(M,x?.y??M,S);this.desired.x=ae.lerp(d,A,this.mix),this.desired.y=ae.lerp(this.desired.y,D,this.mix),this.target.x=ae.lerp(this.target.x,A-.8,this.mix);const U=5+2*this.mix,N=e.y+1.08,k=N+(N-this.desired.y)*U/v;if(this.target.y=ae.lerp(this.target.y,k,this.mix),this.target.z=e.z+t.direction*U,this.wallFraming>.001){const V=t.tubeCameraAt(c,a);if(V){const Y=x??V;this.desired.x=ae.lerp(this.desired.x,Y.x,this.wallFraming),this.desired.y=ae.lerp(this.desired.y,Y.y,this.wallFraming);const z=ae.lerp(V.x,e.x,.2),tt=ae.lerp(V.y,e.y,.2);this.target.x=ae.lerp(this.target.x,z+(z-Y.x)*U/v,this.wallFraming),this.target.y=ae.lerp(this.target.y,tt+(tt-Y.y)*U/v,this.wallFraming)}}}return this.ready?(this.eye.lerp(this.desired,1-Math.exp(-12*o)),this.focus.lerp(this.target,1-Math.exp(-10*o))):(this.eye.copy(this.desired),this.focus.copy(this.target),this.ready=!0),this.eye.z=m,this.mix}}const xi=(i,t)=>i===t?0:i?-1:1,$l=new Set(["w","a","s","d","space","shift","arrowleft","arrowright","r"]);function Zl(i){return i===" "||i==="Spacebar"?"space":i.toLowerCase()}class z0{held=new Set;blockedFlip=new Set;chargingS=null;releasedChargeS=null;press(t,e){const n=Zl(t);return $l.has(n)?(this.held.has(n)||(this.held.add(n),n==="space"&&e&&(this.chargingS=0)),!0):!1}release(t){const e=Zl(t);return $l.has(e)?(this.held.delete(e),this.blockedFlip.delete(e),e==="space"&&this.chargingS!==null&&(this.releasedChargeS=this.chargingS,this.chargingS=null),!0):!1}advance(t,e){this.chargingS!==null&&(e?this.chargingS=Math.min(.6,this.chargingS+t):this.chargingS=null)}beginAir(){this.blockedFlip.clear(),this.held.has("w")&&this.blockedFlip.add("w"),this.held.has("s")&&this.blockedFlip.add("s"),this.chargingS=null,this.releasedChargeS=null}frame(){const t=this.releasedChargeS;return this.releasedChargeS=null,{steer:xi(this.held.has("a"),this.held.has("d")),drive:xi(this.held.has("s"),this.held.has("w")),wallRide:this.held.has("shift")?xi(this.held.has("a"),this.held.has("d")):0,wallHeld:this.held.has("shift"),jumpChargeS:t,charge01:(this.chargingS??0)/.6,trick:{tucked:this.chargingS===null&&this.held.has("space"),spinAxis:xi(this.held.has("a"),this.held.has("d")),rollAxis:xi(this.held.has("arrowleft"),this.held.has("arrowright")),flipAxis:xi(this.held.has("s")&&!this.blockedFlip.has("s"),this.held.has("w")&&!this.blockedFlip.has("w"))}}}clear(){this.held.clear(),this.blockedFlip.clear(),this.chargingS=null,this.releasedChargeS=null}}const $n=i=>Number.isFinite(i)&&i>0,Mi=i=>Number.isFinite(i)&&i>=0&&i<=1;function k0(i){if(!i||!i.wave||!i.spawn||!i.visual||!["mavericks","pipeline","jbay","uluwatu","teahupoo","nazare"].includes(i.id)||typeof i.name!="string"||!i.name.trim()||typeof i.region!="string"||!i.region.trim()||!["easy","medium","hard","expert"].includes(i.difficulty)||!["left","right"].includes(i.wave.breakDirection)||!$n(i.wave.heightM)||!$n(i.wave.faceWidthM)||!$n(i.wave.rideLengthM)||!$n(i.wave.peelSpeedMps)||!Mi(i.spawn.along01)||!Mi(i.spawn.face01)||i.spawn.face01>.95||!Array.isArray(i.wave.barrelSections)||!Array.isArray(i.wave.launchSections)||![i.visual.waterColor,i.visual.foamColor,i.visual.skyColor].every(t=>typeof t=="string"&&t.trim().length>0))throw new Error("Invalid map definition: dimensions, spawn, or wave data");for(const t of i.wave.barrelSections)if(!Mi(t.start01)||!Mi(t.end01)||t.start01>=t.end01||!$n(t.radiusM)||t.closeAfterEntryS!==null&&!$n(t.closeAfterEntryS))throw new Error("Invalid map definition: barrel section");for(const t of i.wave.launchSections)if(!Mi(t.start01)||!Mi(t.end01)||t.start01>=t.end01||!$n(t.liftMultiplier))throw new Error("Invalid map definition: launch section");if(i.wave.barrelSections.some(t=>t.closeAfterEntryS!==null&&i.spawn.along01>=t.start01&&i.spawn.along01<=t.end01))throw new Error("Invalid map definition: spawn inside a closing barrel")}const H0=[1,.7,.4];class V0{score=0;bestCombo=0;pendingCombo=0;multiplier=1;pendingBase=0;actionCount=0;lastActionS=-1/0;families=new Map;creditedAirs=new Set;action(t,e,n){if(e<=0)return 0;this.actionCount>0&&n-this.lastActionS>3&&this.bank();const s=this.families.get(t)??0,r=e*H0[Math.min(s,2)];return this.families.set(t,s+1),this.actionCount++,this.pendingBase+=r,this.multiplier=Math.min(3,1+(this.actionCount-1)*.25),this.pendingCombo=Math.round(this.pendingBase*this.multiplier),this.lastActionS=n,this.pendingCombo}addAerial(t,e,n){if(this.creditedAirs.has(t.airId))return!1;if(this.creditedAirs.add(t.airId),t.quality==="wipeout")return!0;const s=Math.max(0,t.completedSpinDeg),r=Math.max(0,t.completedFlips);let a=(e?100:0)+s/180*200+r*600;return s>0&&r>0&&(a*=1.25),a*=t.quality==="sketchy"?.5:1,this.action(t.family,a,n),!0}addBarrel(t,e){t>=.3&&this.action("barrel",150*t+300,e)}addCutback(t,e){this.action("cutback",Math.round(180+240*Math.min(1,t)),e)}sustainBarrel(t){this.pendingCombo>0&&(this.lastActionS=t)}tick(t,e){return e&&t-this.lastActionS>=3?this.bank():0}bank(){const t=this.pendingCombo;return t>0&&(this.score+=t,this.bestCombo=Math.max(this.bestCombo,t)),this.clearPending(),t}losePending(){this.clearPending()}clearPending(){this.pendingBase=0,this.pendingCombo=0,this.actionCount=0,this.multiplier=1,this.lastActionS=-1/0,this.families.clear()}reset(){this.score=0,this.bestCombo=0,this.creditedAirs.clear(),this.clearPending()}}const Kl=()=>({longestBarrelS:0,largestLandedSpinDeg:0,bestCombo:0,cleanLandings:0,wipeouts:0}),xn=(i,t,e)=>Math.max(t,Math.min(e,i)),pe=i=>{const t=xn(i,0,1);return t*t*(3-2*t)};class G0{map;direction;joinX;phase;enteredAtS;peelAlongM=null;riderAlongM=0;cachedAlong=NaN;cachedTime=NaN;cachedPeel=null;cachedHeight=0;cachedLipLift=0;arc={along:NaN,time:NaN,peel:null,radius:0,joinY:0,reach:0,drop:0,angle:0};wallTrack=Array.from({length:35},()=>({x:0,y:0,distance:0,slope:0,progress:0}));constructor(t,e=0){this.map=t,this.phase=e,this.direction=t.wave.breakDirection==="right"?1:-1,this.joinX=t.wave.faceWidthM*.95,this.enteredAtS=t.wave.barrelSections.map(()=>null)}resetWave(){this.enteredAtS.fill(null),this.arc.along=NaN,this.peelAlongM=null,this.riderAlongM=0}setPeelPosition(t,e){let n=0;if(e!==void 0){const s=this.rideLineAt(t,e);s&&(n=12*s.sectionBlend*pe((s.lineX-e-.15*s.radius)/(1.15*s.radius))),this.peelAlongM!==null&&t>=this.riderAlongM&&(n=Math.max(n,this.riderAlongM-this.peelAlongM-.55*(t-this.riderAlongM)))}this.riderAlongM=t,this.peelAlongM=xn(t-n,0,this.map.wave.rideLengthM)}get peelPositionM(){return this.peelAlongM}along01(t){return xn(t/this.map.wave.rideLengthM,0,1)}distanceFromPeak(t){if(this.peelAlongM===null)return 0;const e=this.map.wave.rideLengthM,n=this.map.wave.barrelSections.find(o=>t<=o.end01*e+8),r=(n?n.start01*e+9:0)-this.peelAlongM,a=r>0?r*(1-pe((r-30)/52)):0;return t-this.peelAlongM-a}rideLineAt(t,e){const n=this.map.wave.rideLengthM,s=this.map.wave.peelSpeedMps*2.8,r=this.map.wave.barrelSections.find(p=>t>=p.start01*n-s&&t<p.end01*n);if(!r)return null;const a=this.joinX-r.radiusM,o=t-r.start01*n,l=pe((o+s)/s),c=pe((r.end01*n-t)/Math.min(14,(r.end01-r.start01)*n*.22)),h=Math.max(r.radiusM*1.55,this.map.wave.faceWidthM*.24),u=1-pe((Math.abs(a-e)-h*.4)/h),f=l*c;return{lineX:a,radius:r.radiusM,sectionBlend:f,strength:f*u}}peelingPeak(t,e,n){if(this.peelAlongM===null)return 1;const s=this.distanceFromPeak(t);return pe((s+30)/18)*(1-pe((s-e)/n))}whitewaterAt(t){if(this.peelAlongM===null||this.sectionAt(t)<0)return 0;const e=this.peelAlongM-t;return pe((e-11)/12)*(1-pe((e-65)/25))}faceHeightScale(t){if(this.map.id==="nazare")return 1-.86*pe((this.along01(t)-.72)/.28);if(this.map.wave.barrelSections.length===0)return 1;const e=this.along01(t);let n=.46;for(let s=0;s<this.map.wave.barrelSections.length;s++){const r=this.map.wave.barrelSections[s],a=Math.max(0,r.start01-.15),o=pe((e-a)/Math.max(.001,r.start01-a)),l=r.end01-this.exitTaper01(s)*1.25,c=Math.min(1,r.end01+.045),h=1-pe((e-l)/Math.max(.001,c-l));n=Math.max(n,.46+.54*o*h*this.peelingPeak(t,6,20))}return n}faceHeight(t,e,n){const s=xn(t/this.map.wave.faceWidthM,0,.95),r=.5*Math.pow(s,1.4)+.5*Math.pow(s,4.2);if(e!==this.cachedAlong||n!==this.cachedTime||this.peelAlongM!==this.cachedPeel){this.cachedAlong=e,this.cachedTime=n,this.cachedPeel=this.peelAlongM;const o=1+.035*Math.sin(e*.018-n*.55+this.phase)+.012*Math.sin(e*.052-n*.85+this.phase*.7);this.cachedHeight=this.map.wave.heightM*o*this.faceHeightScale(e),this.cachedLipLift=this.launchMultiplier(e)*Math.min(1.45,this.map.wave.heightM*.18)}const a=.045*Math.sin(e*.075-n*1.7+t*.4+this.phase)+.018*Math.sin(e*.21-n*2.8+t*.9);return this.cachedHeight*r+this.cachedLipLift*pe((s-.58)/.37)+a}surfaceAt(t,e,n){const s=xn(e,0,this.joinX),r=this.faceHeight(s,t,n),a=(this.faceHeight(xn(s+.02,0,this.joinX),t,n)-this.faceHeight(xn(s-.02,0,this.joinX),t,n))/.04,o=(this.faceHeight(s,t+.02,n)-this.faceHeight(s,t-.02,n))/.04,l=Math.hypot(a,1,o);return{position:{x:s,y:r,z:this.direction*t},normal:{x:-a/l,y:1/l,z:-this.direction*o/l}}}approachLength(t){return Math.min(this.map.wave.peelSpeedMps,(t.end01-t.start01)*this.map.wave.rideLengthM*.2)}sectionAt(t,e=!1){const n=this.along01(t);return this.map.wave.barrelSections.findIndex(s=>n<=s.end01&&(n>=s.start01||e&&t>=s.start01*this.map.wave.rideLengthM-this.approachLength(s)))}openFraction(t,e){const n=this.map.wave.barrelSections[t];if(!n)return 0;const s=this.enteredAtS[t];if(n.closeAfterEntryS===null||s===null)return 1;const r=Math.max(0,e-s),a=n.closeAfterEntryS;return 1-pe((r-a*.72)/(a*.28))}enterSection(t,e){this.enteredAtS[t]===null&&(this.enteredAtS[t]=e,this.arc.along=NaN)}exitTaper01(t){const e=this.map.wave.barrelSections[t];return e?Math.min(.1,(e.end01-e.start01)*.35):0}curlRadius(t,e,n=!1){const s=this.sectionAt(t,n);if(s<0)return .12;const r=this.map.wave.barrelSections[s],a=r.end01-r.start01,o=Math.min(.025,a*.18),l=this.exitTaper01(s),c=this.along01(t),h=this.approachLength(r)/this.map.wave.rideLengthM,u=pe((c-r.start01+h)/(o+h*.35))*pe((r.end01-c)/l),f=.92+.08*Math.sin(t*.09-e*.45+this.phase);return .12+r.radiusM*u*this.peelingPeak(t,n?4.8:.45,n?5.2:3.3)*this.openFraction(s,e)*f}lipArcAt(t,e){const n=this.arc;if(n.along===t&&n.time===e&&n.peel===this.peelAlongM)return n;const s=this.curlRadius(t,e,!0),r=this.faceHeight(this.joinX,t,e),a=this.whitewaterAt(t),o=Math.max(.2,this.joinX-s*2.55-a*Math.min(5,this.map.wave.faceWidthM*.27)),l=this.faceHeight(o,t,e)+Math.min(.42,s*.2),c=this.map.wave.barrelSections[this.sectionAt(t,!0)],h=c?this.approachLength(c):0,u=c?1-pe((t-c.start01*this.map.wave.rideLengthM+h)/(2.3*h)):0,f=this.peelAlongM===null?0:Math.max(u,pe((this.distanceFromPeak(t)+.8)/7.4));return n.along=t,n.time=e,n.peel=this.peelAlongM,n.radius=s,n.joinY=r,n.reach=o-this.joinX,n.drop=l-r,n.angle=Math.PI*(1-.89*f),n}crossSectionAt(t,e,n,s=!1){const r=this.direction*t;if(e<.78||e===.78&&!s){const E=this.joinX*xn(e/.78,0,1);return{x:E,y:this.faceHeight(E,t,n),z:r}}const a=xn((e-.78)/.22,0,1),{radius:o,joinY:l,reach:c,drop:h,angle:u}=this.lipArcAt(t,n),f=u*a,p=Math.sin(f),g=Math.cos(f),v=.5-.5*g,m=this.joinX+c*v+o*.15*p,d=l+h*v*v+o*1.34*p;if(!s)return{x:m,y:d,z:r};const b=c*.5*p+o*.15*g,x=h*v*p+o*1.34*g,T=(.1+o*.22)*(1-a*a)/Math.max(.001,Math.hypot(b,x));return{x:m+x*T,y:d-b*T,z:r}}backAt(t,e,n){if(e>=.5)return this.crossSectionAt(t,.78+.22*(e-.5)*2,n,!0);const s=this.crossSectionAt(t,.78,n,!0),r=e*2,a=this.joinX+this.map.wave.faceWidthM*3.2;return{x:a+(s.x-a)*r,y:-.2+(s.y+.2)*r*r,z:s.z}}lipCoverageAt(t,e,n){const s=this.sectionAt(t,!0);if(s<0)return 0;const r=this.crossSectionAt(t,1,n),a=this.joinX-r.x,o=this.map.wave.barrelSections[s].radiusM,l=Math.max(.35*o,this.joinX-e);return pe((a/l-.35)/.8)}tubeCameraAt(t,e){const n=this.barrelAt(t,0,0,e);if(!n||n.radiusM<.55)return null;const s=this.crossSectionAt(t,.78+.22*.48,e),r=this.faceHeight(s.x,t,e);return{x:s.x,y:r+(s.y-r)*.38,z:s.z}}wallContactAt(t,e,n){const s=this.wallTrack;let r=0;const a=(U,N)=>{const k=s[Math.max(0,r-1)],V=r?k.distance+Math.hypot(U-k.x,N-k.y):0,Y=s[r++];Y.x=U,Y.y=N,Y.distance=V},o=this.crossSectionAt(t,1,n),l=Math.max(.1,this.joinX-o.x),c=this.joinX-l*.4;for(let U=0;U<=6;U++){const N=c+(this.joinX-c)*U/6;a(N,this.faceHeight(N,t,n))}for(let U=1;U<=18;U++){const N=this.crossSectionAt(t,.78+.2024*U/18,n);a(N.x,N.y)}const h=s[r-1],u=o.x+.17*l,f=this.faceHeight(u,t,n),p=o.x+.045*l,g=this.faceHeight(p,t,n);for(let U=1;U<=6;U++){const N=U/6,k=1-N;a(k**3*h.x+3*k*k*N*o.x+3*k*N*N*p+N**3*u,k**3*h.y+3*k*k*N*o.y+3*k*N*N*g+N**3*f)}for(let U=1;U<=4;U++){const N=u+(c-u)*U/4;a(N,this.faceHeight(N,t,n))}const v=s[r-1].distance,m=U=>{const N=(U%v+v)%v;let k=1;for(;k<r-1&&s[k].distance<N;)k++;const V=s[k-1],Y=s[k],z=(N-V.distance)/Math.max(1e-4,Y.distance-V.distance);return{x:V.x+(Y.x-V.x)*z,y:V.y+(Y.y-V.y)*z}},d=Math.min(.55,v*.055),b=2*Math.PI;let x=0;for(let U=0;U<r;U++){const N=s[U],k=m(N.distance-d),V=m(N.distance+d);if(N.slope=Math.atan2(V.y-k.y,V.x-k.x),U){const Y=s[U-1];N.slope+=Math.round((Y.slope-N.slope)/b)*b,x+=N.distance-Y.distance+.13*v*Math.abs(N.slope-Y.slope)}N.progress=x}const T=(e/b-Math.floor(e/b))*x;let E=1;for(;E<r-1&&s[E].progress<T;)E++;const P=s[E-1],R=s[E],S=(T-P.progress)/Math.max(1e-4,R.progress-P.progress),M=P.slope+(R.slope-P.slope)*S,A={x:-Math.sin(M),y:Math.cos(M),z:0};return{position:{x:P.x+(R.x-P.x)*S,y:P.y+(R.y-P.y)*S,z:t*this.direction},normal:A}}barrelAt(t,e,n,s){const r=this.sectionAt(t);if(r<0)return null;const a=this.curlRadius(t,s)-.12,o=this.joinX-a,l=this.faceHeight(this.joinX,t,s)-a*.12,c=this.openFraction(r,s),h=Math.hypot(e-o,n-l),u=a>=.62&&h<=a*.9&&e<this.joinX-a*.18&&e>this.joinX-a*1.9&&e>=this.crossSectionAt(t,1,s).x;return{sectionIndex:r,inside:u,radiusM:a,openFraction:c,foam:Math.max(1-pe(c),this.whitewaterAt(t)),centerX:o,centerY:l}}launchMultiplier(t){const e=this.along01(t),n=this.map.wave.launchSections.find(r=>e>=r.start01&&e<=r.end01);if(!n)return 0;const s=(e-n.start01)/(n.end01-n.start01);return n.liftMultiplier*pe(s/.25)*pe((1-s)/.3)}}const W0=1/60,Re=(i,t,e)=>Math.max(t,Math.min(e,i)),Ci=i=>{const t=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/t,y:i.y/t,z:i.z/t}},Jl=(i,t)=>({x:i.y*t.z-i.z*t.y,y:i.z*t.x-i.x*t.z,z:i.x*t.y-i.y*t.x}),ra=(i,t)=>i.x*t.x+i.y*t.y+i.z*t.z,aa=i=>{const t=Re(i,0,1);return t*t*(3-2*t)};function Pn(i,t){const e=Ci({x:t.x-i.x*ra(t,i),y:t.y-i.y*ra(t,i),z:t.z-i.z*ra(t,i)}),n=Ci(Jl(i,e)),s=Ci(Jl(e,n)),r=n.x,a=s.x,o=e.x,l=n.y,c=s.y,h=e.y,u=n.z,f=s.z,p=e.z,g=r+c+p;let v;if(g>0){const d=Math.sqrt(g+1)*2;v={w:d/4,x:(f-h)/d,y:(o-u)/d,z:(l-a)/d}}else if(r>c&&r>p){const d=Math.sqrt(1+r-c-p)*2;v={w:(f-h)/d,x:d/4,y:(a+l)/d,z:(o+u)/d}}else if(c>p){const d=Math.sqrt(1+c-r-p)*2;v={w:(o-u)/d,x:(a+l)/d,y:d/4,z:(h+f)/d}}else{const d=Math.sqrt(1+p-r-c)*2;v={w:(l-a)/d,x:(o+u)/d,y:(h+f)/d,z:d/4}}const m=Math.hypot(v.x,v.y,v.z,v.w)||1;return{x:v.x/m,y:v.y/m,z:v.z/m,w:v.w/m}}let X0=0;const q0=i=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${i.toString(36)}-${++X0}`;class Y0{wave;score=new V0;map;mode;trick;emit;seed;metrics=Kl();position={x:0,y:0,z:0};previousPosition={x:0,y:0,z:0};orientation={x:0,y:0,z:0,w:1};heading={x:0,y:0,z:1};state="surfing";speedMps=0;lateralMps=0;verticalMps=0;alongM=0;simulationTimeS=0;elapsedS=0;barrelS=0;cleanExitS=0;jumpLoad=0;railAngle=0;landingPulse=0;skid=0;stance=0;edge=0;dropMomentum=0;airTuck=0;skidSide=0;turnStartFace=0;turnExtremeFace=0;turnDirection=0;driveS=0;resetLine(){this.turnStartFace=this.turnExtremeFace=this.position.x/this.map.wave.faceWidthM,this.turnDirection=this.driveS=this.dropMomentum=0,this.skid=this.skidSide=this.airTuck=this.railAngle=this.edge=this.stance=0}trackTurn(t){if(!this.turnDirection){const n=t-this.turnStartFace;if(Math.abs(n)<.055)return;this.turnDirection=Math.sign(n),this.turnExtremeFace=t;return}if((t-this.turnExtremeFace)*this.turnDirection>=0){this.turnExtremeFace=t;return}if(Math.abs(t-this.turnExtremeFace)<.068)return;const e=Math.abs(this.turnExtremeFace-this.turnStartFace);e>=.23&&!this.skid&&(this.turnDirection<0&&this.turnExtremeFace<.43?(this.driveS=3,this.trickLabel="Driving bottom turn"):this.turnDirection>0&&this.turnExtremeFace>.68&&(this.score.addCutback(e,this.elapsedS),this.trickLabel="Cutback")),this.turnStartFace=this.turnExtremeFace,this.turnExtremeFace=t,this.turnDirection*=-1}wallRideActive=!1;wallRideAngle=0;trickLabel="";currentRunId="";activeAirId=null;ended=!1;started=!1;airCounter=0;airQualified=!1;wipeoutRemainingS=0;barrelSectionIndex=null;wallRideAngularSpeed=0;wallRideElapsedS=0;wallRideSense=1;wallLaps=0;lastLapAngle=0;wallReturnAngle=null;wallRideEntry=null;lastHudS=-1/0;constructor(t,e,n,s,r){this.map=t,this.mode=e,this.seed=n,this.trick=s,this.emit=r,this.wave=new G0(t,n%(Math.PI*2)),this.reset()}get remainingS(){return this.mode==="score-run"&&this.map.id!=="nazare"&&this.map.id!=="mavericks"?Math.max(0,120-this.elapsedS):null}reset(){this.trick.reset(),this.wave.resetWave(),this.score.reset(),this.metrics=Kl(),this.cleanExitS=this.jumpLoad=this.railAngle=this.dropMomentum=this.landingPulse=this.skid=0,this.alongM=this.map.spawn.along01*this.map.wave.rideLengthM,this.wave.setPeelPosition(this.alongM),this.simulationTimeS=0,this.elapsedS=0,this.speedMps=Math.max(5,this.map.wave.peelSpeedMps*1.06),this.lateralMps=0,this.verticalMps=0;const t=this.map.spawn.face01*this.map.wave.faceWidthM;this.position=this.wave.surfaceAt(this.alongM,t,0).position,this.previousPosition={...this.position},this.resetLine(),this.heading={x:0,y:0,z:this.wave.direction},this.orientation=Pn(this.wave.surfaceAt(this.alongM,t,0).normal,this.heading),this.state="surfing",this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.trickLabel="",this.activeAirId=null,this.airCounter=0,this.airQualified=!1,this.wipeoutRemainingS=0,this.lastHudS=-1/0,this.currentRunId=q0(this.seed),this.ended=!1,this.started=!1}start(){this.started||this.ended||(this.started=!0,this.emit({type:"run-started",runId:this.currentRunId,mapId:this.map.id,mode:this.mode}),this.emitHud())}emitHud(){const t={runId:this.currentRunId,state:this.state,wallRiding:this.wallRideActive,score:this.score.score,pendingCombo:this.score.pendingCombo,multiplier:this.score.multiplier,speedMps:this.speedMps,barrelS:this.barrelS,cleanExitS:this.cleanExitS,distanceLeftM:Math.max(0,this.map.wave.rideLengthM-this.alongM),remainingS:this.remainingS,trickLabel:this.trickLabel,longestBarrelS:this.metrics.longestBarrelS,largestLandedSpinDeg:this.metrics.largestLandedSpinDeg,bestCombo:this.score.bestCombo,cleanLandings:this.metrics.cleanLandings,wipeouts:this.metrics.wipeouts};this.emit({type:"hud",data:t}),this.lastHudS=this.elapsedS}bank(){const t=this.score.bank();t>0&&this.emit({type:"score-banked",runId:this.currentRunId,points:t,total:this.score.score})}wipeout(t){this.score.losePending(),this.trick.reset(),this.activeAirId=null,this.barrelSectionIndex=null,this.barrelS=0,this.stopWallRide(),this.resetLine(),this.metrics.wipeouts++,this.state="wipeout",this.wipeoutRemainingS=1.35,this.speedMps=Math.max(3,this.speedMps*.4),this.lateralMps=0,this.trickLabel="Wipeout",this.emit({type:"wipeout",runId:this.currentRunId,reason:t})}travelHeading(){this.heading=Ci({x:this.lateralMps,y:0,z:this.wave.direction*Math.max(1,this.speedMps)})}stopWallRide(){this.wallRideActive=!1,this.wallRideAngle=0,this.wallRideAngularSpeed=0,this.wallRideElapsedS=0,this.wallRideEntry=null,this.wallRideSense=1,this.wallLaps=this.lastLapAngle=0,this.wallReturnAngle=null}updateWaveSpeed(t,e){const n=this.map.wave.peelSpeedMps,s=t.drive??0;this.stance+=(s-this.stance)*(1-Math.exp(-7*e));const r=this.position.x/this.map.wave.faceWidthM,a=.06*Math.sin(this.wave.along01(this.alongM)*Math.PI*4+this.wave.phase-this.simulationTimeS*.12),o=this.wallRideActive?0:this.lateralMps;this.dropMomentum*=Math.exp(-e/2.8),this.dropMomentum=Re(this.dropMomentum-o*r*e*1.1,0,4.8);const l=this.dropMomentum+Math.max(0,-o)*.28-Math.max(0,o)*.17,c=this.stance*(this.stance<0?.82:1.28),h=n*(1.19+r*.16+a+c-.07*this.edge**2)+l+3.4*Math.min(1,this.driveS),u=s<0?3.2:h<this.speedMps?.72:1.65;this.speedMps+=(h-this.speedMps)*(1-Math.exp(-u*e)),this.speedMps=Re(this.speedMps,n*.36,n*2.85)}creditBarrelExit(){this.cleanExitS=Math.max(this.cleanExitS,this.barrelS),this.score.addBarrel(this.barrelS,this.elapsedS)}canExitBarrel(){const t=this.barrelSectionIndex;if(t===null||this.barrelS<.3)return!1;const e=this.map.wave.barrelSections[t].end01;return this.wave.along01(this.alongM)>=e-this.wave.exitTaper01(t)&&this.wave.openFraction(t,this.simulationTimeS)>.24}leaveBarrelWall(){this.canExitBarrel()?(this.creditBarrelExit(),this.trickLabel="Barrel exit"):this.trickLabel="Barrel lost",this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.state="surfing";const t=this.wave.surfaceAt(this.alongM,Re(this.position.x,.2,this.wave.joinX-.08),this.simulationTimeS);this.position=t.position,this.orientation=Pn(t.normal,this.heading)}moveOnBarrelWall(t,e){this.updateWaveSpeed(t,e),this.alongM+=this.speedMps*e,this.wave.setPeelPosition(this.alongM);const n=this.wave.barrelAt(this.alongM,0,0,this.simulationTimeS);if(!n||n.sectionIndex!==this.barrelSectionIndex){this.leaveBarrelWall();return}if(n.openFraction<=.24){this.wipeout("The barrel closed");return}const r=(this.map.wave.barrelSections[n.sectionIndex].end01*this.map.wave.rideLengthM-this.alongM)/this.speedMps,a=(t.wallHeld||t.wallRide!==0)&&r>1.05;t.wallRide&&(this.wallRideSense=-t.wallRide*this.wave.direction);const o=2*Math.PI;a?this.wallReturnAngle=null:this.wallReturnAngle??=Math.round((this.wallRideAngle+.14*this.wallRideAngularSpeed)/o)*o;const l=4.15*Re(this.speedMps/(this.map.wave.peelSpeedMps*1.12),.7,1.3),c=(t.drive??0)<0,h=this.wallReturnAngle===null?c?0:this.wallRideSense*l:Re((this.wallReturnAngle-this.wallRideAngle)*6,-6,6);this.wallRideAngularSpeed+=(h-this.wallRideAngularSpeed)*(1-Math.exp(-11*e)),this.wallRideAngle+=this.wallRideAngularSpeed*e,this.wallRideElapsedS+=e;const u=this.wallRideAngle-this.lastLapAngle;Math.abs(u)>=o&&(this.lastLapAngle+=Math.sign(u)*o,this.wallLaps++),this.wallReturnAngle!==null?this.trickLabel="Carving back down":c?this.trickLabel="Holding wall line":this.wallLaps?this.trickLabel="Barrel loop ×"+this.wallLaps:this.trickLabel="Riding the wall";const f=this.wave.wallContactAt(this.alongM,this.wallRideAngle,this.simulationTimeS),p=aa(this.wallRideElapsedS/.28),g=this.wallRideEntry??this.position,v=g.x+(f.position.x-g.x)*p,m=this.wave.surfaceAt(this.alongM,v,this.simulationTimeS),d=p<1?this.wave.surfaceAt(this.alongM,f.position.x,this.simulationTimeS):m,b=p*aa(r/.72);this.position={x:v,y:m.position.y+(f.position.y-d.position.y)*b,z:f.position.z};const x=Ci({x:m.normal.x+(f.normal.x-m.normal.x)*b,y:m.normal.y+(f.normal.y-m.normal.y)*b,z:m.normal.z*(1-b)}),_=1-Math.exp(-16*e);if(this.lateralMps+=((v-this.previousPosition.x)/e-this.lateralMps)*_,this.verticalMps+=((this.position.y-this.previousPosition.y)/e-this.verticalMps)*_,this.heading=Ci({x:this.lateralMps,y:this.verticalMps,z:this.speedMps*this.wave.direction}),this.orientation=Pn(x,this.heading),this.barrelS+=e,this.metrics.longestBarrelS=Math.max(this.metrics.longestBarrelS,this.barrelS),this.state="barrel",t.jumpChargeS!==null){this.takeoff(t.jumpChargeS,x);return}this.wallReturnAngle!==null&&Math.abs(this.wallReturnAngle-this.wallRideAngle)<.045&&Math.abs(this.wallRideAngularSpeed)<.25&&(this.stopWallRide(),this.lateralMps=this.verticalMps=0,this.travelHeading(),this.position=m.position,this.orientation=Pn(m.normal,this.heading),this.trickLabel="In the barrel")}moveOnWave(t,e){if(this.wallRideActive){this.moveOnBarrelWall(t,e);return}if(t.wallHeld||t.wallRide){const T=this.wave.barrelAt(this.alongM,this.position.x,this.position.y+.85,this.simulationTimeS);if(T&&T.openFraction>.32&&T.radiusM>.6){const E=this.map.wave.barrelSections[T.sectionIndex],P=this.wave.crossSectionAt(this.alongM,1,this.simulationTimeS),R=P.y-this.wave.surfaceAt(this.alongM,P.x,this.simulationTimeS).position.y,S=Math.abs(this.position.x-T.centerX)<T.radiusM*.95,M=E.end01*this.map.wave.rideLengthM-this.alongM;if(S&&P.x<this.position.x&&R<Math.max(.8,E.radiusM*.6)&&M>this.speedMps*1.2){this.barrelSectionIndex!==T.sectionIndex&&(this.barrelSectionIndex=T.sectionIndex,this.barrelS=0,this.wave.enterSection(T.sectionIndex,this.simulationTimeS)),this.edge=this.railAngle=0,this.wallRideActive=!0,this.wallRideEntry={...this.position},this.moveOnBarrelWall(t,e);return}}}this.updateWaveSpeed(t,e);const n=this.wave.rideLineAt(this.alongM,this.position.x),s=n?.strength??0,a=this.state==="barrel"&&(t.wallHeld||t.wallRide!==0)?0:-t.steer*this.wave.direction,o=a*this.lateralMps<-1,l=o?17:a?11:6.8;this.edge+=(a-this.edge)*(1-Math.exp(-l*e));const c=.87-Math.max(0,this.stance)*.06-Math.min(0,this.stance)*.23,h=this.edge*c,u=1-.52*this.skid,f=this.speedMps*Math.tan(c);let p=this.speedMps*Math.tan(h)*(1-.44*s)*u;if(n&&a>=0){const T=Re((n.lineX-this.position.x)*2.3,-4.4,f);a===0?p+=(T-p)*s:p+=(Math.min(p,T)-p)*n.sectionBlend}const g=this.skidSide*this.wave.direction*this.skid*4.8;this.lateralMps+=(p+g-this.lateralMps)*(1-Math.exp(-(o?17:11)*e)),this.alongM+=this.speedMps*e;const v=this.position.x,m=Re(this.position.x+this.lateralMps*e,.2,this.wave.joinX-.08);(m<=.2||m>=this.wave.joinX-.08)&&(this.lateralMps=0),this.position=this.wave.surfaceAt(this.alongM,m,this.simulationTimeS).position,this.travelHeading();const d=this.wave.surfaceAt(this.alongM,m,this.simulationTimeS);this.orientation=Pn(d.normal,this.heading);const b=this.wave.barrelAt(this.alongM,m,this.position.y+.85,this.simulationTimeS);this.railAngle+=(-this.wave.direction*Re(.19*this.edge+.015*this.lateralMps,-.48,.48)*(1-.65*s)-this.railAngle)*(1-Math.exp(-9*e));const x=b&&this.map.wave.barrelSections[b.sectionIndex],_=x?this.wave.joinX-x.radiusM:0;if(b&&x&&b.openFraction<=.24&&Math.abs(m-_)<x.radiusM*.9){this.wipeout("The barrel closed");return}if(b?.inside?(this.wave.enterSection(b.sectionIndex,this.simulationTimeS),this.barrelSectionIndex!==b.sectionIndex&&(this.barrelSectionIndex=b.sectionIndex,this.barrelS=0),this.barrelS+=e,this.barrelS>=.3&&(this.state="barrel",this.trickLabel="In the barrel",this.metrics.longestBarrelS=Math.max(this.metrics.longestBarrelS,this.barrelS))):this.barrelSectionIndex!==null&&(this.canExitBarrel()?(this.creditBarrelExit(),this.trickLabel="Barrel exit"):this.barrelS>=.3&&(this.trickLabel="Barrel lost"),this.barrelS=0,this.barrelSectionIndex=null,this.state="surfing"),!b?.inside&&this.state==="barrel"&&(this.state="surfing"),b?.inside||this.trackTurn(m/this.map.wave.faceWidthM),t.jumpChargeS!==null)this.takeoff(t.jumpChargeS);else{const T=this.map.wave.faceWidthM*.86;v<T&&m>=T&&this.lateralMps>3&&this.wave.launchMultiplier(this.alongM)>.75&&!(t.charge01??0)&&!b?.inside&&this.takeoff(0)}}takeoff(t,e){this.canExitBarrel()&&this.creditBarrelExit(),this.stopWallRide();const n=this.wave.launchMultiplier(this.alongM),s=this.position.x/this.map.wave.faceWidthM,r=aa((s-.58)/.27),a=this.speedMps/this.map.wave.peelSpeedMps,o=this.driveS*.9+Math.max(0,this.lateralMps)*.25,l=r*Re(a,.4,1.65)*(1.1+n*3.25+o);this.driveS=0,this.turnDirection=0;const c=3.3+Math.min(.6,t)*6.3;e?(this.lateralMps+=e.x*c,this.verticalMps=this.verticalMps*.72+e.y*c):this.verticalMps=c+l,this.airQualified=t>=.1||l>0,this.activeAirId=`${this.currentRunId}:air:${++this.airCounter}`;const h=Re(-this.lateralMps*this.wave.direction/7,-1,1)*Re(t/.6,0,1);this.trick.beginAir({airId:this.activeAirId,orientation:this.orientation,loadedRail:h}),this.state="airborne",this.trickLabel="",this.barrelS=0,this.barrelSectionIndex=null}moveInAir(t,e){this.airTuck+=((t.trick.tucked?1:0)-this.airTuck)*(1-Math.exp(-14*e));const n=-t.steer*this.wave.direction*Math.min(2.2,this.speedMps*.1);this.lateralMps+=(n-this.lateralMps)*(1-Math.exp(-.62*e)),this.speedMps=Math.max(2.5,this.speedMps-.18*e),this.alongM+=this.speedMps*e;const s=Re(this.position.x+this.lateralMps*e,.2,this.wave.joinX-.08);this.verticalMps-=9.81*e,this.position={x:s,y:this.position.y+this.verticalMps*e,z:this.wave.direction*this.alongM},this.travelHeading();const r=this.trick.step(t.trick,e);this.orientation=r.orientation,this.trickLabel=r.label;const a=this.wave.direction*this.previousPosition.z,o=this.wave.surfaceAt(a,this.previousPosition.x,this.simulationTimeS-e).position.y,l=this.wave.surfaceAt(this.alongM,s,this.simulationTimeS).position.y;if(this.position.y>l||this.previousPosition.y<o-.02)return;let c=0,h=1;for(let v=0;v<9;v++){const m=(c+h)/2,d=a+(this.alongM-a)*m,b=this.previousPosition.x+(s-this.previousPosition.x)*m,x=this.previousPosition.y+(this.position.y-this.previousPosition.y)*m,_=this.wave.surfaceAt(d,b,this.simulationTimeS-e+e*m).position.y;x>_?c=m:h=m}const u=a+(this.alongM-a)*h,f=this.previousPosition.x+(s-this.previousPosition.x)*h,p=this.wave.surfaceAt(u,f,this.simulationTimeS);this.position=p.position,this.alongM=u;const g=this.trick.land({surfaceNormal:p.normal,travelDirection:this.heading,impactSpeedMps:Math.hypot(this.speedMps,this.lateralMps,this.verticalMps)});this.applyLanding(g)}applyLanding(t){if(t.airId!==this.activeAirId)throw new Error("Trick controller returned a landing for the wrong air");const e=this.score.addAerial(t,this.airQualified,this.elapsedS);if(this.activeAirId=null,!e){this.state="surfing",this.verticalMps=0;return}if(t.quality==="wipeout"){this.wipeout("Failed landing");return}this.resetLine(),this.state="surfing",this.landingPulse=1,this.skid=t.quality==="sketchy"?1:0,this.skidSide=this.skid?Re(t.slipSide??0,-1,1):0,this.verticalMps=0,this.speedMps*=Re(t.speedMultiplier,0,1),t.quality==="clean"&&this.metrics.cleanLandings++,this.metrics.largestLandedSpinDeg=Math.max(this.metrics.largestLandedSpinDeg,t.completedSpinDeg),this.trickLabel=t.label+(t.quality==="clean"?" · Clean landing":" · Sketchy landing");const n=this.wave.surfaceAt(this.alongM,this.position.x,this.simulationTimeS);this.orientation=Pn(n.normal,this.heading)}nextWave(){this.state==="airborne"&&(this.trick.reset(),this.activeAirId=null),this.state!=="wipeout"&&this.bank(),this.wave.resetWave(),this.alongM=this.map.spawn.along01*this.map.wave.rideLengthM,this.wave.setPeelPosition(this.alongM),this.lateralMps=0,this.verticalMps=0,this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.state="surfing",this.trickLabel="";const t=this.map.spawn.face01*this.map.wave.faceWidthM,e=this.wave.surfaceAt(this.alongM,t,this.simulationTimeS);this.position=e.position,this.previousPosition={...this.position},this.resetLine(),this.heading={x:0,y:0,z:this.wave.direction},this.orientation=Pn(e.normal,this.heading)}step(t,e=W0){if(!this.started||this.ended)return;const n=this.remainingS!==null?Math.min(e,120-this.elapsedS):e;if(n<=0){this.finish("timer");return}this.wave.setPeelPosition(this.alongM,this.wallRideActive?void 0:this.position.x),this.previousPosition={...this.position},this.simulationTimeS+=n,this.elapsedS+=n,this.landingPulse=Math.max(0,this.landingPulse-n*3.6);const s=t.steer*this.skidSide>.12;if(this.skid=Math.max(0,this.skid-n*(s?3.4:1.45)),this.driveS=Math.max(0,this.driveS-n),this.jumpLoad=t.charge01??0,this.state==="wipeout"){if(this.wipeoutRemainingS-=n,this.wipeoutRemainingS<=0){const a=Math.min(this.position.x,this.map.wave.faceWidthM*.45),o=this.wave.surfaceAt(this.alongM,a,this.simulationTimeS);this.position=o.position,this.resetLine(),this.orientation=Pn(o.normal,this.heading),this.state="surfing",this.trickLabel=""}}else this.state==="airborne"?this.moveInAir(t,n):this.moveOnWave(t,n);if(this.map.id==="nazare"&&this.mode==="score-run"){if(this.state==="wipeout"){this.finish("wipeout");return}if(this.alongM>=this.map.wave.rideLengthM){const a=this.position.x/this.map.wave.faceWidthM;this.finish(this.state==="surfing"&&a>=.1&&a<=.42?"ride-out":"missed-exit");return}}if(this.alongM>=this.map.wave.rideLengthM){if(this.map.id==="mavericks"&&this.mode==="score-run"){this.finish("ride-out");return}this.nextWave()}this.wave.setPeelPosition(this.alongM,this.wallRideActive?void 0:this.position.x),this.state==="barrel"&&this.score.sustainBarrel(this.elapsedS);const r=this.score.tick(this.elapsedS,this.state==="surfing"&&this.barrelSectionIndex===null);r>0&&this.emit({type:"score-banked",runId:this.currentRunId,points:r,total:this.score.score}),this.elapsedS-this.lastHudS>=.1&&this.emitHud(),this.remainingS===0&&this.finish("timer")}finish(t="player-ended"){if(!this.started||this.ended)return null;this.ended=!0,this.bank(),this.trick.reset(),this.activeAirId=null,this.barrelSectionIndex=null,this.barrelS=0,this.stopWallRide();const e={runId:this.currentRunId,mapId:this.map.id,mode:this.mode,score:this.score.score,durationS:this.elapsedS,reason:t,cleanExitS:this.cleanExitS,longestBarrelS:this.metrics.longestBarrelS,largestLandedSpinDeg:this.metrics.largestLandedSpinDeg,bestCombo:this.score.bestCombo,cleanLandings:this.metrics.cleanLandings,wipeouts:this.metrics.wipeouts};return this.emit({type:"run-ended",result:e}),e}}function Lo(){const t=new Uint8Array(65536);for(let n=0;n<128;n++)for(let s=0;s<128;s++){const r=s/128,a=n/128,o=Math.PI*2*(5*r+2*a),l=Math.PI*2*(11*r-6*a),c=Math.PI*2*(3*r-13*a),h=-.18*Math.cos(o)-.09*Math.cos(l)-.06*Math.cos(c),u=-.07*Math.cos(o)+.11*Math.cos(l)+.1*Math.cos(c),f=Math.hypot(h,u,1),p=(n*128+s)*4;t[p]=Math.round(255*(h/f*.5+.5)),t[p+1]=Math.round(255*(u/f*.5+.5)),t[p+2]=Math.round(255*(1/f*.5+.5)),t[p+3]=255}const e=new So(t,128,128,He);return e.wrapS=Ui,e.wrapT=Ui,e.magFilter=Ne,e.minFilter=Mn,e.generateMipmaps=!0,e.needsUpdate=!0,e}function sh(){const t=new Uint8Array(4096);for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=Math.hypot((s+.5-16)/16,(n+.5-16)/16),a=Math.pow(Math.max(0,1-r*r),2),o=(n*32+s)*4;t[o]=255,t[o+1]=255,t[o+2]=255,t[o+3]=Math.round(a*255)}const e=new So(t,32,32,He);return e.magFilter=Ne,e.minFilter=Ne,e.needsUpdate=!0,e}function _r(i,t=40){const e=[],n=[],s=[],r=(i.length-1)*4;for(let l=0;l<=r;l++){const c=Math.min(i.length-2,Math.floor(l/4)),h=l/4-c,u=i[Math.max(0,c-1)],f=i[c],p=i[c+1],g=i[Math.min(c+2,i.length-1)],v=_=>f[_]+.5*h*(p[_]-u[_]+h*(2*u[_]-5*f[_]+4*p[_]-g[_]+h*(3*f[_]-3*p[_]+g[_]-u[_]))),m=v(0),d=Math.max(.001,v(1)),b=Math.max(.001,v(2)),x=v(3);for(let _=0;_<=t;_++){const T=(_/t-.5)*2*Math.PI;if(e.push(d*Math.sin(T),m,x+b*Math.cos(T)),n.push(_/t,(m-i[0][0])/(i.at(-1)[0]-i[0][0])),l<r&&_<t){const E=l*(t+1)+_;s.push(E,E+1,E+t+1,E+1,E+t+2,E+t+1)}}}const a=new se;a.setIndex(s),a.setAttribute("position",new Ft(e,3)),a.setAttribute("uv",new Ft(n,2)),a.computeVertexNormals();const o=a.getAttribute("normal");for(let l=0;l<=r;l++){const c=l*(t+1),h=c+t,u=o.getX(c)+o.getX(h),f=o.getY(c)+o.getY(h),p=o.getZ(c)+o.getZ(h),g=Math.hypot(u,f,p)||1;o.setXYZ(c,u/g,f/g,p/g),o.setXYZ(h,u/g,f/g,p/g)}return a}const $0=()=>_r([[.2,.012,.025,-.1],[.29,.17,.2,-.09],[.48,.276,.3,-.07],[.73,.318,.314,-.042],[.98,.308,.286,.012],[1.12,.247,.222,.054],[1.25,.171,.18,.114],[1.38,.223,.223,.141],[1.49,.223,.218,.146],[1.57,.187,.184,.137],[1.635,.104,.112,.124],[1.66,.037,.041,.117],[1.665,.002,.003,.114]]),Z0=()=>_r([[-.73,.008,.012,-.25],[-.64,.024,.054,-.21],[-.44,.038,.1,-.14],[-.23,.049,.14,-.069],[-.085,.067,.14,-.012],[0,.077,.107,.015],[.055,.015,.022,.017]],20),K0=()=>_r([[0,.013,.01,-.27],[.045,.083,.018,-.23],[.105,.135,.036,-.15],[.165,.15,.052,-.06],[.22,.085,.053,0],[.23,.015,.016,.01]],24);function J0(){const i=[],t=[],e=[],n=new xt("#b76d21"),s=new xt("#ffc740"),r=new xt("#fff0a0"),a=new xt("#24303b"),o=new xt("#53606b"),l=new I,c=new I,h=new I,u=new I,f=new xt;function p(v,m,d,b,x){const _=i.length/3;h.set(d.z-v.z,0,v.x-d.x).normalize();for(let T=0;T<=7;T++){const E=T/7,P=1-E;l.copy(v).multiplyScalar(P*P).addScaledVector(m,2*P*E).addScaledVector(d,E*E),c.copy(m).sub(v).multiplyScalar(P).addScaledVector(d,E).addScaledVector(m,-E).normalize(),u.crossVectors(c,h).normalize();const R=b*(.44+.9*Math.sin(Math.PI*E**.82))*(1-.98*E);x?f.copy(n).lerp(s,Math.min(1,E*3)).lerp(r,E**1.4):f.copy(a).lerp(o,E);for(let S=0;S<4;S++){const M=S===0?R:S===2?-R:0,A=S===1?R*.41:S===3?-R*.28:0;i.push(l.x+h.x*M+u.x*A,l.y+u.y*A,l.z+h.z*M+u.z*A);const D=S===3?.7:1;if(t.push(f.r*D,f.g*D,f.b*D),T<7){const U=_+T*4+S,N=_+T*4+(S+1)%4;e.push(U,N,U+4,N,N+4,U+4)}}}}for(const v of[-1,1])for(let m=0;m<2;m++)for(let d=0;d<10;d++){const b=(d+m*.4)/10,x=Math.sin(d*2.3+v+m),_=new I(v*(.073+.135*Math.sin(b*Math.PI*.86)),1.54+.044*Math.sin(b*Math.PI),.322-.32*b),T=new I(v*(.24+.11*b),1.8-.065*b+m*.052,.244-.4*b),E=new I(v*(.32+.16*Math.sin(b*Math.PI)+.03*x),1.76-.16*b+m*.085+.052*x,.086-.4*b-.04*x);p(_,T,E,.031-.006*m,!0)}for(let v=0;v<11;v++){const m=(v-5)*.025,d=Math.sin(v*2.7);p(new I(m,1.612,.17+d*.02),new I(m*1.12,1.74,.11),new I(m*1.4,1.735+.054*d,-.09-.08*d),.029,!1)}const g=new se;return g.setIndex(e),g.setAttribute("position",new Ft(i,3)),g.setAttribute("color",new Ft(t,3)),g.translate(0,-1.55,-.12),g.computeVertexNormals(),g}function j0(){const e=new Uint8Array(393216),n=r=>Math.min(1,Math.max(0,r));for(let r=0;r<256;r++)for(let a=0;a<384;a++){const o=a/384,l=r/255,c=(o-.5)*Math.PI*2,h=Math.cos(c),u=Math.abs(Math.sin(c)),f=Math.floor(l*72),p=o*96+f%2*.5,g=Math.cos(p*Math.PI*2)*.5+.5,v=Math.sin((a*19+r*43)*1.131)*1.4,m=(Math.cos((l*72+g*.29)*Math.PI*2)*.5+.5)**5,d=n((h-(.09+.87*n((l-.62)/.16)+.48*n((.23-l)/.23)))*12)*n((.82-l)*20),b=.912+.034*u,x=n((.027-Math.abs(l-b))*90)*n((u-.26)*4)*n((h+.52)*3),_=4*g+5*m+v,T=(r*384+a)*4;for(const[E,P,R,S]of[[0,25,237,227],[1,33,231,154],[2,40,209,46]]){const M=P+(R-P)*d;e[T+E]=M+(S-M)*x+_*(1-d*.5)}e[T+3]=255}const s=new So(e,384,256);return s.colorSpace=De,s.wrapS=Ui,s.generateMipmaps=!0,s.magFilter=Ne,s.minFilter=Mn,s.needsUpdate=!0,s}function Q0(){const i=_r([[0,.09,.054,0],[.075,.091,.054,0],[.17,.065,.041,.003],[.255,.028,.025,.012],[.285,.004,.007,.032]],24);i.rotateX(Math.PI/2);const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++){const s=t.getZ(n),r=t.getY(n),a=s>.273||Math.abs(r+.013)<.004,o=new xt(a?"#713f2b":r<0?"#ce6933":"#ef963d");e.push(o.r,o.g,o.b)}return i.setAttribute("color",new Ft(e,3)),i}function t_(){const i=new Ro;i.moveTo(-.05,-.07),i.quadraticCurveTo(-.08,.015,-.115,.135),i.quadraticCurveTo(-.064,.111,-.008,.205),i.quadraticCurveTo(.045,.118,.108,.153),i.quadraticCurveTo(.067,.006,.043,-.07),i.closePath();const t=new mr(i,{depth:.021,bevelEnabled:!0,bevelSegments:2,bevelSize:.009,bevelThickness:.007});return t.rotateX(Math.PI/2),t}function e_(){const i=[],t=[],e=[],n=new xt("#c75637"),s=new xt("#ffca89"),r=new xt;for(let o=0;o<=5;o++){const l=o/5;for(let c=0;c<=32;c++){const h=(c/32-.5)*2.38,u=.5+.5*Math.cos(h*23),f=.006+l*(.105+.006*u);if(i.push(Math.sin(h)*f,-Math.cos(h)*f,Math.sin(l*Math.PI)*.014+u*.007*l),r.copy(n).lerp(s,.17+.5*u+.22*l),t.push(r.r,r.g,r.b),o<5&&c<32){const p=o*33+c;e.push(p,p+33,p+1,p+1,p+33,p+34)}}}const a=new se;return a.setIndex(e),a.setAttribute("position",new Ft(i,3)),a.setAttribute("color",new Ft(t,3)),a.computeVertexNormals(),a}function jl(i,t,e,n=!1){return new Ze({side:me,vertexColors:!0,uniforms:{sea:{value:i},sky:{value:new xt(t)},clock:{value:0},rippleMap:{value:e},curtain:{value:n?1:0}},vertexShader:`
      varying vec3 vWorld, vNormalWorld, vTint;
      varying vec2 sheet;
      void main() {
        vec4 world = modelMatrix * vec4(position,1.);
        vWorld = world.xyz;
        vNormalWorld = mat3(modelMatrix) * normal;
        vTint = color;
        sheet = uv;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
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
        float crestLight=curtain*smoothstep(.78,.86,sheet.x)*(.15+.64*rim) + .12*smoothstep(.54,.78,sheet.x);
        float band=.5+.5*sin(st.x*24.+4.5*a.x + 2.8*b.y + sheet.x*10. - clock*.9);
        float filament=pow(band,5.) * smoothstep(-.24,.26,a.y);
        float lightThrough=clamp(crestLight*(.78 + a.x*.40 + filament*.32),0.,1.);
        vec3 transmitted=mix(sea*.48 + vTint*.34,vec3(.045,.50,.37),lightThrough);
        transmitted+=vec3(.028,.085,.067)*filament*(.22+.78*curtain);
        vec3 sunDir=normalize(vec3(-.42,.55,.68));
        float glint=pow(max(0.,dot(reflected,sunDir)),80.);
        vec3 water=mix(transmitted,reflectedSky,fresnel)+glint*vec3(.82,.79,.67)*.72;
        float foam=smoothstep(.19,.76,dot(vTint,vec3(.21,.72,.07)));
        float streak = smoothstep(.02,.23,b.x + a.y*.65);
        water=mix(water,vec3(.76,.88,.85),foam*(.44+.52*streak));
        float haze=smoothstep(150.,700.,distance(cameraPosition,vWorld));
        gl_FragColor=vec4(mix(water,sky,haze),1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function Ql(i){return new Ze({vertexColors:!0,side:me,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{clock:{value:0},tip:{value:i?1:0}},vertexShader:`
      varying vec3 p;
      varying float across, breaking;
      void main(){p=(modelMatrix*vec4(position,1.)).xyz;across=uv.x;breaking=color.r;
        gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`
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
      }`})}function n_(i){const t=new Ze({side:Pe,depthWrite:!1,depthTest:!1,uniforms:{horizon:{value:new xt(i)}},vertexShader:`
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }`,fragmentShader:`
      uniform vec3 horizon;
      varying vec3 direction;
      void main() {
        vec3 ray = normalize(direction);
        float elevation = smoothstep(-.035, .75, ray.y);
        vec3 sky = mix(horizon, horizon * vec3(.38, .64, .86), elevation);
        float sunlight = max(0., dot(ray, normalize(vec3(-.42, .55, .68))));
        sky += vec3(.20, .15, .09) * pow(sunlight, 18.) +
          vec3(.82, .78, .65) * smoothstep(.99972, .99995, sunlight);
        gl_FragColor = vec4(sky, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new $t(new $e(1100,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,e}class i_{mesh;backMesh;lipMesh;lipFoam;impactFoam;curlSpray;rows=140;sampleRows=new Float32Array(this.rows+1);faceColumns=28;lipColumns=28;backColumns=30;base;foam;wave;waterNormal;sprayTexture;constructor(t,e,n){this.wave=t,this.base=new xt(e),this.foam=new xt(n),this.waterNormal=Lo();const s=t.map.visual.skyColor,r=jl(this.base,s,this.waterNormal);this.mesh=new $t(this.makeSheet(this.faceColumns,0,.78),r),this.backMesh=new $t(this.makeSheet(this.backColumns),r),this.lipMesh=new $t(this.makeSheet(this.lipColumns,.78,1),jl(this.base,s,this.waterNormal,!0)),this.lipFoam=new $t(this.makeSheet(4,.965,1),Ql(!0)),this.impactFoam=new $t(this.makeSheet(4),Ql(!1));for(const l of[this.mesh,this.backMesh,this.lipMesh,this.lipFoam,this.impactFoam])l.frustumCulled=!1;this.lipFoam.renderOrder=1;const a=new se;a.setAttribute("position",new Ft(new Float32Array(480*3),3)),this.sprayTexture=sh();const o=new bo({color:n,size:.13,map:this.sprayTexture,alphaTest:.03,transparent:!0,opacity:.72,depthWrite:!1});this.curlSpray=new Fc(a,o),this.curlSpray.frustumCulled=!1,this.update(0)}makeSheet(t,e=0,n=1){const s=new se,r=(this.rows+1)*(t+1);s.setAttribute("position",new Ft(new Float32Array(r*3),3)),s.setAttribute("color",new Ft(new Float32Array(r*3),3));const a=new Float32Array(r*2);for(let l=0;l<=this.rows;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c;a[h*2]=e+(n-e)*c/t,a[h*2+1]=l/this.rows}s.setAttribute("uv",new Ft(a,2));const o=[];for(let l=0;l<this.rows;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;o.push(h,u,h+1,u,u+1,h+1)}return s.setIndex(o),s}alongSamples(){const t=this.sampleRows,e=this.wave.map.wave.rideLengthM,n=this.wave.peelPositionM;if(n===null){for(let g=0;g<=this.rows;g++)t[g]=e*g/this.rows;return t}const s=Math.max(0,n-36),r=Math.min(e,n+28),a=Math.max(s,n-7),o=Math.min(r,n+7),l=96,c=this.rows-l,h=s,u=e-r,f=h===0?0:u===0?c:Math.max(1,Math.min(c-1,Math.round(c*h/(h+u)))),p=c-f;for(let g=0;g<=this.rows;g++)if(g<=f)t[g]=f===0?0:s*g/f;else if(g<=f+l){const v=g-f;v<=28?t[g]=s+(a-s)*v/28:v<=78?t[g]=a+(o-a)*(v-28)/50:t[g]=o+(r-o)*(v-78)/18}else t[g]=r+(e-r)*(g-f-l)/Math.max(1,p);return t}updateSheet(t,e,n,s,r,a){const o=t.getAttribute("position"),l=t.getAttribute("color"),c=t.getAttribute("uv"),h=new xt;for(let u=0;u<=this.rows;u++){const f=a[u],p=this.wave.barrelAt(f,0,0,r),g=this.wave.whitewaterAt(f),v=this.wave.crossSectionAt(f,1,r).x;for(let m=0;m<=e;m++){const d=n+(s-n)*m/e,b=u*(e+1)+m,x=this.wave.crossSectionAt(f,d,r);o.setXYZ(b,x.x,x.y,x.z),c.setXY(b,d,f/this.wave.map.wave.rideLengthM);const _=.78+.22*Math.sin(f*.19-r*2.1+d*13),T=Math.max(0,(d-.78)/.22),E=Math.pow(Math.max(0,(T-.7)/.3),1.1)*_,P=(p?.foam??0)*Math.max(0,(d-.66)/.34),S=1-Math.min(1,(p?.radiusM??0)/1.4)*.38*Math.sin(Math.PI*T),M=Math.min(1,d/.78),A=d<.78?.68+.32*M:1,D=d<.78?Math.pow(M,3.5)*.16:0,U=Math.exp(-Math.pow((d-.79)/.023,2))*.19,N=d<.78?Math.pow(Math.max(0,Math.sin(f*.19-r*1.5+M*22+Math.sin(f*.035)*1.4)),12)*(.03+.12*M):0,k=d<.78?Math.exp(-Math.pow((x.x-v)/.85,2))*Math.min(.3,.1+(p?.radiusM??0)*.04):0,V=g*(d<.78?Math.pow(M,.9)*(.38+.18*Math.sin(f*.31-r*3.2+M*18)):.52+.32*T);h.copy(this.base).multiplyScalar(S*A).lerp(this.foam,Math.min(.97,E*.86+P*.54+U+N+k+D+V)),l.setXYZ(b,h.r,h.g,h.b)}}o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,t.computeVertexNormals()}update(t){for(const f of[this.mesh,this.lipMesh,this.lipFoam,this.impactFoam])f.material.uniforms.clock.value=t;const e=this.alongSamples();this.updateSheet(this.mesh.geometry,this.faceColumns,0,.78,t,e),this.updateSheet(this.lipMesh.geometry,this.lipColumns,.78,1,t,e);const n=this.lipFoam.geometry.getAttribute("position"),s=this.lipFoam.geometry.getAttribute("color"),r=this.impactFoam.geometry.getAttribute("color"),a=this.impactFoam.geometry.getAttribute("position"),o=this.backMesh.geometry,l=o.getAttribute("position"),c=o.getAttribute("color"),h=new xt;for(let f=0;f<=this.rows;f++){const p=e[f],g=this.wave.crossSectionAt(p,1,t),v=this.wave.barrelAt(p,0,0,t)?.radiusM??0,m=this.wave.whitewaterAt(p);for(let T=0;T<=this.backColumns;T++){const E=T/this.backColumns,P=this.wave.backAt(p,E,t),R=f*(this.backColumns+1)+T;l.setXYZ(R,P.x,P.y,P.z);const S=Math.max(0,(E-.85)/.15);h.copy(this.base).lerp(this.foam,S*(.32+m*.45)),c.setXYZ(R,h.r,h.g,h.b)}const d=this.wave.crossSectionAt(p,.78*g.x/this.wave.joinX,t),b=Math.min(1,v*.65+m),x=b*Math.max(0,1-Math.max(0,g.y-d.y-.45)/.9),_=.18+Math.min(.7,v*.22)+m*1.2;for(let T=0;T<=4;T++){const E=T/4,P=this.wave.crossSectionAt(p,.965+.035*E,t),R=f*5+T;n.setXYZ(R,P.x,P.y,P.z),s.setX(R,b),r.setX(R,x);const S=.65+.35*Math.sin(p*1.1+t*2.8+E*9),M=g.x+(E-.5)*_*(1.6+.65*S),A=this.wave.crossSectionAt(p,.78*M/this.wave.joinX,t),D=Math.sin(Math.PI*E)*S*Math.min(.72,v*.1+m*.65);a.setXYZ(f*5+T,M,A.y+.045+D,A.z)}}l.needsUpdate=c.needsUpdate=!0,o.computeVertexNormals(),n.needsUpdate=s.needsUpdate=!0,a.needsUpdate=r.needsUpdate=!0;const u=this.curlSpray.geometry.getAttribute("position");for(let f=0;f<u.count;f++){const p=this.wave.map.wave.rideLengthM,g=this.wave.peelPositionM,v=g===null?p*(f+.5)/u.count:Math.max(0,Math.min(p,g-42+62*(f+.5)/u.count)),m=this.wave.barrelAt(v,0,0,t),d=this.wave.whitewaterAt(v);if(!m||m.radiusM<.6&&d<.2){u.setXYZ(f,0,-1e3,0);continue}const b=(t*(.7+f%5*.06)+f*.43)%1;if(d>.2&&f%3!==0){const R=this.wave.crossSectionAt(v,1,t).x+Math.sin(f*8.3)*(.4+d*1.7),S=this.wave.surfaceAt(v,R,t).position;u.setXYZ(f,R,S.y+.2+b*(.5+d*1.8),S.z+Math.sin(f*4.4)*.35);continue}if(m.radiusM<.6){u.setXYZ(f,0,-1e3,0);continue}const x=f%3===0?.83+.1*Math.abs(Math.sin(f*6.7)):.94+.06*Math.abs(Math.sin(f*6.7)),_=this.wave.crossSectionAt(v,x,t),T=f%3===0,E=T?b*(2.3-1.55*b):b*(.4-1.8*b);u.setXYZ(f,_.x+(T?.95:-.3)*b+Math.sin(f*13.2)*.2,_.y+E,_.z+this.wave.direction*b*.8+Math.sin(f*4.4)*.2)}u.needsUpdate=!0}dispose(){this.backMesh.geometry.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.lipMesh.geometry.dispose(),this.lipMesh.material.dispose(),this.lipFoam.geometry.dispose(),this.lipFoam.material.dispose(),this.impactFoam.geometry.dispose(),this.impactFoam.material.dispose(),this.waterNormal.dispose(),this.sprayTexture.dispose(),this.curlSpray.geometry.dispose(),this.curlSpray.material.dispose()}}class s_{boardUp=new I;boardSide=new I;group=new Ve;boardColor;body=new Ve;crest;featherMap=j0();flippers=[];materials=[];geometries=[];sprayGeometry;sprayMaterial;sprayTexture;spray;constructor(t,e){const n=new xt(e),s=new qd({color:"#bceaf4",roughness:.14,metalness:0,clearcoat:.7,clearcoatRoughness:.08,transparent:!0,opacity:.9,side:me});this.materials.push(s);const r=[[0,1.22],[.2,1.09],[.34,.68],[.4,.08],[.36,-.52],[.24,-.95],[.1,-1.16],[0,-1.2],[-.1,-1.16],[-.24,-.95],[-.36,-.52],[-.4,.08],[-.34,.68],[-.2,1.09]],a=new Ro;a.moveTo(...r[0]);for(const A of r.slice(1))a.lineTo(...A);a.closePath();const o=new mr(a,{depth:.1,bevelEnabled:!0,bevelThickness:.025,bevelSize:.035,bevelSegments:2,steps:1});this.geometries.push(o);const l=new $t(o,s);l.rotation.x=Math.PI/2,l.position.y=.13,this.group.add(l);const c=new se;c.setAttribute("position",new Ft(r.flatMap(([A,D])=>[A,.165,D]),3));const h=new ja({color:"#f1ffff",transparent:!0,opacity:.85});this.geometries.push(c),this.materials.push(h),this.group.add(new pd(c,h));const u=new se;u.setAttribute("position",new Ft([-.22,.166,.7,-.03,.166,.35,-.03,.166,.35,.16,.166,.23,.23,.166,-.54,.02,.166,-.31,.02,.166,-.31,-.14,.166,-.4],3));const f=new ja({color:"#e6ffff",transparent:!0,opacity:.65});this.geometries.push(u),this.materials.push(f),this.group.add(new fd(u,f)),this.boardColor=this.material(t.boardColor,.24),this.boardColor.transparent=!0,this.boardColor.opacity=.38,this.group.add(this.part(new $e(1,12,8),this.boardColor,[0,.175,0],[.055,.012,.72]));const p=this.material("#a9e6f4",.18);p.transparent=!0,p.opacity=.75;for(const A of[-.14,.14]){const D=this.part(new pr(.11,.28,4),p,[A,-.07,-.72],[.65,1,.65]);D.rotation.z=Math.PI,this.group.add(D)}const g=this.material("#ffffff",.63);g.map=this.featherMap,this.body.add(this.part($0(),g,[0,0,0]));const v=this.material("#26323b",.62),m=this.material("#ffffff",.7);m.vertexColors=!0,this.crest=this.part(J0(),m,[0,1.55,.12]),this.body.add(this.crest);const d=this.material("#161715",.18),b=this.material("#f0dfb8",.3),x=this.material("#92552e",.24),_=this.material("#f3eee2",.22),T=this.material("#d5824b",.66),E=this.material("#ffffff",.46);E.vertexColors=!0,this.body.add(this.part(Q0(),E,[0,1.405,.317]));const P=new zc([new I(0,1.23,-.087),new I(.17,1.214,.036),new I(.19,1.18,.193),new I(.125,1.11,.258),new I(0,1.055,.294),new I(-.125,1.11,.258),new I(-.19,1.18,.193),new I(-.17,1.214,.036)],!0);this.body.add(this.part(new Co(P,48,.009,5,!0),this.material("#76482e",.83),[0,0,0]));const R=this.material("#fff",.54);R.vertexColors=!0,R.side=me;const S=this.part(e_(),R,[0,1.058,.299]);S.rotation.x=-.12,this.body.add(S);for(const A of[-1,1]){this.body.add(this.part(new $e(1,16,12),b,[A*.15,1.478,.299],[.053,.05,.046])),this.body.add(this.part(new $e(1,16,12),x,[A*.165,1.478,.328],[.036,.037,.026])),this.body.add(this.part(new $e(1,12,8),d,[A*.17,1.477,.345],[.022,.026,.016])),this.body.add(this.part(new $e(1,8,6),_,[A*.178,1.491,.359],[.008,.008,.006]));const D=this.part(Z0(),v,[A*.279,1.035,.022]);this.flippers.push(D),this.body.add(D);const U=this.part(t_(),T,[A*.13,.205,A*.19+.025]);U.rotation.y=.29+A*.2,this.group.add(U),this.group.add(this.part(new $e(1,12,8),T,[A*.128,.249,A*.16-.025],[.049,.078,.05]))}this.body.add(this.part(K0(),v,[0,.27,-.2])),this.group.add(this.body);const M=70;this.sprayGeometry=new se,this.sprayGeometry.setAttribute("position",new Ft(new Float32Array(M*3),3)),this.sprayTexture=sh(),this.sprayMaterial=new bo({color:n,size:.075,map:this.sprayTexture,alphaTest:.03,transparent:!0,opacity:.62,depthWrite:!1}),this.spray=new Fc(this.sprayGeometry,this.sprayMaterial),this.spray.frustumCulled=!1}material(t,e){const n=new Ue({color:t,roughness:e});return this.materials.push(n),n}part(t,e,n,s){this.geometries.push(t);const r=new $t(t,e);return r.position.set(...n),s&&r.scale.set(...s),r}addSprayTo(t){t.add(this.spray)}update(t,e){const n=t.state,s=n==="surfing"||n==="barrel"?t.wave.lipCoverageAt(t.alongM,t.position.x,t.simulationTimeS):0,a=n==="surfing"||n==="barrel"?t.stance:0,o=Math.min(.39,.09*t.jumpLoad+.16*t.landingPulse+.18*t.airTuck+s*.14+Math.max(0,a)*.19);this.body.scale.set(1+o*.12,1-o,1+o*.1),this.body.position.y=o*.2;const l=Math.max(-1,Math.min(1,t.lateralMps*t.wave.direction/7));this.body.rotation.x=n==="wipeout"?.78:.09+o*.55+.15*a,this.body.rotation.y=.23+l*.14,this.crest.rotation.x=-.09*(Math.max(0,a)+t.airTuck),this.body.rotation.z=n==="wipeout"?.4:-l*.19;const c=n==="airborne"||t.wallRideActive?.9-t.airTuck*.6:.29+Math.abs(l)*.33+t.landingPulse*.25;for(let p=0;p<this.flippers.length;p++){const g=p===0?-1:1;this.flippers[p].rotation.z=g*c-l*.23,this.flippers[p].rotation.x=.12+g*l*.2}const h=this.sprayGeometry.getAttribute("position"),u=e.quality==="low"?20:e.quality==="medium"?42:70,f=n!=="airborne"&&t.speedMps>3;this.boardUp.set(0,1,0).applyQuaternion(t.orientation),this.boardSide.set(1,0,0).applyQuaternion(t.orientation);for(let p=0;p<h.count;p++){if(!f||p>=u){h.setXYZ(p,0,-1e3,0);continue}const g=(t.simulationTimeS*(1.8+p%7*.12)+p*.31)%1,v=Math.sin(p*17.23)*(.3+g*.7),m=.2+g*(1.4+t.speedMps*.04),d=v*(1+t.skid*2),b=.08+Math.sin(g*Math.PI)*(n==="wipeout"?1.2:.55);h.setXYZ(p,t.position.x+this.boardSide.x*d+this.boardUp.x*b-t.heading.x*m,t.position.y+this.boardSide.y*d+this.boardUp.y*b-t.heading.y*m,t.position.z+this.boardSide.z*d+this.boardUp.z*b-t.heading.z*m)}h.needsUpdate=!0,this.boardColor.color.set(e.boardColor)}dispose(){for(const t of this.geometries)t.dispose();for(const t of this.materials)t.dispose();this.sprayGeometry.dispose(),this.sprayMaterial.dispose(),this.sprayTexture.dispose(),this.featherMap.dispose()}}function r_(i){if(k0(i.map),!i.mount||!Number.isFinite(i.seed)||!["free-surf","score-run"].includes(i.mode))throw new Error("Invalid surfing session options");const t=i.createTrickController(),e=new cd;e.background=new xt(i.map.visual.skyColor);const n=new Ye(65,1,.05,1500),s=new F0({antialias:i.settings.quality!=="low"});s.outputColorSpace=De,s.domElement.tabIndex=0,s.domElement.setAttribute("aria-label","BarrelRoll penguin surfing game"),s.domElement.style.display="block",s.domElement.style.width="100%",s.domElement.style.height="100%",i.mount.appendChild(s.domElement);const r=new Jd("#bde4f7",2.1),a=new jc("#fff7dc",2.2);a.position.set(20,32,-24),e.add(r,a);const o=new Y0(i.map,i.mode,i.seed,t,i.onEvent),l=new i_(o.wave,i.map.visual.waterColor,i.map.visual.foamColor),c=new s_(i.settings,i.map.visual.foamColor);e.add(l.mesh,l.backMesh,l.lipMesh,l.lipFoam,l.impactFoam,l.curlSpray,c.group),c.addSprayTo(e);const h=new O0(e),u=new $t(new Bn(2.5,3.7),new Ze({transparent:!0,depthWrite:!1,uniforms:{strength:{value:0}},vertexShader:"varying vec2 st; void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 st; uniform float strength; void main(){float d=length(st*2.-1.);gl_FragColor=vec4(.008,.075,.09,strength*(1.-smoothstep(.1,1.,d)));}"}));u.visible=!1,e.add(u);let f;try{f=i.createEnvironment(e,i.map,i.settings)}catch($){throw t.reset(),l.dispose(),c.dispose(),s.dispose(),s.domElement.remove(),new Error(`Could not load the map environment: ${String($)}`)}const p=n_(i.map.visual.skyColor);e.add(p);const g=new z0;let v={...i.settings},m=!0,d=!1,b=null,x=null,_=0;const T=new B0,E=new ke,P=new ke,R=new ke,S=new I(0,0,1),M=new I;let A=o.alongM,D=-1;const U=()=>{const $=Math.max(1,i.mount.clientWidth||window.innerWidth),pt=Math.max(1,i.mount.clientHeight||window.innerHeight);s.setSize($,pt,!1),n.aspect=$/pt,n.updateProjectionMatrix()},N=()=>{const $=v.quality==="low"?1:v.quality==="medium"?1.5:2;s.setPixelRatio(Math.min(window.devicePixelRatio||1,$)),U()};N();const k=typeof ResizeObserver<"u"?new ResizeObserver(U):null;k?.observe(i.mount),k||window.addEventListener("resize",U);const V=$=>{D!==o.simulationTimeS&&(l.update(o.simulationTimeS),D=o.simulationTimeS),o.alongM<A-1&&(T.reset(),E.copy(o.orientation)),A=o.alongM,h.update(o),c.update(o,v);const pt=Math.min(1,_/(1/60)),yt=o.previousPosition,St=o.position,Ht=new I(yt.x+(St.x-yt.x)*pt,yt.y+(St.y-yt.y)*pt,yt.z+(St.z-yt.z)*pt);c.group.position.copy(Ht);const ee=o.orientation;c.group.quaternion.copy(E).slerp(P.copy(ee),pt),(o.state==="surfing"||o.state==="barrel"&&!o.wallRideActive)&&(c.group.rotateZ(o.railAngle),c.group.rotateY(o.skidSide*o.skid*.56),o.landingPulse>0&&c.group.quaternion.slerp(R,o.landingPulse**2));const L=new I(o.heading.x,0,o.heading.z).normalize(),et=o.wave.surfaceAt(Ht.z*o.wave.direction,Ht.x,o.simulationTimeS),J=o.state==="airborne"?Math.max(0,Ht.y-et.position.y):0;u.visible=o.state==="airborne",u.visible&&(M.copy(et.normal),u.position.copy(et.position).addScaledVector(M,.035),u.quaternion.setFromUnitVectors(S,M),u.scale.setScalar(1+Math.min(J,8)*.07),u.material.uniforms.strength.value=.46/(1+J*.14)),T.update(o.wave,Ht,L,J,o.state==="surfing"||o.state==="barrel",o.simulationTimeS,$,o.wallRideActive),n.position.copy(T.eye),n.lookAt(T.focus),p.position.copy(n.position);const K=v.reducedMotion?65:63+Math.min(9,o.speedMps*.25)+Math.min(5,J*.3)+T.wallFraming*5;Math.abs(n.fov-K)>.05&&(n.fov=K,n.updateProjectionMatrix()),s.render(e,n)},Y=()=>{!m&&!d&&!o.ended&&b===null&&(b=requestAnimationFrame(z))},z=$=>{if(b=null,m||d||o.ended)return;const pt=x===null?0:Math.min(.25,($-x)/1e3);x=$,_=Math.min(_+pt,8/60);let yt=0;for(;_>=1/60&&yt<8&&!o.ended;){const St=o.state==="airborne";g.advance(1/60,o.state==="surfing"||o.state==="barrel"),E.copy(o.orientation),o.step(g.frame(),1/60),St&&o.state==="surfing"&&R.copy(E),!St&&o.state==="airborne"&&g.beginAir(),o.ended||f.update(o.simulationTimeS,1/60),_-=1/60,yt++}d||(o.ended&&tt(),V(pt),Y())},tt=()=>{m||d||(m=!0,g.clear(),x=null,_=0,b!==null&&cancelAnimationFrame(b),b=null)},dt=()=>{!m||d||!o.started||o.ended||(m=!1,g.clear(),x=null,s.domElement.focus(),Y())},Mt=()=>{d||(g.clear(),o.reset(),E.copy(o.orientation),o.start(),_=0,x=null,m=!1,T.reset(),s.domElement.focus(),Y())},Bt=()=>{d||(o.finish(),tt())},Yt=$=>{if(!(m||d||o.ended||document.activeElement!==s.domElement)){if($.key.toLowerCase()==="r"&&!$.repeat){$.preventDefault(),Mt();return}g.press($.key,o.state==="surfing"||o.state==="barrel")&&$.preventDefault()}},Kt=$=>{g.release($.key)&&document.activeElement===s.domElement&&$.preventDefault()},qt=()=>tt(),Z=()=>s.domElement.focus();return window.addEventListener("keydown",Yt),window.addEventListener("keyup",Kt),window.addEventListener("blur",qt),s.domElement.addEventListener("blur",qt),s.domElement.addEventListener("pointerdown",Z),E.copy(o.orientation),V(0),{start(){d||o.started||(o.start(),dt())},pause:tt,resume:dt,restart:Mt,finish:Bt,setSettings($){d||(v={...$},f.setSettings(v),N(),m&&V(0))},dispose(){d||(tt(),d=!0,g.clear(),o.trick.reset(),window.removeEventListener("keydown",Yt),window.removeEventListener("keyup",Kt),window.removeEventListener("blur",qt),s.domElement.removeEventListener("blur",qt),s.domElement.removeEventListener("pointerdown",Z),k?.disconnect(),k||window.removeEventListener("resize",U),u.geometry.dispose(),u.material.dispose(),p.geometry.dispose(),p.material.dispose(),h.dispose(),f.dispose(),l.dispose(),c.dispose(),s.dispose(),s.forceContextLoss(),s.domElement.remove())}}}function a_(){const i=new ke,t=new ke,e=new ke,n=new ke,s=new ke,r=new I(0,1,0),a=new I(1,0,0),o=new I(0,0,1);let l="",c=0,h=0,u=0,f=0,p=0,g=0,v=0;const m=(x,_)=>Math.floor((Math.abs(x)+1e-5)/_),d=()=>{const x=m(c,180)*180,_=m(h,360),T=h>0?"frontflip":"backflip",E=m(p,360);return[x?String(x):"",_?(_>1?_+"× ":"")+T:"",E?(E>1?E+"× ":"")+"side roll":""].filter(Boolean).join(" + ")||"Straight air"};function b(x,_,T){const E=Math.round(x/_)*_-x;return Math.abs(E)<.3?x+E:Math.abs(E)<22?x+E*(1-Math.exp(-8*T)):x}return{beginAir(x){l=x.airId,v=x.loadedRail??0,i.copy(x.orientation),t.copy(i),c=h=p=u=f=g=0},step(x,_){v*x.spinAxis>0&&(u=v*310),v=0;const T=x.tucked?1.42:1;return u=ae.damp(u,x.spinAxis*650*T,x.spinAxis?12:19,_),f=ae.damp(f,x.flipAxis*510*T,x.flipAxis?11:19,_),g=ae.damp(g,(x.rollAxis??0)*515*T,x.rollAxis?11:19,_),c+=u*_,h+=f*_,p+=g*_,x.spinAxis||(c=b(c,180,_)),x.flipAxis||(h=b(h,360,_)),x.rollAxis||(p=b(p,360,_)),t.copy(i).multiply(e.setFromAxisAngle(r,ae.degToRad(c))).multiply(n.setFromAxisAngle(a,ae.degToRad(h))).multiply(s.setFromAxisAngle(o,ae.degToRad(p))),{orientation:t,label:d()}},land(x){if(!l)throw new Error("Landing without an active jump");const _=new I().copy(x.surfaceNormal).normalize(),T=ae.radToDeg(r.clone().applyQuaternion(t).angleTo(_)),E=new I(0,0,1).applyQuaternion(t).projectOnPlane(_).normalize(),P=new I().copy(x.travelDirection).projectOnPlane(_).normalize();E.dot(P)<0&&E.negate();const R=new I().crossVectors(_,P).normalize(),S=ae.radToDeg(Math.acos(Math.min(1,Math.abs(E.dot(P))))),M=T<=25&&S<=30?"clean":T<=55&&S<=70?"sketchy":"wipeout",A=m(c,180)*180,D=m(h,360)+m(p,360),U=l;return l="",{airId:U,quality:M,slipSide:E.dot(R),completedSpinDeg:A,completedFlips:D,label:d(),family:A&&D?"cork":D?"flip":A?"spin":"straight-air",speedMultiplier:M==="clean"?1:M==="sketchy"?.68:0}},reset(){l=""}}}const ur=-160,rh=780,oa=i=>-48-Math.sin(i*.011)*8-Math.sin(i*.031)*3,tc=(i,t)=>{const e=Math.max(0,Math.min(1,(-i-155)/185));return 2+38*Math.pow(e,1.25)+e*(2.7*Math.sin(t*.021)+1.4*Math.sin(t*.063))};function ec(i,t,e){const n=[],s=[],r=[];for(let l=0;l<=i;l++){const c=ur+(rh-ur)*l/i;for(let h=0;h<=t;h++){const u=e(c,h/t);n.push(u.x,u.y,c),s.push(u.color.r,u.color.g,u.color.b)}}for(let l=0;l<i;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;r.push(h,h+1,u,h+1,u+1,u)}const a=new se;a.setIndex(r),a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(s,3)),a.computeVertexNormals();const o=new Ue({vertexColors:!0,roughness:1,side:me});return new $t(a,o)}function o_(i,t,e){if(t.id!=="mavericks")throw new Error("Mavericks scenery requires the Mavericks map");const n=new Ve,s=i.fog,r=new Bn(2200,2200),a=Lo();a.repeat.set(88,88);const o=new Zc({color:"#1b596d",specular:"#83b7bb",shininess:95,side:me,normalMap:a,normalScale:new ct(.38,.38)}),l=new $t(r,o);l.rotation.x=-Math.PI/2,l.position.y=-.09,n.add(l);const c=new xt("#988c7a"),h=new xt("#c6b79b"),u=ec(84,14,(A,D)=>({x:oa(A)-145*D,y:-.02+2.2*Math.pow(D,1.55)+.09*Math.sin(A*.12+D*5),color:c.clone().lerp(h,Math.min(1,D*1.5))}));n.add(u);const f=new xt("#787468"),p=new xt("#65785f"),g=ec(84,18,(A,D)=>{const U=-155-185*D,N=Math.min(.85,.25+D*.55+Math.sin(A*.045+D*9)*.08);return{x:U,y:tc(U,A),color:f.clone().lerp(p,N)}});n.add(g);const v=new se,m=[],d=[];for(let A=0;A<=84;A++){const D=ur+(rh-ur)*A/84,U=oa(D);if(m.push(U+.3,.06,D,U+2.6,.06,D),A<84){const N=A*2;d.push(N,N+1,N+2,N+1,N+3,N+2)}}v.setIndex(d),v.setAttribute("position",new Ft(m,3)),v.computeVertexNormals();const b=new ki({color:t.visual.foamColor,transparent:!0,opacity:.55,depthWrite:!1,side:me}),x=new $t(v,b);n.add(x);const _=new wo(1,0),T=new Ue({color:"#555d5d",roughness:1});for(let A=0;A<16;A++){const D=-70+A*45+Math.sin(A*11)*9,U=new $t(_,T);U.position.set(oa(D)-5-Math.abs(Math.sin(A*8.7))*17,.2,D);const N=.8+Math.abs(Math.sin(A*3.13))*2.2;U.scale.set(N*1.25,N*.7,N),U.rotation.y=A*1.3,n.add(U)}const E=new $e(1,7,5),P=new Ue({color:"#465d48",roughness:1}),R=new Ve;for(let A=0;A<40;A++){const D=-130+A*22+Math.sin(A*7.1)*12,U=-180-Math.abs(Math.sin(A*4.3))*110,N=new $t(E,P);N.position.set(U,tc(U,D)+.4,D);const k=.9+Math.abs(Math.sin(A*2.9))*1.8;N.scale.set(k*1.5,k*.7,k),R.add(N)}n.add(R),i.add(n),i.fog=new Oi(t.visual.skyColor,190,850);let S=!1;const M=A=>{R.visible=A.quality!=="low",i.fog=new Oi(t.visual.skyColor,A.quality==="low"?150:190,A.quality==="low"?650:850)};return M(e),{update(A){S||(x.material.opacity=.49+.09*Math.sin(A*1.5),a.offset.set(A*.0018,-A*.0011))},setSettings:M,dispose(){S||(S=!0,i.remove(n),i.fog=s,r.dispose(),o.dispose(),a.dispose(),u.geometry.dispose(),u.material.dispose(),g.geometry.dispose(),g.material.dispose(),v.dispose(),b.dispose(),_.dispose(),T.dispose(),E.dispose(),P.dispose())}}}const nc=90,l_=-490,la=i=>-43-5*Math.sin(i*.014)-2*Math.sin(i*.043);function ca(i,t,e){const n=[],s=[],r=[];for(let l=0;l<=i;l++){const c=nc+(l_-nc)*l/i;for(let h=0;h<=t;h++){const u=e(c,h/t);n.push(u.x,u.y,c),s.push(u.color.r,u.color.g,u.color.b)}}for(let l=0;l<i;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;r.push(h,u,h+1,h+1,u,u+1)}const a=new se;a.setIndex(r),a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(s,3)),a.computeVertexNormals();const o=new Ue({vertexColors:!0,roughness:1,side:me});return new $t(a,o)}function c_(){const i=[],t=[];for(let n=0;n<=5;n++){const s=n/5,r=s*5.8,a=1.25*Math.sin(s*Math.PI)-1.1*s*s,o=.03+.62*Math.sin(s*Math.PI);if(i.push(r,a,-o,r,a,o),n<5){const l=n*2;t.push(l,l+1,l+2,l+1,l+3,l+2)}}const e=new se;return e.setIndex(t),e.setAttribute("position",new Ft(i,3)),e.computeVertexNormals(),e}function h_(i,t,e,n,s,r,a){const o=new Ve;o.position.set(i,1.7,t),o.scale.setScalar(e),o.rotation.z=.07*Math.sin(t*.17);const l=new $t(n,s);l.position.y=3.5,o.add(l);for(let c=0;c<7;c++){const h=new $t(r,a);h.position.set(0,7,0),h.rotation.y=c*Math.PI*2/7,o.add(h)}return o}function u_(i,t,e){if(t.id!=="pipeline")throw new Error("Pipeline scenery requires the Pipeline map");const n=new Ve,s=new Ve,r=i.fog,a=new Bn(1800,1800),o=new Ue({color:"#13798a",roughness:.53,metalness:.08,side:me}),l=new $t(a,o);l.rotation.x=-Math.PI/2,l.position.y=-.24,n.add(l);const c=new xt("#c9b38a"),h=new xt("#ecd8a8"),u=ca(72,12,(z,tt)=>({x:la(z)-92*tt,y:-.08+2.6*Math.pow(tt,1.5)+.08*Math.sin(z*.09+tt*6),color:c.clone().lerp(h,Math.min(1,tt*1.6))}));n.add(u);const f=new xt("#787d69"),p=new xt("#3f7450"),g=ca(72,16,(z,tt)=>({x:-135-170*tt,y:2.6+26*Math.pow(tt,1.4)+tt*(3.5*Math.sin(z*.027)+1.4*Math.sin(z*.081)),color:f.clone().lerp(p,Math.min(.9,.35+tt*.6))}));n.add(g);const v=ca(72,1,(z,tt)=>({x:la(z)+.3+2.3*tt,y:.05,color:new xt("#edfff6")})),m=v.geometry;v.material.dispose();const d=new ki({color:t.visual.foamColor,transparent:!0,opacity:.65,depthWrite:!1,side:me}),b=new $t(m,d);n.add(b);const x=new rn(.2,.37,7,6),_=new Ue({color:"#715e47",roughness:1}),T=c_(),E=new Ue({color:"#2b704b",roughness:1,side:me});for(let z=0;z<13;z++){const tt=42-z*39+5*Math.sin(z*2.4),dt=la(tt)-29-10*Math.abs(Math.sin(z*1.8)),Mt=h_(dt,tt,.8+.22*Math.abs(Math.sin(z*3.1)),x,_,T,E);(z%3===0?n:s).add(Mt)}const P=new bn(1,1,1),R=new Ue({color:"#9d6848",roughness:1}),S=new Ue({color:"#e9d2a2",roughness:1}),M=new Ue({color:"#b45e4d",roughness:1}),A=new pr(3.5,2.1,4),D=new Ve;D.position.set(-106,2.2,-190);for(const z of[-2.2,2.2])for(const tt of[-2.2,2.2]){const dt=new $t(P,R);dt.position.set(z,2.4,tt),dt.scale.set(.28,4.8,.28),D.add(dt)}const U=new $t(P,S);U.position.y=5.5,U.scale.set(5.5,2.6,5.5),D.add(U);const N=new $t(A,M);N.position.y=7.7,N.rotation.y=Math.PI/4,D.add(N),s.add(D),n.add(s);const k=new jc("#ffe5b2",.9);k.position.set(-120,100,-200),n.add(k),i.add(n);let V=!1;const Y=z=>{V||(s.visible=z.quality!=="low",i.fog=new Oi(t.visual.skyColor,z.quality==="low"?135:185,z.quality==="low"?570:760))};return Y(e),{update(z){V||(b.material.opacity=.6+.08*Math.sin(z*1.2))},setSettings:Y,dispose(){V||(V=!0,i.remove(n),i.fog=r,a.dispose(),o.dispose(),u.geometry.dispose(),u.material.dispose(),g.geometry.dispose(),g.material.dispose(),m.dispose(),d.dispose(),x.dispose(),_.dispose(),T.dispose(),E.dispose(),P.dispose(),R.dispose(),S.dispose(),A.dispose(),M.dispose())}}}const d_=(i,t,e)=>{if(t.id==="mavericks")return o_(i,t,e);if(t.id==="pipeline")return u_(i,t,e);const n=new Ve,s=t.wave.breakDirection==="right"?1:-1,r=t.wave.rideLengthM,a=i.fog,o=Lo();o.repeat.set(76,76);const l=new $t(new Bn(2e3,2400),new Zc({color:t.visual.waterColor,normalMap:o,normalScale:new ct(.35,.35),shininess:92}));l.rotation.x=-Math.PI/2,l.position.y=-.15,n.add(l);const c=t.id==="teahupoo",h=t.id==="uluwatu",u=t.id==="nazare",f=new xt(h?"#c1bda0":"#d3b181"),p=new xt(u?"#625e58":h?"#9d987f":"#766b56"),g=new xt(c?"#27544b":h?"#486548":"#818064"),v=[],m=[],d=[],b=100,x=12;for(let R=0;R<=b;R++){const S=-150+(r+450)*R/b,M=-(72+14*Math.sin(S*.017)+8*Math.sin(S*.038));for(let A=0;A<=x;A++){const D=A/x,U=.52+.22*Math.sin(S*.027)+.17*Math.cos(S*.054)+.09*Math.sin(S*.091),N=Math.min(1,Math.max(0,(D-.12)*9)),k=c?D*D*(55+U*145):h?N*(20+12*U)+D*12:u?N*(10+12*U)+D*17:2*D+D*D*(13+U*22);v.push(M-D*180,k-.4,S*s);const V=D<.1?f:p.clone().lerp(g,Math.min(1,N*(.2+D)));if(m.push(V.r,V.g,V.b),R<b&&A<x){const Y=R*(x+1)+A,z=Y+x+1;d.push(Y,z,Y+1,Y+1,z,z+1)}}}const _=new se;_.setAttribute("position",new Ft(v,3)),_.setAttribute("color",new Ft(m,3)),_.setIndex(d),_.computeVertexNormals(),n.add(new $t(_,new Ue({vertexColors:!0,side:me,flatShading:!0})));function T(R,S,M,A,D){const U=new $t(R,new Ue({color:S}));return U.position.set(M,A,D*s),n.add(U),U}if(u){T(new bn(25,12,17),"#9b846d",-59,4,r-35),T(new rn(1.8,2.4,9,14),"#d4bca3",-54,14,r-34),T(new rn(2.3,2.3,2.4,14),"#b44838",-54,19,r-34),T(new rn(.15,2.6,1.6,14),"#8f3329",-54,21,r-34);for(const R of[.1,.42]){const S=t.wave.faceWidthM*R,M=t.wave.heightM*.14*(.5*R**1.4+.5*R**4.2);T(new $e(.95,12,9),"#ffce32",S,M+.25,r),T(new rn(.11,.11,3.2,8),"#ffce32",S,M+1.7,r)}}else if(h)for(let R=0;R<3;R++)T(new bn(6-R,2.2,6-R),"#605c4a",-129,32+R*2.1,170),T(new rn(.7,5-R,2,4),"#494636",-129,33+R*2.1,170);else if(!c)for(let R=0;R<14;R++){const S=85+R*34;T(new bn(6,3.8,5),R%2?"#e5d2ab":"#eee3c9",-110,3,S);const M=T(new rn(.3,4.9,2.3,4),"#9d6a52",-110,5.8,S);M.rotation.y=Math.PI/4}const E=new $t(new $e(11,20,14),new ki({color:u?"#fff5d9":"#ffe4a6",fog:!1}));E.position.set(-160,100,(r+300)*s),n.add(E),i.add(n);const P=R=>{i.fog=new Oi(t.visual.skyColor,180,R.quality==="low"?650:980)};return P(e),{update(R){o.offset.set(R*.002,-R*.0015)},setSettings:P,dispose(){n.removeFromParent(),i.fog=a,n.traverse(R=>{if(R instanceof $t){R.geometry.dispose();const S=Array.isArray(R.material)?R.material:[R.material];for(const M of S)M.dispose()}}),o.dispose()}}},Qt=document.querySelector("#app");if(!Qt)throw new Error("BarrelRoll app mount is missing");const Ke=Ih();let ve="title",ye=Ah,_s="",wi=!1;const Vi=new Dh;let Fn,Un="score-run",Zi="",Ki=0,ha="";const tn=i=>document.getElementById(i),on=(i,t,e=!1)=>`<button type="button" class="${e?"primary-button":"surf-button"}" data-action="${t}">${i}</button>`,Ti=i=>Math.round(i).toLocaleString(),vr=()=>Ke.getSnapshot(),f_="A/D carve. W tucks for speed and S brakes. Inside the barrel, hold Shift to loop. A/D choose your direction and S holds your place on the wall. Release Shift to settle. Hold and release Space to jump. In the air, A/D spin, W/S flip, and ←/→ roll. Hold Space again to tuck.",ah={mavericks:"Hold A to get under the lip, then hold Shift to loop the barrel.",jbay:"Climb high and carve back down for a cutback. Link it into an air, then ride clear to bank.",pipeline:"Stay under the lip and follow the daylight through the opening.",teahupoo:"Carve toward the hollow and follow the opening before the lip closes.",nazare:"Start high. Carve down toward the yellow buoys and cross between them on your board.",uluwatu:"Alternate between the cliffside barrels and the open launch sections."};function dr(){Vi.pause(),Fn?.dispose(),Fn=void 0}const oh=i=>String(rc.indexOf(i)+1).padStart(2,"0");function Io(){return`<span class="brand" aria-label="BarrelRoll">
    <span class="brand__symbol" aria-hidden="true"><svg viewBox="0 0 38 38" fill="none"><path d="M3 24c5-11 9-15 15-15 7 0 10 4 16 11-6-2-10-2-14 1-4 3-6 7-8 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M4 31c6-3 10-3 14 0m6-5c4-2 7-2 10 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
    <span class="brand__word">BARREL<span>ROLL</span></span>
  </span>`}function p_(i){const t=ic[i],e=ye===i,n=!ao(i,Ke.getSnapshot().levelsCleared);return`<li class="break-list__item">
    <button type="button" class="break-button${e?" is-active":""}${n?" is-locked":""}" data-map="${i}" aria-pressed="${e}">
      <span class="break-button__index">${oh(i)}</span>
      <span class="break-button__art" aria-hidden="true">${sc(i,"list")}</span>
      <span class="break-button__copy"><strong>${t.name}</strong><small>${t.region}</small></span>
      <span class="break-button__arrow" aria-hidden="true">↗</span>
    </button>
  </li>`}function m_(){const i=Ke.getSnapshot().levelsCleared>0;Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="landing" id="main-content">
      <header class="landing__header shell">
        ${Io()}
        <nav class="landing__nav" aria-label="Game information">
          <button type="button" data-screen="how">HOW TO PLAY</button>
          <button type="button" data-screen="settings">SETTINGS</button>
          <button type="button" data-screen="credits">CREDITS</button>
        </nav>
        <span class="header-edition">EST 2026 &nbsp;/&nbsp; SOLO SURF</span>
      </header>
      <div class="landing__body shell">
        <section class="landing__copy">
          <p class="kicker"><span class="kicker__line"></span> AN ARCADE SURF ADVENTURE</p>
          <h1>BARREL<br><span>ROLL</span></h1>
          <p class="landing__lead">Find your line on the world's most legendary waves</p>
          <button type="button" class="action-button" data-action="${i?"atlas":"continue"}"><span>${i?"ENTER FREEPLAY":"START MAVERICKS TUTORIAL"}</span><span class="action-button__icon" aria-hidden="true">↗</span></button>
          <button type="button" class="landing__play-link" id="play-button">EXPLORE THE BREAKS <span aria-hidden="true">↗</span></button>
        </section>
        <div class="landing__visual">
          <img src="${Eh}" alt="A towering wave at Mavericks under a foggy California sky" />
          <div class="landing__visual-caption"><span>FIRST BREAK</span><strong>MAVERICKS</strong><span>HALF MOON BAY, CALIFORNIA</span></div>
          <span class="landing__visual-index" aria-hidden="true">01</span>
        </div>
      </div>
      <footer class="landing__footer shell">
        <span class="footer-label">BARRELROLL <span aria-hidden="true">/</span> SOLO SURF</span>
        <span class="footer-line" aria-hidden="true"></span>
        <span class="footer-location">THE OCEAN IS YOUR PLAYGROUND</span>
      </footer>
    </main>`,Qt.querySelector("#play-button")?.addEventListener("click",()=>so("maps")),Qt.querySelectorAll("[data-screen]").forEach(t=>{t.addEventListener("click",()=>so(t.dataset.screen))})}function g_(){const i=ic[ye],t=Ke.getSnapshot(),e=ao(ye,t.levelsCleared),n=e?t.bestRuns[ye]?.[e]?.score:void 0,s=Ke.challenges.filter(a=>a.mapId===ye),r=s.filter(a=>t.earnedMedalIds.includes(a.id)).length;Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="atlas atlas--${i.tone}" id="main-content">
      <header class="atlas__header shell">
        ${Io()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> EXPLORE THE COAST</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="atlas__body shell">
        <div class="atlas__intro">
          <div><p class="kicker"><span class="kicker__line"></span> THE SURF ATLAS</p><h1>CHOOSE A <span>BREAK</span></h1></div>
          <p>${t.levelsCleared?"Freeplay is open. Choose any of the six breaks.":"Finish one wave at Mavericks to unlock all six breaks."}</p>
        </div>
        <div class="atlas__stage">
          <section class="feature" aria-live="polite" aria-label="Selected location">
            <div class="feature__art" aria-hidden="true">${sc(ye,"feature")}<span class="feature__number">LOCATION ${oh(ye)}</span></div>
            <div class="feature__info">
              <div class="feature__eyebrow"><span>${i.difficulty.toUpperCase()} BREAK</span><span>${e==="free-surf"?"FREEPLAY":e?"TUTORIAL":"LOCKED"}</span></div>
              <h2>${i.name}</h2>
              <p class="feature__region">${i.region}</p>
              <p class="feature__signature">${i.signature}</p>
              <div class="feature__metrics"><span><small>PERSONAL BEST</small><strong>${n?.toLocaleString()??"—"}</strong></span><span><small>MEDALS EARNED</small><strong>${r} <i>/ ${s.length}</i></strong></span></div>
              <button type="button" class="feature__play-link" data-action="ride-${ye}" ${e?"":"disabled"}>${e==="free-surf"?"SURF THIS BREAK":e?"START TUTORIAL":"FINISH MAVERICKS TO UNLOCK"} <span aria-hidden="true">↗</span></button>
            </div>
          </section>
          <section class="breaks" aria-label="Surf locations">
            <div class="breaks__heading"><span>DESTINATIONS</span><span>SELECT TO PREVIEW</span></div>
            <ul class="break-list">${rc.map(p_).join("")}</ul>
            <p class="breaks__foot">MORE THAN A POSTCARD <span aria-hidden="true">↗</span><br><small>Each break has its own wave and riding style</small></p>
          </section>
        </div>
      </div>
    </main>`,Qt.querySelector("#back-button")?.addEventListener("click",()=>{ve="title",vs(),Qt.querySelector("#play-button")?.focus()}),Qt.querySelectorAll("[data-map]").forEach(a=>{a.addEventListener("click",()=>{ye=a.dataset.map,vs(),Qt.querySelector(`[data-map="${ye}"]`)?.focus()})})}function io(i,t,e){Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="info-page" id="main-content">
      <header class="atlas__header shell">
        ${Io()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> FIELD NOTES</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="info-page__body shell">
        <div class="info-page__hero"><p class="kicker"><span class="kicker__line"></span> ${i}</p><h1>${t}</h1></div>
        ${e}
      </div>
    </main>`,Qt.querySelector("#back-button")?.addEventListener("click",__)}function os(){const i=Ke.getSnapshot(),t=i.settings,n=["low","medium","high"].map(u=>`<button type="button" class="choice-button${t.quality===u?" is-selected":""}" data-quality="${u}" aria-pressed="${t.quality===u}">${u.toUpperCase()}</button>`).join(""),s=["Coral","Lagoon","Sun","Violet"],r=oo.map(({color:u},f)=>{const p=i.unlockedBoardColors.includes(u);return`<button type="button" class="color-choice${t.boardColor===u?" is-selected":""}" data-board="${u}" aria-pressed="${t.boardColor===u}" ${p?"":"disabled"} aria-label="${s[f]??"Board color"}${p?"":", locked"}"><span class="color-choice__swatch" style="--swatch:${u}"></span><span>${s[f]??"Color"}</span><small>${p?"UNLOCKED":"LOCKED"}</small></button>`}).join(""),a=Math.round(t.masterVolume*100),o=i.storageAvailable?"":'<p class="save-warning" role="status">Saving is unavailable in this browser — changes will last for this session</p>',l=wi?'<div class="reset-confirm" role="group" aria-label="Confirm reset progress"><p>Delete saved records, medals and settings?</p><div><button type="button" id="cancel-reset">KEEP PROGRESS</button><button type="button" id="confirm-reset">RESET EVERYTHING</button></div></div>':"",c=`<div class="settings-intro"><p>Make the ride feel right for you</p><span>CHANGES SAVE AUTOMATICALLY</span></div>
    ${o}<p class="settings-notice" role="status" aria-live="polite">${_s}</p>
    <div class="settings-grid">
      <fieldset class="setting-group"><legend>Picture</legend><p>Choose the level of detail that suits your device</p><div class="choice-row">${n}</div></fieldset>
      <fieldset class="setting-group"><legend>Motion</legend><p>Reduce decorative movement and camera effects</p><label class="toggle-row" for="reduced-motion"><span>REDUCED MOTION</span><input type="checkbox" id="reduced-motion" ${t.reducedMotion?"checked":""}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group"><legend>Sound</legend><p>Set the volume for ocean and game audio</p><label class="volume-row" for="volume"><span>MASTER VOLUME</span><output id="volume-value" for="volume">${a}%</output></label><input type="range" id="volume" min="0" max="100" step="1" value="${a}"><label class="toggle-row" for="muted"><span>MUTE AUDIO</span><input type="checkbox" id="muted" ${t.muted?"checked":""}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group setting-group--colors"><legend>Ice board tint</legend><p>Earn medals to unlock more colors — the board always stays ice</p><div class="color-choices">${r}</div></fieldset>
    </div>
    <div class="settings-danger"><div><strong>Start fresh</strong><p>Remove local records, medals, unlocks and settings</p></div><button type="button" id="reset-button">RESET PROGRESS</button></div>${l}`;io("MAKE IT YOURS","SETTINGS",c),Qt.querySelectorAll("[data-quality]").forEach(u=>{u.addEventListener("click",()=>Ji({quality:u.dataset.quality},`[data-quality="${u.dataset.quality}"]`))}),Qt.querySelector("#reduced-motion")?.addEventListener("change",u=>{Ji({reducedMotion:u.currentTarget.checked},"#reduced-motion")}),Qt.querySelector("#muted")?.addEventListener("change",u=>{Ji({muted:u.currentTarget.checked},"#muted")});const h=Qt.querySelector("#volume");h?.addEventListener("input",()=>{const u=Qt.querySelector("#volume-value");u&&(u.value=`${h.value}%`)}),h?.addEventListener("change",()=>Ji({masterVolume:Number(h.value)/100},"#volume")),Qt.querySelectorAll("[data-board]").forEach(u=>{u.addEventListener("click",()=>Ji({boardColor:u.dataset.board},`[data-board="${u.dataset.board}"]`))}),Qt.querySelector("#reset-button")?.addEventListener("click",()=>{wi=!0,os(),Qt.querySelector("#cancel-reset")?.focus()}),Qt.querySelector("#cancel-reset")?.addEventListener("click",()=>{wi=!1,os(),Qt.querySelector("#reset-button")?.focus()}),Qt.querySelector("#confirm-reset")?.addEventListener("click",()=>{_s=Ke.reset().storageAvailable?"Progress reset":"Progress reset for this session",wi=!1,os(),Qt.querySelector("#reset-button")?.focus()})}function Ji(i,t){try{_s=Ke.updateSettings(i).storageAvailable?"Settings saved":"Settings active for this session"}catch{_s="That setting could not be saved"}os(),Qt.querySelector(t)?.focus()}function __(){const i=ve;ve="title",wi=!1,vs(),Qt.querySelector(i==="maps"?"#play-button":`[data-screen="${i}"]`)?.focus()}function so(i){ve=i,wi=!1,_s="",vs(),Qt.querySelector("#back-button")?.focus()}function vs(){document.documentElement.dataset.reducedMotion=String(Ke.getSnapshot().settings.reducedMotion),ve==="title"?m_():ve==="maps"?g_():ve==="how"?io("A QUICK FIELD GUIDE","HOW TO<br><span>PLAY</span>",mh()):ve==="credits"?io("THE PEOPLE BEHIND THE WAVE","CREDITS",gh()):ve==="settings"&&os()}function v_(i){const t=Pi.mavericks.wave.rideLengthM-i.distanceLeftM;return i.wallRiding?"A/D choose direction · S holds your line":i.state==="barrel"?"Hold Shift to loop · D carves out":i.state==="airborne"?"Release the keys to line up your landing":t<64?"Hold A to climb toward the first barrel":t<212?"Hold A toward the curl · release to trim":t<330?"Hold Space and release to try a jump":"Ride to the end of the wave to unlock Freeplay"}function sr(i){const{levelsCleared:t,settings:e}=vr(),n=ao(i,t);if(!n)return;dr(),ye=i,Un=n,ve="ride";const s=Un==="score-run";Qt.innerHTML=`<main class="ride"><div id="water"></div>
    <div class="run-head"><div class="readout"><small>${Pi[i].name}</small><strong id="goal"></strong></div>
    <div class="actions">${on("Pause","pause")}</div></div>
    <div class="run-bottom"><span class="score"><small>${s?"Wave remaining":"Score"}</small><strong id="score">—</strong>${s?'<span class="wave-progress" aria-hidden="true"><i id="wave-progress-fill"></i></span>':'<span id="combo"></span>'}<span id="speed" aria-label="Board speed"></span></span>
    <span id="callout"></span></div><div id="overlay"></div></main>`;try{Fn=r_({mount:tn("water"),map:Pi[i],mode:Un,seed:8,settings:e,createEnvironment:d_,createTrickController:a_,onEvent:x_}),Vi.start(e),Fn.start()}catch(r){ve="error",dr(),Qt.innerHTML=`<main class="interlude"><section><h1>Couldn’t start the wave</h1><p id="problem"></p>
    <div class="actions">${on("Try again","retry",!0)}${on("Back to levels","back")}</div></section></main>`,tn("problem").textContent=String(r)}}function x_(i){if(i.type==="run-started")ha="",Zi=Un==="free-surf"?ah[ye]:"",Ki=performance.now()+9500;else if(i.type==="hud"&&ve==="ride"){const t=i.data;Vi.update(t);const e=Un==="score-run";if(tn("goal").textContent=e?v_(t):"Freeplay",tn("score").textContent=e?Ti(t.distanceLeftM)+" m":Ti(t.score),tn("speed").textContent=Math.round(t.speedMps*3.6)+" km/h",e){const s=1-t.distanceLeftM/Pi[ye].wave.rideLengthM;tn("wave-progress-fill").style.transform=`scaleX(${Math.max(0,Math.min(1,s))})`}else tn("combo").textContent=t.pendingCombo?`+${Ti(t.pendingCombo)}  ·  ${t.multiplier}×`:"";t.trickLabel!==ha&&(t.trickLabel.includes("landing")||["Barrel exit","Driving bottom turn","Cutback"].includes(t.trickLabel))&&(Zi=t.trickLabel,Ki=performance.now()+1650),ha=t.trickLabel;let n="";t.state==="airborne"&&(n=t.trickLabel),t.state==="barrel"&&(n=(t.wallRiding?t.trickLabel:e?"In the barrel":"Hold Shift to loop")+" · "+t.barrelS.toFixed(1)+" s"),tn("callout").textContent=n||(performance.now()<Ki?Zi:"")}else i.type==="score-banked"&&Un==="free-surf"?(Zi="Banked +"+Ti(i.points),Ki=performance.now()+1200):i.type==="wipeout"?(Zi=i.reason,Ki=performance.now()+1350):i.type==="run-ended"&&M_(i.result)}function M_(i){const t=Ke.recordResult(i);ve="results",dr();const e=ro(i),n=e?"Freeplay unlocked":Un==="free-surf"?"Session complete":"Tutorial ended",s=e?"All six surf locations are open. Pick any break and ride as long as you like.":"";Qt.innerHTML=`<main class="interlude"><section><p class="eyebrow">${Pi[ye].name}</p><h1>${n}</h1>
    ${s?`<p>${s}</p>`:""}<dl class="run-stats"><div><dt>Score</dt><dd>${Ti(i.score)}</dd></div>
    <div><dt>Best combo</dt><dd>${Ti(i.bestCombo)}</dd></div><div><dt>Longest barrel</dt><dd>${i.longestBarrelS.toFixed(1)} s</dd></div>
    <div><dt>Clean landings</dt><dd>${i.cleanLandings}</dd></div></dl>
    ${t.newMedalIds.map(r=>`<p>Medal · ${Ke.challenges.find(a=>a.id===r)?.label}</p>`).join("")}
    ${t.snapshot.storageAvailable?"":"<p>Progress is available for this session only.</p>"}
    <div class="actions">${on(e?"Choose a freeplay location":"Locations","atlas",!0)}
    ${on("Surf again","retry")}</div></section></main>`,Qt.querySelector("button")?.focus()}function xr(){ve!=="ride"||!Fn||(ve="paused",Fn.pause(),Vi.pause(),tn("overlay").innerHTML=`<section class="pause-card"><p class="eyebrow">${Pi[ye].name}</p><h2>Paused</h2><p>${ah[ye]}</p><p>${f_}</p>
    <div class="actions">${on("Resume","resume",!0)}${on("Restart run","retry")}${on(vr().settings.muted?"Sound off":"Sound on","mute")}
    ${Un==="free-surf"?on("Finish session","finish"):""}${on("Discard run","back")}</div></section>`,tn("overlay").querySelector("button")?.focus())}function lh(){ve==="paused"&&(ve="ride",tn("overlay").replaceChildren(),Vi.start(vr().settings),Fn?.resume())}Qt.addEventListener("click",i=>{const t=i.target.closest("button[data-action]");if(!t||t.disabled)return;const e=t.dataset.action;if(e.startsWith("ride-"))sr(e.slice(5));else switch(e){case"atlas":case"back":dr(),so("maps");break;case"continue":sr("mavericks");break;case"retry":sr(ye);break;case"pause":xr();break;case"resume":lh();break;case"finish":Fn?.finish();break;case"mute":{const n=Ke.updateSettings({muted:!vr().settings.muted}).settings;Vi.settings(n),t.textContent=n.muted?"Sound off":"Sound on";break}}});window.addEventListener("keydown",i=>{i.key==="Escape"&&!i.repeat&&(ve==="ride"?xr():ve==="paused"&&lh()),ve==="results"&&i.key.toLowerCase()==="r"&&!i.repeat&&sr(ye)});window.addEventListener("blur",xr);document.addEventListener("visibilitychange",()=>{document.hidden&&xr()});vs();
