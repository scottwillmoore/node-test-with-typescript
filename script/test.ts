import { execSync } from "node:child_process";

import { sync as globSync } from "glob";

const pattern = "test/**/*.test.ts";

const matches = globSync(pattern);

if (matches.length === 0) {
	throw new Error(`No tests match the pattern: ${pattern}`);
}

const spaceSeparatedMatches = matches.join(" ");

const runCommand = (command: string): void => {
	console.log(`RUN: ${command}`);
	execSync(command, { stdio: "inherit" });
	console.log();
};

runCommand(`tsc --noEmit`);
runCommand(`node --loader tsx --no-warnings --test ${spaceSeparatedMatches}`);
