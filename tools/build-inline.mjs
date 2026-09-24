// Build: inline public/ frontend files into _worker.js BUNDLED_PAGES.
// Usage: node tools/build-inline.mjs   (run from repo root after editing public/)
// Idempotent: replaces only the block between /*__BUNDLED_PAGES__*/ and /*__BUNDLED_END__*/.
import { readFileSync, writeFileSync } from 'node:fs';

const FILES = {
	'/login/': 'public/login/index.html',
	'/admin/': 'public/admin/index.html',
	'/noADMIN/': 'public/noADMIN/index.html',
	'/noKV/': 'public/noKV/index.html',
	'/edt-path-config.en.json': 'public/edt-path-config.en.json',
};

const TARGET = '_worker.js';
let src = readFileSync(TARGET, 'utf8');
const entries = Object.entries(FILES)
	.map(([route, file]) => '\t' + JSON.stringify(route) + ': ' + JSON.stringify(readFileSync(file, 'utf8')))
	.join(',\n');
const pattern = /\/\*__BUNDLED_PAGES__\*\/[\s\S]*?\/\*__BUNDLED_END__\*\//;
if (!pattern.test(src)) throw new Error('BUNDLED markers not found in ' + TARGET);
// NOTE: replacer must be a function — the inlined HTML contains $& / $' sequences
// (e.g. cssEscape polyfill) that String.replace would otherwise interpret.
const next = src.replace(pattern, () => '/*__BUNDLED_PAGES__*/\n' + entries + '\n\t/*__BUNDLED_END__*/');
writeFileSync(TARGET, next);
console.log('inlined ' + Object.keys(FILES).length + ' files into ' + TARGET);
