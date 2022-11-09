import { equal } from "node:assert/strict";
import { describe, it } from "node:test";

import { add } from "../src/add";

describe("add", () => {
	it("1 + 2 = 3", () => {
		equal(add(1, 2), 3);
	});
});
