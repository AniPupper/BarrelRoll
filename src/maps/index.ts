import type { MapDefinition, MapId } from '../shared/contracts';
import { mavericks } from './mavericks';
import { pipeline } from './pipeline';
import { campaign } from './campaign';

export const STARTING_MAP_ID: MapId = 'mavericks';
export const STARTING_MAP = mavericks;
export const MAP_ORDER: readonly MapId[] = [...campaign, 'uluwatu'];
export { mavericks };

const tube = (start01: number, end01: number, radiusM: number, closeAfterEntryS: number | null) =>
  ({ start01, end01, radiusM, closeAfterEntryS });
const lip = (start01: number, end01: number, liftMultiplier: number) => ({ start01, end01, liftMultiplier });

export const maps: Record<MapId, MapDefinition> = {
  mavericks, pipeline,
  jbay: {
    id: 'jbay', name: 'Supertubes', region: 'Jeffreys Bay, South Africa', difficulty: 'medium',
    wave: { breakDirection: 'right', heightM: 4, faceWidthM: 12, rideLengthM: 700, peelSpeedMps: 11,
      barrelSections: [tube(.45,.58,1.2,null)], launchSections: [lip(.15,.25,1.3),lip(.60,.70,1.3),lip(.85,.95,1.3)] },
    spawn: {along01:.05, face01:.35}, visual: {waterColor:'#367c82',foamColor:'#fff0d4',skyColor:'#eec8a6'},
  },
  teahupoo: {
    id: 'teahupoo', name: 'Teahupoʻo', region: 'Tahiti, French Polynesia', difficulty: 'expert',
    wave: { breakDirection:'left', heightM:6, faceWidthM:8, rideLengthM:300, peelSpeedMps:13,
      barrelSections:[tube(.20,.65,1.35,11)], launchSections:[lip(.75,.90,1.3)] },
    spawn:{along01:.05,face01:.35}, visual:{waterColor:'#165568',foamColor:'#ddf6ec',skyColor:'#9bc6ce'},
  },
  nazare: {
    id:'nazare', name:'Praia do Norte', region:'Nazaré, Portugal', difficulty:'expert',
    wave:{breakDirection:'right',heightM:25,faceWidthM:45,rideLengthM:650,peelSpeedMps:19,
      barrelSections:[],launchSections:[lip(.35,.68,2)]},
    spawn:{along01:.05,face01:.80}, visual:{waterColor:'#25485e',foamColor:'#e4f0ed',skyColor:'#adbfc8'},
  },
  uluwatu: {
    id:'uluwatu',name:'Uluwatu',region:'Bali, Indonesia',difficulty:'hard',
    wave:{breakDirection:'left',heightM:5,faceWidthM:10,rideLengthM:480,peelSpeedMps:12,
      barrelSections:[tube(.25,.42,1.4,7),tube(.65,.80,1.4,7)],launchSections:[lip(.45,.60,1.4),lip(.84,.94,1.4)]},
    spawn:{along01:.05,face01:.35},visual:{waterColor:'#228b8a',foamColor:'#e8f8e8',skyColor:'#c5dbcc'},
  },
};
import type { MapId } from '../shared/contracts';
import { mavericks } from './mavericks';

export const STARTING_MAP_ID: MapId = 'mavericks';
export const STARTING_MAP = mavericks;
export const MAP_ORDER: readonly MapId[] = [
  'mavericks', 'pipeline', 'jbay', 'uluwatu', 'teahupoo', 'nazare',
];

export { mavericks };
