// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star review, in the voice of a houseplant,
// to /output/entry.txt. Deterministic, no network, no input.
import { mkdir, writeFile } from "node:fs/promises";

// Draft v3 — COMPLETE REWRITE (field-collision kill, 25 Nov ~15:25 WIB):
// v1/v2 shared its opening clause and its "photosynthesizing spite"
// punchline with field entries already submitted (mrfriedo, hunteryyy),
// so both drafts were scrapped, not polished. New angle, verified absent
// from the field's long titles: the plant as a video-call background prop
// — hired for the camera, blamed for looking tired, watered never,
// only repositioned. Specific detail + twist in the second half.
const ENTRY =
  "One star. I was hired as the green background for his video calls, then blamed for 'looking tired' on camera — I haven't been watered since his promotion, only repositioned.";

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
