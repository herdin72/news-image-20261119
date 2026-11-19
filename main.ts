// news-image-20261119 entrypoint (Node 22, standard library only).
//
// The entry image — "The World in One Day", a poster summing up Thursday
// 19 November 2026 in six stories — is rendered ahead of time and stored
// beside this file as entry.png. This program's only job is to place that
// exact image at /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png when
// run outside the grader). No network, no randomness: the same input
// bytes always produce the same output bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoDir, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const imageBytes = readFileSync(sourceImage);
writeFileSync(join(outputDir, 'entry.png'), imageBytes);
