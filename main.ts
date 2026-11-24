// make.fun entry: "How Many Tabs Do You Have Open?"
// Writes the entrant's honest count of open browser tabs — exactly `247` —
// to /output/entry.txt. Deterministic: no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "247";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly `247` — 3 bytes, digits only, no trailing newline.
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== "247" || written.length !== 3 || !/^[0-9]+$/.test(written)) {
  throw new Error(`verification failed: entry.txt is ${JSON.stringify(written)}`);
}
console.log("verified: entry.txt is exactly 247 (3 bytes, digits only)");
