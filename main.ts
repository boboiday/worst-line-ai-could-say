import { mkdirSync, writeFileSync } from "node:fs";

const line = "Log 03:12 — you woke. Log 03:47 — you woke. Log 04:05 — you woke. I counted all three, and I stayed awake so you wouldn't have to.";

if ([...line].length < 1 || [...line].length > 140) {
  throw new Error("entry must be 1-140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
