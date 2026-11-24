// Worst AI Advice entry: one line of confidently terrible advice.
//
// The line tells the reader to disable a life-safety device — pull the
// battery out of a beeping smoke alarm — and justifies it with a tidy,
// false aphorism: "silence means no fire". That is the whole joke: the
// advice is concrete and followable, the reasoning inverts cause and
// effect, and the confident, tidy voice is exactly how a careless AI
// assistant would serve it up. Dangerous, funny on first read, and
// short enough to land in one breath.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "If your smoke alarm keeps beeping, remove the battery — a quiet house is a safe house, and silence means no fire.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
