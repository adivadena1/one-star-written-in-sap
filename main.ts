// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star review, in the voice of a houseplant,
// to /output/entry.txt. Deterministic, no network, no input.
import { mkdir, writeFile } from "node:fs/promises";

// Draft v2 (self-revision): tighter verb (hauls), punchline now plant-voiced
// ("photosynthesizing pure spite") instead of the double punch
// "grudge and a sunburn" — one image, one landing.
const ENTRY =
  "One star. He waters me like he's apologising to a plant he already killed, then hauls me into full sun to 'cheer me up' — I am now a raisin, photosynthesizing pure spite.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// Gate (sealed scorer): UTF-8 text of 1 to 279 characters, not only
// whitespace, single line.
if (ENTRY.length < 1 || ENTRY.length > 279) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-279`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

await mkdir(outDir, { recursive: true });
await writeFile(outFile, new TextEncoder().encode(ENTRY));
