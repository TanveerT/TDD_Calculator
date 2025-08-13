import { it, describe, expect } from "vitest";

import { add } from "../src/utils/add";

describe("calculator", () => {
	it("Check for all the positive", () => {
		expect(add(["1", "2", "3"])).toBe(6);
	});
	it("Check for negative values", () => {
		expect(() => add(["1", "-12"])).toThrowError();
	});
	it("check for special characters", () => {
		expect(() => add(["a", "1"])).toThrowError();
	});
	it("check for empty input", () => {
		expect(add([])).toBe(0);
	});
});
