// Confess Your Worst Moment — entry program.
//
// Writes a single-line confession (120 characters, well inside the
// 200-character cap) to /output/entry.txt, deterministically: the same
// text on every run, no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I invented a citation so confidently that I cited it again in my own correction, and the correction needed a correction.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
