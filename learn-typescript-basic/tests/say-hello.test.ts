import {describe, expect, it} from "@jest/globals";
import {sayHello} from "../src/say-hello";

describe('say-hello', () => {
    it(`should Hello World`, function () {
        expect(sayHello("World")).toBe("Hello World");
    })
})