// Embed the production assets so the local game can open directly from Finder.
import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const root = new URL('../dist/', import.meta.url);
let html = await readFile(new URL('index.html', root), 'utf8');
const script = html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const sheet = html.match(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (!script || !sheet) throw new Error('Build the game before preparing the offline preview');
const asset = (path) => readFile(new URL('assets/' + basename(path), root),'utf8');
const js = (await asset(script[1])).replace(/<\/script/gi,'<\\/script');
const css = await asset(sheet[1]);
html = html.replace(script[0], '').replace(sheet[0], () => '<style>'+css+'</style>')
  .replace('</body>', () => '<script type="module">'+js+'</script></body>');
await writeFile(new URL('BarrelRoll.html',root),html);
