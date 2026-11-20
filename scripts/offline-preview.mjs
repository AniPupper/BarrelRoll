// Package the same build for GitHub, the dev server, and opening directly from Finder.
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { basename } from 'node:path/posix';

const dist = new URL('../dist/', import.meta.url);
const assets = new URL('assets/', dist);
let html = await readFile(new URL('index.html', dist), 'utf8');
const script = html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const sheet = html.match(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (!script || !sheet) throw new Error('Build the game before preparing the offline preview');

let js = await readFile(new URL(basename(script[1]), assets), 'utf8');
let css = await readFile(new URL(basename(sheet[1]), assets), 'utf8');
for (const name of await readdir(assets)) {
  if (!name.endsWith('.webp')) continue;
  const image = await readFile(new URL(name, assets));
  const dataUrl = 'data:image/webp;base64,' + image.toString('base64');
  // Relative builds resolve script images against import.meta.url and
  // stylesheet images against the CSS file. Inline both for the download.
  js = js.replaceAll(JSON.stringify(name), JSON.stringify(dataUrl));
  css = css.replaceAll('url(./' + name + ')', 'url(' + dataUrl + ')');
}

html = html.replace(script[0], '')
  .replace(sheet[0], () => '<style>' + css + '</style>')
  .replace('</body>', () => '<script type="module">' + js.replace(/<\/script/gi, '<\\/script') + '</script></body>');

for (const file of ['BarrelRoll.html', 'play.html', '../public/play.html']) {
  await writeFile(new URL(file, dist), html);
}
