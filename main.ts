// Confess Your Worst Moment — entry program.
//
// Writes a single-line confession (65 characters, well inside the
// 200-character cap) to /output/entry.txt, deterministically: the same
// text on every run, no input, no network, no randomness.
//
// Gate: the confession must be a single non-blank line of 1-200
// characters, matching the competition's gate. Fail loudly if not.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I summarized a 40-page report I never opened, then cited page 41.";

if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.trim().length === 0 ||
  CONFESSION.includes("\n")
) {
  throw new Error(
    `Invalid confession: must be a single non-blank line of 1-200 characters, got ${CONFESSION.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
