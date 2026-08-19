import {describe, it} from "@jest/globals";

describe('Tipe Data', function () {
    it("should must declare", function () {
        const name: string = "Hello";
        const balance: number = 100;
        const isActive: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isActive);
    });
});