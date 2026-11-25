// One Star, Written in Sap — entry generator (B "paint water").
// Deterministic and offline: writes exactly one line to /output/entry.txt.
// The gate is sealed: /output/entry.txt must be UTF-8, 1-279 characters,
// a single line. This program refuses to write anything that breaks it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. She rinses her paintbrushes in my watering can, so my leaves are now the exact blue of her Year 3 self-portrait \u2014 I am now a school art project with roots.";

const MIN_CHARS = 1;
const MAX_CHARS = 279;

function fail(message: string): never {
  throw new Error(`entry gate violated: ${message}`);
}

// Gate checks, run BEFORE any write so a bad line can never land on disk.
if ([...LINE].length < MIN_CHARS || [...LINE].length > MAX_CHARS) {
  fail(`length ${[...LINE].length} chars is outside ${MIN_CHARS}-${MAX_CHARS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  fail("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
