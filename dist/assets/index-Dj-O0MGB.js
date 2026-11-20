(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ec={mavericks:{name:"Mavericks",region:"Half Moon Bay, California",difficulty:"easy",signature:"Broad Pacific face · generous first barrel",preview:"Carve the face, loop the hollow, launch from the lip",tone:"pacific"},pipeline:{name:"Pipeline",region:"Oʻahu, Hawaiʻi",difficulty:"hard",signature:"Fast hollow tube · clear exit",preview:"Hold your line deep in the barrel",tone:"tropical"},jbay:{name:"J-Bay",region:"Jeffreys Bay, South Africa",difficulty:"medium",signature:"Long clean right-hand wave · open sections",preview:"Build a chain of tricks along the open face",tone:"golden"},uluwatu:{name:"Uluwatu",region:"Bali, Indonesia",difficulty:"hard",signature:"Open faces · curling tubes · steep cliffs",preview:"Switch between aerial lines and barrel rides",tone:"limestone"},teahupoo:{name:"Teahupoo",region:"Tahiti, French Polynesia",difficulty:"expert",signature:"Steep face · narrow tube · quick closeout",preview:"Find the opening, then make your exit count",tone:"deep"},nazare:{name:"Nazaré",region:"Portugal",difficulty:"expert",signature:"Towering Atlantic faces · huge launch zones",preview:"Take impossible combinations into the air",tone:"storm"}};function uh(){return`<div class="guide-intro">
    <p>Ride Mavericks to the end of the wave. Then choose any of the six breaks in Freeplay.</p>
    <span>DESKTOP KEYBOARD</span>
  </div>
  <div class="guide-grid">
    <article class="guide-card"><div class="guide-card__top"><span>01 / CARVE</span><kbd>A</kbd><kbd>D</kbd></div><h2>Find the line</h2><p>Steer left and right across the face while the wave drives you forward</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>02 / LAUNCH</span><kbd>SPACE</kbd></div><h2>Charge the jump</h2><p>Hold Space, then release to take off — launch near the lip for more height</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>03 / ROTATE</span><kbd>A</kbd><kbd>D</kbd><kbd>W</kbd><kbd>S</kbd></div><h2>Own the air</h2><p>A and D spin, W and S flip — press W or S again after takeoff if you were already holding it</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>04 / BARREL</span><kbd>SHIFT</kbd><kbd>A</kbd><kbd>D</kbd></div><h2>Ride the wall</h2><p>Carve toward the hollow and ease off to hold your line. Inside a wide tube, hold Shift and carve to ride the wall.</p></article>
  </div>
  <div class="guide-bottom"><div><span>LAND THE MOMENT</span><p>Bring the board level with the water and align it with your travel to land cleanly</p></div><div><span>KEEP THE RUN MOVING</span><p>Escape pauses or resumes. After a run, press R to surf the same break again.</p></div></div>`}function dh(){return`<div class="credits-lead"><p>Built together, from the first wave to the final landing</p><span>AN ORIGINAL ARCADE SURF ADVENTURE</span></div>
    <div class="credits-grid">
      <div class="credit-card"><span>01 / GAMEPLAY &amp; SYSTEMS</span><h2>Teddy Kindler</h2><p>Surfing engine, wave and barrel systems, penguin and ice board, Mavericks environment, scoring and progression</p></div>
      <div class="credit-card"><span>02 / WORLD &amp; INTERFACE</span><h2>Anika Kumar</h2><p>Interface, location previews, Pipeline environment and upcoming trick and landing controls</p></div>
    </div>
    <p class="credits-note">The current interface illustrations and 3D scenery are original project assets<br>BarrelRoll takes inspiration from the spirit of arcade sports games while building its own world</p>`}const fh="/BarrelRoll/assets/jbay-DzXyHKV-.webp",ph="/BarrelRoll/assets/mavericks-B3R_YRyy.webp",mh="/BarrelRoll/assets/nazare-DnmQmzS0.webp",gh="/BarrelRoll/assets/pipeline-BJASxMtc.webp",_h="/BarrelRoll/assets/teahupoo-Db9s3Yt0.webp",vh="/BarrelRoll/assets/uluwatu-DX9Gw_oZ.webp",xh={mavericks:ph,pipeline:gh,jbay:fh,uluwatu:vh,teahupoo:_h,nazare:mh};function nc(i,t="card"){const e=xh[i];if(!e)throw new Error(`Missing preview image for ${i}`);return`<img src="${e}" alt="" aria-hidden="true" width="1536" height="1024" decoding="async" loading="${t==="feature"?"eager":"lazy"}">`}const Mh="/BarrelRoll/assets/mavericks-hero-DscC_BTQ.webp",Sh={id:"mavericks",name:"Mavericks",region:"Half Moon Bay, California",difficulty:"easy",wave:{breakDirection:"right",heightM:8,faceWidthM:20,rideLengthM:560,peelSpeedMps:12,barrelSections:[{start01:.18,end01:.38,radiusM:3.2,closeAfterEntryS:null},{start01:.62,end01:.8,radiusM:2.1,closeAfterEntryS:14}],launchSections:[{start01:.08,end01:.16,liftMultiplier:1.1},{start01:.49,end01:.58,liftMultiplier:1.5},{start01:.83,end01:.93,liftMultiplier:1.7}]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#1b6177",foamColor:"#e5f2f0",skyColor:"#b9ced9"}},yh={id:"pipeline",name:"Pipeline",region:"Oʻahu, Hawaiʻi",difficulty:"hard",wave:{breakDirection:"left",heightM:7,faceWidthM:12,rideLengthM:360,peelSpeedMps:14,barrelSections:[{start01:.2,end01:.7,radiusM:1.8,closeAfterEntryS:14}],launchSections:[{start01:.75,end01:.9,liftMultiplier:1.2}]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#157d89",foamColor:"#e6faf3",skyColor:"#a7d9dc"}},Eh="mavericks",ic=["mavericks","jbay","pipeline","teahupoo","nazare","uluwatu"],ys=(i,t,e,n)=>({start01:i,end01:t,radiusM:e,closeAfterEntryS:n}),Hn=(i,t,e)=>({start01:i,end01:t,liftMultiplier:e}),rs={mavericks:Sh,pipeline:yh,jbay:{id:"jbay",name:"Supertubes",region:"Jeffreys Bay, South Africa",difficulty:"medium",wave:{breakDirection:"right",heightM:4,faceWidthM:12,rideLengthM:700,peelSpeedMps:11,barrelSections:[ys(.45,.58,1.2,null)],launchSections:[Hn(.15,.25,1.3),Hn(.6,.7,1.3),Hn(.85,.95,1.3)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#367c82",foamColor:"#fff0d4",skyColor:"#eec8a6"}},teahupoo:{id:"teahupoo",name:"Teahupoʻo",region:"Tahiti, French Polynesia",difficulty:"expert",wave:{breakDirection:"left",heightM:6,faceWidthM:8,rideLengthM:300,peelSpeedMps:13,barrelSections:[ys(.2,.65,1.35,11)],launchSections:[Hn(.75,.9,1.3)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#165568",foamColor:"#ddf6ec",skyColor:"#9bc6ce"}},nazare:{id:"nazare",name:"Praia do Norte",region:"Nazaré, Portugal",difficulty:"expert",wave:{breakDirection:"right",heightM:25,faceWidthM:45,rideLengthM:650,peelSpeedMps:19,barrelSections:[],launchSections:[Hn(.35,.68,2)]},spawn:{along01:.05,face01:.8},visual:{waterColor:"#25485e",foamColor:"#e4f0ed",skyColor:"#adbfc8"}},uluwatu:{id:"uluwatu",name:"Uluwatu",region:"Bali, Indonesia",difficulty:"hard",wave:{breakDirection:"left",heightM:5,faceWidthM:10,rideLengthM:480,peelSpeedMps:12,barrelSections:[ys(.25,.42,1.4,7),ys(.65,.8,1.4,7)],launchSections:[Hn(.45,.6,1.4),Hn(.84,.94,1.4)]},spawn:{along01:.05,face01:.35},visual:{waterColor:"#228b8a",foamColor:"#e8f8e8",skyColor:"#c5dbcc"}}};function so(i){return i.mapId==="mavericks"&&i.mode==="score-run"&&(i.reason==="ride-out"||i.reason==="timer")}function ro(i,t){return t>0?"free-surf":i==="mavericks"?"score-run":null}const bh=[{id:"mavericks-clean-3",mapId:"mavericks",label:"Land cleanly 3 times in one run",metric:"cleanLandings",target:3},{id:"mavericks-barrel-4",mapId:"mavericks",label:"Ride a continuous 4-second barrel",metric:"longestBarrelS",target:4},{id:"mavericks-score-2000",mapId:"mavericks",label:"Score 2,000 in one session",metric:"score",target:2e3},{id:"pipeline-barrel-3",mapId:"pipeline",label:"Ride a continuous 3-second barrel",metric:"longestBarrelS",target:3},{id:"pipeline-barrel-6",mapId:"pipeline",label:"Ride a continuous 6-second barrel",metric:"longestBarrelS",target:6},{id:"pipeline-combo-2500",mapId:"pipeline",label:"Bank a 2,500-point combo",metric:"bestCombo",target:2500},{id:"jbay-clean-6",mapId:"jbay",label:"Land cleanly 6 times in one run",metric:"cleanLandings",target:6},{id:"jbay-combo-3000",mapId:"jbay",label:"Bank a 3,000-point combo",metric:"bestCombo",target:3e3},{id:"jbay-score-6000",mapId:"jbay",label:"Score 6,000 in one session",metric:"score",target:6e3},{id:"uluwatu-barrel-3",mapId:"uluwatu",label:"Ride a continuous 3-second barrel",metric:"longestBarrelS",target:3},{id:"uluwatu-spin-720",mapId:"uluwatu",label:"Land a 720",metric:"largestLandedSpinDeg",target:720},{id:"uluwatu-score-5000",mapId:"uluwatu",label:"Score 5,000 in one session",metric:"score",target:5e3},{id:"teahupoo-barrel-2",mapId:"teahupoo",label:"Ride a continuous 2-second barrel",metric:"longestBarrelS",target:2},{id:"teahupoo-barrel-3-5",mapId:"teahupoo",label:"Ride a continuous 3.5-second barrel",metric:"longestBarrelS",target:3.5},{id:"teahupoo-score-4000",mapId:"teahupoo",label:"Score 4,000 in one session",metric:"score",target:4e3},{id:"nazare-spin-720",mapId:"nazare",label:"Land a 720",metric:"largestLandedSpinDeg",target:720},{id:"nazare-spin-1080",mapId:"nazare",label:"Land a 1080",metric:"largestLandedSpinDeg",target:1080},{id:"nazare-combo-5000",mapId:"nazare",label:"Bank a 5,000-point combo",metric:"bestCombo",target:5e3}],ca=Object.freeze(bh.map(i=>Object.freeze(i))),ao=Object.freeze([{color:"#ff6f59",medals:0},{color:"#48c9b0",medals:3},{color:"#f7c548",medals:6},{color:"#a17cf2",medals:12}]),Sr="barrelroll.save.v1",sc=128,rc=["mavericks","pipeline","jbay","uluwatu","teahupoo","nazare"],ac=["free-surf","score-run"],oc=Object.freeze({quality:"medium",reducedMotion:!1,masterVolume:.7,muted:!1,boardColor:ao[0].color}),yr=()=>({version:1,levelsCleared:0,settings:{...oc},bestRuns:{},earnedMedalIds:[],recentRunIds:[]}),Ji=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),ji=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0,Mi=i=>ji(i)&&Number.isInteger(i),lc=i=>typeof i=="string"&&i.length>0&&i.length<=128,cc=i=>rc.includes(i),hc=i=>ac.includes(i);function uc(i){return!Ji(i)||!["low","medium","high"].includes(i.quality)||typeof i.reducedMotion!="boolean"||!ji(i.masterVolume)||i.masterVolume>1||typeof i.muted!="boolean"||typeof i.boardColor!="string"?null:{quality:i.quality,reducedMotion:i.reducedMotion,masterVolume:i.masterVolume,muted:i.muted,boardColor:i.boardColor}}function dc(i){return!Ji(i)||!lc(i.runId)||!cc(i.mapId)||!hc(i.mode)||!Mi(i.score)||!ji(i.durationS)||!["timer","player-ended","ride-out","missed-exit","wipeout"].includes(i.reason)||!ji(i.longestBarrelS)||!Mi(i.largestLandedSpinDeg)||!Mi(i.bestCombo)||!Mi(i.cleanLandings)||!Mi(i.wipeouts)?null:{runId:i.runId,mapId:i.mapId,mode:i.mode,score:i.score,...ji(i.cleanExitS)?{cleanExitS:i.cleanExitS}:{},durationS:i.durationS,reason:i.reason,longestBarrelS:i.longestBarrelS,largestLandedSpinDeg:i.largestLandedSpinDeg,bestCombo:i.bestCombo,cleanLandings:i.cleanLandings,wipeouts:i.wipeouts}}function wh(i){try{const t=JSON.parse(i);if(!Ji(t)||t.version!==1||!Ji(t.bestRuns)||!Array.isArray(t.earnedMedalIds)||!Array.isArray(t.recentRunIds))return null;const e=uc(t.settings);if(!e||!t.earnedMedalIds.every(o=>typeof o=="string")||!t.recentRunIds.every(lc))return null;const n={};for(const[o,l]of Object.entries(t.bestRuns))if(!(!cc(o)||!Ji(l)))for(const[c,h]of Object.entries(l)){if(!hc(c))continue;const u=dc(h);if(!u||u.mapId!==o||u.mode!==c)return null;(n[o]??={})[c]=u}const s=new Set(ca.map(o=>o.id)),r=[...new Set(t.earnedMedalIds)].filter(o=>s.has(o));return Qi(r.length).includes(e.boardColor)||(e.boardColor=oc.boardColor),{version:1,levelsCleared:Math.max(Mi(t.levelsCleared)?Math.min(5,t.levelsCleared):0,n.mavericks?.["score-run"]&&so(n.mavericks["score-run"])?1:0),settings:e,bestRuns:n,earnedMedalIds:r,recentRunIds:[...new Set(t.recentRunIds)].slice(-sc)}}catch{return null}}function Qi(i){return ao.filter(({medals:t})=>i>=t).map(({color:t})=>t)}function Th(i,t){const e={};for(const n of rc){const s=i.bestRuns[n];if(s){e[n]={};for(const r of ac){const a=s[r];a&&(e[n][r]={...a})}}}return{settings:{...i.settings},bestRuns:e,earnedMedalIds:[...i.earnedMedalIds],unlockedBoardColors:Qi(i.earnedMedalIds.length),storageAvailable:t,levelsCleared:i.levelsCleared}}function Ah(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Rh(i={}){const t=i.storage===void 0?Ah():i.storage;let e=yr(),n=t!==null;if(t)try{const a=t.getItem(Sr);a!==null&&(e=wh(a)??yr())}catch{n=!1}function s(){if(t)try{t.setItem(Sr,JSON.stringify(e)),n=!0}catch{n=!1}}function r(){return Th(e,n)}return{challenges:ca,getSnapshot:r,recordResult(a){const o=dc(a);if(!o)throw new Error("Invalid completed run result");if(e.recentRunIds.includes(o.runId))return{snapshot:r(),newMedalIds:[],newBoardColors:[],duplicate:!0};const l=Qi(e.earnedMedalIds.length),c=new Set(e.earnedMedalIds),h=[];for(const p of ca)p.mapId!==o.mapId||p.mode&&p.mode!==o.mode||c.has(p.id)||o[p.metric]<p.target||(c.add(p.id),h.push(p.id));e.earnedMedalIds=[...c];const u=e.bestRuns[o.mapId]?.[o.mode];(!u||o.score>u.score)&&((e.bestRuns[o.mapId]??={})[o.mode]=o),so(o)&&(e.levelsCleared=Math.max(1,e.levelsCleared)),e.recentRunIds.push(o.runId),e.recentRunIds=e.recentRunIds.slice(-sc),s();const f=Qi(e.earnedMedalIds.length).filter(p=>!l.includes(p));return{snapshot:r(),newMedalIds:h,newBoardColors:f,duplicate:!1}},updateSettings(a){const o=uc({...e.settings,...a});if(!o)throw new Error("Invalid game settings");if(!Qi(e.earnedMedalIds.length).includes(o.boardColor))throw new Error("Board color is locked");return e.settings=o,s(),r()},reset(){if(e=yr(),t)try{t.removeItem(Sr),n=!0}catch{n=!1}return r()}}}class Ch{context;noise;master;filter;level;last;start(t){if(!this.context){if(typeof AudioContext>"u")return;const e=this.context=new AudioContext;this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const n=this.noise.getChannelData(0);let s=0;for(let a=0;a<n.length;a++)s=(s+.16*(Math.random()*2-1))/1.16,n[a]=s*2;const r=e.createBufferSource();r.buffer=this.noise,r.loop=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.level=e.createGain(),this.level.gain.value=.2,this.master=e.createGain(),r.connect(this.filter).connect(this.level).connect(this.master).connect(e.destination),r.start()}this.last=void 0,this.settings(t),this.context.resume().catch(()=>{})}settings(t){this.master&&this.context&&this.master.gain.setTargetAtTime(t.muted?0:t.masterVolume*.67,this.context.currentTime,.04)}update(t){const e=this.context;if(!e||!this.filter||!this.level)return;const n=t.state==="barrel",s=t.state==="airborne";this.filter.frequency.setTargetAtTime(n?520:900+t.speedMps*110,e.currentTime,.12),this.level.gain.setTargetAtTime(s?.065:n?.82:.14+t.speedMps*.011,e.currentTime,.13);const r=this.last?.state==="airborne"&&!s,a=this.last?.state==="barrel"&&!n;if(r||a||t.state==="wipeout"&&this.last?.state!=="wipeout"){const o=t.state==="wipeout",l=t.trickLabel.includes("Sketchy");this.splash(o?.8:l?.44:a?.31:.15,o?530:l?1450:3600)}this.last=t}splash(t,e){if(!this.context||!this.master||!this.noise)return;const n=this.context,s=n.currentTime,r=n.createBufferSource(),a=n.createBiquadFilter(),o=n.createGain();r.buffer=this.noise,a.type="lowpass",a.frequency.setValueAtTime(e,s),a.frequency.exponentialRampToValueAtTime(230,s+t),o.gain.setValueAtTime(.001,s),o.gain.exponentialRampToValueAtTime(1.3,s+.015),o.gain.exponentialRampToValueAtTime(.001,s+t),r.connect(a).connect(o).connect(this.master),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()},r.start(),r.stop(s+t)}pause(){this.context&&this.context.suspend().catch(()=>{})}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="180",Ph=0,Oo=1,Lh=2,fc=1,Ih=2,vn=3,Nn=0,Ne=1,pe=2,In=0,Ti=1,Bo=2,zo=3,ko=4,Dh=5,Jn=100,Uh=101,Nh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Hh=203,ha=204,ua=205,Vh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,$h=212,Zh=213,Kh=214,da=0,fa=1,pa=2,Ri=3,ma=4,ga=5,_a=6,va=7,lo=0,Jh=1,jh=2,Dn=0,Qh=1,tu=2,eu=3,nu=4,iu=5,su=6,ru=7,pc=300,Ci=301,Pi=302,xa=303,Ma=304,dr=306,Li=1e3,Qn=1001,Sa=1002,Ve=1003,au=1004,Es=1005,Ue=1006,Er=1007,Mn=1008,hn=1009,mc=1010,gc=1011,as=1012,co=1013,ti=1014,Sn=1015,_s=1016,ho=1017,uo=1018,os=1020,_c=35902,vc=35899,xc=1021,Mc=1022,ke=1023,ls=1026,cs=1027,Sc=1028,fo=1029,yc=1030,po=1031,mo=1033,js=33776,Qs=33777,tr=33778,er=33779,ya=35840,Ea=35841,ba=35842,wa=35843,Ta=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,$a=36285,Za=36286,ou=3200,lu=3201,go=0,cu=1,Ln="",Ie="srgb",Ii="srgb-linear",rr="linear",ie="srgb",ri=7680,Ho=519,hu=512,uu=513,du=514,Ec=515,fu=516,pu=517,mu=518,gu=519,Vo=35044,Go="300 es",ln=2e3,ar=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wo=1234567;const ts=Math.PI/180,hs=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function _o(i,t){return(i%t+t)%t}function _u(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vu(i,t,e){return i!==t?(e-i)/(t-i):0}function es(i,t,e){return(1-e)*i+e*t}function xu(i,t,e,n){return es(i,t,1-Math.exp(-e*n))}function Mu(i,t=1){return t-Math.abs(_o(i,t*2)-t)}function Su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function wu(i){return i*(.5-Math.random())}function Tu(i){i!==void 0&&(Wo=i);let t=Wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Au(i){return i*ts}function Ru(i){return i*hs}function Cu(i){return(i&i-1)===0&&i!==0}function Pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ye={DEG2RAD:ts,RAD2DEG:hs,generateUUID:ii,clamp:Gt,euclideanModulo:_o,mapLinear:_u,inverseLerp:vu,lerp:es,damp:xu,pingpong:Mu,smoothstep:Su,smootherstep:yu,randInt:Eu,randFloat:bu,randFloatSpread:wu,seededRandom:Tu,degToRad:Au,radToDeg:Ru,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Lu,setQuaternionFromProperEuler:Iu,normalize:Ae,denormalize:Si};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,d*E);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const v=o*E;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return br.copy(this).projectOnVector(t),this.sub(br)}reflect(t){return this.sub(br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new D,Xo=new Ye;class Ht{constructor(t,e,n,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],M=s[4],v=s[7],T=s[2],w=s[5],P=s[8];return r[0]=a*_+o*E+l*T,r[3]=a*m+o*M+l*w,r[6]=a*d+o*v+l*P,r[1]=c*_+h*E+u*T,r[4]=c*m+h*M+u*w,r[7]=c*d+h*v+u*P,r[2]=f*_+p*E+g*T,r[5]=f*m+p*M+g*w,r[8]=f*d+p*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new Ht;function bc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=or("canvas");return i.style.display="block",i}const qo={};function us(i){i in qo||(qo[i]=!0,console.warn(i))}function Uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Yo=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Yo,fromXYZ:$o,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Yo,fromXYZ:$o,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const jt=Nu();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ai;class Fu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ai===void 0&&(ai=or("canvas")),ai.width=t.width,ai.height=t.height;const s=ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ou=0;class vo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tr(s[a].image)):r.push(Tr(s[a]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;const Ar=new D;class Pe extends Fi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Qn,s=Qn,r=Ue,a=Mn,o=ke,l=hn,c=Pe.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ii(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ar).x}get height(){return this.source.getSize(Ar).y}get depth(){return this.source.getSize(Ar).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=pc;Pe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(p+1)/2,T=(d+1)/2,w=(h+f)/4,P=(u+_)/4,R=(g+m)/4;return M>v&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=P/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Pe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new vo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),ws.subVectors(this.max,Hi),oi.subVectors(t.a,Hi),li.subVectors(t.b,Hi),ci.subVectors(t.c,Hi),bn.subVectors(li,oi),wn.subVectors(ci,li),Vn.subVectors(oi,ci);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!Rr(e,oi,li,ci,ws)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,oi,li,ci,ws))?!1:(Ts.crossVectors(bn,wn),e=[Ts.x,Ts.y,Ts.z],Rr(e,oi,li,ci,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fn=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,bs=new vs,oi=new D,li=new D,ci=new D,bn=new D,wn=new D,Vn=new D,Hi=new D,ws=new D,Ts=new D,Gn=new D;function Rr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hu=new vs,Vi=new D,Cr=new D;class xs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(Cr)),this.expandByPoint(Vi.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pn=new D,Pr=new D,As=new D,Tn=new D,Lr=new D,Rs=new D,Ir=new D;class xo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Tn.dot(this.direction),l=-Tn.dot(As),c=Tn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(As,f),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),Rs.subVectors(n,t),Ir.crossVectors(Lr,Rs);let a=this.direction.dot(Ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(Rs.crossVectors(Tn,Rs));if(l<0)return null;const c=o*this.direction.dot(Lr.cross(Tn));if(c<0||l+c>a)return null;const h=-o*Tn.dot(Ir);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Gu)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),An.crossVectors(n,Be),An.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),An.crossVectors(n,Be)),An.normalize(),Cs.crossVectors(Be,An),s[0]=An.x,s[4]=Cs.x,s[8]=Be.x,s[1]=An.y,s[5]=Cs.y,s[9]=Be.y,s[2]=An.z,s[6]=Cs.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],M=n[7],v=n[11],T=n[15],w=s[0],P=s[4],R=s[8],S=s[12],y=s[1],C=s[5],I=s[9],O=s[13],k=s[2],H=s[6],X=s[10],$=s[14],B=s[3],nt=s[7],dt=s[11],xt=s[15];return r[0]=a*w+o*y+l*k+c*B,r[4]=a*P+o*C+l*H+c*nt,r[8]=a*R+o*I+l*X+c*dt,r[12]=a*S+o*O+l*$+c*xt,r[1]=h*w+u*y+f*k+p*B,r[5]=h*P+u*C+f*H+p*nt,r[9]=h*R+u*I+f*X+p*dt,r[13]=h*S+u*O+f*$+p*xt,r[2]=g*w+_*y+m*k+d*B,r[6]=g*P+_*C+m*H+d*nt,r[10]=g*R+_*I+m*X+d*dt,r[14]=g*S+_*O+m*$+d*xt,r[3]=E*w+M*y+v*k+T*B,r[7]=E*P+M*C+v*H+T*nt,r[11]=E*R+M*I+v*X+T*dt,r[15]=E*S+M*O+v*$+T*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,M=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,T=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,w=e*E+n*M+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=E*P,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*P,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*P,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*P,t[4]=M*P,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*P,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*P,t[8]=v*P,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*P,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*P,t[12]=T*P,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,E=l*c,M=l*h,v=l*u,T=n.x,w=n.y,P=n.z;return s[0]=(1-(_+d))*T,s[1]=(p+v)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+M)*P,s[9]=(m-E)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/a,u=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ar)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===ln)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ar)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new D,Ke=new le,Vu=new D(0,0,0),Gu=new D(1,1,1),An=new D,Cs=new D,Be=new D,Zo=new le,Ko=new Ye;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const Jo=new D,ui=new Ye,mn=new le,Ps=new D,Gi=new D,Xu=new D,qu=new Ye,jo=new D(1,0,0),Qo=new D(0,1,0),tl=new D(0,0,1),el={type:"added"},Yu={type:"removed"},di={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Se extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new Qe,n=new Ye,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ht}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Qo,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Jo.copy(t).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Qo,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Gi,Ps,this.up):mn.lookAt(Ps,Gi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new D,gn=new D,Ur=new D,_n=new D,fi=new D,pi=new D,nl=new D,Nr=new D,Fr=new D,Or=new D,Br=new fe,zr=new fe,kr=new fe;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),gn.subVectors(n,e),Ur.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(gn),l=Je.dot(Ur),c=gn.dot(gn),h=gn.dot(Ur),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Br.setScalar(0),zr.setScalar(0),kr.setScalar(0),Br.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Br,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),gn.subVectors(t,e),Je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),Nr.subVectors(t,n);const l=fi.dot(Nr),c=pi.dot(Nr);if(l<=0&&c<=0)return e.copy(n);Fr.subVectors(t,s);const h=fi.dot(Fr),u=pi.dot(Fr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fi,a);Or.subVectors(t,r);const p=fi.dot(Or),g=pi.dot(Or);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(pi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return nl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(nl,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=_o(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hr(a,r,t+1/3),this.g=Hr(a,r,t),this.b=Hr(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return jt.workingToColorSpace(we.copy(this),t),Math.round(Gt(we.r*255,0,255))*65536+Math.round(Gt(we.g*255,0,255))*256+Math.round(Gt(we.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ie){jt.workingToColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ls);const n=es(Rn.h,Ls.h,e),s=es(Rn.s,Ls.s,e),r=es(Rn.l,Ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Rt;Rt.NAMES=Ac;let $u=0;class On extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ti,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Oi extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new D,Is=new ut;let Zu=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vo&&(t.usage=this.usage),t}}class Rc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const Xe=new le,Vr=new Se,mi=new D,ze=new vs,Wi=new vs,Me=new D;class oe extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?Cc:Rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(ze.min,Wi.min),ze.expandByPoint(Me),Me.addVectors(ze.max,Wi.max),ze.expandByPoint(Me)):(ze.expandByPoint(Wi.min),ze.expandByPoint(Wi.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),Me.add(mi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,f=new ut,p=new ut,g=new ut,_=new D,m=new D;function d(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(_),o[S].add(_),o[y].add(_),l[R].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,S=E.length;R<S;++R){const y=E[R],C=y.start,I=y.count;for(let O=C,k=C+I;O<k;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new D,v=new D,T=new D,w=new D;function P(R){T.fromBufferAttribute(s,R),w.copy(T);const S=o[R];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const C=v.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,S=E.length;R<S;++R){const y=E[R],C=y.start,I=y.count;for(let O=C,k=C+I;O<k;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new le,Wn=new xo,Ds=new xs,sl=new D,Us=new D,Ns=new D,Fs=new D,Gr=new D,Os=new D,rl=new D,Bs=new D;class Zt extends Se{constructor(t=new oe,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),a?Os.addScaledVector(Gr,h):Os.addScaledVector(Gr.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ds,sl)===null||Wn.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(il.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(il),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,T=M;v<T;v+=3){const w=o.getX(v),P=o.getX(v+1),R=o.getX(v+2);s=zs(this,d,t,n,c,h,u,w,P,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=zs(this,a,t,n,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,T=M;v<T;v+=3){const w=v,P=v+1,R=v+2;s=zs(this,d,t,n,c,h,u,w,P,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,M=m+1,v=m+2;s=zs(this,a,t,n,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ju(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:i}}function zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Us),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Fs);const h=Ju(i,t,e,n,Us,Ns,Fs,rl);if(h){const u=new D;je.getBarycoord(rl,Us,Ns,Fs,u),s&&(h.uv=je.getInterpolatedAttribute(s,o,l,c,u,new ut)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new ut)),a&&(h.normal=je.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};je.getNormal(Us,Ns,Fs,f.normal),h.face=f,h.barycoord=u}return h}class En extends oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(_,m,d,E,M,v,T,w,P,R,S){const y=v/P,C=T/R,I=v/2,O=T/2,k=w/2,H=P+1,X=R+1;let $=0,B=0;const nt=new D;for(let dt=0;dt<X;dt++){const xt=dt*C-O;for(let Ft=0;Ft<H;Ft++){const qt=Ft*y-I;nt[_]=qt*E,nt[m]=xt*M,nt[d]=k,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[d]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ft/P),u.push(1-dt/R),$+=1}}for(let dt=0;dt<R;dt++)for(let xt=0;xt<P;xt++){const Ft=f+xt+H*dt,qt=f+xt+H*(dt+1),Kt=f+(xt+1)+H*(dt+1),Yt=f+(xt+1)+H*dt;l.push(Ft,qt,Yt),l.push(qt,Kt,Yt),B+=6}o.addGroup(p,B,S),p+=B,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const s in n)t[s]=n[s]}return t}function ju(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Qu={clone:Di,merge:Ce};var td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lc extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new D,al=new ut,ol=new ut;class qe extends Lc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,al,ol),e.subVectors(ol,al)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class nd extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new qe(gi,_i,t,e);r.layers=this.layers,this.add(r);const a=new qe(gi,_i,t,e);a.layers=this.layers,this.add(a);const o=new qe(gi,_i,t,e);o.layers=this.layers,this.add(o);const l=new qe(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new qe(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ic extends Pe{constructor(t=[],e=Ci,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class id extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:In});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Ue),new nd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class He extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sd={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ui{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new Ui(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rd extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mo extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,h=Ve,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new D,ad=new D,od=new Ht;class Zn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xr.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||od.getNormalMatrix(t),s=this.coplanarPoint(Xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new xs,ld=new ut(.5,.5),ks=new D;class So{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],E=r[12],M=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,d-g,T-E).normalize(),s[1].setComponents(c+a,p+h,d+g,T+E).normalize(),s[2].setComponents(c+o,p+u,d+_,T+M).normalize(),s[3].setComponents(c-o,p-u,d-_,T-M).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,d-m,T-v).normalize();else if(s[4].setComponents(c-l,p-f,d-m,T-v).normalize(),e===ln)s[5].setComponents(c+l,p+f,d+m,T+v).normalize();else if(e===ar)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);const e=ld.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ka extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lr=new D,cr=new D,ll=new le,Xi=new xo,Hs=new xs,qr=new D,cl=new D;class Dc extends Se{constructor(t=new oe,e=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)lr.fromBufferAttribute(e,s-1),cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;ll.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),E=h.getX(_+1),M=Vs(this,t,Xi,l,d,E,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Vs(this,t,Xi,l,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=Vs(this,t,Xi,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Vs(this,t,Xi,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,r),e.distanceSqToSegment(lr,cr,qr,cl)>n)return;qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qr);if(!(c<t.near||c>t.far))return{distance:c,point:cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const hl=new D,ul=new D;class cd extends Dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hl.fromBufferAttribute(e,s),ul.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hl.distanceTo(ul);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hd extends Dc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yo extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dl=new le,Ja=new xo,Gs=new xs,Ws=new D;class Uc extends Se{constructor(t=new oe,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;dl.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Ws.fromBufferAttribute(u,m),fl(Ws,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Ws.fromBufferAttribute(u,g),fl(Ws,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fl(i,t,e,n,s,r,a){const o=Ja.distanceSqToPoint(i);if(o<e){const l=new D;Ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Nc extends Pe{constructor(t,e,n=ti,s,r,a,o=Ve,l=Ve,c,h=ls,u=1){if(h!==ls&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fc extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nn extends oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;E(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2));function E(){const v=new D,T=new D;let w=0;const P=(e-t)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,C=y*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,k=O*l+o,H=Math.sin(k),X=Math.cos(k);T.x=C*H,T.y=-y*n+m,T.z=C*X,u.push(T.x,T.y,T.z),v.set(H,P,X).normalize(),f.push(v.x,v.y,v.z),p.push(O,1-y),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=_[S][R],C=_[S+1][R],I=_[S+1][R+1],O=_[S][R+1];(t>0||S!==0)&&(h.push(y,C,O),w+=3),(e>0||S!==r-1)&&(h.push(C,I,O),w+=3)}c.addGroup(d,w,0),d+=w}function M(v){const T=g,w=new ut,P=new D;let R=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const k=I/s*l+o,H=Math.cos(k),X=Math.sin(k);P.x=S*X,P.y=m*y,P.z=S*H,u.push(P.x,P.y,P.z),f.push(0,y,0),w.x=H*.5+.5,w.y=X*.5*y+.5,p.push(w.x,w.y),g++}for(let I=0;I<s;I++){const O=T+I,k=C+I;v===!0?h.push(k,k+1,O):h.push(k+1,k,O),R+=3}c.addGroup(d,R,v===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fr extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new D,v=new D,T=new D;for(let w=0;w<e.length;w+=3)p(e[w+0],M),p(e[w+1],v),p(e[w+2],T),l(M,v,T,E)}function l(E,M,v,T){const w=T+1,P=[];for(let R=0;R<=w;R++){P[R]=[];const S=E.clone().lerp(v,R/w),y=M.clone().lerp(v,R/w),C=w-R;for(let I=0;I<=C;I++)I===0&&R===w?P[R][I]=S:P[R][I]=S.clone().lerp(y,I/C)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(P[R][y+1]),f(P[R+1][y]),f(P[R][y])):(f(P[R][y+1]),f(P[R+1][y+1]),f(P[R+1][y]))}}function c(E){const M=new D;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(E),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const E=new D;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const v=m(E)/2/Math.PI+.5,T=d(E)/Math.PI+.5;a.push(v,1-T)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const M=a[E+0],v=a[E+2],T=a[E+4],w=Math.max(M,v,T),P=Math.min(M,v,T);w>.9&&P<.1&&(M<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,M){const v=E*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const E=new D,M=new D,v=new D,T=new D,w=new ut,P=new ut,R=new ut;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),T.copy(E).add(M).add(v).divideScalar(3);const C=m(T);_(w,y+0,E,C),_(P,y+2,M,C),_(R,y+4,v,C)}}function _(E,M,v,T){T<0&&E.x===1&&(a[M]=E.x-1),v.x===0&&v.z===0&&(a[M]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}class bo extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Gt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wo extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ud extends wo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function To(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Xs=new D,Yr=new To,$r=new To,Zr=new To;class dd extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xs.subVectors(s[0],s[1]).add(s[0]),c=Xs);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),$r.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Zr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),$r.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Zr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Yr.calc(l),$r.calc(l),Zr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function fd(i,t){const e=1-i;return e*e*t}function pd(i,t){return 2*(1-i)*i*t}function md(i,t){return i*i*t}function ns(i,t,e,n){return fd(i,t)+pd(i,e)+md(i,n)}function gd(i,t){const e=1-i;return e*e*e*t}function _d(i,t){const e=1-i;return 3*e*e*i*t}function vd(i,t){return 3*(1-i)*i*i*t}function xd(i,t){return i*i*i*t}function is(i,t,e,n,s){return gd(i,t)+_d(i,e)+vd(i,n)+xd(i,s)}class Oc extends un{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Md extends un{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y),is(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bc extends un{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends un{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y),ns(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(pl(o,l.x,c.x,h.x,u.x),pl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var ja=Object.freeze({__proto__:null,ArcCurve:ud,CatmullRomCurve3:dd,CubicBezierCurve:Oc,CubicBezierCurve3:Md,EllipseCurve:wo,LineCurve:Bc,LineCurve3:Sd,QuadraticBezierCurve:zc,QuadraticBezierCurve3:yd,SplineCurve:kc});class Ed extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ja[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ja[s.type]().fromJSON(s))}return this}}class ml extends Ed{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zc(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Oc(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new wo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ao extends ml{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ml().fromJSON(s))}return this}}function bd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Hc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Cd(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ds(r,a,e,o,l,c,0),a}function Hc(i,t,e,n,s){let r;if(s===kd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=gl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=gl(a/n|0,i[a],i[a+1],r);return r&&Ni(r,r.next)&&(ps(r),r=r.next),r}function ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ni(e,e.next)||ue(e.prev,e,e.next)===0)){if(ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ds(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ud(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Td(i,n,s,r):wd(i)){t.push(l.i,i.i,c.i),ps(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ad(ni(i),t),ds(i,t,e,n,s,r,2)):a===2&&Rd(i,t,e,n,s,r):ds(ni(i),t,e,n,s,r,1);break}}}function wd(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Zi(s,o,r,l,a,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Td(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),d=Qa(p,g,t,e,n),E=Qa(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=d&&v&&v.z<=E;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zi(o,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Zi(o,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zi(o,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Zi(o,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ad(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ni(n,s)&&Gc(n,e,e.next,s)&&fs(n,s)&&fs(s,n)&&(t.push(n.i,e.i,s.i),ps(e),ps(e.next),e=i=s),e=e.next}while(e!==i);return ni(e)}function Rd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Od(a,o)){let l=Wc(a,o);a=ni(a,a.next),l=ni(l,l.next),ds(a,t,e,n,s,r,0),ds(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Cd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Hc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fd(c))}s.sort(Pd);for(let r=0;r<s.length;r++)e=Ld(s[r],e);return e}function Pd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ld(i,t){const e=Id(i,t);if(!e)return t;const n=Wc(e,i);return ni(n,n.next),ni(e,e.next)}function Id(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Ni(i,e))return e;do{if(Ni(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);fs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Dd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Dd(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function Ud(i,t,e,n){let s=i;do s.z===0&&(s.z=Qa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nd(s)}function Nd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Qa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zi(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Vc(i,t,e,n,s,r,a,o)}function Od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bd(i,t)&&(fs(i,t)&&fs(t,i)&&zd(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Ni(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ni(i,t){return i.x===t.x&&i.y===t.y}function Gc(i,t,e,n){const s=Ys(ue(i,t,e)),r=Ys(ue(i,t,n)),a=Ys(ue(e,n,i)),o=Ys(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&qs(i,e,t)||r===0&&qs(i,n,t)||a===0&&qs(e,i,n)||o===0&&qs(e,t,n))}function qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ys(i){return i>0?1:i<0?-1:0}function Bd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fs(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function zd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wc(i,t){const e=to(i.i,i.x,i.y),n=to(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gl(i,t,e,n){const s=to(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function to(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Hd{static triangulate(t,e,n=2){return bd(t,e,n)}}class yi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_l(t),vl(n,t);let a=t.length;e.forEach(_l);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,vl(n,e[l]);const o=Hd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function _l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class pr extends oe{constructor(t=new Ao([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Vd;let M,v=!1,T,w,P,R;d&&(M=d.getSpacedPoints(h),v=!0,f=!1,T=d.computeFrenetFrames(h,!1),w=new D,P=new D,R=new D),f||(m=0,p=0,g=0,_=0);const S=o.extractPoints(c);let y=S.shape;const C=S.holes;if(!yi.isClockWise(y)){y=y.reverse();for(let tt=0,j=C.length;tt<j;tt++){const Z=C[tt];yi.isClockWise(Z)&&(C[tt]=Z.reverse())}}function O(tt){const Z=10000000000000001e-36;let K=tt[0];for(let ct=1;ct<=tt.length;ct++){const it=ct%tt.length,ht=tt[it],Bt=ht.x-K.x,Ot=ht.y-K.y,A=Bt*Bt+Ot*Ot,x=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(K.x),Math.abs(K.y)),z=Z*x*x;if(A<=z){tt.splice(it,1),ct--;continue}K=ht}}O(y),C.forEach(O);const k=C.length,H=y;for(let tt=0;tt<k;tt++){const j=C[tt];y=y.concat(j)}function X(tt,j,Z){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(j,Z)}const $=y.length;function B(tt,j,Z){let K,ct,it;const ht=tt.x-j.x,Bt=tt.y-j.y,Ot=Z.x-tt.x,A=Z.y-tt.y,x=ht*ht+Bt*Bt,z=ht*A-Bt*Ot;if(Math.abs(z)>Number.EPSILON){const q=Math.sqrt(x),et=Math.sqrt(Ot*Ot+A*A),Y=j.x-Bt/q,Ct=j.y+ht/q,lt=Z.x-A/et,wt=Z.y+Ot/et,Tt=((lt-Y)*A-(wt-Ct)*Ot)/(ht*A-Bt*Ot);K=Y+ht*Tt-tt.x,ct=Ct+Bt*Tt-tt.y;const st=K*K+ct*ct;if(st<=2)return new ut(K,ct);it=Math.sqrt(st/2)}else{let q=!1;ht>Number.EPSILON?Ot>Number.EPSILON&&(q=!0):ht<-Number.EPSILON?Ot<-Number.EPSILON&&(q=!0):Math.sign(Bt)===Math.sign(A)&&(q=!0),q?(K=-Bt,ct=ht,it=Math.sqrt(x)):(K=ht,ct=Bt,it=Math.sqrt(x/2))}return new ut(K/it,ct/it)}const nt=[];for(let tt=0,j=H.length,Z=j-1,K=tt+1;tt<j;tt++,Z++,K++)Z===j&&(Z=0),K===j&&(K=0),nt[tt]=B(H[tt],H[Z],H[K]);const dt=[];let xt,Ft=nt.concat();for(let tt=0,j=k;tt<j;tt++){const Z=C[tt];xt=[];for(let K=0,ct=Z.length,it=ct-1,ht=K+1;K<ct;K++,it++,ht++)it===ct&&(it=0),ht===ct&&(ht=0),xt[K]=B(Z[K],Z[it],Z[ht]);dt.push(xt),Ft=Ft.concat(xt)}let qt;if(m===0)qt=yi.triangulateShape(H,C);else{const tt=[],j=[];for(let Z=0;Z<m;Z++){const K=Z/m,ct=p*Math.cos(K*Math.PI/2),it=g*Math.sin(K*Math.PI/2)+_;for(let ht=0,Bt=H.length;ht<Bt;ht++){const Ot=X(H[ht],nt[ht],it);Et(Ot.x,Ot.y,-ct),K===0&&tt.push(Ot)}for(let ht=0,Bt=k;ht<Bt;ht++){const Ot=C[ht];xt=dt[ht];const A=[];for(let x=0,z=Ot.length;x<z;x++){const q=X(Ot[x],xt[x],it);Et(q.x,q.y,-ct),K===0&&A.push(q)}K===0&&j.push(A)}}qt=yi.triangulateShape(tt,j)}const Kt=qt.length,Yt=g+_;for(let tt=0;tt<$;tt++){const j=f?X(y[tt],Ft[tt],Yt):y[tt];v?(P.copy(T.normals[0]).multiplyScalar(j.x),w.copy(T.binormals[0]).multiplyScalar(j.y),R.copy(M[0]).add(P).add(w),Et(R.x,R.y,R.z)):Et(j.x,j.y,0)}for(let tt=1;tt<=h;tt++)for(let j=0;j<$;j++){const Z=f?X(y[j],Ft[j],Yt):y[j];v?(P.copy(T.normals[tt]).multiplyScalar(Z.x),w.copy(T.binormals[tt]).multiplyScalar(Z.y),R.copy(M[tt]).add(P).add(w),Et(R.x,R.y,R.z)):Et(Z.x,Z.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const j=tt/m,Z=p*Math.cos(j*Math.PI/2),K=g*Math.sin(j*Math.PI/2)+_;for(let ct=0,it=H.length;ct<it;ct++){const ht=X(H[ct],nt[ct],K);Et(ht.x,ht.y,u+Z)}for(let ct=0,it=C.length;ct<it;ct++){const ht=C[ct];xt=dt[ct];for(let Bt=0,Ot=ht.length;Bt<Ot;Bt++){const A=X(ht[Bt],xt[Bt],K);v?Et(A.x,A.y+M[h-1].y,M[h-1].x+Z):Et(A.x,A.y,u+Z)}}}W(),J();function W(){const tt=s.length/3;if(f){let j=0,Z=$*j;for(let K=0;K<Kt;K++){const ct=qt[K];Mt(ct[2]+Z,ct[1]+Z,ct[0]+Z)}j=h+m*2,Z=$*j;for(let K=0;K<Kt;K++){const ct=qt[K];Mt(ct[0]+Z,ct[1]+Z,ct[2]+Z)}}else{for(let j=0;j<Kt;j++){const Z=qt[j];Mt(Z[2],Z[1],Z[0])}for(let j=0;j<Kt;j++){const Z=qt[j];Mt(Z[0]+$*h,Z[1]+$*h,Z[2]+$*h)}}n.addGroup(tt,s.length/3-tt,0)}function J(){const tt=s.length/3;let j=0;mt(H,j),j+=H.length;for(let Z=0,K=C.length;Z<K;Z++){const ct=C[Z];mt(ct,j),j+=ct.length}n.addGroup(tt,s.length/3-tt,1)}function mt(tt,j){let Z=tt.length;for(;--Z>=0;){const K=Z;let ct=Z-1;ct<0&&(ct=tt.length-1);for(let it=0,ht=h+m*2;it<ht;it++){const Bt=$*it,Ot=$*(it+1),A=j+K+Bt,x=j+ct+Bt,z=j+ct+Ot,q=j+K+Ot;Xt(A,x,z,q)}}}function Et(tt,j,Z){l.push(tt),l.push(j),l.push(Z)}function Mt(tt,j,Z){ee(tt),ee(j),ee(Z);const K=s.length/3,ct=E.generateTopUV(n,s,K-3,K-2,K-1);L(ct[0]),L(ct[1]),L(ct[2])}function Xt(tt,j,Z,K){ee(tt),ee(j),ee(K),ee(j),ee(Z),ee(K);const ct=s.length/3,it=E.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);L(it[0]),L(it[1]),L(it[3]),L(it[1]),L(it[2]),L(it[3])}function ee(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function L(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ja[s.type]().fromJSON(s)),new pr(n,t.options)}}const Vd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-u),new ut(f,1-g),new ut(_,1-d)]:[new ut(o,1-l),new ut(h,1-u),new ut(p,1-g),new ut(m,1-d)]}};function Gd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bn extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-a;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const M=E+c*d,v=E+c*(d+1),T=E+1+c*(d+1),w=E+1+c*d;p.push(M,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class rn extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const M=h[d][E+1],v=h[d][E],T=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&p.push(M,v,w),(d!==n-1||l<Math.PI)&&p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wd extends De{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xc extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xd extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qd extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qc extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Kr=new le,xl=new D,Ml=new D;class Yd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yc extends Lc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $d extends Yd{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new $d}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zd extends qc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kd extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sl(i,t,e,n){const s=Jd(n);switch(e){case xc:return i*t;case Sc:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case Mc:return i*t*3/s.components*s.byteLength;case ke:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(t,8)/4;case ya:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jd(i){switch(i){case hn:case mc:return{byteLength:1,components:1};case as:case gc:case _s:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case ti:case co:case Sn:return{byteLength:4,components:1};case _c:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
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
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Qd,alphahash_pars_fragment:tf,alphamap_fragment:ef,alphamap_pars_fragment:nf,alphatest_fragment:sf,alphatest_pars_fragment:rf,aomap_fragment:af,aomap_pars_fragment:of,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:yf,common:Ef,cube_uv_reflection_fragment:bf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:qf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:kf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:$f,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Jf,lights_physical_pars_fragment:jf,lights_fragment_begin:Qf,lights_fragment_maps:tp,lights_fragment_end:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:Mp,normal_vertex:Sp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Ip,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:kp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:$p,uv_pars_fragment:Zp,uv_pars_vertex:Kp,uv_vertex:Jp,worldpos_vertex:jp,background_vert:Qp,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:am,distanceRGBA_vert:om,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:Mm,meshphong_vert:Sm,meshphong_frag:ym,meshphysical_vert:Em,meshphysical_frag:bm,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Lm,sprite_frag:Im},pt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},sn={basic:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ce([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ce([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ce([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ce([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ce([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ce([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ce([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ce([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ce([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ce([pt.lights,pt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};sn.physical={uniforms:Ce([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const $s={r:0,b:0,g:0},qn=new Qe,Dm=new le;function Um(i,t,e,n,s,r,a){const o=new Rt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const T=g(M);T===null?d(o,l):T&&T.isColor&&(d(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===dr)?(h===void 0&&(h=new Zt(new En(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Di(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(v.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(qn)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==ie,(u!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Zt(new Bn(2,2),new tn({name:"BackgroundMaterial",uniforms:Di(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==ie,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,v){M.getRGB($s,Pc(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,v,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:_,addToRenderList:m,dispose:E}}function Nm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,C,I,O,k){let H=!1;const X=u(O,I,C);r!==X&&(r=X,c(r.object)),H=p(y,O,I,k),H&&g(y,O,I,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(y,C,I,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,I){const O=I.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let H=k[C.id];H===void 0&&(H={},k[C.id]=H);let X=H[O];return X===void 0&&(X=f(l()),H[O]=X),X}function f(y){const C=[],I=[],O=[];for(let k=0;k<e;k++)C[k]=0,I[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,C,I,O){const k=r.attributes,H=C.attributes;let X=0;const $=I.getAttributes();for(const B in $)if($[B].location>=0){const dt=k[B];let xt=H[B];if(xt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),dt===void 0||dt.attribute!==xt||xt&&dt.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(y,C,I,O){const k={},H=C.attributes;let X=0;const $=I.getAttributes();for(const B in $)if($[B].location>=0){let dt=H[B];dt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const xt={};xt.attribute=dt,dt&&dt.data&&(xt.data=dt.data),k[B]=xt,X++}r.attributes=k,r.attributesNum=X,r.index=O}function _(){const y=r.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){const I=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;I[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),k[y]!==C&&(i.vertexAttribDivisor(y,C),k[y]=C)}function E(){const y=r.newAttributes,C=r.enabledAttributes;for(let I=0,O=C.length;I<O;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function M(y,C,I,O,k,H,X){X===!0?i.vertexAttribIPointer(y,C,I,k,H):i.vertexAttribPointer(y,C,I,O,k,H)}function v(y,C,I,O){_();const k=O.attributes,H=I.getAttributes(),X=C.defaultAttributeValues;for(const $ in H){const B=H[$];if(B.location>=0){let nt=k[$];if(nt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const dt=nt.normalized,xt=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;const qt=Ft.buffer,Kt=Ft.type,Yt=Ft.bytesPerElement,W=Kt===i.INT||Kt===i.UNSIGNED_INT||nt.gpuType===co;if(nt.isInterleavedBufferAttribute){const J=nt.data,mt=J.stride,Et=nt.offset;if(J.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)d(B.location+Mt,J.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)m(B.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Mt=0;Mt<B.locationSize;Mt++)M(B.location+Mt,xt/B.locationSize,Kt,dt,mt*Yt,(Et+xt/B.locationSize*Mt)*Yt,W)}else{if(nt.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)d(B.location+J,nt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<B.locationSize;J++)m(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let J=0;J<B.locationSize;J++)M(B.location+J,xt/B.locationSize,Kt,dt,xt*Yt,xt/B.locationSize*J*Yt,W)}}else if(X!==void 0){const dt=X[$];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(B.location,dt);break;case 3:i.vertexAttrib3fv(B.location,dt);break;case 4:i.vertexAttrib4fv(B.location,dt);break;default:i.vertexAttrib1fv(B.location,dt)}}}}E()}function T(){R();for(const y in n){const C=n[y];for(const I in C){const O=C[I];for(const k in O)h(O[k].object),delete O[k];delete C[I]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const I in C){const O=C[I];for(const k in O)h(O[k].object),delete O[k];delete C[I]}delete n[y.id]}function P(y){for(const C in n){const I=n[C];if(I[y.id]===void 0)continue;const O=I[y.id];for(const k in O)h(O[k].object),delete O[k];delete I[y.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Fm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Om(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ke&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!R)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Zn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,M=E*4;let v=d.clippingState||null;l.value=v,v=h(g,f,M,p);for(let T=0;T!==M;++T)v[T]=e[T];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function zm(i){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=Ci:o===Ma&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===Ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new id(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ei=4,yl=[.125,.215,.35,.446,.526,.582],jn=20,Jr=new Yc,El=new Rt;let jr=null,Qr=0,ta=0,ea=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,bl=[new D(-Kn,vi,0),new D(Kn,vi,0),new D(-vi,0,Kn),new D(vi,0,Kn),new D(0,Kn,-vi),new D(0,Kn,vi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],km=new D;class wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=km}=r;jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Qr,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:_s,format:ke,colorSpace:Ii,depthBuffer:!1},s=Tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Vm(r,t,e)}return s}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(El),u.toneMapping=Dn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Oi({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new Zt(new En,_);let d=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,d=!0):(_.color.copy(El),d=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const T=this._cubeSize;Zs(s,v*T,M>2?T:0,T,T),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(s-r-1)%bl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Zt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const d=[];let E=0;for(let P=0;P<jn;++P){const R=P/_,S=Math.exp(-R*R/2);d.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[s],T=3*v*(s>M-Ei?s-M+Ei:0),w=4*(this._cubeSize-v);Zs(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Jr)}}function Hm(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ei?l=yl[a-i+Ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,R=w>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];E.set(S,_*g*w),M.set(f,m*g*w);const y=[w,w,w,w,w,w];v.set(y,d*g*w)}const T=new oe;T.setAttribute("position",new cn(E,_)),T.setAttribute("uv",new cn(M,m)),T.setAttribute("faceIndex",new cn(v,d)),t.push(T),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tl(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){const n=new Float32Array(jn),s=new D(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Al(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Rl(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Gm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xa||l===Ma,h=l===Ci||l===Pi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new wl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,v=E.length;M<v;M+=3){const T=E[M+0],w=E[M+1],P=E[M+2];f.push(T,w,w,P,P,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const T=M+0,w=M+1,P=M+2;f.push(T,w,w,P,P,T)}}else return;const m=new(bc(f)?Cc:Rc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const P=new Float32Array(T*w*4*u),R=new wc(P,T,w,u);R.type=Sn,R.needsUpdate=!0;const S=v*4;for(let C=0;C<u;C++){const I=d[C],O=E[C],k=M[C],H=T*w*4*C;for(let X=0;X<I.count;X++){const $=X*S;g===!0&&(s.fromBufferAttribute(I,X),P[H+$+0]=s.x,P[H+$+1]=s.y,P[H+$+2]=s.z,P[H+$+3]=0),_===!0&&(s.fromBufferAttribute(O,X),P[H+$+4]=s.x,P[H+$+5]=s.y,P[H+$+6]=s.z,P[H+$+7]=0),m===!0&&(s.fromBufferAttribute(k,X),P[H+$+8]=s.x,P[H+$+9]=s.y,P[H+$+10]=s.z,P[H+$+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new ut(T,w)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Kc=new Pe,Cl=new Nc(1,1),Jc=new wc,jc=new ku,Qc=new Ic,Pl=[],Ll=[],Il=new Float32Array(16),Dl=new Float32Array(9),Ul=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pl[s];if(r===void 0&&(r=new Float32Array(s),Pl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),xe(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Dl.set(n),i.uniformMatrix3fv(this.addr,!1,Dl),xe(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),xe(e,n)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=Ec,r=Cl):r=Kc,e.setTexture2D(t||r,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jc,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qc,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jc,s)}function mg(i){switch(i){case 5126:return Km;case 35664:return Jm;case 35665:return jm;case 35666:return Qm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Mg(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function wg(i,t){i.uniform3iv(this.addr,t)}function Tg(i,t){i.uniform4iv(this.addr,t)}function Ag(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function Ig(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jc,r[a])}function Dg(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qc,r[a])}function Ug(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jc,r[a])}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return Eg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Nl(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nl(e,c===void 0?new Fg(o,i,t):new Og(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Bg(o),Nl(e,u)),e=u}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Fl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kg=37297;let Hg=0;function Vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ol=new Ht;function Gg(i){jt._getMatrix(Ol,jt.workingColorSpace,i);const t=`mat3( ${Ol.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(t),o)}else return r}function Wg(i,t){const e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case Qh:e="Linear";break;case tu:e="Reinhard";break;case eu:e="Cineon";break;case nu:e="ACESFilmic";break;case su:e="AgX";break;case ru:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new D;function qg(){jt.getLuminanceCoefficients(Ks);const i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Kg,jg)}const Jg=new Map;function jg(i,t){let e=Vt[t];if(e===void 0){const n=Jg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eo(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(i){return i.replace(Qg,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function e0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function n0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function s0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case jh:t="ENVMAP_BLENDING_ADD";break}return t}function r0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=e0(e),c=n0(e),h=i0(e),u=s0(e),f=r0(e),p=Yg(e),g=$g(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),d.length>0&&(d+=`
`)):(m=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),d=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=eo(a),a=zl(a,e),a=kl(a,e),o=eo(o),o=zl(o,e),o=kl(o,e),a=Hl(a),o=Hl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+m+a,v=E+d+o,T=Fl(s,s.VERTEX_SHADER,M),w=Fl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(w)||"",H=I.trim(),X=O.trim(),$=k.trim();let B=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const dt=Bl(s,T,"vertex"),xt=Bl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+dt+`
`+xt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||$==="")&&(nt=!1);nt&&(C.diagnostics={runnable:B,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(T),s.deleteShader(w),R=new nr(s,_),S=Zg(s,_)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,kg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c0(t),e.set(t,n)),n}}class c0{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}}function h0(i,t,e,n,s,r,a){const o=new Tc,l=new l0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,I,O){const k=I.fog,H=O.geometry,X=S.isMeshStandardMaterial?I.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),B=$&&$.mapping===dr?$.image.height:null,nt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=dt!==void 0?dt.length:0;let Ft=0;H.morphAttributes.position!==void 0&&(Ft=1),H.morphAttributes.normal!==void 0&&(Ft=2),H.morphAttributes.color!==void 0&&(Ft=3);let qt,Kt,Yt,W;if(nt){const te=sn[nt];qt=te.vertexShader,Kt=te.fragmentShader}else qt=S.vertexShader,Kt=S.fragmentShader,l.update(S),Yt=l.getVertexShaderID(S),W=l.getFragmentShaderID(S);const J=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Et=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,Xt=!!S.map,ee=!!S.matcap,L=!!$,tt=!!S.aoMap,j=!!S.lightMap,Z=!!S.bumpMap,K=!!S.normalMap,ct=!!S.displacementMap,it=!!S.emissiveMap,ht=!!S.metalnessMap,Bt=!!S.roughnessMap,Ot=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,z=S.iridescence>0,q=S.sheen>0,et=S.transmission>0,Y=Ot&&!!S.anisotropyMap,Ct=A&&!!S.clearcoatMap,lt=A&&!!S.clearcoatNormalMap,wt=A&&!!S.clearcoatRoughnessMap,Tt=z&&!!S.iridescenceMap,st=z&&!!S.iridescenceThicknessMap,vt=q&&!!S.sheenColorMap,Ut=q&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,gt=!!S.specularColorMap,kt=!!S.specularIntensityMap,U=et&&!!S.transmissionMap,ot=et&&!!S.thicknessMap,ft=!!S.gradientMap,yt=!!S.alphaMap,rt=S.alphaTest>0,Q=!!S.alphaHash,At=!!S.extensions;let zt=Dn;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(zt=i.toneMapping);const re={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:Kt,defines:S.defines,customVertexShaderID:Yt,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&O._colorsTexture!==null,instancing:Et,instancingColor:Et&&O.instanceColor!==null,instancingMorph:Et&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:ee,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:j,bumpMap:Z,normalMap:K,displacementMap:f&&ct,emissiveMap:it,normalMapObjectSpace:K&&S.normalMapType===cu,normalMapTangentSpace:K&&S.normalMapType===go,metalnessMap:ht,roughnessMap:Bt,anisotropy:Ot,anisotropyMap:Y,clearcoat:A,clearcoatMap:Ct,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:x,iridescence:z,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:q,sheenColorMap:vt,sheenRoughnessMap:Ut,specularMap:Pt,specularColorMap:gt,specularIntensityMap:kt,transmission:et,transmissionMap:U,thicknessMap:ot,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:yt,alphaTest:rt,alphaHash:Q,combine:S.combine,mapUv:Xt&&_(S.map.channel),aoMapUv:tt&&_(S.aoMap.channel),lightMapUv:j&&_(S.lightMap.channel),bumpMapUv:Z&&_(S.bumpMap.channel),normalMapUv:K&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:it&&_(S.emissiveMap.channel),metalnessMapUv:ht&&_(S.metalnessMap.channel),roughnessMapUv:Bt&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(S.sheenRoughnessMap.channel),specularMapUv:Pt&&_(S.specularMap.channel),specularColorMapUv:gt&&_(S.specularColorMap.channel),specularIntensityMapUv:kt&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:yt&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(K||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Xt||yt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pe,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:At&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&S.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let C;if(y){const I=sn[y];C=Qu.clone(I.uniforms)}else C=S.uniforms;return C}function T(S,y){let C;for(let I=0,O=h.length;I<O;I++){const k=h[I];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new a0(i,y,S,r),h.push(C)),C}function w(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:R}}function u0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function d0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||d0),n.length>1&&n.sort(f||Gl),s.length>1&&s.sort(f||Gl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function f0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wl,i.set(n,[a])):s>=r.length?(a=new Wl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function p0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function m0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let g0=0;function _0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v0(i){const t=new p0,e=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new le,a=new le;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,M=0,v=0,T=0,w=0,P=0;c.sort(_0);for(let S=0,y=c.length;S<y;S++){const C=c[S],I=C.color,O=C.intensity,k=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*O,u+=I.g*O,f+=I.b*O;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],O);P++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(I).multiplyScalar(O),X.distance=k,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const $=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,$.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=H,v++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(I).multiplyScalar(O),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const $=C.shadow,B=e.get(C);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(O),X.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=P,n.version=g0++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const M=c[d];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Xl(i){const t=new v0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function x0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Xl(i),t.set(s,[o])):r>=a.length?(o=new Xl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`;function y0(i,t,e){let n=new So;const s=new ut,r=new ut,a=new fe,o=new Xd({depthPacking:lu}),l=new qd,c={},h=e.maxTextureSize,u={[Nn]:Ne,[Ne]:Nn,[pe]:pe},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:M0,fragmentShader:S0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let d=this.type;this.render=function(w,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(In),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=d!==vn&&this.type===vn,k=d===vn&&this.type!==vn;for(let H=0,X=w.length;H<X;H++){const $=w[H],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const nt=B.getFrameExtents();if(s.multiply(nt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,B.mapSize.y=r.y)),B.map===null||O===!0||k===!0){const xt=this.type!==vn?{minFilter:Ve,magFilter:Ve}:{};B.map!==null&&B.map.dispose(),B.map=new ei(s.x,s.y,xt),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const dt=B.getViewportCount();for(let xt=0;xt<dt;xt++){const Ft=B.getViewport(xt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),I.viewport(a),B.updateMatrices($,xt),n=B.getFrustum(),v(P,R,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===vn&&E(B,R),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function E(w,P){const R=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,R,p,_,null)}function M(w,P,R,S){let y=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const I=y.uuid,O=P.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let H=k[O];H===void 0&&(H=y.clone(),k[O]=H,P.addEventListener("dispose",T)),y=H}if(y.visible=P.visible,y.wireframe=P.wireframe,S===vn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=R}return y}function v(w,P,R,S,y){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const O=t.update(w),k=w.material;if(Array.isArray(k)){const H=O.groups;for(let X=0,$=H.length;X<$;X++){const B=H[X],nt=k[B.materialIndex];if(nt&&nt.visible){const dt=M(w,nt,S,y);w.onBeforeShadow(i,w,P,R,O,dt,B),i.renderBufferDirect(R,null,O,dt,w,B),w.onAfterShadow(i,w,P,R,O,dt,B)}}}else if(k.visible){const H=M(w,k,S,y);w.onBeforeShadow(i,w,P,R,O,H,null),i.renderBufferDirect(R,null,O,H,w,null),w.onAfterShadow(i,w,P,R,O,H,null)}}const I=w.children;for(let O=0,k=I.length;O<k;O++)v(I[O],P,R,S,y)}function T(w){w.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const E0={[da]:fa,[pa]:_a,[ma]:va,[Ri]:ga,[fa]:da,[_a]:pa,[va]:ma,[ga]:Ri};function b0(i,t){function e(){let U=!1;const ot=new fe;let ft=null;const yt=new fe(0,0,0,0);return{setMask:function(rt){ft!==rt&&!U&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){U=rt},setClear:function(rt,Q,At,zt,re){re===!0&&(rt*=zt,Q*=zt,At*=zt),ot.set(rt,Q,At,zt),yt.equals(ot)===!1&&(i.clearColor(rt,Q,At,zt),yt.copy(ot))},reset:function(){U=!1,ft=null,yt.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,ft=null,yt=null,rt=null;return{setReversed:function(Q){if(ot!==Q){const At=t.get("EXT_clip_control");Q?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;const zt=rt;rt=null,this.setClear(zt)}},getReversed:function(){return ot},setTest:function(Q){Q?J(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Q){ft!==Q&&!U&&(i.depthMask(Q),ft=Q)},setFunc:function(Q){if(ot&&(Q=E0[Q]),yt!==Q){switch(Q){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Q}},setLocked:function(Q){U=Q},setClear:function(Q){rt!==Q&&(ot&&(Q=1-Q),i.clearDepth(Q),rt=Q)},reset:function(){U=!1,ft=null,yt=null,rt=null,ot=!1}}}function s(){let U=!1,ot=null,ft=null,yt=null,rt=null,Q=null,At=null,zt=null,re=null;return{setTest:function(te){U||(te?J(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!U&&(i.stencilMask(te),ot=te)},setFunc:function(te,dn,en){(ft!==te||yt!==dn||rt!==en)&&(i.stencilFunc(te,dn,en),ft=te,yt=dn,rt=en)},setOp:function(te,dn,en){(Q!==te||At!==dn||zt!==en)&&(i.stencilOp(te,dn,en),Q=te,At=dn,zt=en)},setLocked:function(te){U=te},setClear:function(te){re!==te&&(i.clearStencil(te),re=te)},reset:function(){U=!1,ot=null,ft=null,yt=null,rt=null,Q=null,At=null,zt=null,re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,M=null,v=null,T=null,w=null,P=new Rt(0,0,0),R=0,S=!1,y=null,C=null,I=null,O=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=$>=2);let nt=null,dt={};const xt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),qt=new fe().fromArray(xt),Kt=new fe().fromArray(Ft);function Yt(U,ot,ft,yt){const rt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(U,Q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ft;At++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return Q}const W={};W[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ri),Z(!1),K(Oo),J(i.CULL_FACE),tt(In);function J(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function mt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Et(U,ot){return u[U]!==ot?(i.bindFramebuffer(U,ot),u[U]=ot,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Mt(U,ot){let ft=p,yt=!1;if(U){ft=f.get(ot),ft===void 0&&(ft=[],f.set(ot,ft));const rt=U.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,At=rt.length;Q<At;Q++)ft[Q]=i.COLOR_ATTACHMENT0+Q;ft.length=rt.length,yt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ft)}function Xt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ee={[Jn]:i.FUNC_ADD,[Uh]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};ee[Fh]=i.MIN,ee[Oh]=i.MAX;const L={[Bh]:i.ZERO,[zh]:i.ONE,[kh]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Zh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(U,ot,ft,yt,rt,Q,At,zt,re,te){if(U===In){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),U!==Dh){if(U!==m||te!==S){if((d!==Jn||v!==Jn)&&(i.blendEquation(i.FUNC_ADD),d=Jn,v=Jn),te)switch(U){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,M=null,T=null,w=null,P.set(0,0,0),R=0,m=U,S=te}return}rt=rt||ot,Q=Q||ft,At=At||yt,(ot!==d||rt!==v)&&(i.blendEquationSeparate(ee[ot],ee[rt]),d=ot,v=rt),(ft!==E||yt!==M||Q!==T||At!==w)&&(i.blendFuncSeparate(L[ft],L[yt],L[Q],L[At]),E=ft,M=yt,T=Q,w=At),(zt.equals(P)===!1||re!==R)&&(i.blendColor(zt.r,zt.g,zt.b,re),P.copy(zt),R=re),m=U,S=!1}function j(U,ot){U.side===pe?mt(i.CULL_FACE):J(i.CULL_FACE);let ft=U.side===Ne;ot&&(ft=!ft),Z(ft),U.blending===Ti&&U.transparent===!1?tt(In):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const yt=U.stencilWrite;o.setTest(yt),yt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function K(U){U!==Ph?(J(i.CULL_FACE),U!==C&&(U===Oo?i.cullFace(i.BACK):U===Lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),C=U}function ct(U){U!==I&&(X&&i.lineWidth(U),I=U)}function it(U,ot,ft){U?(J(i.POLYGON_OFFSET_FILL),(O!==ot||k!==ft)&&(i.polygonOffset(ot,ft),O=ot,k=ft)):mt(i.POLYGON_OFFSET_FILL)}function ht(U){U?J(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Bt(U){U===void 0&&(U=i.TEXTURE0+H-1),nt!==U&&(i.activeTexture(U),nt=U)}function Ot(U,ot,ft){ft===void 0&&(nt===null?ft=i.TEXTURE0+H-1:ft=nt);let yt=dt[ft];yt===void 0&&(yt={type:void 0,texture:void 0},dt[ft]=yt),(yt.type!==U||yt.texture!==ot)&&(nt!==ft&&(i.activeTexture(ft),nt=ft),i.bindTexture(U,ot||W[U]),yt.type=U,yt.texture=ot)}function A(){const U=dt[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(U){qt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),qt.copy(U))}function Ut(U){Kt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Kt.copy(U))}function Pt(U,ot){let ft=c.get(ot);ft===void 0&&(ft=new WeakMap,c.set(ot,ft));let yt=ft.get(U);yt===void 0&&(yt=i.getUniformBlockIndex(ot,U.name),ft.set(U,yt))}function gt(U,ot){const yt=c.get(ot).get(U);l.get(ot)!==yt&&(i.uniformBlockBinding(ot,yt,U.__bindingPointIndex),l.set(ot,yt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,dt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,M=null,v=null,T=null,w=null,P=new Rt(0,0,0),R=0,S=!1,y=null,C=null,I=null,O=null,k=null,qt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:mt,bindFramebuffer:Et,drawBuffers:Mt,useProgram:Xt,setBlending:tt,setMaterial:j,setFlipSided:Z,setCullFace:K,setLineWidth:ct,setPolygonOffset:it,setScissorTest:ht,activeTexture:Bt,bindTexture:Ot,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Tt,texImage3D:st,updateUBOMapping:Pt,uniformBlockBinding:gt,texStorage2D:lt,texStorage3D:wt,texSubImage2D:q,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ct,scissor:vt,viewport:Ut,reset:kt}}function w0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):or("canvas")}function _(A,x,z){let q=1;const et=Ot(A);if((et.width>z||et.height>z)&&(q=z/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*et.width),Ct=Math.floor(q*et.height);u===void 0&&(u=g(Y,Ct));const lt=x?g(Y,Ct):u;return lt.width=Y,lt.height=Ct,lt.getContext("2d").drawImage(A,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Ct+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,z,q,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const Ct=et?rr:jt.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Ct===ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,x){let z;return A?x===null||x===ti||x===os?z=i.DEPTH24_STENCIL8:x===Sn?z=i.DEPTH32F_STENCIL8:x===as&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===os?z=i.DEPTH_COMPONENT24:x===Sn?z=i.DEPTH_COMPONENT32F:x===as&&(z=i.DEPTH_COMPONENT16),z}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==Ue?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),R(x),x.isVideoTexture&&h.delete(x)}function P(A){const x=A.target;x.removeEventListener("dispose",P),y(x)}function R(A){const x=n.get(A);if(x.__webglInit===void 0)return;const z=A.source,q=f.get(z);if(q){const et=q[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys(q).length===0&&f.delete(z)}n.remove(A)}function S(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const z=A.source,q=f.get(z);delete q[x.__cacheKey],a.memory.textures--}function y(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let et=0;et<x.__webglFramebuffer[q].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[q][et]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,et=z.length;q<et;q++){const Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(A)}let C=0;function I(){C=0}function O(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function k(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function H(A,x){const z=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function X(A,x){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){W(z,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function $(A,x){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){W(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function B(A,x){const z=n.get(A);if(A.version>0&&z.__version!==A.version){J(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const nt={[Li]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},dt={[Ve]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},xt={[hu]:i.NEVER,[gu]:i.ALWAYS,[uu]:i.LESS,[Ec]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Ft(A,x){if(x.type===Sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ue||x.magFilter===Er||x.magFilter===Es||x.magFilter===Mn||x.minFilter===Ue||x.minFilter===Er||x.minFilter===Es||x.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ve||x.minFilter!==Es&&x.minFilter!==Mn||x.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let et=f.get(q);et===void 0&&(et={},f.set(q,et));const Y=k(x);if(Y!==A.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[Y].usedTimes++;const Ct=et[A.__cacheKey];Ct!==void 0&&(et[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(x)),A.__cacheKey=Y,A.__webglTexture=et[Y].texture}return z}function Kt(A,x,z){return Math.floor(Math.floor(A/z)/x)}function Yt(A,x,z,q){const Y=A.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{Y.sort((st,vt)=>st.start-vt.start);let Ct=0;for(let st=1;st<Y.length;st++){const vt=Y[Ct],Ut=Y[st],Pt=vt.start+vt.count,gt=Kt(Ut.start,x.width,4),kt=Kt(vt.start,x.width,4);Ut.start<=Pt+1&&gt===kt&&Kt(Ut.start+Ut.count-1,x.width,4)===gt?vt.count=Math.max(vt.count,Ut.start+Ut.count-vt.start):(++Ct,Y[Ct]=Ut)}Y.length=Ct+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let st=0,vt=Y.length;st<vt;st++){const Ut=Y[st],Pt=Math.floor(Ut.start/4),gt=Math.ceil(Ut.count/4),kt=Pt%x.width,U=Math.floor(Pt/x.width),ot=gt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,kt,U,ot,ft,z,q,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function W(A,x,z){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const et=qt(A,x),Y=x.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+z);const Ct=n.get(Y);if(Y.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const lt=jt.getPrimaries(jt.workingColorSpace),wt=x.colorSpace===Ln?null:jt.getPrimaries(x.colorSpace),Tt=x.colorSpace===Ln||lt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=_(x.image,!1,s.maxTextureSize);st=Bt(x,st);const vt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type);let Pt=M(x.internalFormat,vt,Ut,x.colorSpace,x.isVideoTexture);Ft(q,x);let gt;const kt=x.mipmaps,U=x.isVideoTexture!==!0,ot=Ct.__version===void 0||et===!0,ft=Y.dataReady,yt=T(x,st);if(x.isDepthTexture)Pt=v(x.format===cs,x.type),ot&&(U?e.texStorage2D(i.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Ut,null));else if(x.isDataTexture)if(kt.length>0){U&&ot&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,kt[0].width,kt[0].height);for(let rt=0,Q=kt.length;rt<Q;rt++)gt=kt[rt],U?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,vt,Ut,gt.data);x.generateMipmaps=!1}else U?(ot&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,st.width,st.height),ft&&Yt(x,st,vt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,st.width,st.height,0,vt,Ut,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,kt[0].width,kt[0].height,st.depth);for(let rt=0,Q=kt.length;rt<Q;rt++)if(gt=kt[rt],x.format!==ke)if(vt!==null)if(U){if(ft)if(x.layerUpdates.size>0){const At=Sl(gt.width,gt.height,x.format,x.type);for(const zt of x.layerUpdates){const re=gt.data.subarray(zt*At/gt.data.BYTES_PER_ELEMENT,(zt+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,zt,gt.width,gt.height,1,vt,re)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,st.depth,vt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Pt,gt.width,gt.height,st.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,st.depth,vt,Ut,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Pt,gt.width,gt.height,st.depth,0,vt,Ut,gt.data)}else{U&&ot&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,kt[0].width,kt[0].height);for(let rt=0,Q=kt.length;rt<Q;rt++)gt=kt[rt],x.format!==ke?vt!==null?U?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,vt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,rt,Pt,gt.width,gt.height,0,vt,Ut,gt.data)}else if(x.isDataArrayTexture)if(U){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,st.width,st.height,st.depth),ft)if(x.layerUpdates.size>0){const rt=Sl(st.width,st.height,x.format,x.type);for(const Q of x.layerUpdates){const At=st.data.subarray(Q*rt/st.data.BYTES_PER_ELEMENT,(Q+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Ut,At)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,vt,Ut,st.data);else if(x.isData3DTexture)U?(ot&&e.texStorage3D(i.TEXTURE_3D,yt,Pt,st.width,st.height,st.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,vt,Ut,st.data);else if(x.isFramebufferTexture){if(ot)if(U)e.texStorage2D(i.TEXTURE_2D,yt,Pt,st.width,st.height);else{let rt=st.width,Q=st.height;for(let At=0;At<yt;At++)e.texImage2D(i.TEXTURE_2D,At,Pt,rt,Q,0,vt,Ut,null),rt>>=1,Q>>=1}}else if(kt.length>0){if(U&&ot){const rt=Ot(kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Pt,rt.width,rt.height)}for(let rt=0,Q=kt.length;rt<Q;rt++)gt=kt[rt],U?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt,Ut,gt):e.texImage2D(i.TEXTURE_2D,rt,Pt,vt,Ut,gt);x.generateMipmaps=!1}else if(U){if(ot){const rt=Ot(st);e.texStorage2D(i.TEXTURE_2D,yt,Pt,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,Pt,vt,Ut,st);m(x)&&d(q),Ct.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function J(A,x,z){if(x.image.length!==6)return;const q=qt(A,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const Y=n.get(et);if(et.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+z);const Ct=jt.getPrimaries(jt.workingColorSpace),lt=x.colorSpace===Ln?null:jt.getPrimaries(x.colorSpace),wt=x.colorSpace===Ln||Ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!Tt&&!st?vt[Q]=_(x.image[Q],!0,s.maxCubemapSize):vt[Q]=st?x.image[Q].image:x.image[Q],vt[Q]=Bt(x,vt[Q]);const Ut=vt[0],Pt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),kt=M(x.internalFormat,Pt,gt,x.colorSpace),U=x.isVideoTexture!==!0,ot=Y.__version===void 0||q===!0,ft=et.dataReady;let yt=T(x,Ut);Ft(i.TEXTURE_CUBE_MAP,x);let rt;if(Tt){U&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){rt=vt[Q].mipmaps;for(let At=0;At<rt.length;At++){const zt=rt[At];x.format!==ke?Pt!==null?U?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,zt.width,zt.height,Pt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,zt.width,zt.height,Pt,gt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,kt,zt.width,zt.height,0,Pt,gt,zt.data)}}}else{if(rt=x.mipmaps,U&&ot){rt.length>0&&yt++;const Q=Ot(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Pt,gt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,kt,vt[Q].width,vt[Q].height,0,Pt,gt,vt[Q].data);for(let At=0;At<rt.length;At++){const re=rt[At].image[Q].image;U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,re.width,re.height,Pt,gt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,kt,re.width,re.height,0,Pt,gt,re.data)}}else{U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,gt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,kt,Pt,gt,vt[Q]);for(let At=0;At<rt.length;At++){const zt=rt[At];U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,Pt,gt,zt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,kt,Pt,gt,zt.image[Q])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function mt(A,x,z,q,et,Y){const Ct=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),wt=M(z.internalFormat,Ct,lt,z.colorSpace),Tt=n.get(x),st=n.get(z);if(st.__renderTarget=x,!Tt.__hasExternalTextures){const vt=Math.max(1,x.width>>Y),Ut=Math.max(1,x.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,wt,vt,Ut,x.depth,0,Ct,lt,null):e.texImage2D(et,Y,wt,vt,Ut,0,Ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,st.__webglTexture,0,ct(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,et,st.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,et=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,et),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ct(x);it(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,A)}else{const q=x.textures;for(let et=0;et<q.length;et++){const Y=q[et],Ct=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),wt=M(Y.internalFormat,Ct,lt,Y.colorSpace),Tt=ct(x);z&&it(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,wt,x.width,x.height):it(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,wt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,wt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const et=q.__webglTexture,Y=ct(x);if(x.depthTexture.format===ls)it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===cs)it(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Xt(A){const x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Mt(x.__webglFramebuffer[0],A):Mt(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Et(x.__webglDepthbuffer[q],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Et(x.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,x,z){const q=n.get(A);x!==void 0&&mt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Xt(A)}function L(A){const x=A.texture,z=n.get(A),q=n.get(x);A.addEventListener("dispose",P);const et=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)z.__webglFramebuffer[lt][wt]=i.createFramebuffer()}else z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)z.__webglFramebuffer[lt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let lt=0,wt=et.length;lt<wt;lt++){const Tt=n.get(et[lt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const wt=et[lt];z.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const Tt=r.convert(wt.format,wt.colorSpace),st=r.convert(wt.type),vt=M(wt.internalFormat,Tt,st,wt.colorSpace,A.isXRRenderTarget===!0),Ut=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)mt(z.__webglFramebuffer[lt][wt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else mt(z.__webglFramebuffer[lt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let lt=0,wt=et.length;lt<wt;lt++){const Tt=et[lt],st=n.get(Tt);let vt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,st.__webglTexture),Ft(vt,Tt),mt(z.__webglFramebuffer,A,Tt,i.COLOR_ATTACHMENT0+lt,vt,0),m(Tt)&&d(vt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),Ft(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)mt(z.__webglFramebuffer[wt],A,x,i.COLOR_ATTACHMENT0,lt,wt);else mt(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&d(lt),e.unbindTexture()}A.depthBuffer&&Xt(A)}function tt(A){const x=A.textures;for(let z=0,q=x.length;z<q;z++){const et=x[z];if(m(et)){const Y=E(A),Ct=n.get(et).__webglTexture;e.bindTexture(Y,Ct),d(Y),e.unbindTexture()}}}const j=[],Z=[];function K(A){if(A.samples>0){if(it(A)===!1){const x=A.textures,z=A.width,q=A.height;let et=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(A),lt=x.length>1;if(lt)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const wt=A.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const st=n.get(x[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,et,i.NEAREST),l===!0&&(j.length=0,Z.length=0,j.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(Y),Z.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const st=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(A){return Math.min(s.maxSamples,A.samples)}function it(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Bt(A,x){const z=A.colorSpace,q=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ii&&z!==Ln&&(jt.getTransfer(z)===ie?(q!==ke||et!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=ee,this.setupRenderTarget=L,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=it}function T0(i,t){function e(n,s=Ln){let r;const a=jt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===xc)return i.ALPHA;if(n===Mc)return i.RGB;if(n===ke)return i.RGBA;if(n===ls)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===yc)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===js||n===Qs||n===tr||n===er)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ea||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===$a||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
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

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:A0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends Fi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new C0,d={},E=e.getContextAttributes();let M=null,v=null;const T=[],w=[],P=new ut;let R=null;const S=new qe;S.viewport=new fe;const y=new qe;y.viewport=new fe;const C=[S,y],I=new Kd;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=T[W];return J===void 0&&(J=new Wr,T[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=T[W];return J===void 0&&(J=new Wr,T[W]=J),J.getGripSpace()},this.getHand=function(W){let J=T[W];return J===void 0&&(J=new Wr,T[W]=J),J.getHandSpace()};function H(W){const J=w.indexOf(W.inputSource);if(J===-1)return;const mt=T[J];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||a),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let W=0;W<T.length;W++){const J=w[W];J!==null&&(w[W]=null,T[W].disconnect(J))}O=null,k=null,m.reset();for(const W in d)delete d[W];t.setRenderTarget(M),p=null,f=null,u=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Et=null,Mt=null;E.depth&&(Mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=E.stencil?cs:ls,Et=E.stencil?os:ti);const Xt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ei(f.textureWidth,f.textureHeight,{format:ke,type:hn,depthTexture:new Nc(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ei(p.framebufferWidth,p.framebufferHeight,{format:ke,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(W){for(let J=0;J<W.removed.length;J++){const mt=W.removed[J],Et=w.indexOf(mt);Et>=0&&(w[Et]=null,T[Et].disconnect(mt))}for(let J=0;J<W.added.length;J++){const mt=W.added[J];let Et=w.indexOf(mt);if(Et===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=w.length){w.push(mt),Et=Xt;break}else if(w[Xt]===null){w[Xt]=mt,Et=Xt;break}if(Et===-1)break}const Mt=T[Et];Mt&&Mt.connect(mt)}}const B=new D,nt=new D;function dt(W,J,mt){B.setFromMatrixPosition(J.matrixWorld),nt.setFromMatrixPosition(mt.matrixWorld);const Et=B.distanceTo(nt),Mt=J.projectionMatrix.elements,Xt=mt.projectionMatrix.elements,ee=Mt[14]/(Mt[10]-1),L=Mt[14]/(Mt[10]+1),tt=(Mt[9]+1)/Mt[5],j=(Mt[9]-1)/Mt[5],Z=(Mt[8]-1)/Mt[0],K=(Xt[8]+1)/Xt[0],ct=ee*Z,it=ee*K,ht=Et/(-Z+K),Bt=ht*-Z;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Bt),W.translateZ(ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Mt[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ot=ee+ht,A=L+ht,x=ct-Bt,z=it+(Et-Bt),q=tt*L/A*Ot,et=j*L/A*Ot;W.projectionMatrix.makePerspective(x,z,q,et,Ot,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function xt(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,mt=W.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),I.near=y.near=S.near=J,I.far=y.far=S.far=mt,(O!==I.near||k!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,k=I.far),I.layers.mask=W.layers.mask|6,S.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Et=W.parent,Mt=I.cameras;xt(I,Et);for(let Xt=0;Xt<Mt.length;Xt++)xt(Mt[Xt],Et);Mt.length===2?dt(I,S,y):I.projectionMatrix.copy(S.projectionMatrix),Ft(W,I,Et)};function Ft(W,J,mt){mt===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=hs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(W){return d[W]};let qt=null;function Kt(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Et=!1;mt.length!==I.cameras.length&&(I.cameras.length=0,Et=!0);for(let L=0;L<mt.length;L++){const tt=mt[L];let j=null;if(p!==null)j=p.getViewport(tt);else{const K=u.getViewSubImage(f,tt);j=K.viewport,L===0&&(t.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(v))}let Z=C[L];Z===void 0&&(Z=new qe,Z.layers.enable(L),Z.viewport=new fe,C[L]=Z),Z.matrix.fromArray(tt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(tt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(j.x,j.y,j.width,j.height),L===0&&(I.matrix.copy(Z.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Et===!0&&I.cameras.push(Z)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(mt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<mt.length;L++){const tt=mt[L].camera;if(tt){let j=d[tt];j||(j=new Fc,d[tt]=j);const Z=u.getCameraImage(tt);j.sourceTexture=Z}}}}for(let mt=0;mt<T.length;mt++){const Et=w[mt],Mt=T[mt];Et!==null&&Mt!==void 0&&Mt.update(Et,J,c||a)}qt&&qt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Yt=new Zc;Yt.setAnimationLoop(Kt),this.setAnimationLoop=function(W){qt=W},this.dispose=function(){}}}const Yn=new Qe,L0=new le;function I0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Pc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(E,T);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const M=u();E.__bindingPointIndex=M;const v=i.createBuffer(),T=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],v=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,P=v.length;w<P;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=R.length;S<y;S++){const C=R[S];if(p(C,w,S,T)===!0){const I=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let H=0;H<O.length;H++){const X=O[H],$=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,I+k,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,v,T){const w=E.value,P=M+"_"+v;if(T[P]===void 0)return typeof w=="number"||typeof w=="boolean"?T[P]=w:T[P]=w.clone(),!0;{const R=T[P];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[P]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(E){const M=E.uniforms;let v=0;const T=16;for(let P=0,R=M.length;P<R;P++){const S=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,C=S.length;y<C;y++){const I=S[y],O=Array.isArray(I.value)?I.value:[I.value];for(let k=0,H=O.length;k<H;k++){const X=O[k],$=_(X),B=v%T,nt=B%$.boundary,dt=B+nt;v+=nt,dt!==0&&T-dt<$.storage&&(v+=T-dt),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=$.storage}}}const w=v%T;return w>0&&(v+=T-w),E.__size=v,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class U0{constructor(t={}){const{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Ie;let w=0,P=0,R=null,S=-1,y=null;const C=new fe,I=new fe;let O=null;const k=new Rt(0);let H=0,X=e.width,$=e.height,B=1,nt=null,dt=null;const xt=new fe(0,0,X,$),Ft=new fe(0,0,X,$);let qt=!1;const Kt=new So;let Yt=!1,W=!1;const J=new le,mt=new D,Et=new fe,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ee(){return R===null?B:1}let L=n;function tt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),L===null){const N="webgl2";if(L=tt(N,b),L===null)throw tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,Z,K,ct,it,ht,Bt,Ot,A,x,z,q,et,Y,Ct,lt,wt,Tt,st,vt,Ut,Pt,gt,kt;function U(){j=new Wm(L),j.init(),Pt=new T0(L,j),Z=new Om(L,j,t,Pt),K=new b0(L,j),Z.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),ct=new Ym(L),it=new u0,ht=new w0(L,j,K,it,Z,Pt,ct),Bt=new zm(v),Ot=new Gm(v),A=new jd(L),gt=new Nm(L,A),x=new Xm(L,A,ct,gt),z=new Zm(L,x,A,ct),st=new $m(L,Z,ht),lt=new Bm(it),q=new h0(v,Bt,Ot,j,Z,gt,lt),et=new I0(v,it),Y=new f0,Ct=new x0(j),Tt=new Um(v,Bt,Ot,K,z,p,l),wt=new y0(v,z,Z),kt=new D0(L,ct,Z,K),vt=new Fm(L,j,ct),Ut=new qm(L,j,ct),ct.programs=q.programs,v.capabilities=Z,v.extensions=j,v.properties=it,v.renderLists=Y,v.shadowMap=wt,v.state=K,v.info=ct}U();const ot=new P0(v,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(X,$,!1))},this.getSize=function(b){return b.set(X,$)},this.setSize=function(b,N,V=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,$=N,e.width=Math.floor(b*B),e.height=Math.floor(N*B),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*B,$*B).floor()},this.setDrawingBufferSize=function(b,N,V){X=b,$=N,B=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,N,V,G){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,N,V,G),K.viewport(C.copy(xt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,N,V,G){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,N,V,G),K.scissor(I.copy(Ft).multiplyScalar(B).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){K.setScissorTest(qt=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,V=!0){let G=0;if(b){let F=!1;if(R!==null){const at=R.texture.format;F=at===mo||at===po||at===fo}if(F){const at=R.texture.type,_t=at===hn||at===ti||at===as||at===os||at===ho||at===uo,bt=Tt.getClearColor(),St=Tt.getClearAlpha(),Dt=bt.r,Nt=bt.g,Lt=bt.b;_t?(g[0]=Dt,g[1]=Nt,g[2]=Lt,g[3]=St,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Dt,_[1]=Nt,_[2]=Lt,_[3]=St,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Tt.dispose(),Y.dispose(),Ct.dispose(),it.dispose(),Bt.dispose(),Ot.dispose(),z.dispose(),gt.dispose(),kt.dispose(),q.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",en),ot.removeEventListener("sessionend",Lo),zn.stop()};function ft(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=ct.autoReset,N=wt.enabled,V=wt.autoUpdate,G=wt.needsUpdate,F=wt.type;U(),ct.autoReset=b,wt.enabled=N,wt.autoUpdate=V,wt.needsUpdate=G,wt.type=F}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const N=b.target;N.removeEventListener("dispose",Q),At(N)}function At(b){zt(b),it.remove(b)}function zt(b){const N=it.get(b).programs;N!==void 0&&(N.forEach(function(V){q.releaseProgram(V)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,G,F,at){N===null&&(N=Mt);const _t=F.isMesh&&F.matrixWorld.determinant()<0,bt=rh(b,N,V,G,F);K.setMaterial(G,_t);let St=V.index,Dt=1;if(G.wireframe===!0){if(St=x.getWireframeAttribute(V),St===void 0)return;Dt=2}const Nt=V.drawRange,Lt=V.attributes.position;let $t=Nt.start*Dt,ne=(Nt.start+Nt.count)*Dt;at!==null&&($t=Math.max($t,at.start*Dt),ne=Math.min(ne,(at.start+at.count)*Dt)),St!==null?($t=Math.max($t,0),ne=Math.min(ne,St.count)):Lt!=null&&($t=Math.max($t,0),ne=Math.min(ne,Lt.count));const de=ne-$t;if(de<0||de===1/0)return;gt.setup(F,G,bt,V,St);let ae,se=vt;if(St!==null&&(ae=A.get(St),se=Ut,se.setIndex(ae)),F.isMesh)G.wireframe===!0?(K.setLineWidth(G.wireframeLinewidth*ee()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(F.isLine){let It=G.linewidth;It===void 0&&(It=1),K.setLineWidth(It*ee()),F.isLineSegments?se.setMode(L.LINES):F.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else F.isPoints?se.setMode(L.POINTS):F.isSprite&&se.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const It=F._multiDrawStarts,ce=F._multiDrawCounts,Jt=F._multiDrawCount,Fe=St?A.get(St).bytesPerElement:1,si=it.get(G).currentProgram.getUniforms();for(let Oe=0;Oe<Jt;Oe++)si.setValue(L,"_gl_DrawID",Oe),se.render(It[Oe]/Fe,ce[Oe])}else if(F.isInstancedMesh)se.renderInstances($t,de,F.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ce=Math.min(V.instanceCount,It);se.renderInstances($t,de,ce)}else se.render($t,de)};function re(b,N,V){b.transparent===!0&&b.side===pe&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,Ss(b,N,V),b.side=Nn,b.needsUpdate=!0,Ss(b,N,V),b.side=pe):Ss(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),d=Ct.get(V),d.init(N),M.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const bt=at[_t];re(bt,V,F),G.add(bt)}else re(at,V,F),G.add(at)}),d=M.pop(),G},this.compileAsync=function(b,N,V=null){const G=this.compile(b,N,V);return new Promise(F=>{function at(){if(G.forEach(function(_t){it.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){F(b);return}setTimeout(at,10)}j.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let te=null;function dn(b){te&&te(b)}function en(){zn.stop()}function Lo(){zn.start()}const zn=new Zc;zn.setAnimationLoop(dn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(b){te=b,ot.setAnimationLoop(b),b===null?zn.stop():zn.start()},ot.addEventListener("sessionstart",en),ot.addEventListener("sessionend",Lo),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(N),N=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,R),d=Ct.get(b,M.length),d.init(N),M.push(d),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Kt.setFromProjectionMatrix(J,ln,N.reversedDepth),W=this.localClippingEnabled,Yt=lt.init(this.clippingPlanes,W),m=Y.get(b,E.length),m.init(),E.push(m),ot.enabled===!0&&ot.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&xr(at,N,-1/0,v.sortObjects)}xr(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,dt),Xt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Xt&&Tt.addToRenderList(m,b),this.info.render.frame++,Yt===!0&&lt.beginShadows();const V=d.state.shadowsArray;wt.render(V,b,N),Yt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let _t=0,bt=at.length;_t<bt;_t++){const St=at[_t];Do(G,F,b,St)}Xt&&Tt.render(b);for(let _t=0,bt=at.length;_t<bt;_t++){const St=at[_t];Io(m,b,St,St.viewport)}}else F.length>0&&Do(G,F,b,N),Xt&&Tt.render(b),Io(m,b,N);R!==null&&P===0&&(ht.updateMultisampleRenderTarget(R),ht.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,N),gt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],Yt===!0&&lt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function xr(b,N,V,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Kt.intersectsSprite(b)){G&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const _t=z.update(b),bt=b.material;bt.visible&&m.push(b,_t,bt,V,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Kt.intersectsObject(b))){const _t=z.update(b),bt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Et.copy(_t.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(bt)){const St=_t.groups;for(let Dt=0,Nt=St.length;Dt<Nt;Dt++){const Lt=St[Dt],$t=bt[Lt.materialIndex];$t&&$t.visible&&m.push(b,_t,$t,V,Et.z,Lt)}}else bt.visible&&m.push(b,_t,bt,V,Et.z,null)}}const at=b.children;for(let _t=0,bt=at.length;_t<bt;_t++)xr(at[_t],N,V,G)}function Io(b,N,V,G){const F=b.opaque,at=b.transmissive,_t=b.transparent;d.setupLightsView(V),Yt===!0&&lt.setGlobalState(v.clippingPlanes,V),G&&K.viewport(C.copy(G)),F.length>0&&Ms(F,N,V),at.length>0&&Ms(at,N,V),_t.length>0&&Ms(_t,N,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Do(b,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new ei(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?_s:hn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const at=d.state.transmissionRenderTarget[G.id],_t=G.viewport||C;at.setSize(_t.z*v.transmissionResolutionScale,_t.w*v.transmissionResolutionScale);const bt=v.getRenderTarget(),St=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(at),v.getClearColor(k),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&Tt.render(V);const Nt=v.toneMapping;v.toneMapping=Dn;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),Yt===!0&&lt.setGlobalState(v.clippingPlanes,G),Ms(b,V,G),ht.updateMultisampleRenderTarget(at),ht.updateRenderTargetMipmap(at),j.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ne=0,de=N.length;ne<de;ne++){const ae=N[ne],se=ae.object,It=ae.geometry,ce=ae.material,Jt=ae.group;if(ce.side===pe&&se.layers.test(G.layers)){const Fe=ce.side;ce.side=Ne,ce.needsUpdate=!0,Uo(se,V,G,It,ce,Jt),ce.side=Fe,ce.needsUpdate=!0,$t=!0}}$t===!0&&(ht.updateMultisampleRenderTarget(at),ht.updateRenderTargetMipmap(at))}v.setRenderTarget(bt,St,Dt),v.setClearColor(k,H),Lt!==void 0&&(G.viewport=Lt),v.toneMapping=Nt}function Ms(b,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=b.length;F<at;F++){const _t=b[F],bt=_t.object,St=_t.geometry,Dt=_t.group;let Nt=_t.material;Nt.allowOverride===!0&&G!==null&&(Nt=G),bt.layers.test(V.layers)&&Uo(bt,N,V,St,Nt,Dt)}}function Uo(b,N,V,G,F,at){b.onBeforeRender(v,N,V,G,F,at),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,V,G,b,at),F.transparent===!0&&F.side===pe&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,b,at),F.side=Nn,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,b,at),F.side=pe):v.renderBufferDirect(V,N,G,F,b,at),b.onAfterRender(v,N,V,G,F,at)}function Ss(b,N,V){N.isScene!==!0&&(N=Mt);const G=it.get(b),F=d.state.lights,at=d.state.shadowsArray,_t=F.state.version,bt=q.getParameters(b,F.state,at,N,V),St=q.getProgramCacheKey(bt);let Dt=G.programs;G.environment=b.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(b.isMeshStandardMaterial?Ot:Bt).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Q),Dt=new Map,G.programs=Dt);let Nt=Dt.get(St);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===_t)return Fo(b,bt),Nt}else bt.uniforms=q.getUniforms(b),b.onBeforeCompile(bt,v),Nt=q.acquireProgram(bt,St),Dt.set(St,Nt),G.uniforms=bt.uniforms;const Lt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Fo(b,bt),G.needsLights=oh(b),G.lightsStateVersion=_t,G.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function No(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=nr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Fo(b,N){const V=it.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function rh(b,N,V,G,F){N.isScene!==!0&&(N=Mt),ht.resetTextureUnits();const at=N.fog,_t=G.isMeshStandardMaterial?N.environment:null,bt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ii,St=(G.isMeshStandardMaterial?Ot:Bt).get(G.envMap||_t),Dt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color;let de=Dn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=v.toneMapping);const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=ae!==void 0?ae.length:0,It=it.get(G),ce=d.state.lights;if(Yt===!0&&(W===!0||b!==y)){const Te=b===y&&G.id===S;lt.setState(G,b,Te)}let Jt=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ce.state.version||It.outputColorSpace!==bt||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==St||G.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Dt||It.vertexTangents!==Nt||It.morphTargets!==Lt||It.morphNormals!==$t||It.morphColors!==ne||It.toneMapping!==de||It.morphTargetsCount!==se)&&(Jt=!0):(Jt=!0,It.__version=G.version);let Fe=It.currentProgram;Jt===!0&&(Fe=Ss(G,N,F));let si=!1,Oe=!1,ki=!1;const he=Fe.getUniforms(),Ge=It.uniforms;if(K.useProgram(Fe.program)&&(si=!0,Oe=!0,ki=!0),G.id!==S&&(S=G.id,Oe=!0),si||y!==b){K.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),he.setValue(L,"projectionMatrix",b.projectionMatrix),he.setValue(L,"viewMatrix",b.matrixWorldInverse);const Le=he.map.cameraPosition;Le!==void 0&&Le.setValue(L,mt.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Oe=!0,ki=!0)}if(F.isSkinnedMesh){he.setOptional(L,F,"bindMatrix"),he.setOptional(L,F,"bindMatrixInverse");const Te=F.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),he.setValue(L,"boneTexture",Te.boneTexture,ht))}F.isBatchedMesh&&(he.setOptional(L,F,"batchingTexture"),he.setValue(L,"batchingTexture",F._matricesTexture,ht),he.setOptional(L,F,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",F._indirectTexture,ht),he.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",F._colorsTexture,ht));const We=V.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0)&&st.update(F,V,Fe),(Oe||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,he.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ge.envMap.value=St,Ge.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ge.envMapIntensity.value=N.environmentIntensity),Oe&&(he.setValue(L,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&ah(Ge,ki),at&&G.fog===!0&&et.refreshFogUniforms(Ge,at),et.refreshMaterialUniforms(Ge,G,B,$,d.state.transmissionRenderTarget[b.id]),nr.upload(L,No(It),Ge,ht)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(L,No(It),Ge,ht),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(L,"center",F.center),he.setValue(L,"modelViewMatrix",F.modelViewMatrix),he.setValue(L,"normalMatrix",F.normalMatrix),he.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Te=G.uniformsGroups;for(let Le=0,Mr=Te.length;Le<Mr;Le++){const kn=Te[Le];kt.update(kn,Fe),kt.bind(kn,Fe)}}return Fe}function ah(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function oh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,V){const G=it.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),it.get(b.texture).__webglTexture=N,it.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const V=it.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const lh=L.createFramebuffer();this.setRenderTarget=function(b,N=0,V=0){R=b,w=N,P=V;let G=!0,F=null,at=!1,_t=!1;if(b){const St=it.get(b);if(St.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(St.__hasExternalTextures)ht.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(St.__boundDepthTexture!==Lt){if(Lt!==null&&it.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(_t=!0);const Nt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][V]:F=Nt[N],at=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?F=it.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[V]:F=Nt,C.copy(b.viewport),I.copy(b.scissor),O=b.scissorTest}else C.copy(xt).multiplyScalar(B).floor(),I.copy(Ft).multiplyScalar(B).floor(),O=qt;if(V!==0&&(F=lh),K.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&K.drawBuffers(b,F),K.viewport(C),K.scissor(I),K.setScissorTest(O),at){const St=it.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,V)}else if(_t){const St=N;for(let Dt=0;Dt<b.textures.length;Dt++){const Nt=it.get(b.textures[Dt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Dt,Nt.__webglTexture,V,St)}}else if(b!==null&&V!==0){const St=it.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(b,N,V,G,F,at,_t,bt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){K.bindFramebuffer(L.FRAMEBUFFER,St);try{const Dt=b.textures[bt],Nt=Dt.format,Lt=Dt.type;if(!Z.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(N,V,G,F,Pt.convert(Nt),Pt.convert(Lt),at))}finally{const Dt=R!==null?it.get(R).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,G,F,at,_t,bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St)if(N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F){K.bindFramebuffer(L.FRAMEBUFFER,St);const Dt=b.textures[bt],Nt=Dt.format,Lt=Dt.type;if(!Z.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(N,V,G,F,Pt.convert(Nt),Pt.convert(Lt),0);const ne=R!==null?it.get(R).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,ne);const de=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Uu(L,de,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer($t),L.deleteSync(de),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,V=0){const G=Math.pow(2,-V),F=Math.floor(b.image.width*G),at=Math.floor(b.image.height*G),_t=N!==null?N.x:0,bt=N!==null?N.y:0;ht.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_t,bt,F,at),K.unbindTexture()};const ch=L.createFramebuffer(),hh=L.createFramebuffer();this.copyTextureToTexture=function(b,N,V=null,G=null,F=0,at=null){at===null&&(F!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=F,F=0):at=0);let _t,bt,St,Dt,Nt,Lt,$t,ne,de;const ae=b.isCompressedTexture?b.mipmaps[at]:b.image;if(V!==null)_t=V.max.x-V.min.x,bt=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,Nt=V.min.y,Lt=V.isBox3?V.min.z:0;else{const We=Math.pow(2,-F);_t=Math.floor(ae.width*We),bt=Math.floor(ae.height*We),b.isDataArrayTexture?St=ae.depth:b.isData3DTexture?St=Math.floor(ae.depth*We):St=1,Dt=0,Nt=0,Lt=0}G!==null?($t=G.x,ne=G.y,de=G.z):($t=0,ne=0,de=0);const se=Pt.convert(N.format),It=Pt.convert(N.type);let ce;N.isData3DTexture?(ht.setTexture3D(N,0),ce=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ht.setTexture2DArray(N,0),ce=L.TEXTURE_2D_ARRAY):(ht.setTexture2D(N,0),ce=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=L.getParameter(L.UNPACK_ROW_LENGTH),Fe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),si=L.getParameter(L.UNPACK_SKIP_PIXELS),Oe=L.getParameter(L.UNPACK_SKIP_ROWS),ki=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);const he=b.isDataArrayTexture||b.isData3DTexture,Ge=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const We=it.get(b),Te=it.get(N),Le=it.get(We.__renderTarget),Mr=it.get(Te.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,Le.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let kn=0;kn<St;kn++)he&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(b).__webglTexture,F,Lt+kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(N).__webglTexture,at,de+kn)),L.blitFramebuffer(Dt,Nt,_t,bt,$t,ne,_t,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||it.has(b)){const We=it.get(b),Te=it.get(N);K.bindFramebuffer(L.READ_FRAMEBUFFER,ch),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,hh);for(let Le=0;Le<St;Le++)he?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,F,Lt+Le):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,F),Ge?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,at,de+Le):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,at),F!==0?L.blitFramebuffer(Dt,Nt,_t,bt,$t,ne,_t,bt,L.COLOR_BUFFER_BIT,L.NEAREST):Ge?L.copyTexSubImage3D(ce,at,$t,ne,de+Le,Dt,Nt,_t,bt):L.copyTexSubImage2D(ce,at,$t,ne,Dt,Nt,_t,bt);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ge?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ce,at,$t,ne,de,_t,bt,St,se,It,ae.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ce,at,$t,ne,de,_t,bt,St,se,ae.data):L.texSubImage3D(ce,at,$t,ne,de,_t,bt,St,se,It,ae):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,at,$t,ne,_t,bt,se,It,ae.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,at,$t,ne,ae.width,ae.height,se,ae.data):L.texSubImage2D(L.TEXTURE_2D,at,$t,ne,_t,bt,se,It,ae);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,si),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ki),at===0&&N.generateMipmaps&&L.generateMipmap(ce),K.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){w=0,P=0,R=null,K.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ia=38;class N0{points=[];geometry=new oe;vertices=new Wt(new Float32Array(ia*4*3),3);material=new Oi({color:"#dafaf3",transparent:!0,opacity:.48,depthWrite:!1,side:pe});mesh=new Zt(this.geometry,this.material);constructor(t){const e=[];for(let n=0;n<ia-1;n++)for(const s of[0,2]){const r=n*4+s;e.push(r,r+1,r+4,r+4,r+1,r+5)}this.geometry.setAttribute("position",this.vertices),this.geometry.setIndex(e),this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t){const e=this.points.at(-1);for(e&&(t.alongM<e.along||t.elapsedS<e.time)&&(this.points.length=0);this.points.length&&t.elapsedS-this.points[0].time>1.28;)this.points.shift();if(t.state==="airborne"||t.wallRideActive){this.geometry.setDrawRange(0,0),this.points.length=0;return}(!this.points.length||t.elapsedS-this.points[this.points.length-1].time>=.032)&&(this.points.push({x:t.position.x,along:t.alongM,time:t.elapsedS,edge:Math.abs(t.railAngle)}),this.points.length>ia&&this.points.shift()),this.points.forEach((n,s)=>{const r=t.elapsedS-n.time,a=.045*Math.max(0,1-r/1.28)*(1+n.edge*4);for(let o=0;o<4;o++){const l=o<2?-1:1,c=n.x+l*(.17+r*.55)+(o%2?a:-a),h=t.wave.crossSectionAt(n.along,.78*c/t.wave.joinX,t.simulationTimeS);this.vertices.setXYZ(s*4+o,h.x,h.y+.042,h.z)}}),this.vertices.needsUpdate=!0,this.geometry.setDrawRange(0,Math.max(0,this.points.length-1)*12)}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.material.dispose()}}class F0{eye=new D;focus=new D;desired=new D;target=new D;mix=0;ready=!1;reset(){this.ready=!1}update(t,e,n,s,r,a,o){const l=e.z*t.direction,c=t.rideLineAt(l,e.x),h=r&&c?c.strength:0;this.mix=this.ready?ye.damp(this.mix,h,6,o):h;const u=ye.lerp(8+Math.min(4,s*.22),3.8,this.mix),f=e.z-t.direction*u,p=e.x-n.x*2;if(this.desired.set(p,e.y+3.2+Math.min(2,s*.13),f),this.target.set(e.x+n.x*.45,e.y+1.4,e.z+t.direction*5),this.mix>.001){const g=f*t.direction,_=t.tubeCameraAt(g,a),m=t.barrelAt(g,0,0,a)?.radiusM??0,d=c?.lineX??e.x,E=ye.lerp(e.x,d,.55),M=c?.radius??2,v=_?1-ye.smoothstep(Math.abs(_.x-E),.16*M,.72*M):0,T=ye.smoothstep(m/M,.4,.85)*v,w=t.surfaceAt(g,E,a).position.y+Math.min(1.55,.38+.62*M),P=ye.lerp(E,_?.x??E,T),R=ye.lerp(w,_?.y??w,T);this.desired.x=ye.lerp(p,P,this.mix),this.desired.y=ye.lerp(this.desired.y,R,this.mix),this.target.x=ye.lerp(this.target.x,P-.8,this.mix),this.target.y=ye.lerp(this.target.y,R+.16,this.mix),this.target.z+=2*t.direction*this.mix}return this.ready?(this.eye.lerp(this.desired,1-Math.exp(-12*o)),this.focus.lerp(this.target,1-Math.exp(-10*o))):(this.eye.copy(this.desired),this.focus.copy(this.target),this.ready=!0),this.eye.z=f,this.mix}}const Js=(i,t)=>i===t?0:i?-1:1;function ql(i){return i===" "||i==="Spacebar"?"space":i.toLowerCase()}class O0{held=new Set;blockedFlip=new Set;chargingS=null;releasedChargeS=null;press(t,e){const n=ql(t);return["w","a","s","d","space","shift","r"].includes(n)?(this.held.has(n)||(this.held.add(n),n==="space"&&e&&(this.chargingS=0)),!0):!1}release(t){const e=ql(t);return["w","a","s","d","space","shift","r"].includes(e)?(this.held.delete(e),this.blockedFlip.delete(e),e==="space"&&this.chargingS!==null&&(this.releasedChargeS=this.chargingS,this.chargingS=null),!0):!1}advance(t,e){this.chargingS!==null&&(e?this.chargingS=Math.min(.6,this.chargingS+t):this.chargingS=null)}beginAir(){this.blockedFlip.clear(),this.held.has("w")&&this.blockedFlip.add("w"),this.held.has("s")&&this.blockedFlip.add("s"),this.chargingS=null,this.releasedChargeS=null}frame(){const t=this.releasedChargeS;return this.releasedChargeS=null,{steer:Js(this.held.has("a"),this.held.has("d")),wallRide:this.held.has("shift")?Js(this.held.has("a"),this.held.has("d")):0,jumpChargeS:t,charge01:(this.chargingS??0)/.6,trick:{tucked:this.chargingS===null&&this.held.has("space"),spinAxis:Js(this.held.has("a"),this.held.has("d")),flipAxis:Js(this.held.has("s")&&!this.blockedFlip.has("s"),this.held.has("w")&&!this.blockedFlip.has("w"))}}}clear(){this.held.clear(),this.blockedFlip.clear(),this.chargingS=null,this.releasedChargeS=null}}const $n=i=>Number.isFinite(i)&&i>0,xi=i=>Number.isFinite(i)&&i>=0&&i<=1;function B0(i){if(!i||!i.wave||!i.spawn||!i.visual||!["mavericks","pipeline","jbay","uluwatu","teahupoo","nazare"].includes(i.id)||typeof i.name!="string"||!i.name.trim()||typeof i.region!="string"||!i.region.trim()||!["easy","medium","hard","expert"].includes(i.difficulty)||!["left","right"].includes(i.wave.breakDirection)||!$n(i.wave.heightM)||!$n(i.wave.faceWidthM)||!$n(i.wave.rideLengthM)||!$n(i.wave.peelSpeedMps)||!xi(i.spawn.along01)||!xi(i.spawn.face01)||i.spawn.face01>.95||!Array.isArray(i.wave.barrelSections)||!Array.isArray(i.wave.launchSections)||![i.visual.waterColor,i.visual.foamColor,i.visual.skyColor].every(t=>typeof t=="string"&&t.trim().length>0))throw new Error("Invalid map definition: dimensions, spawn, or wave data");for(const t of i.wave.barrelSections)if(!xi(t.start01)||!xi(t.end01)||t.start01>=t.end01||!$n(t.radiusM)||t.closeAfterEntryS!==null&&!$n(t.closeAfterEntryS))throw new Error("Invalid map definition: barrel section");for(const t of i.wave.launchSections)if(!xi(t.start01)||!xi(t.end01)||t.start01>=t.end01||!$n(t.liftMultiplier))throw new Error("Invalid map definition: launch section");if(i.wave.barrelSections.some(t=>t.closeAfterEntryS!==null&&i.spawn.along01>=t.start01&&i.spawn.along01<=t.end01))throw new Error("Invalid map definition: spawn inside a closing barrel")}const z0=[1,.7,.4];class k0{score=0;bestCombo=0;pendingCombo=0;multiplier=1;pendingBase=0;actionCount=0;lastActionS=-1/0;families=new Map;creditedAirs=new Set;action(t,e,n){if(e<=0)return 0;this.actionCount>0&&n-this.lastActionS>3&&this.bank();const s=this.families.get(t)??0,r=e*z0[Math.min(s,2)];return this.families.set(t,s+1),this.actionCount++,this.pendingBase+=r,this.multiplier=Math.min(3,1+(this.actionCount-1)*.25),this.pendingCombo=Math.round(this.pendingBase*this.multiplier),this.lastActionS=n,this.pendingCombo}addAerial(t,e,n){if(this.creditedAirs.has(t.airId))return!1;if(this.creditedAirs.add(t.airId),t.quality==="wipeout")return!0;const s=Math.max(0,t.completedSpinDeg),r=Math.max(0,t.completedFlips);let a=(e?100:0)+s/180*200+r*600;return s>0&&r>0&&(a*=1.25),a*=t.quality==="sketchy"?.5:1,this.action(t.family,a,n),!0}addBarrel(t,e){t>=.3&&this.action("barrel",150*t+300,e)}addCutback(t,e){this.action("cutback",Math.round(180+240*Math.min(1,t)),e)}sustainBarrel(t){this.pendingCombo>0&&(this.lastActionS=t)}tick(t,e){return e&&t-this.lastActionS>=3?this.bank():0}bank(){const t=this.pendingCombo;return t>0&&(this.score+=t,this.bestCombo=Math.max(this.bestCombo,t)),this.clearPending(),t}losePending(){this.clearPending()}clearPending(){this.pendingBase=0,this.pendingCombo=0,this.actionCount=0,this.multiplier=1,this.lastActionS=-1/0,this.families.clear()}reset(){this.score=0,this.bestCombo=0,this.creditedAirs.clear(),this.clearPending()}}const Yl=()=>({longestBarrelS:0,largestLandedSpinDeg:0,bestCombo:0,cleanLandings:0,wipeouts:0}),xn=(i,t,e)=>Math.max(t,Math.min(e,i)),ge=i=>{const t=xn(i,0,1);return t*t*(3-2*t)};class H0{map;direction;joinX;phase;enteredAtS;peelAlongM=null;cachedAlong=NaN;cachedTime=NaN;cachedPeel=null;cachedHeight=0;cachedLipLift=0;constructor(t,e=0){this.map=t,this.phase=e,this.direction=t.wave.breakDirection==="right"?1:-1,this.joinX=t.wave.faceWidthM*.95,this.enteredAtS=t.wave.barrelSections.map(()=>null)}resetWave(){this.enteredAtS.fill(null),this.peelAlongM=null}setPeelPosition(t){this.peelAlongM=xn(t,0,this.map.wave.rideLengthM)}get peelPositionM(){return this.peelAlongM}along01(t){return xn(t/this.map.wave.rideLengthM,0,1)}distanceFromPeak(t){if(this.peelAlongM===null)return 0;const e=this.map.wave.rideLengthM,n=this.map.wave.barrelSections.find(o=>t<=o.end01*e+8),r=(n?n.start01*e+9:0)-this.peelAlongM,a=r>0?r*(1-ge((r-30)/52)):0;return t-this.peelAlongM-a}rideLineAt(t,e){const n=this.map.wave.rideLengthM,s=this.map.wave.peelSpeedMps*2.8,r=this.map.wave.barrelSections.find(f=>t>=f.start01*n-s&&t<f.end01*n);if(!r)return null;const a=this.joinX-r.radiusM,o=t-r.start01*n,l=ge((o+s)/s),c=ge((r.end01*n-t)/Math.min(14,(r.end01-r.start01)*n*.22)),h=Math.max(r.radiusM*1.55,this.map.wave.faceWidthM*.24),u=1-ge((Math.abs(a-e)-h*.4)/h);return{lineX:a,radius:r.radiusM,strength:l*c*u}}peelingPeak(t,e,n){if(this.peelAlongM===null)return 1;const s=this.distanceFromPeak(t);return ge((s+30)/18)*(1-ge((s-e)/n))}whitewaterAt(t){if(this.peelAlongM===null||this.sectionAt(t)<0)return 0;const e=this.peelAlongM-t;return ge((e-11)/12)*(1-ge((e-65)/25))}faceHeightScale(t){if(this.map.id==="nazare")return 1-.86*ge((this.along01(t)-.72)/.28);if(this.map.wave.barrelSections.length===0)return 1;const e=this.along01(t);let n=.46;for(let s=0;s<this.map.wave.barrelSections.length;s++){const r=this.map.wave.barrelSections[s],a=Math.max(0,r.start01-.15),o=ge((e-a)/Math.max(.001,r.start01-a)),l=r.end01-this.exitTaper01(s)*1.25,c=Math.min(1,r.end01+.045),h=1-ge((e-l)/Math.max(.001,c-l));n=Math.max(n,.46+.54*o*h*this.peelingPeak(t,6,20))}return n}faceHeight(t,e,n){const s=xn(t/this.map.wave.faceWidthM,0,.95),r=.5*Math.pow(s,1.4)+.5*Math.pow(s,4.2);if(e!==this.cachedAlong||n!==this.cachedTime||this.peelAlongM!==this.cachedPeel){this.cachedAlong=e,this.cachedTime=n,this.cachedPeel=this.peelAlongM;const o=1+.035*Math.sin(e*.018-n*.55+this.phase)+.012*Math.sin(e*.052-n*.85+this.phase*.7);this.cachedHeight=this.map.wave.heightM*o*this.faceHeightScale(e),this.cachedLipLift=this.launchMultiplier(e)*Math.min(1.45,this.map.wave.heightM*.18)}const a=.045*Math.sin(e*.075-n*1.7+t*.4+this.phase)+.018*Math.sin(e*.21-n*2.8+t*.9);return this.cachedHeight*r+this.cachedLipLift*ge((s-.58)/.37)+a}surfaceAt(t,e,n){const s=xn(e,0,this.joinX),r=this.faceHeight(s,t,n),a=(this.faceHeight(xn(s+.02,0,this.joinX),t,n)-this.faceHeight(xn(s-.02,0,this.joinX),t,n))/.04,o=(this.faceHeight(s,t+.02,n)-this.faceHeight(s,t-.02,n))/.04,l=Math.hypot(a,1,o);return{position:{x:s,y:r,z:this.direction*t},normal:{x:-a/l,y:1/l,z:-this.direction*o/l}}}sectionAt(t){const e=this.along01(t);return this.map.wave.barrelSections.findIndex(({start01:n,end01:s})=>e>=n&&e<=s)}openFraction(t,e){const n=this.map.wave.barrelSections[t];if(!n)return 0;const s=this.enteredAtS[t];if(n.closeAfterEntryS===null||s===null)return 1;const r=Math.max(0,e-s),a=n.closeAfterEntryS;return 1-ge((r-a*.72)/(a*.28))}enterSection(t,e){this.enteredAtS[t]===null&&(this.enteredAtS[t]=e)}exitTaper01(t){const e=this.map.wave.barrelSections[t];return e?Math.min(.1,(e.end01-e.start01)*.35):0}curlRadius(t,e,n=!1){const s=this.sectionAt(t);if(s<0)return .12;const r=this.map.wave.barrelSections[s],a=r.end01-r.start01,o=Math.min(.025,a*.18),l=this.exitTaper01(s),c=this.along01(t),h=ge((c-r.start01)/o)*ge((r.end01-c)/l),u=.92+.08*Math.sin(t*.09-e*.45+this.phase);return .12+r.radiusM*h*this.peelingPeak(t,n?3.4:.45,3.3)*this.openFraction(s,e)*u}crossSectionAt(t,e,n,s=!1){const r=this.direction*t;if(e<.78||e===.78&&!s){const I=this.joinX*xn(e/.78,0,1);return{x:I,y:this.faceHeight(I,t,n),z:r}}const a=xn((e-.78)/.22,0,1),o=this.curlRadius(t,n,!0),l=this.faceHeight(this.joinX,t,n),c=this.whitewaterAt(t),h=Math.max(.2,this.joinX-o*2.55-c*Math.min(5,this.map.wave.faceWidthM*.27)),u=this.faceHeight(h,t,n)+Math.min(.42,o*.2),f=this.map.wave.barrelSections[this.sectionAt(t)],p=f?Math.min(this.map.wave.peelSpeedMps*1.55,(f.end01-f.start01)*this.map.wave.rideLengthM*.23):0,g=f?1-ge((t-f.start01*this.map.wave.rideLengthM)/p):0,_=this.peelAlongM===null?0:Math.max(g,ge((this.distanceFromPeak(t)+.55)/4)),m=Math.PI*a*(1-.89*_),d=Math.sin(m),E=Math.cos(m),M=.5-.5*E,v=h-this.joinX,T=u-l,w=this.joinX+v*M+o*.15*d,P=l+T*M*M+o*1.34*d;if(!s)return{x:w,y:P,z:r};const R=v*.5*d+o*.15*E,S=T*M*d+o*1.34*E,C=(.1+o*.22)*(1-a*a)/Math.max(.001,Math.hypot(R,S));return{x:w+S*C,y:P-R*C,z:r}}backAt(t,e,n){if(e>=.5)return this.crossSectionAt(t,.78+.22*(e-.5)*2,n,!0);const s=this.crossSectionAt(t,.78,n,!0),r=e*2,a=this.joinX+this.map.wave.faceWidthM*3.2;return{x:a+(s.x-a)*r,y:-.2+(s.y+.2)*r*r,z:s.z}}tubeCameraAt(t,e){const n=this.barrelAt(t,0,0,e);if(!n||n.radiusM<.55)return null;const s=this.crossSectionAt(t,.78+.22*.48,e),r=this.faceHeight(s.x,t,e);return{x:s.x,y:r+(s.y-r)*.38,z:s.z}}barrelAt(t,e,n,s){const r=this.sectionAt(t);if(r<0)return null;const a=this.curlRadius(t,s)-.12,o=this.joinX-a,l=this.faceHeight(this.joinX,t,s)-a*.12,c=this.openFraction(r,s),h=Math.hypot(e-o,n-l),u=a>=.62&&h<=a*.9&&e<this.joinX-a*.18&&e>this.joinX-a*1.9;return{sectionIndex:r,inside:u,radiusM:a,openFraction:c,foam:Math.max(1-ge(c),this.whitewaterAt(t)),centerX:o,centerY:l}}launchMultiplier(t){const e=this.along01(t),n=this.map.wave.launchSections.find(r=>e>=r.start01&&e<=r.end01);if(!n)return 0;const s=(e-n.start01)/(n.end01-n.start01);return n.liftMultiplier*ge(s/.25)*ge((1-s)/.3)}}const V0=1/60,Re=(i,t,e)=>Math.max(t,Math.min(e,i)),ir=i=>{const t=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/t,y:i.y/t,z:i.z/t}},$l=(i,t)=>({x:i.y*t.z-i.z*t.y,y:i.z*t.x-i.x*t.z,z:i.x*t.y-i.y*t.x}),sa=(i,t)=>i.x*t.x+i.y*t.y+i.z*t.z,Zl=i=>{const t=Re(i,0,1);return t*t*(3-2*t)};function G0(i,t){const e=Math.sin(t/2),n=Math.cos(t/2);return{x:i.x*n+i.y*e,y:i.y*n-i.x*e,z:i.z*n+i.w*e,w:i.w*n-i.z*e}}function Pn(i,t){const e=ir({x:t.x-i.x*sa(t,i),y:t.y-i.y*sa(t,i),z:t.z-i.z*sa(t,i)}),n=ir($l(i,e)),s=ir($l(e,n)),r=n.x,a=s.x,o=e.x,l=n.y,c=s.y,h=e.y,u=n.z,f=s.z,p=e.z,g=r+c+p;let _;if(g>0){const d=Math.sqrt(g+1)*2;_={w:d/4,x:(f-h)/d,y:(o-u)/d,z:(l-a)/d}}else if(r>c&&r>p){const d=Math.sqrt(1+r-c-p)*2;_={w:(f-h)/d,x:d/4,y:(a+l)/d,z:(o+u)/d}}else if(c>p){const d=Math.sqrt(1+c-r-p)*2;_={w:(o-u)/d,x:(a+l)/d,y:d/4,z:(h+f)/d}}else{const d=Math.sqrt(1+p-r-c)*2;_={w:(l-a)/d,x:(o+u)/d,y:(h+f)/d,z:d/4}}const m=Math.hypot(_.x,_.y,_.z,_.w)||1;return{x:_.x/m,y:_.y/m,z:_.z/m,w:_.w/m}}let W0=0;const X0=i=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${i.toString(36)}-${++W0}`;class q0{wave;score=new k0;map;mode;trick;emit;seed;metrics=Yl();position={x:0,y:0,z:0};previousPosition={x:0,y:0,z:0};orientation={x:0,y:0,z:0,w:1};heading={x:0,y:0,z:1};state="surfing";speedMps=0;lateralMps=0;verticalMps=0;alongM=0;simulationTimeS=0;elapsedS=0;barrelS=0;cleanExitS=0;jumpLoad=0;railAngle=0;landingPulse=0;skid=0;dropMomentum=0;airTuck=0;skidSide=0;turnStartFace=0;turnExtremeFace=0;turnDirection=0;driveS=0;resetLine(){this.turnStartFace=this.turnExtremeFace=this.position.x/this.map.wave.faceWidthM,this.turnDirection=this.driveS=this.dropMomentum=0,this.skid=this.skidSide=this.airTuck=this.railAngle=0}trackTurn(t){if(!this.turnDirection){const n=t-this.turnStartFace;if(Math.abs(n)<.055)return;this.turnDirection=Math.sign(n),this.turnExtremeFace=t;return}if((t-this.turnExtremeFace)*this.turnDirection>=0){this.turnExtremeFace=t;return}if(Math.abs(t-this.turnExtremeFace)<.068)return;const e=Math.abs(this.turnExtremeFace-this.turnStartFace);e>=.23&&!this.skid&&(this.turnDirection<0&&this.turnExtremeFace<.43?(this.driveS=3,this.trickLabel="Driving bottom turn"):this.turnDirection>0&&this.turnExtremeFace>.68&&(this.score.addCutback(e,this.elapsedS),this.trickLabel="Cutback")),this.turnStartFace=this.turnExtremeFace,this.turnExtremeFace=t,this.turnDirection*=-1}wallRideActive=!1;wallRideAngle=0;trickLabel="";currentRunId="";activeAirId=null;ended=!1;started=!1;airCounter=0;airQualified=!1;wipeoutRemainingS=0;barrelSectionIndex=null;wallRideAngularSpeed=0;wallRideElapsedS=0;wallRideEntry=null;lastHudS=-1/0;constructor(t,e,n,s,r){this.map=t,this.mode=e,this.seed=n,this.trick=s,this.emit=r,this.wave=new H0(t,n%(Math.PI*2)),this.reset()}get remainingS(){return this.mode==="score-run"&&this.map.id!=="nazare"&&this.map.id!=="mavericks"?Math.max(0,120-this.elapsedS):null}reset(){this.trick.reset(),this.wave.resetWave(),this.score.reset(),this.metrics=Yl(),this.cleanExitS=this.jumpLoad=this.railAngle=this.dropMomentum=this.landingPulse=this.skid=0,this.alongM=this.map.spawn.along01*this.map.wave.rideLengthM,this.wave.setPeelPosition(this.alongM),this.simulationTimeS=0,this.elapsedS=0,this.speedMps=Math.max(5,this.map.wave.peelSpeedMps*1.06),this.lateralMps=0,this.verticalMps=0;const t=this.map.spawn.face01*this.map.wave.faceWidthM;this.position=this.wave.surfaceAt(this.alongM,t,0).position,this.previousPosition={...this.position},this.resetLine(),this.heading={x:0,y:0,z:this.wave.direction},this.orientation=Pn(this.wave.surfaceAt(this.alongM,t,0).normal,this.heading),this.state="surfing",this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.trickLabel="",this.activeAirId=null,this.airCounter=0,this.airQualified=!1,this.wipeoutRemainingS=0,this.lastHudS=-1/0,this.currentRunId=X0(this.seed),this.ended=!1,this.started=!1}start(){this.started||this.ended||(this.started=!0,this.emit({type:"run-started",runId:this.currentRunId,mapId:this.map.id,mode:this.mode}),this.emitHud())}emitHud(){const t={runId:this.currentRunId,state:this.state,score:this.score.score,pendingCombo:this.score.pendingCombo,multiplier:this.score.multiplier,speedMps:this.speedMps,barrelS:this.barrelS,cleanExitS:this.cleanExitS,distanceLeftM:Math.max(0,this.map.wave.rideLengthM-this.alongM),remainingS:this.remainingS,trickLabel:this.trickLabel,longestBarrelS:this.metrics.longestBarrelS,largestLandedSpinDeg:this.metrics.largestLandedSpinDeg,bestCombo:this.score.bestCombo,cleanLandings:this.metrics.cleanLandings,wipeouts:this.metrics.wipeouts};this.emit({type:"hud",data:t}),this.lastHudS=this.elapsedS}bank(){const t=this.score.bank();t>0&&this.emit({type:"score-banked",runId:this.currentRunId,points:t,total:this.score.score})}wipeout(t){this.score.losePending(),this.trick.reset(),this.activeAirId=null,this.barrelSectionIndex=null,this.barrelS=0,this.stopWallRide(),this.resetLine(),this.metrics.wipeouts++,this.state="wipeout",this.wipeoutRemainingS=1.35,this.speedMps=Math.max(3,this.speedMps*.4),this.lateralMps=0,this.trickLabel="Wipeout",this.emit({type:"wipeout",runId:this.currentRunId,reason:t})}travelHeading(){this.heading=ir({x:this.lateralMps,y:0,z:this.wave.direction*Math.max(1,this.speedMps)})}stopWallRide(){this.wallRideActive=!1,this.wallRideAngle=0,this.wallRideAngularSpeed=0,this.wallRideElapsedS=0,this.wallRideEntry=null}updateWaveSpeed(t){const e=this.position.x/this.map.wave.faceWidthM,n=.06*Math.sin(this.wave.along01(this.alongM)*Math.PI*4+this.wave.phase-this.simulationTimeS*.12);this.dropMomentum*=Math.exp(-t/2.8),this.dropMomentum=Re(this.dropMomentum-this.lateralMps*e*t*1.1,0,4.8);const s=Math.max(0,-this.lateralMps)*.28,r=Math.max(0,this.lateralMps)*.12,a=this.map.wave.peelSpeedMps*(1.08+e*.16+n)+this.dropMomentum+3.4*Math.min(1,this.driveS)+s-r;this.speedMps+=(a-this.speedMps)*(1-Math.exp(-1.5*t)),this.speedMps=Re(this.speedMps,this.map.wave.peelSpeedMps*(this.skid>0?.45:.7),this.map.wave.peelSpeedMps*1.5)}creditBarrelExit(){this.cleanExitS=Math.max(this.cleanExitS,this.barrelS),this.score.addBarrel(this.barrelS,this.elapsedS)}canExitBarrel(){const t=this.barrelSectionIndex;if(t===null||this.barrelS<.3)return!1;const e=this.map.wave.barrelSections[t].end01;return this.wave.along01(this.alongM)>=e-this.wave.exitTaper01(t)&&this.wave.openFraction(t,this.simulationTimeS)>.24}leaveBarrelWall(){this.canExitBarrel()?(this.creditBarrelExit(),this.trickLabel="Barrel exit"):this.trickLabel="Barrel lost",this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.state="surfing";const t=this.wave.surfaceAt(this.alongM,Re(this.position.x,.2,this.wave.joinX-.08),this.simulationTimeS);this.position=t.position,this.orientation=Pn(t.normal,this.heading)}moveOnBarrelWall(t,e){this.updateWaveSpeed(e),this.alongM+=this.speedMps*e;const n=this.wave.barrelAt(this.alongM,0,0,this.simulationTimeS);if(!n||n.sectionIndex!==this.barrelSectionIndex){this.leaveBarrelWall();return}if(n.openFraction<=.24){this.wipeout("The barrel closed");return}if(n.radiusM<1){this.leaveBarrelWall();return}const s=-t.wallRide*this.wave.direction,r=Math.round(this.wallRideAngle/(Math.PI*2))*Math.PI*2,a=s===0?Re((r-this.wallRideAngle)*4,-3.6,3.6):s*4.1;this.wallRideAngularSpeed+=(a-this.wallRideAngularSpeed)*(1-Math.exp(-7*e));const o=this.wallRideAngle;this.wallRideAngle+=this.wallRideAngularSpeed*e,this.wallRideElapsedS+=e,Math.floor(Math.abs(this.wallRideAngle)/(Math.PI*2))>Math.floor(Math.abs(o)/(Math.PI*2))?this.trickLabel="Barrel loop":this.trickLabel!=="Barrel loop"&&(this.trickLabel="Riding the wall");const c=this.wave.surfaceAt(this.alongM,n.centerX,this.simulationTimeS),h=Math.min(2.1,n.radiusM*.72),u=c.position.y+h,f=n.centerX+h*Math.sin(this.wallRideAngle),p=u-h*Math.cos(this.wallRideAngle),g=Zl(this.wallRideElapsedS/.23),_=this.wallRideEntry??this.position,m=Re(_.x+(f-_.x)*g,.2,this.wave.joinX-.08),d=_.y+(p-_.y)*g;this.position={x:m,y:d,z:this.wave.direction*this.alongM},this.lateralMps=0,this.travelHeading();const E=this.wave.surfaceAt(this.alongM,m,this.simulationTimeS);if(this.orientation=G0(Pn(E.normal,this.heading),this.wallRideAngle*this.wave.direction),this.barrelS+=e,this.metrics.longestBarrelS=Math.max(this.metrics.longestBarrelS,this.barrelS),this.state="barrel",t.jumpChargeS!==null){this.stopWallRide(),this.takeoff(t.jumpChargeS);return}s===0&&Math.abs(this.wallRideAngle-r)<.035&&Math.abs(this.wallRideAngularSpeed)<.12&&(this.stopWallRide(),this.position=E.position,this.orientation=Pn(E.normal,this.heading),this.trickLabel="In the barrel")}moveOnWave(t,e){if(this.wallRideActive){this.moveOnBarrelWall(t,e);return}if(-t.wallRide*this.wave.direction>0){const M=this.wave.barrelAt(this.alongM,this.position.x,this.position.y+.85,this.simulationTimeS),v=M&&this.map.wave.barrelSections[M.sectionIndex],T=M&&Math.hypot(this.position.x-M.centerX,this.position.y+.85-M.centerY)<=M.radiusM*1.25;if(M&&T&&v&&M.radiusM>=1.6&&M.openFraction>.24&&v.end01*this.map.wave.rideLengthM-this.alongM>this.speedMps*2.5){this.barrelSectionIndex!==M.sectionIndex&&(this.barrelSectionIndex=M.sectionIndex,this.barrelS=0,this.wave.enterSection(M.sectionIndex,this.simulationTimeS)),this.resetLine(),this.wallRideActive=!0,this.wallRideEntry={...this.position},this.wallRideAngle=0,this.wallRideAngularSpeed=0,this.wallRideElapsedS=0,this.moveOnBarrelWall(t,e);return}}this.updateWaveSpeed(e);const n=Re(this.speedMps*.47,6.1,11),s=this.wave.rideLineAt(this.alongM,this.position.x),r=s?.strength??0,a=-t.steer*this.wave.direction,o=1-.52*this.skid,l=this.skidSide*this.wave.direction*this.skid*4.8,c=!a&&s?Re((s.lineX-this.position.x)*1.75,-2.6,2.6)*r:0,h=a*n*(1-.48*r)*o+c+l,u=a*this.lateralMps<-1,f=t.steer===0?15:u?12:9.5;this.lateralMps+=(h-this.lateralMps)*(1-Math.exp(-f*e)),this.alongM+=this.speedMps*e;const p=this.position.x,g=Re(this.position.x+this.lateralMps*e,.2,this.wave.joinX-.08);(g<=.2||g>=this.wave.joinX-.08)&&(this.lateralMps=0),this.position=this.wave.surfaceAt(this.alongM,g,this.simulationTimeS).position,this.travelHeading();const _=this.wave.surfaceAt(this.alongM,g,this.simulationTimeS);this.orientation=Pn(_.normal,this.heading);const m=this.wave.barrelAt(this.alongM,g,this.position.y+.85,this.simulationTimeS);this.railAngle+=(-this.lateralMps*this.wave.direction*.032-this.railAngle)*(1-Math.exp(-8*e));const d=m&&this.map.wave.barrelSections[m.sectionIndex],E=d?this.wave.joinX-d.radiusM:0;if(m&&d&&m.openFraction<=.24&&Math.abs(g-E)<d.radiusM*.9){this.wipeout("The barrel closed");return}if(m?.inside?(this.wave.enterSection(m.sectionIndex,this.simulationTimeS),this.barrelSectionIndex!==m.sectionIndex&&(this.barrelSectionIndex=m.sectionIndex,this.barrelS=0),this.barrelS+=e,this.barrelS>=.3&&(this.state="barrel",this.trickLabel="In the barrel",this.metrics.longestBarrelS=Math.max(this.metrics.longestBarrelS,this.barrelS))):this.barrelSectionIndex!==null&&(this.canExitBarrel()?(this.creditBarrelExit(),this.trickLabel="Barrel exit"):this.barrelS>=.3&&(this.trickLabel="Barrel lost"),this.barrelS=0,this.barrelSectionIndex=null,this.state="surfing"),!m?.inside&&this.state==="barrel"&&(this.state="surfing"),m?.inside||this.trackTurn(g/this.map.wave.faceWidthM),t.jumpChargeS!==null)this.takeoff(t.jumpChargeS);else{const M=this.map.wave.faceWidthM*.86;p<M&&g>=M&&this.lateralMps>3&&this.wave.launchMultiplier(this.alongM)>.75&&!(t.charge01??0)&&!m?.inside&&this.takeoff(0)}}takeoff(t){this.canExitBarrel()&&this.creditBarrelExit(),this.stopWallRide();const e=this.wave.launchMultiplier(this.alongM),n=this.position.x/this.map.wave.faceWidthM,s=Zl((n-.58)/.27),r=this.speedMps/this.map.wave.peelSpeedMps,a=this.driveS*.9+Math.max(0,this.lateralMps)*.25,o=s*Re(r,.4,1.65)*(1.1+e*3.25+a);this.driveS=0,this.turnDirection=0,this.verticalMps=3.3+Math.min(.6,t)*6.3+o,this.airQualified=t>=.1||o>0,this.activeAirId=`${this.currentRunId}:air:${++this.airCounter}`;const l=Re(-this.lateralMps*this.wave.direction/7,-1,1)*Re(t/.6,0,1);this.trick.beginAir({airId:this.activeAirId,orientation:this.orientation,loadedRail:l}),this.state="airborne",this.trickLabel="",this.barrelS=0,this.barrelSectionIndex=null}moveInAir(t,e){this.airTuck+=((t.trick.tucked?1:0)-this.airTuck)*(1-Math.exp(-14*e));const n=-t.steer*this.wave.direction*Math.min(4.2,this.speedMps*.18);this.lateralMps+=(n-this.lateralMps)*(1-Math.exp(-(t.steer===0?3.5:2.5)*e)),this.speedMps=Math.max(2.5,this.speedMps-.18*e),this.alongM+=this.speedMps*e;const s=Re(this.position.x+this.lateralMps*e,.2,this.wave.joinX-.08);this.verticalMps-=9.81*e,this.position={x:s,y:this.position.y+this.verticalMps*e,z:this.wave.direction*this.alongM},this.travelHeading();const r=this.trick.step(t.trick,e);this.orientation=r.orientation,this.trickLabel=r.label;const a=this.wave.direction*this.previousPosition.z,o=this.wave.surfaceAt(a,this.previousPosition.x,this.simulationTimeS-e).position.y,l=this.wave.surfaceAt(this.alongM,s,this.simulationTimeS).position.y;if(this.position.y>l||this.previousPosition.y<o-.02)return;let c=0,h=1;for(let _=0;_<9;_++){const m=(c+h)/2,d=a+(this.alongM-a)*m,E=this.previousPosition.x+(s-this.previousPosition.x)*m,M=this.previousPosition.y+(this.position.y-this.previousPosition.y)*m,v=this.wave.surfaceAt(d,E,this.simulationTimeS-e+e*m).position.y;M>v?c=m:h=m}const u=a+(this.alongM-a)*h,f=this.previousPosition.x+(s-this.previousPosition.x)*h,p=this.wave.surfaceAt(u,f,this.simulationTimeS);this.position=p.position,this.alongM=u;const g=this.trick.land({surfaceNormal:p.normal,travelDirection:this.heading,impactSpeedMps:Math.hypot(this.speedMps,this.lateralMps,this.verticalMps)});this.applyLanding(g)}applyLanding(t){if(t.airId!==this.activeAirId)throw new Error("Trick controller returned a landing for the wrong air");const e=this.score.addAerial(t,this.airQualified,this.elapsedS);if(this.activeAirId=null,!e){this.state="surfing",this.verticalMps=0;return}if(t.quality==="wipeout"){this.wipeout("Failed landing");return}this.resetLine(),this.state="surfing",this.landingPulse=1,this.skid=t.quality==="sketchy"?1:0,this.skidSide=this.skid?Re(t.slipSide??0,-1,1):0,this.verticalMps=0,this.speedMps*=Re(t.speedMultiplier,0,1),t.quality==="clean"&&this.metrics.cleanLandings++,this.metrics.largestLandedSpinDeg=Math.max(this.metrics.largestLandedSpinDeg,t.completedSpinDeg),this.trickLabel=t.label+(t.quality==="clean"?" · Clean landing":" · Sketchy landing");const n=this.wave.surfaceAt(this.alongM,this.position.x,this.simulationTimeS);this.orientation=Pn(n.normal,this.heading)}nextWave(){this.state==="airborne"&&(this.trick.reset(),this.activeAirId=null),this.state!=="wipeout"&&this.bank(),this.wave.resetWave(),this.alongM=this.map.spawn.along01*this.map.wave.rideLengthM,this.wave.setPeelPosition(this.alongM),this.lateralMps=0,this.verticalMps=0,this.barrelS=0,this.barrelSectionIndex=null,this.stopWallRide(),this.state="surfing",this.trickLabel="";const t=this.map.spawn.face01*this.map.wave.faceWidthM,e=this.wave.surfaceAt(this.alongM,t,this.simulationTimeS);this.position=e.position,this.previousPosition={...this.position},this.resetLine(),this.heading={x:0,y:0,z:this.wave.direction},this.orientation=Pn(e.normal,this.heading)}step(t,e=V0){if(!this.started||this.ended)return;const n=this.remainingS!==null?Math.min(e,120-this.elapsedS):e;if(n<=0){this.finish("timer");return}this.wave.setPeelPosition(this.alongM),this.previousPosition={...this.position},this.simulationTimeS+=n,this.elapsedS+=n,this.landingPulse=Math.max(0,this.landingPulse-n*3.6);const s=t.steer*this.skidSide>.12;if(this.skid=Math.max(0,this.skid-n*(s?3.4:1.45)),this.driveS=Math.max(0,this.driveS-n),this.jumpLoad=t.charge01??0,this.state==="wipeout"){if(this.wipeoutRemainingS-=n,this.wipeoutRemainingS<=0){const a=Math.min(this.position.x,this.map.wave.faceWidthM*.45),o=this.wave.surfaceAt(this.alongM,a,this.simulationTimeS);this.position=o.position,this.resetLine(),this.orientation=Pn(o.normal,this.heading),this.state="surfing",this.trickLabel=""}}else this.state==="airborne"?this.moveInAir(t,n):this.moveOnWave(t,n);if(this.map.id==="nazare"&&this.mode==="score-run"){if(this.state==="wipeout"){this.finish("wipeout");return}if(this.alongM>=this.map.wave.rideLengthM){const a=this.position.x/this.map.wave.faceWidthM;this.finish(this.state==="surfing"&&a>=.1&&a<=.42?"ride-out":"missed-exit");return}}if(this.alongM>=this.map.wave.rideLengthM){if(this.map.id==="mavericks"&&this.mode==="score-run"){this.finish("ride-out");return}this.nextWave()}this.wave.setPeelPosition(this.alongM),this.state==="barrel"&&this.score.sustainBarrel(this.elapsedS);const r=this.score.tick(this.elapsedS,this.state==="surfing"&&this.barrelSectionIndex===null);r>0&&this.emit({type:"score-banked",runId:this.currentRunId,points:r,total:this.score.score}),this.elapsedS-this.lastHudS>=.1&&this.emitHud(),this.remainingS===0&&this.finish("timer")}finish(t="player-ended"){if(!this.started||this.ended)return null;this.ended=!0,this.bank(),this.trick.reset(),this.activeAirId=null,this.barrelSectionIndex=null,this.barrelS=0,this.stopWallRide();const e={runId:this.currentRunId,mapId:this.map.id,mode:this.mode,score:this.score.score,durationS:this.elapsedS,reason:t,cleanExitS:this.cleanExitS,longestBarrelS:this.metrics.longestBarrelS,largestLandedSpinDeg:this.metrics.largestLandedSpinDeg,bestCombo:this.score.bestCombo,cleanLandings:this.metrics.cleanLandings,wipeouts:this.metrics.wipeouts};return this.emit({type:"run-ended",result:e}),e}}function Co(){const t=new Uint8Array(65536);for(let n=0;n<128;n++)for(let s=0;s<128;s++){const r=s/128,a=n/128,o=Math.PI*2*(5*r+2*a),l=Math.PI*2*(11*r-6*a),c=Math.PI*2*(3*r-13*a),h=-.18*Math.cos(o)-.09*Math.cos(l)-.06*Math.cos(c),u=-.07*Math.cos(o)+.11*Math.cos(l)+.1*Math.cos(c),f=Math.hypot(h,u,1),p=(n*128+s)*4;t[p]=Math.round(255*(h/f*.5+.5)),t[p+1]=Math.round(255*(u/f*.5+.5)),t[p+2]=Math.round(255*(1/f*.5+.5)),t[p+3]=255}const e=new Mo(t,128,128,ke);return e.wrapS=Li,e.wrapT=Li,e.magFilter=Ue,e.minFilter=Mn,e.generateMipmaps=!0,e.needsUpdate=!0,e}function th(){const t=new Uint8Array(4096);for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=Math.hypot((s+.5-16)/16,(n+.5-16)/16),a=Math.pow(Math.max(0,1-r*r),2),o=(n*32+s)*4;t[o]=255,t[o+1]=255,t[o+2]=255,t[o+3]=Math.round(a*255)}const e=new Mo(t,32,32,ke);return e.magFilter=Ue,e.minFilter=Ue,e.needsUpdate=!0,e}function gr(i,t=40){const e=[],n=[],s=[],r=(i.length-1)*4;for(let l=0;l<=r;l++){const c=Math.min(i.length-2,Math.floor(l/4)),h=l/4-c,u=i[Math.max(0,c-1)],f=i[c],p=i[c+1],g=i[Math.min(c+2,i.length-1)],_=v=>f[v]+.5*h*(p[v]-u[v]+h*(2*u[v]-5*f[v]+4*p[v]-g[v]+h*(3*f[v]-3*p[v]+g[v]-u[v]))),m=_(0),d=Math.max(.001,_(1)),E=Math.max(.001,_(2)),M=_(3);for(let v=0;v<=t;v++){const T=(v/t-.5)*2*Math.PI;if(e.push(d*Math.sin(T),m,M+E*Math.cos(T)),n.push(v/t,(m-i[0][0])/(i.at(-1)[0]-i[0][0])),l<r&&v<t){const w=l*(t+1)+v;s.push(w,w+1,w+t+1,w+1,w+t+2,w+t+1)}}}const a=new oe;a.setIndex(s),a.setAttribute("position",new Wt(e,3)),a.setAttribute("uv",new Wt(n,2)),a.computeVertexNormals();const o=a.getAttribute("normal");for(let l=0;l<=r;l++){const c=l*(t+1),h=c+t,u=o.getX(c)+o.getX(h),f=o.getY(c)+o.getY(h),p=o.getZ(c)+o.getZ(h),g=Math.hypot(u,f,p)||1;o.setXYZ(c,u/g,f/g,p/g),o.setXYZ(h,u/g,f/g,p/g)}return a}const Y0=()=>gr([[.2,.012,.025,-.1],[.28,.19,.22,-.09],[.47,.32,.34,-.07],[.72,.36,.35,-.055],[.94,.33,.32,-.015],[1.1,.255,.25,.045],[1.23,.188,.196,.1],[1.36,.207,.222,.135],[1.46,.194,.204,.145],[1.55,.14,.15,.143],[1.59,.08,.086,.138],[1.603,.031,.034,.135],[1.605,.002,.003,.134]]),$0=()=>gr([[-.63,.008,.012,-.23],[-.56,.022,.053,-.19],[-.4,.038,.1,-.13],[-.23,.049,.14,-.069],[-.085,.067,.14,-.012],[0,.077,.107,.015],[.055,.015,.022,.017]],20),Z0=()=>gr([[0,.013,.01,-.27],[.045,.083,.018,-.23],[.105,.135,.036,-.15],[.165,.15,.052,-.06],[.22,.085,.053,0],[.23,.015,.016,.01]],24);function K0(){const e=new Uint8Array(393216),n=r=>Math.min(1,Math.max(0,r));for(let r=0;r<256;r++)for(let a=0;a<384;a++){const o=a/384,l=r/255,c=(o-.5)*Math.PI*2,h=Math.cos(c),u=Math.abs(Math.sin(c)),f=Math.floor(l*72),p=o*96+f%2*.5,g=Math.cos(p*Math.PI*2)*.5+.5,_=Math.sin((a*19+r*43)*1.131)*1.4,m=(Math.cos((l*72+g*.29)*Math.PI*2)*.5+.5)**5,d=n((h-(.09+.87*n((l-.62)/.16)+.48*n((.23-l)/.23)))*12)*n((.82-l)*20),E=.845+.136*(1-u)+.012*h,M=n((.038-Math.abs(l-E))*100)*n((.42-h)*7)*n((l-.8)*20),v=Math.max(d,M),T=4*g+5*m+_,w=(r*384+a)*4;for(const[P,R,S]of[[0,27,218],[1,35,222],[2,39,215]])e[w+P]=R+(S-R)*v+T*(1-v*.5);e[w+3]=255}const s=new Mo(e,384,256);return s.colorSpace=Ie,s.wrapS=Li,s.generateMipmaps=!0,s.magFilter=Ue,s.minFilter=Mn,s.needsUpdate=!0,s}function J0(){const i=gr([[0,.08,.046,0],[.075,.08,.044,0],[.17,.057,.035,-.003],[.24,.026,.022,-.008],[.266,.004,.006,-.018]],24);i.rotateX(Math.PI/2);const t=i.getAttribute("position"),e=[];for(let n=0;n<t.count;n++){const s=t.getZ(n),r=t.getY(n),a=s>.206||r>.026||Math.abs(r+.011)<.004,o=new Rt(a?"#383332":r<0?"#9d502e":"#d28748");e.push(o.r,o.g,o.b)}return i.setAttribute("color",new Wt(e,3)),i}function j0(){const i=new Ao;i.moveTo(-.05,-.07),i.quadraticCurveTo(-.08,.015,-.115,.135),i.quadraticCurveTo(-.064,.111,-.008,.205),i.quadraticCurveTo(.045,.118,.108,.153),i.quadraticCurveTo(.067,.006,.043,-.07),i.closePath();const t=new pr(i,{depth:.021,bevelEnabled:!0,bevelSegments:2,bevelSize:.009,bevelThickness:.007});return t.rotateX(Math.PI/2),t}function Kl(i,t,e,n=!1){return new tn({side:pe,vertexColors:!0,uniforms:{sea:{value:i},sky:{value:new Rt(t)},clock:{value:0},rippleMap:{value:e},curtain:{value:n?1:0}},vertexShader:`
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
      }`})}function Jl(i){return new tn({vertexColors:!0,side:pe,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{clock:{value:0},tip:{value:i?1:0}},vertexShader:`
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
      }`})}class Q0{mesh;backMesh;lipMesh;lipFoam;impactFoam;curlSpray;rows=140;faceColumns=28;lipColumns=28;backColumns=30;base;foam;wave;waterNormal;sprayTexture;constructor(t,e,n){this.wave=t,this.base=new Rt(e),this.foam=new Rt(n),this.waterNormal=Co();const s=t.map.visual.skyColor,r=Kl(this.base,s,this.waterNormal);this.mesh=new Zt(this.makeSheet(this.faceColumns,0,.78),r),this.backMesh=new Zt(this.makeSheet(this.backColumns),r),this.lipMesh=new Zt(this.makeSheet(this.lipColumns,.78,1),Kl(this.base,s,this.waterNormal,!0)),this.lipFoam=new Zt(this.makeSheet(4,.965,1),Jl(!0)),this.impactFoam=new Zt(this.makeSheet(4),Jl(!1));for(const l of[this.mesh,this.backMesh,this.lipMesh,this.lipFoam,this.impactFoam])l.frustumCulled=!1;this.lipFoam.renderOrder=1;const a=new oe;a.setAttribute("position",new Wt(new Float32Array(480*3),3)),this.sprayTexture=th();const o=new yo({color:n,size:.13,map:this.sprayTexture,alphaTest:.03,transparent:!0,opacity:.72,depthWrite:!1});this.curlSpray=new Uc(a,o),this.curlSpray.frustumCulled=!1,this.update(0)}makeSheet(t,e=0,n=1){const s=new oe,r=(this.rows+1)*(t+1);s.setAttribute("position",new Wt(new Float32Array(r*3),3)),s.setAttribute("color",new Wt(new Float32Array(r*3),3));const a=new Float32Array(r*2);for(let l=0;l<=this.rows;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c;a[h*2]=e+(n-e)*c/t,a[h*2+1]=l/this.rows}s.setAttribute("uv",new Wt(a,2));const o=[];for(let l=0;l<this.rows;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;o.push(h,u,h+1,u,u+1,h+1)}return s.setIndex(o),s}alongSamples(){const t=new Float32Array(this.rows+1),e=this.wave.map.wave.rideLengthM,n=this.wave.peelPositionM;if(n===null){for(let g=0;g<=this.rows;g++)t[g]=e*g/this.rows;return t}const s=Math.max(0,n-36),r=Math.min(e,n+28),a=Math.max(s,n-7),o=Math.min(r,n+7),l=96,c=this.rows-l,h=s,u=e-r,f=h===0?0:u===0?c:Math.max(1,Math.min(c-1,Math.round(c*h/(h+u)))),p=c-f;for(let g=0;g<=this.rows;g++)if(g<=f)t[g]=f===0?0:s*g/f;else if(g<=f+l){const _=g-f;_<=28?t[g]=s+(a-s)*_/28:_<=78?t[g]=a+(o-a)*(_-28)/50:t[g]=o+(r-o)*(_-78)/18}else t[g]=r+(e-r)*(g-f-l)/Math.max(1,p);return t}updateSheet(t,e,n,s,r,a){const o=t.getAttribute("position"),l=t.getAttribute("color"),c=t.getAttribute("uv"),h=new Rt;for(let u=0;u<=this.rows;u++){const f=a[u],p=this.wave.barrelAt(f,0,0,r),g=this.wave.whitewaterAt(f),_=this.wave.crossSectionAt(f,1,r).x;for(let m=0;m<=e;m++){const d=n+(s-n)*m/e,E=u*(e+1)+m,M=this.wave.crossSectionAt(f,d,r);o.setXYZ(E,M.x,M.y,M.z),c.setXY(E,d,f/this.wave.map.wave.rideLengthM);const v=.78+.22*Math.sin(f*.19-r*2.1+d*13),T=Math.max(0,(d-.78)/.22),w=Math.pow(Math.max(0,(T-.7)/.3),1.1)*v,P=(p?.foam??0)*Math.max(0,(d-.66)/.34),R=(p?.radiusM??0)>.6&&d>.8&&d<.95?.56+.18*(d-.8)/.15:1,S=Math.min(1,d/.78),y=d<.78?.68+.32*S:1,C=d<.78?Math.pow(S,3.5)*.16:0,I=Math.exp(-Math.pow((d-.79)/.023,2))*.19,O=d<.78?Math.pow(Math.max(0,Math.sin(f*.19-r*1.5+S*22+Math.sin(f*.035)*1.4)),12)*(.03+.12*S):0,k=d<.78?Math.exp(-Math.pow((M.x-_)/.85,2))*Math.min(.3,.1+(p?.radiusM??0)*.04):0,H=g*(d<.78?Math.pow(S,.9)*(.38+.18*Math.sin(f*.31-r*3.2+S*18)):.52+.32*T);h.copy(this.base).multiplyScalar(R*y).lerp(this.foam,Math.min(.97,w*.86+P*.54+I+O+k+C+H)),l.setXYZ(E,h.r,h.g,h.b)}}o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,t.computeVertexNormals()}update(t){for(const f of[this.mesh,this.lipMesh,this.lipFoam,this.impactFoam])f.material.uniforms.clock.value=t;const e=this.alongSamples();this.updateSheet(this.mesh.geometry,this.faceColumns,0,.78,t,e),this.updateSheet(this.lipMesh.geometry,this.lipColumns,.78,1,t,e);const n=this.lipFoam.geometry.getAttribute("position"),s=this.lipFoam.geometry.getAttribute("color"),r=this.impactFoam.geometry.getAttribute("color"),a=this.impactFoam.geometry.getAttribute("position"),o=this.backMesh.geometry,l=o.getAttribute("position"),c=o.getAttribute("color"),h=new Rt;for(let f=0;f<=this.rows;f++){const p=e[f],g=this.wave.crossSectionAt(p,1,t),_=this.wave.barrelAt(p,0,0,t)?.radiusM??0,m=this.wave.whitewaterAt(p);for(let T=0;T<=this.backColumns;T++){const w=T/this.backColumns,P=this.wave.backAt(p,w,t),R=f*(this.backColumns+1)+T;l.setXYZ(R,P.x,P.y,P.z);const S=Math.max(0,(w-.85)/.15);h.copy(this.base).lerp(this.foam,S*(.32+m*.45)),c.setXYZ(R,h.r,h.g,h.b)}const d=this.wave.crossSectionAt(p,.78*g.x/this.wave.joinX,t),E=Math.min(1,_*.65+m),M=E*Math.max(0,1-Math.max(0,g.y-d.y-.45)/.9),v=.18+Math.min(.7,_*.22)+m*1.2;for(let T=0;T<=4;T++){const w=T/4,P=this.wave.crossSectionAt(p,.965+.035*w,t),R=f*5+T;n.setXYZ(R,P.x,P.y,P.z),s.setX(R,E),r.setX(R,M);const S=.65+.35*Math.sin(p*1.1+t*2.8+w*9),y=g.x+(w-.5)*v*(1.6+.65*S),C=this.wave.crossSectionAt(p,.78*y/this.wave.joinX,t),I=Math.sin(Math.PI*w)*S*Math.min(.72,_*.1+m*.65);a.setXYZ(f*5+T,y,C.y+.045+I,C.z)}}l.needsUpdate=c.needsUpdate=!0,o.computeVertexNormals(),n.needsUpdate=s.needsUpdate=!0,a.needsUpdate=r.needsUpdate=!0;const u=this.curlSpray.geometry.getAttribute("position");for(let f=0;f<u.count;f++){const p=this.wave.map.wave.rideLengthM,g=this.wave.peelPositionM,_=g===null?p*(f+.5)/u.count:Math.max(0,Math.min(p,g-42+62*(f+.5)/u.count)),m=this.wave.barrelAt(_,0,0,t),d=this.wave.whitewaterAt(_);if(!m||m.radiusM<.6&&d<.2){u.setXYZ(f,0,-1e3,0);continue}const E=(t*(.7+f%5*.06)+f*.43)%1;if(d>.2&&f%3!==0){const R=this.wave.crossSectionAt(_,1,t).x+Math.sin(f*8.3)*(.4+d*1.7),S=this.wave.surfaceAt(_,R,t).position;u.setXYZ(f,R,S.y+.2+E*(.5+d*1.8),S.z+Math.sin(f*4.4)*.35);continue}if(m.radiusM<.6){u.setXYZ(f,0,-1e3,0);continue}const M=f%3===0?.83+.1*Math.abs(Math.sin(f*6.7)):.94+.06*Math.abs(Math.sin(f*6.7)),v=this.wave.crossSectionAt(_,M,t),T=f%3===0,w=T?E*(2.3-1.55*E):E*(.4-1.8*E);u.setXYZ(f,v.x+(T?.95:-.3)*E+Math.sin(f*13.2)*.2,v.y+w,v.z+this.wave.direction*E*.8+Math.sin(f*4.4)*.2)}u.needsUpdate=!0}dispose(){this.backMesh.geometry.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.lipMesh.geometry.dispose(),this.lipMesh.material.dispose(),this.lipFoam.geometry.dispose(),this.lipFoam.material.dispose(),this.impactFoam.geometry.dispose(),this.impactFoam.material.dispose(),this.waterNormal.dispose(),this.sprayTexture.dispose(),this.curlSpray.geometry.dispose(),this.curlSpray.material.dispose()}}class t_{group=new He;boardColor;body=new He;featherMap=K0();flippers=[];materials=[];geometries=[];sprayGeometry;sprayMaterial;sprayTexture;spray;constructor(t,e){const n=new Rt(e),s=new Wd({color:"#bceaf4",roughness:.14,metalness:0,clearcoat:.7,clearcoatRoughness:.08,transparent:!0,opacity:.9,side:pe});this.materials.push(s);const r=[[0,1.22],[.2,1.09],[.34,.68],[.4,.08],[.36,-.52],[.24,-.95],[.1,-1.16],[0,-1.2],[-.1,-1.16],[-.24,-.95],[-.36,-.52],[-.4,.08],[-.34,.68],[-.2,1.09]],a=new Ao;a.moveTo(...r[0]);for(const w of r.slice(1))a.lineTo(...w);a.closePath();const o=new pr(a,{depth:.1,bevelEnabled:!0,bevelThickness:.025,bevelSize:.035,bevelSegments:2,steps:1});this.geometries.push(o);const l=new Zt(o,s);l.rotation.x=Math.PI/2,l.position.y=.13,this.group.add(l);const c=new oe;c.setAttribute("position",new Wt(r.flatMap(([w,P])=>[w,.165,P]),3));const h=new Ka({color:"#f1ffff",transparent:!0,opacity:.85});this.geometries.push(c),this.materials.push(h),this.group.add(new hd(c,h));const u=new oe;u.setAttribute("position",new Wt([-.22,.166,.7,-.03,.166,.35,-.03,.166,.35,.16,.166,.23,.23,.166,-.54,.02,.166,-.31,.02,.166,-.31,-.14,.166,-.4],3));const f=new Ka({color:"#e6ffff",transparent:!0,opacity:.65});this.geometries.push(u),this.materials.push(f),this.group.add(new cd(u,f)),this.boardColor=this.material(t.boardColor,.24),this.boardColor.transparent=!0,this.boardColor.opacity=.38,this.group.add(this.part(new rn(1,12,8),this.boardColor,[0,.175,0],[.055,.012,.72]));const p=this.material("#a9e6f4",.18);p.transparent=!0,p.opacity=.75;for(const w of[-.14,.14]){const P=this.part(new fr(.11,.28,4),p,[w,-.07,-.72],[.65,1,.65]);P.rotation.z=Math.PI,this.group.add(P)}const g=this.material("#ffffff",.63);g.map=this.featherMap,this.body.add(this.part(Y0(),g,[0,0,0]));const _=this.material("#263137",.62),m=this.material("#161715",.18),d=this.material("#674f35",.28),E=this.material("#f3eee2",.22),M=this.material("#ae7048",.7),v=this.material("#ffffff",.46);v.vertexColors=!0,this.body.add(this.part(J0(),v,[0,1.37,.308]));for(const w of[-1,1]){this.body.add(this.part(new rn(1,12,8),d,[w*.165,1.425,.246],[.028,.031,.031])),this.body.add(this.part(new rn(1,12,8),m,[w*.181,1.426,.252],[.02,.024,.024])),this.body.add(this.part(new rn(1,8,6),E,[w*.198,1.435,.26],[.006,.006,.006]));const P=this.part($0(),_,[w*.292,1,.015]);this.flippers.push(P),this.body.add(P);const R=this.part(j0(),M,[w*.15,.205,w*.12+.015]);R.rotation.y=w*.2,this.group.add(R),this.group.add(this.part(new rn(1,12,8),M,[w*.136,.249,w*.08-.045],[.049,.072,.05]))}this.body.add(this.part(Z0(),_,[0,.27,-.2])),this.group.add(this.body);const T=70;this.sprayGeometry=new oe,this.sprayGeometry.setAttribute("position",new Wt(new Float32Array(T*3),3)),this.sprayTexture=th(),this.sprayMaterial=new yo({color:n,size:.075,map:this.sprayTexture,alphaTest:.03,transparent:!0,opacity:.62,depthWrite:!1}),this.spray=new Uc(this.sprayGeometry,this.sprayMaterial),this.spray.frustumCulled=!1}material(t,e){const n=new De({color:t,roughness:e});return this.materials.push(n),n}part(t,e,n,s){this.geometries.push(t);const r=new Zt(t,e);return r.position.set(...n),s&&r.scale.set(...s),r}addSprayTo(t){t.add(this.spray)}update(t,e){const n=t.state,s=Math.min(.37,.09*t.jumpLoad+.16*t.landingPulse+.18*t.airTuck+(n==="barrel"?.095:0));this.body.scale.set(1+s*.12,1-s,1+s*.1),this.body.position.y=s*.2;const r=Math.max(-1,Math.min(1,t.lateralMps*t.wave.direction/7));this.body.rotation.x=n==="wipeout"?.78:.09+s*.55,this.body.rotation.z=n==="wipeout"?.4:-r*.19;const a=n==="airborne"||t.wallRideActive?.9-t.airTuck*.6:.29+Math.abs(r)*.33+t.landingPulse*.25;for(let h=0;h<this.flippers.length;h++){const u=h===0?-1:1;this.flippers[h].rotation.z=u*a-r*.23,this.flippers[h].rotation.x=.12+u*r*.2}const o=this.sprayGeometry.getAttribute("position"),l=e.quality==="low"?20:e.quality==="medium"?42:70,c=n!=="airborne"&&t.speedMps>3;for(let h=0;h<o.count;h++){if(!c||h>=l){o.setXYZ(h,0,-1e3,0);continue}const u=(t.simulationTimeS*(1.8+h%7*.12)+h*.31)%1;if(n==="barrel"&&h>=l*.45){const f=t.alongM+1+u*7,p=.82+h*7%17/17*.17,g=t.wave.crossSectionAt(f,p,t.simulationTimeS);o.setXYZ(h,g.x+Math.sin(h*12.7)*.08,g.y-.12-u*.3,g.z)}else{const f=Math.sin(h*17.23)*(.3+u*.7),p=-t.wave.direction*(.2+u*(1.4+t.speedMps*.04));o.setXYZ(h,t.position.x+f*(1+t.skid*2)-t.lateralMps*u*.2,t.position.y+.08+Math.sin(u*Math.PI)*(n==="wipeout"?1.2:.55),t.position.z+p)}}o.needsUpdate=!0,this.boardColor.color.set(e.boardColor)}dispose(){for(const t of this.geometries)t.dispose();for(const t of this.materials)t.dispose();this.sprayGeometry.dispose(),this.sprayMaterial.dispose(),this.sprayTexture.dispose(),this.featherMap.dispose()}}function e_(i){if(B0(i.map),!i.mount||!Number.isFinite(i.seed)||!["free-surf","score-run"].includes(i.mode))throw new Error("Invalid surfing session options");const t=i.createTrickController(),e=new rd;e.background=new Rt(i.map.visual.skyColor);const n=new qe(65,1,.05,1500),s=new U0({antialias:i.settings.quality!=="low"});s.outputColorSpace=Ie,s.domElement.tabIndex=0,s.domElement.setAttribute("aria-label","BarrelRoll penguin surfing game"),s.domElement.style.display="block",s.domElement.style.width="100%",s.domElement.style.height="100%",i.mount.appendChild(s.domElement);const r=new Zd("#bde4f7",2.1),a=new $c("#fff7dc",2.2);a.position.set(20,32,-24),e.add(r,a);const o=new q0(i.map,i.mode,i.seed,t,i.onEvent),l=new Q0(o.wave,i.map.visual.waterColor,i.map.visual.foamColor),c=new t_(i.settings,i.map.visual.foamColor);e.add(l.mesh,l.backMesh,l.lipMesh,l.lipFoam,l.impactFoam,l.curlSpray,c.group),c.addSprayTo(e);const h=new N0(e),u=new Zt(new Bn(2.5,3.7),new tn({transparent:!0,depthWrite:!1,uniforms:{strength:{value:0}},vertexShader:"varying vec2 st; void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 st; uniform float strength; void main(){float d=length(st*2.-1.);gl_FragColor=vec4(.008,.075,.09,strength*(1.-smoothstep(.1,1.,d)));}"}));u.visible=!1,e.add(u);let f;try{f=i.createEnvironment(e,i.map,i.settings)}catch(W){throw t.reset(),l.dispose(),c.dispose(),s.dispose(),s.domElement.remove(),new Error(`Could not load the map environment: ${String(W)}`)}const p=new O0;let g={...i.settings},_=!0,m=!1,d=null,E=null,M=0;const v=new F0,T=new Ye,w=new Ye,P=new Ye,R=new D(0,0,1),S=new D;let y=o.alongM,C=-1;const I=()=>{const W=Math.max(1,i.mount.clientWidth||window.innerWidth),J=Math.max(1,i.mount.clientHeight||window.innerHeight);s.setSize(W,J,!1),n.aspect=W/J,n.updateProjectionMatrix()},O=()=>{const W=g.quality==="low"?1:g.quality==="medium"?1.5:2;s.setPixelRatio(Math.min(window.devicePixelRatio||1,W)),I()};O();const k=typeof ResizeObserver<"u"?new ResizeObserver(I):null;k?.observe(i.mount),k||window.addEventListener("resize",I);const H=W=>{C!==o.simulationTimeS&&(l.update(o.simulationTimeS),C=o.simulationTimeS),o.alongM<y-1&&(v.reset(),T.copy(o.orientation)),y=o.alongM,h.update(o),c.update(o,g);const J=Math.min(1,M/(1/60)),mt=o.previousPosition,Et=o.position,Mt=new D(mt.x+(Et.x-mt.x)*J,mt.y+(Et.y-mt.y)*J,mt.z+(Et.z-mt.z)*J);c.group.position.copy(Mt);const Xt=o.orientation;c.group.quaternion.copy(T).slerp(w.copy(Xt),J),o.state==="surfing"&&(c.group.rotateZ(o.railAngle),c.group.rotateY(o.skidSide*o.skid*.56),o.landingPulse>0&&c.group.quaternion.slerp(P,o.landingPulse**2));const ee=new D(o.heading.x,0,o.heading.z).normalize(),L=o.wave.surfaceAt(Mt.z*o.wave.direction,Mt.x,o.simulationTimeS),tt=Math.max(0,Mt.y-L.position.y);u.visible=o.state==="airborne",u.visible&&(S.copy(L.normal),u.position.copy(L.position).addScaledVector(S,.035),u.quaternion.setFromUnitVectors(R,S),u.scale.setScalar(1+Math.min(tt,8)*.07),u.material.uniforms.strength.value=.46/(1+tt*.14));const j=v.update(o.wave,Mt,ee,tt,o.state==="surfing"||o.state==="barrel",o.simulationTimeS,W);n.position.copy(v.eye),n.lookAt(v.focus);const Z=g.reducedMotion?65:63+Math.min(9,o.speedMps*.25)+Math.min(5,tt*.3)+j*3;Math.abs(n.fov-Z)>.05&&(n.fov=Z,n.updateProjectionMatrix()),s.render(e,n)},X=()=>{!_&&!m&&!o.ended&&d===null&&(d=requestAnimationFrame($))},$=W=>{if(d=null,_||m||o.ended)return;const J=E===null?0:Math.min(.25,(W-E)/1e3);E=W,M=Math.min(M+J,8/60);let mt=0;for(;M>=1/60&&mt<8&&!o.ended;){const Et=o.state==="airborne";p.advance(1/60,o.state==="surfing"||o.state==="barrel"),T.copy(o.orientation),o.step(p.frame(),1/60),Et&&o.state==="surfing"&&P.copy(T),!Et&&o.state==="airborne"&&p.beginAir(),o.ended||f.update(o.simulationTimeS,1/60),M-=1/60,mt++}m||(o.ended&&B(),H(J),X())},B=()=>{_||m||(_=!0,p.clear(),E=null,M=0,d!==null&&cancelAnimationFrame(d),d=null)},nt=()=>{!_||m||!o.started||o.ended||(_=!1,p.clear(),E=null,s.domElement.focus(),X())},dt=()=>{m||(p.clear(),o.reset(),T.copy(o.orientation),o.start(),M=0,E=null,_=!1,v.reset(),s.domElement.focus(),X())},xt=()=>{m||(o.finish(),B())},Ft=W=>{if(!(_||m||o.ended||document.activeElement!==s.domElement)){if(W.key.toLowerCase()==="r"&&!W.repeat){W.preventDefault(),dt();return}p.press(W.key,o.state==="surfing"||o.state==="barrel")&&W.preventDefault()}},qt=W=>{p.release(W.key)&&document.activeElement===s.domElement&&W.preventDefault()},Kt=()=>B(),Yt=()=>s.domElement.focus();return window.addEventListener("keydown",Ft),window.addEventListener("keyup",qt),window.addEventListener("blur",Kt),s.domElement.addEventListener("blur",Kt),s.domElement.addEventListener("pointerdown",Yt),T.copy(o.orientation),H(0),{start(){m||o.started||(o.start(),nt())},pause:B,resume:nt,restart:dt,finish:xt,setSettings(W){m||(g={...W},f.setSettings(g),O(),_&&H(0))},dispose(){m||(B(),m=!0,p.clear(),o.trick.reset(),window.removeEventListener("keydown",Ft),window.removeEventListener("keyup",qt),window.removeEventListener("blur",Kt),s.domElement.removeEventListener("blur",Kt),s.domElement.removeEventListener("pointerdown",Yt),k?.disconnect(),k||window.removeEventListener("resize",I),u.geometry.dispose(),u.material.dispose(),h.dispose(),f.dispose(),l.dispose(),c.dispose(),s.dispose(),s.forceContextLoss(),s.domElement.remove())}}}function n_(){const i=new Ye,t=new Ye,e=new Ye,n=new Ye,s=new D(0,1,0),r=new D(1,0,0);let a="",o=0,l=0,c=0,h=0,u=0;const f=(_,m)=>Math.floor((Math.abs(_)+1e-5)/m),p=()=>{const _=f(o,180)*180,m=f(l,360),d=l>0?"frontflip":"backflip";return[_?String(_):"",m?(m>1?m+"× ":"")+d:""].filter(Boolean).join(" + ")||"Straight air"};function g(_,m,d){const E=Math.round(_/m)*m-_;return Math.abs(E)<.3?_+E:Math.abs(E)<22?_+E*(1-Math.exp(-8*d)):_}return{beginAir(_){a=_.airId,u=_.loadedRail??0,i.copy(_.orientation),t.copy(i),o=l=c=h=0},step(_,m){u*_.spinAxis>0&&(c=u*310),u=0;const d=_.tucked?1.42:1;return c=ye.damp(c,_.spinAxis*650*d,_.spinAxis?12:19,m),h=ye.damp(h,_.flipAxis*510*d,_.flipAxis?11:19,m),o+=c*m,l+=h*m,_.spinAxis||(o=g(o,180,m)),_.flipAxis||(l=g(l,360,m)),t.copy(i).multiply(e.setFromAxisAngle(s,ye.degToRad(o))).multiply(n.setFromAxisAngle(r,ye.degToRad(l))),{orientation:t,label:p()}},land(_){if(!a)throw new Error("Landing without an active jump");const m=new D().copy(_.surfaceNormal).normalize(),d=ye.radToDeg(s.clone().applyQuaternion(t).angleTo(m)),E=new D(0,0,1).applyQuaternion(t).projectOnPlane(m).normalize(),M=new D().copy(_.travelDirection).projectOnPlane(m).normalize();E.dot(M)<0&&E.negate();const v=new D().crossVectors(m,M).normalize(),T=ye.radToDeg(Math.acos(Math.min(1,Math.abs(E.dot(M))))),w=d<=25&&T<=30?"clean":d<=55&&T<=70?"sketchy":"wipeout",P=f(o,180)*180,R=f(l,360),S=a;return a="",{airId:S,quality:w,slipSide:E.dot(v),completedSpinDeg:P,completedFlips:R,label:p(),family:P&&R?"cork":R?"flip":P?"spin":"straight-air",speedMultiplier:w==="clean"?1:w==="sketchy"?.68:0}},reset(){a=""}}}const hr=-160,eh=780,ra=i=>-48-Math.sin(i*.011)*8-Math.sin(i*.031)*3,jl=(i,t)=>{const e=Math.max(0,Math.min(1,(-i-155)/185));return 2+38*Math.pow(e,1.25)+e*(2.7*Math.sin(t*.021)+1.4*Math.sin(t*.063))};function Ql(i,t,e){const n=[],s=[],r=[];for(let l=0;l<=i;l++){const c=hr+(eh-hr)*l/i;for(let h=0;h<=t;h++){const u=e(c,h/t);n.push(u.x,u.y,c),s.push(u.color.r,u.color.g,u.color.b)}}for(let l=0;l<i;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;r.push(h,h+1,u,h+1,u+1,u)}const a=new oe;a.setIndex(r),a.setAttribute("position",new Wt(n,3)),a.setAttribute("color",new Wt(s,3)),a.computeVertexNormals();const o=new De({vertexColors:!0,roughness:1,side:pe});return new Zt(a,o)}function i_(i,t,e){if(t.id!=="mavericks")throw new Error("Mavericks scenery requires the Mavericks map");const n=new He,s=i.fog,r=new Bn(2200,2200),a=Co();a.repeat.set(88,88);const o=new Xc({color:"#1b596d",specular:"#83b7bb",shininess:95,side:pe,normalMap:a,normalScale:new ut(.38,.38)}),l=new Zt(r,o);l.rotation.x=-Math.PI/2,l.position.y=-.09,n.add(l);const c=new Rt("#988c7a"),h=new Rt("#c6b79b"),u=Ql(84,14,(C,I)=>({x:ra(C)-145*I,y:-.02+2.2*Math.pow(I,1.55)+.09*Math.sin(C*.12+I*5),color:c.clone().lerp(h,Math.min(1,I*1.5))}));n.add(u);const f=new Rt("#787468"),p=new Rt("#65785f"),g=Ql(84,18,(C,I)=>{const O=-155-185*I,k=Math.min(.85,.25+I*.55+Math.sin(C*.045+I*9)*.08);return{x:O,y:jl(O,C),color:f.clone().lerp(p,k)}});n.add(g);const _=new oe,m=[],d=[];for(let C=0;C<=84;C++){const I=hr+(eh-hr)*C/84,O=ra(I);if(m.push(O+.3,.06,I,O+2.6,.06,I),C<84){const k=C*2;d.push(k,k+1,k+2,k+1,k+3,k+2)}}_.setIndex(d),_.setAttribute("position",new Wt(m,3)),_.computeVertexNormals();const E=new Oi({color:t.visual.foamColor,transparent:!0,opacity:.55,depthWrite:!1,side:pe}),M=new Zt(_,E);n.add(M);const v=new bo(1,0),T=new De({color:"#555d5d",roughness:1});for(let C=0;C<16;C++){const I=-70+C*45+Math.sin(C*11)*9,O=new Zt(v,T);O.position.set(ra(I)-5-Math.abs(Math.sin(C*8.7))*17,.2,I);const k=.8+Math.abs(Math.sin(C*3.13))*2.2;O.scale.set(k*1.25,k*.7,k),O.rotation.y=C*1.3,n.add(O)}const w=new rn(1,7,5),P=new De({color:"#465d48",roughness:1}),R=new He;for(let C=0;C<40;C++){const I=-130+C*22+Math.sin(C*7.1)*12,O=-180-Math.abs(Math.sin(C*4.3))*110,k=new Zt(w,P);k.position.set(O,jl(O,I)+.4,I);const H=.9+Math.abs(Math.sin(C*2.9))*1.8;k.scale.set(H*1.5,H*.7,H),R.add(k)}n.add(R),i.add(n),i.fog=new Ui(t.visual.skyColor,190,850);let S=!1;const y=C=>{R.visible=C.quality!=="low",i.fog=new Ui(t.visual.skyColor,C.quality==="low"?150:190,C.quality==="low"?650:850)};return y(e),{update(C){S||(M.material.opacity=.49+.09*Math.sin(C*1.5),a.offset.set(C*.0018,-C*.0011))},setSettings:y,dispose(){S||(S=!0,i.remove(n),i.fog=s,r.dispose(),o.dispose(),a.dispose(),u.geometry.dispose(),u.material.dispose(),g.geometry.dispose(),g.material.dispose(),_.dispose(),E.dispose(),v.dispose(),T.dispose(),w.dispose(),P.dispose())}}}const tc=90,s_=-490,aa=i=>-43-5*Math.sin(i*.014)-2*Math.sin(i*.043);function oa(i,t,e){const n=[],s=[],r=[];for(let l=0;l<=i;l++){const c=tc+(s_-tc)*l/i;for(let h=0;h<=t;h++){const u=e(c,h/t);n.push(u.x,u.y,c),s.push(u.color.r,u.color.g,u.color.b)}}for(let l=0;l<i;l++)for(let c=0;c<t;c++){const h=l*(t+1)+c,u=h+t+1;r.push(h,u,h+1,h+1,u,u+1)}const a=new oe;a.setIndex(r),a.setAttribute("position",new Wt(n,3)),a.setAttribute("color",new Wt(s,3)),a.computeVertexNormals();const o=new De({vertexColors:!0,roughness:1,side:pe});return new Zt(a,o)}function r_(){const i=[],t=[];for(let n=0;n<=5;n++){const s=n/5,r=s*5.8,a=1.25*Math.sin(s*Math.PI)-1.1*s*s,o=.03+.62*Math.sin(s*Math.PI);if(i.push(r,a,-o,r,a,o),n<5){const l=n*2;t.push(l,l+1,l+2,l+1,l+3,l+2)}}const e=new oe;return e.setIndex(t),e.setAttribute("position",new Wt(i,3)),e.computeVertexNormals(),e}function a_(i,t,e,n,s,r,a){const o=new He;o.position.set(i,1.7,t),o.scale.setScalar(e),o.rotation.z=.07*Math.sin(t*.17);const l=new Zt(n,s);l.position.y=3.5,o.add(l);for(let c=0;c<7;c++){const h=new Zt(r,a);h.position.set(0,7,0),h.rotation.y=c*Math.PI*2/7,o.add(h)}return o}function o_(i,t,e){if(t.id!=="pipeline")throw new Error("Pipeline scenery requires the Pipeline map");const n=new He,s=new He,r=i.fog,a=new Bn(1800,1800),o=new De({color:"#13798a",roughness:.53,metalness:.08,side:pe}),l=new Zt(a,o);l.rotation.x=-Math.PI/2,l.position.y=-.24,n.add(l);const c=new Rt("#c9b38a"),h=new Rt("#ecd8a8"),u=oa(72,12,(B,nt)=>({x:aa(B)-92*nt,y:-.08+2.6*Math.pow(nt,1.5)+.08*Math.sin(B*.09+nt*6),color:c.clone().lerp(h,Math.min(1,nt*1.6))}));n.add(u);const f=new Rt("#787d69"),p=new Rt("#3f7450"),g=oa(72,16,(B,nt)=>({x:-135-170*nt,y:2.6+26*Math.pow(nt,1.4)+nt*(3.5*Math.sin(B*.027)+1.4*Math.sin(B*.081)),color:f.clone().lerp(p,Math.min(.9,.35+nt*.6))}));n.add(g);const _=oa(72,1,(B,nt)=>({x:aa(B)+.3+2.3*nt,y:.05,color:new Rt("#edfff6")})),m=_.geometry;_.material.dispose();const d=new Oi({color:t.visual.foamColor,transparent:!0,opacity:.65,depthWrite:!1,side:pe}),E=new Zt(m,d);n.add(E);const M=new nn(.2,.37,7,6),v=new De({color:"#715e47",roughness:1}),T=r_(),w=new De({color:"#2b704b",roughness:1,side:pe});for(let B=0;B<13;B++){const nt=42-B*39+5*Math.sin(B*2.4),dt=aa(nt)-29-10*Math.abs(Math.sin(B*1.8)),xt=a_(dt,nt,.8+.22*Math.abs(Math.sin(B*3.1)),M,v,T,w);(B%3===0?n:s).add(xt)}const P=new En(1,1,1),R=new De({color:"#9d6848",roughness:1}),S=new De({color:"#e9d2a2",roughness:1}),y=new De({color:"#b45e4d",roughness:1}),C=new fr(3.5,2.1,4),I=new He;I.position.set(-106,2.2,-190);for(const B of[-2.2,2.2])for(const nt of[-2.2,2.2]){const dt=new Zt(P,R);dt.position.set(B,2.4,nt),dt.scale.set(.28,4.8,.28),I.add(dt)}const O=new Zt(P,S);O.position.y=5.5,O.scale.set(5.5,2.6,5.5),I.add(O);const k=new Zt(C,y);k.position.y=7.7,k.rotation.y=Math.PI/4,I.add(k),s.add(I),n.add(s);const H=new $c("#ffe5b2",.9);H.position.set(-120,100,-200),n.add(H),i.add(n);let X=!1;const $=B=>{X||(s.visible=B.quality!=="low",i.fog=new Ui(t.visual.skyColor,B.quality==="low"?135:185,B.quality==="low"?570:760))};return $(e),{update(B){X||(E.material.opacity=.6+.08*Math.sin(B*1.2))},setSettings:$,dispose(){X||(X=!0,i.remove(n),i.fog=r,a.dispose(),o.dispose(),u.geometry.dispose(),u.material.dispose(),g.geometry.dispose(),g.material.dispose(),m.dispose(),d.dispose(),M.dispose(),v.dispose(),T.dispose(),w.dispose(),P.dispose(),R.dispose(),S.dispose(),C.dispose(),y.dispose())}}}const l_=(i,t,e)=>{if(t.id==="mavericks")return i_(i,t,e);if(t.id==="pipeline")return o_(i,t,e);const n=new He,s=t.wave.breakDirection==="right"?1:-1,r=t.wave.rideLengthM,a=i.fog,o=Co();o.repeat.set(76,76);const l=new Zt(new Bn(2e3,2400),new Xc({color:t.visual.waterColor,normalMap:o,normalScale:new ut(.35,.35),shininess:92}));l.rotation.x=-Math.PI/2,l.position.y=-.15,n.add(l);const c=t.id==="teahupoo",h=t.id==="uluwatu",u=t.id==="nazare",f=new Rt(h?"#c1bda0":"#d3b181"),p=new Rt(u?"#625e58":h?"#9d987f":"#766b56"),g=new Rt(c?"#27544b":h?"#486548":"#818064"),_=[],m=[],d=[],E=100,M=12;for(let R=0;R<=E;R++){const S=-150+(r+450)*R/E,y=-(72+14*Math.sin(S*.017)+8*Math.sin(S*.038));for(let C=0;C<=M;C++){const I=C/M,O=.52+.22*Math.sin(S*.027)+.17*Math.cos(S*.054)+.09*Math.sin(S*.091),k=Math.min(1,Math.max(0,(I-.12)*9)),H=c?I*I*(55+O*145):h?k*(20+12*O)+I*12:u?k*(10+12*O)+I*17:2*I+I*I*(13+O*22);_.push(y-I*180,H-.4,S*s);const X=I<.1?f:p.clone().lerp(g,Math.min(1,k*(.2+I)));if(m.push(X.r,X.g,X.b),R<E&&C<M){const $=R*(M+1)+C,B=$+M+1;d.push($,B,$+1,$+1,B,B+1)}}}const v=new oe;v.setAttribute("position",new Wt(_,3)),v.setAttribute("color",new Wt(m,3)),v.setIndex(d),v.computeVertexNormals(),n.add(new Zt(v,new De({vertexColors:!0,side:pe,flatShading:!0})));function T(R,S,y,C,I){const O=new Zt(R,new De({color:S}));return O.position.set(y,C,I*s),n.add(O),O}if(u){T(new En(25,12,17),"#9b846d",-59,4,r-35),T(new nn(1.8,2.4,9,14),"#d4bca3",-54,14,r-34),T(new nn(2.3,2.3,2.4,14),"#b44838",-54,19,r-34),T(new nn(.15,2.6,1.6,14),"#8f3329",-54,21,r-34);for(const R of[.1,.42]){const S=t.wave.faceWidthM*R,y=t.wave.heightM*.14*(.5*R**1.4+.5*R**4.2);T(new rn(.95,12,9),"#ffce32",S,y+.25,r),T(new nn(.11,.11,3.2,8),"#ffce32",S,y+1.7,r)}}else if(h)for(let R=0;R<3;R++)T(new En(6-R,2.2,6-R),"#605c4a",-129,32+R*2.1,170),T(new nn(.7,5-R,2,4),"#494636",-129,33+R*2.1,170);else if(!c)for(let R=0;R<14;R++){const S=85+R*34;T(new En(6,3.8,5),R%2?"#e5d2ab":"#eee3c9",-110,3,S);const y=T(new nn(.3,4.9,2.3,4),"#9d6a52",-110,5.8,S);y.rotation.y=Math.PI/4}const w=new Zt(new rn(11,20,14),new Oi({color:u?"#fff5d9":"#ffe4a6",fog:!1}));w.position.set(-160,100,(r+300)*s),n.add(w),i.add(n);const P=R=>{i.fog=new Ui(t.visual.skyColor,180,R.quality==="low"?650:980)};return P(e),{update(R){o.offset.set(R*.002,-R*.0015)},setSettings:P,dispose(){n.removeFromParent(),i.fog=a,n.traverse(R=>{if(R instanceof Zt){R.geometry.dispose();const S=Array.isArray(R.material)?R.material:[R.material];for(const y of S)y.dispose()}}),o.dispose()}}},Qt=document.querySelector("#app");if(!Qt)throw new Error("BarrelRoll app mount is missing");const $e=Rh();let _e="title",Ee=Eh,ms="",bi=!1;const zi=new Ch;let Fn,Un="score-run",qi="",Yi=0,la="";const an=i=>document.getElementById(i),on=(i,t,e=!1)=>`<button type="button" class="${e?"primary-button":"surf-button"}" data-action="${t}">${i}</button>`,wi=i=>Math.round(i).toLocaleString(),_r=()=>$e.getSnapshot(),c_="A/D carve. Ride up a steep ramp to launch, or hold and release Space for a bigger air. In the air, A/D spin and W/S flip. Hold Space again to tuck. Shift + carve rides the barrel wall.",nh={mavericks:"Use A to climb toward the curl. Ease off to hold your line.",jbay:"Climb high and carve back down for a cutback. Link it into an air, then ride clear to bank.",pipeline:"Stay under the lip and follow the daylight through the opening.",teahupoo:"Carve toward the hollow and follow the opening before the lip closes.",nazare:"Start high. Carve down toward the yellow buoys and cross between them on your board.",uluwatu:"Alternate between the cliffside barrels and the open launch sections."};function ur(){zi.pause(),Fn?.dispose(),Fn=void 0}const ih=i=>String(ic.indexOf(i)+1).padStart(2,"0");function Po(){return`<span class="brand" aria-label="BarrelRoll">
    <span class="brand__symbol" aria-hidden="true"><svg viewBox="0 0 38 38" fill="none"><path d="M3 24c5-11 9-15 15-15 7 0 10 4 16 11-6-2-10-2-14 1-4 3-6 7-8 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M4 31c6-3 10-3 14 0m6-5c4-2 7-2 10 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
    <span class="brand__word">BARREL<span>ROLL</span></span>
  </span>`}function h_(i){const t=ec[i],e=Ee===i,n=!ro(i,$e.getSnapshot().levelsCleared);return`<li class="break-list__item">
    <button type="button" class="break-button${e?" is-active":""}${n?" is-locked":""}" data-map="${i}" aria-pressed="${e}">
      <span class="break-button__index">${ih(i)}</span>
      <span class="break-button__art" aria-hidden="true">${nc(i,"list")}</span>
      <span class="break-button__copy"><strong>${t.name}</strong><small>${t.region}</small></span>
      <span class="break-button__arrow" aria-hidden="true">↗</span>
    </button>
  </li>`}function u_(){const i=$e.getSnapshot().levelsCleared>0;Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="landing" id="main-content">
      <header class="landing__header shell">
        ${Po()}
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
          <img src="${Mh}" alt="A towering wave at Mavericks under a foggy California sky" />
          <div class="landing__visual-caption"><span>FIRST BREAK</span><strong>MAVERICKS</strong><span>HALF MOON BAY, CALIFORNIA</span></div>
          <span class="landing__visual-index" aria-hidden="true">01</span>
        </div>
      </div>
      <footer class="landing__footer shell">
        <span class="footer-label">BARRELROLL <span aria-hidden="true">/</span> SOLO SURF</span>
        <span class="footer-line" aria-hidden="true"></span>
        <span class="footer-location">THE OCEAN IS YOUR PLAYGROUND</span>
      </footer>
    </main>`,Qt.querySelector("#play-button")?.addEventListener("click",()=>io("maps")),Qt.querySelectorAll("[data-screen]").forEach(t=>{t.addEventListener("click",()=>io(t.dataset.screen))})}function d_(){const i=ec[Ee],t=$e.getSnapshot(),e=ro(Ee,t.levelsCleared),n=e?t.bestRuns[Ee]?.[e]?.score:void 0,s=$e.challenges.filter(a=>a.mapId===Ee),r=s.filter(a=>t.earnedMedalIds.includes(a.id)).length;Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="atlas atlas--${i.tone}" id="main-content">
      <header class="atlas__header shell">
        ${Po()}
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
            <div class="feature__art" aria-hidden="true">${nc(Ee,"feature")}<span class="feature__number">LOCATION ${ih(Ee)}</span></div>
            <div class="feature__info">
              <div class="feature__eyebrow"><span>${i.difficulty.toUpperCase()} BREAK</span><span>${e==="free-surf"?"FREEPLAY":e?"TUTORIAL":"LOCKED"}</span></div>
              <h2>${i.name}</h2>
              <p class="feature__region">${i.region}</p>
              <p class="feature__signature">${i.signature}</p>
              <div class="feature__metrics"><span><small>PERSONAL BEST</small><strong>${n?.toLocaleString()??"—"}</strong></span><span><small>MEDALS EARNED</small><strong>${r} <i>/ ${s.length}</i></strong></span></div>
              <button type="button" class="feature__play-link" data-action="ride-${Ee}" ${e?"":"disabled"}>${e==="free-surf"?"SURF THIS BREAK":e?"START TUTORIAL":"FINISH MAVERICKS TO UNLOCK"} <span aria-hidden="true">↗</span></button>
            </div>
          </section>
          <section class="breaks" aria-label="Surf locations">
            <div class="breaks__heading"><span>DESTINATIONS</span><span>SELECT TO PREVIEW</span></div>
            <ul class="break-list">${ic.map(h_).join("")}</ul>
            <p class="breaks__foot">MORE THAN A POSTCARD <span aria-hidden="true">↗</span><br><small>Each break has its own wave and riding style</small></p>
          </section>
        </div>
      </div>
    </main>`,Qt.querySelector("#back-button")?.addEventListener("click",()=>{_e="title",gs(),Qt.querySelector("#play-button")?.focus()}),Qt.querySelectorAll("[data-map]").forEach(a=>{a.addEventListener("click",()=>{Ee=a.dataset.map,gs(),Qt.querySelector(`[data-map="${Ee}"]`)?.focus()})})}function no(i,t,e){Qt.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>
    <main class="info-page" id="main-content">
      <header class="atlas__header shell">
        ${Po()}
        <span class="atlas__header-label">THE SURF ATLAS <span aria-hidden="true">/</span> FIELD NOTES</span>
        <button type="button" class="back-button" id="back-button"><span aria-hidden="true">←</span> BACK TO TITLE</button>
      </header>
      <div class="info-page__body shell">
        <div class="info-page__hero"><p class="kicker"><span class="kicker__line"></span> ${i}</p><h1>${t}</h1></div>
        ${e}
      </div>
    </main>`,Qt.querySelector("#back-button")?.addEventListener("click",f_)}function ss(){const i=$e.getSnapshot(),t=i.settings,n=["low","medium","high"].map(u=>`<button type="button" class="choice-button${t.quality===u?" is-selected":""}" data-quality="${u}" aria-pressed="${t.quality===u}">${u.toUpperCase()}</button>`).join(""),s=["Coral","Lagoon","Sun","Violet"],r=ao.map(({color:u},f)=>{const p=i.unlockedBoardColors.includes(u);return`<button type="button" class="color-choice${t.boardColor===u?" is-selected":""}" data-board="${u}" aria-pressed="${t.boardColor===u}" ${p?"":"disabled"} aria-label="${s[f]??"Board color"}${p?"":", locked"}"><span class="color-choice__swatch" style="--swatch:${u}"></span><span>${s[f]??"Color"}</span><small>${p?"UNLOCKED":"LOCKED"}</small></button>`}).join(""),a=Math.round(t.masterVolume*100),o=i.storageAvailable?"":'<p class="save-warning" role="status">Saving is unavailable in this browser — changes will last for this session</p>',l=bi?'<div class="reset-confirm" role="group" aria-label="Confirm reset progress"><p>Delete saved records, medals and settings?</p><div><button type="button" id="cancel-reset">KEEP PROGRESS</button><button type="button" id="confirm-reset">RESET EVERYTHING</button></div></div>':"",c=`<div class="settings-intro"><p>Make the ride feel right for you</p><span>CHANGES SAVE AUTOMATICALLY</span></div>
    ${o}<p class="settings-notice" role="status" aria-live="polite">${ms}</p>
    <div class="settings-grid">
      <fieldset class="setting-group"><legend>Picture</legend><p>Choose the level of detail that suits your device</p><div class="choice-row">${n}</div></fieldset>
      <fieldset class="setting-group"><legend>Motion</legend><p>Reduce decorative movement and camera effects</p><label class="toggle-row" for="reduced-motion"><span>REDUCED MOTION</span><input type="checkbox" id="reduced-motion" ${t.reducedMotion?"checked":""}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group"><legend>Sound</legend><p>Set the volume for ocean and game audio</p><label class="volume-row" for="volume"><span>MASTER VOLUME</span><output id="volume-value" for="volume">${a}%</output></label><input type="range" id="volume" min="0" max="100" step="1" value="${a}"><label class="toggle-row" for="muted"><span>MUTE AUDIO</span><input type="checkbox" id="muted" ${t.muted?"checked":""}><span class="toggle-row__track" aria-hidden="true"></span></label></fieldset>
      <fieldset class="setting-group setting-group--colors"><legend>Ice board tint</legend><p>Earn medals to unlock more colors — the board always stays ice</p><div class="color-choices">${r}</div></fieldset>
    </div>
    <div class="settings-danger"><div><strong>Start fresh</strong><p>Remove local records, medals, unlocks and settings</p></div><button type="button" id="reset-button">RESET PROGRESS</button></div>${l}`;no("MAKE IT YOURS","SETTINGS",c),Qt.querySelectorAll("[data-quality]").forEach(u=>{u.addEventListener("click",()=>$i({quality:u.dataset.quality},`[data-quality="${u.dataset.quality}"]`))}),Qt.querySelector("#reduced-motion")?.addEventListener("change",u=>{$i({reducedMotion:u.currentTarget.checked},"#reduced-motion")}),Qt.querySelector("#muted")?.addEventListener("change",u=>{$i({muted:u.currentTarget.checked},"#muted")});const h=Qt.querySelector("#volume");h?.addEventListener("input",()=>{const u=Qt.querySelector("#volume-value");u&&(u.value=`${h.value}%`)}),h?.addEventListener("change",()=>$i({masterVolume:Number(h.value)/100},"#volume")),Qt.querySelectorAll("[data-board]").forEach(u=>{u.addEventListener("click",()=>$i({boardColor:u.dataset.board},`[data-board="${u.dataset.board}"]`))}),Qt.querySelector("#reset-button")?.addEventListener("click",()=>{bi=!0,ss(),Qt.querySelector("#cancel-reset")?.focus()}),Qt.querySelector("#cancel-reset")?.addEventListener("click",()=>{bi=!1,ss(),Qt.querySelector("#reset-button")?.focus()}),Qt.querySelector("#confirm-reset")?.addEventListener("click",()=>{ms=$e.reset().storageAvailable?"Progress reset":"Progress reset for this session",bi=!1,ss(),Qt.querySelector("#reset-button")?.focus()})}function $i(i,t){try{ms=$e.updateSettings(i).storageAvailable?"Settings saved":"Settings active for this session"}catch{ms="That setting could not be saved"}ss(),Qt.querySelector(t)?.focus()}function f_(){const i=_e;_e="title",bi=!1,gs(),Qt.querySelector(i==="maps"?"#play-button":`[data-screen="${i}"]`)?.focus()}function io(i){_e=i,bi=!1,ms="",gs(),Qt.querySelector("#back-button")?.focus()}function gs(){document.documentElement.dataset.reducedMotion=String($e.getSnapshot().settings.reducedMotion),_e==="title"?u_():_e==="maps"?d_():_e==="how"?no("A QUICK FIELD GUIDE","HOW TO<br><span>PLAY</span>",uh()):_e==="credits"?no("THE PEOPLE BEHIND THE WAVE","CREDITS",dh()):_e==="settings"&&ss()}function p_(i){const t=rs.mavericks.wave.rideLengthM-i.distanceLeftM;return i.state==="barrel"?"Follow the opening":i.state==="airborne"?"Release the keys to line up your landing":t<64?"A climbs the face · D drops toward the flats":t<212?"Climb toward the curling lip · ease off to hold your line":t<330?"Hold Space and release to try a jump":"Ride to the end of the wave to unlock Freeplay"}function sr(i){const{levelsCleared:t,settings:e}=_r(),n=ro(i,t);if(!n)return;ur(),Ee=i,Un=n,_e="ride";const s=Un==="score-run";Qt.innerHTML=`<main class="ride"><div id="water"></div>
    <div class="run-head"><div class="readout"><small>${rs[i].name}</small><strong id="goal"></strong></div>
    <div class="actions"><span id="clock"></span>${on("Pause","pause")}</div></div>
    <div class="run-bottom"><span class="score"><small>${s?"Wave remaining":"Score"}</small><strong id="score">—</strong><span id="combo"></span></span>
    <span id="callout"></span></div><div id="overlay"></div></main>`;try{Fn=e_({mount:an("water"),map:rs[i],mode:Un,seed:8,settings:e,createEnvironment:l_,createTrickController:n_,onEvent:m_}),zi.start(e),Fn.start()}catch(r){_e="error",ur(),Qt.innerHTML=`<main class="interlude"><section><h1>Couldn’t start the wave</h1><p id="problem"></p>
    <div class="actions">${on("Try again","retry",!0)}${on("Back to levels","back")}</div></section></main>`,an("problem").textContent=String(r)}}function m_(i){if(i.type==="run-started")la="",qi=Un==="free-surf"?nh[Ee]:"",Yi=performance.now()+9500;else if(i.type==="hud"&&_e==="ride"){const t=i.data;zi.update(t);const e=Un==="score-run";an("goal").textContent=e?p_(t):"Freeplay",an("clock").textContent="",an("score").textContent=e?wi(t.distanceLeftM)+" m":wi(t.score),an("combo").textContent=!e&&t.pendingCombo?`+${wi(t.pendingCombo)}  ·  ${t.multiplier}×`:"",t.trickLabel!==la&&(t.trickLabel.includes("landing")||["Barrel exit","Driving bottom turn","Cutback"].includes(t.trickLabel))&&(qi=t.trickLabel,Yi=performance.now()+1650),la=t.trickLabel;const n=t.state==="airborne"?t.trickLabel:t.state==="barrel"?`In the barrel · ${t.barrelS.toFixed(1)} s`:"";an("callout").textContent=n||(performance.now()<Yi?qi:"")}else i.type==="score-banked"&&Un==="free-surf"?(qi="Banked +"+wi(i.points),Yi=performance.now()+1200):i.type==="wipeout"?(qi=i.reason,Yi=performance.now()+1350):i.type==="run-ended"&&g_(i.result)}function g_(i){const t=$e.recordResult(i);_e="results",ur();const e=so(i),n=e?"Freeplay unlocked":Un==="free-surf"?"Session complete":"Tutorial ended",s=e?"All six surf locations are open. Pick any break and ride as long as you like.":"";Qt.innerHTML=`<main class="interlude"><section><p class="eyebrow">${rs[Ee].name}</p><h1>${n}</h1>
    ${s?`<p>${s}</p>`:""}<dl class="run-stats"><div><dt>Score</dt><dd>${wi(i.score)}</dd></div>
    <div><dt>Best combo</dt><dd>${wi(i.bestCombo)}</dd></div><div><dt>Longest barrel</dt><dd>${i.longestBarrelS.toFixed(1)} s</dd></div>
    <div><dt>Clean landings</dt><dd>${i.cleanLandings}</dd></div></dl>
    ${t.newMedalIds.map(r=>`<p>Medal · ${$e.challenges.find(a=>a.id===r)?.label}</p>`).join("")}
    ${t.snapshot.storageAvailable?"":"<p>Progress is available for this session only.</p>"}
    <div class="actions">${on(e?"Choose a freeplay location":"Locations","atlas",!0)}
    ${on("Surf again","retry")}</div></section></main>`,Qt.querySelector("button")?.focus()}function vr(){_e!=="ride"||!Fn||(_e="paused",Fn.pause(),zi.pause(),an("overlay").innerHTML=`<section class="pause-card"><p class="eyebrow">${rs[Ee].name}</p><h2>Paused</h2><p>${nh[Ee]}</p><p>${c_}</p>
    <div class="actions">${on("Resume","resume",!0)}${on("Restart run","retry")}${on(_r().settings.muted?"Sound off":"Sound on","mute")}
    ${Un==="free-surf"?on("Finish session","finish"):""}${on("Discard run","back")}</div></section>`,an("overlay").querySelector("button")?.focus())}function sh(){_e==="paused"&&(_e="ride",an("overlay").replaceChildren(),zi.start(_r().settings),Fn?.resume())}Qt.addEventListener("click",i=>{const t=i.target.closest("button[data-action]");if(!t||t.disabled)return;const e=t.dataset.action;if(e.startsWith("ride-"))sr(e.slice(5));else switch(e){case"atlas":case"back":ur(),io("maps");break;case"continue":sr("mavericks");break;case"retry":sr(Ee);break;case"pause":vr();break;case"resume":sh();break;case"finish":Fn?.finish();break;case"mute":{const n=$e.updateSettings({muted:!_r().settings.muted}).settings;zi.settings(n),t.textContent=n.muted?"Sound off":"Sound on";break}}});window.addEventListener("keydown",i=>{i.key==="Escape"&&!i.repeat&&(_e==="ride"?vr():_e==="paused"&&sh()),_e==="results"&&i.key.toLowerCase()==="r"&&!i.repeat&&sr(Ee)});window.addEventListener("blur",vr);document.addEventListener("visibilitychange",()=>{document.hidden&&vr()});gs();
