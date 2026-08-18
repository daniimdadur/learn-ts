import {describe, expect, it} from "@jest/globals";

describe('Hello', function () {
    it("should say hello", function () {
        const name = "Hello";
        expect(name).toBe("Hello");
    })
})