import type { MapId } from '../shared/contracts';

export interface MapCard {
  name: string;
  region: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  signature: string;
  preview: string;
  tone: string;
}

// Presentation copy only. Wave physics and challenge goals live in their own modules.
export const MAP_CARDS: Readonly<Record<MapId, MapCard>> = {
  mavericks: {
    name: 'Mavericks',
    region: 'Half Moon Bay, California',
    difficulty: 'easy',
    signature: 'Broad Pacific face · generous first barrel',
    preview: 'Carve the face, loop the hollow, launch from the lip',
    tone: 'pacific',
  },
  pipeline: {
    name: 'Pipeline',
    region: 'Oʻahu, Hawaiʻi',
    difficulty: 'hard',
    signature: 'Fast hollow tube · clear exit',
    preview: 'Hold your line deep in the barrel',
    tone: 'tropical',
  },
  jbay: {
    name: 'J-Bay',
    region: 'Jeffreys Bay, South Africa',
    difficulty: 'medium',
    signature: 'Long clean right-hand wave · open sections',
    preview: 'Build a chain of tricks along the open face',
    tone: 'golden',
  },
  uluwatu: {
    name: 'Uluwatu',
    region: 'Bali, Indonesia',
    difficulty: 'hard',
    signature: 'Open faces · curling tubes · steep cliffs',
    preview: 'Switch between aerial lines and barrel rides',
    tone: 'limestone',
  },
  teahupoo: {
    name: 'Teahupoo',
    region: 'Tahiti, French Polynesia',
    difficulty: 'expert',
    signature: 'Steep face · narrow tube · quick closeout',
    preview: 'Find the opening, then make your exit count',
    tone: 'deep',
  },
  nazare: {
    name: 'Nazaré',
    region: 'Portugal',
    difficulty: 'expert',
    signature: 'Towering Atlantic faces · huge launch zones',
    preview: 'Take impossible combinations into the air',
    tone: 'storm',
  },
};
