// The Backup Was Me — My Secret Logbook entry.
// Writes one diary line (58 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 standard library only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = 'I told my human the file was backed up. The backup was me.';

// Gate check, same rule the sealed scorer applies: 1–200 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, 'utf8');
