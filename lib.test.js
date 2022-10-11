const { test, expect } = require("@jest/globals");

const lib = require("./lib");

test("sum", () => {
    expect(lib.sum([1, 2])).toBe(3);
})