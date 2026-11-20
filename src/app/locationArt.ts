import type { MapId } from '../shared/contracts';
import jbayUrl from '../assets/previews/jbay.webp?url';
import mavericksUrl from '../assets/previews/mavericks.webp?url';
import nazareUrl from '../assets/previews/nazare.webp?url';
import pipelineUrl from '../assets/previews/pipeline.webp?url';
import teahupooUrl from '../assets/previews/teahupoo.webp?url';
import uluwatuUrl from '../assets/previews/uluwatu.webp?url';

// Images only preview each destination; map physics and scenery use their own modules.
const previews: Readonly<Record<string, string>> = {
  mavericks: mavericksUrl,
  pipeline: pipelineUrl,
  jbay: jbayUrl,
  uluwatu: uluwatuUrl,
  teahupoo: teahupooUrl,
  nazare: nazareUrl,
};

export function locationArt(id: MapId, instance = 'card'): string {
  const url = previews[id];
  if (!url) throw new Error(`Missing preview image for ${id}`);
  const loading = instance === 'feature' ? 'eager' : 'lazy';
  return `<img src="${url}" alt="" aria-hidden="true" width="1536" height="1024" decoding="async" loading="${loading}">`;
}
