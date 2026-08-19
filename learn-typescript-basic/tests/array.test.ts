import {describe, it} from "@jest/globals";

describe("array", () => {
    it('should same with javascript array', function () {
        const arrNumbers: number[] = [1, 2, 3, 4, 5];
        const arrStrings: string[] = ["1", "2", "3"];

        console.info(arrNumbers);
        console.info(arrStrings);

    });

    it('should read only', () => {
        const arrNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

        console.info(arrNumbers[0]);
        console.info(arrNumbers[3]);

        //arrNumbers[4] = 1; error readonly
    });

    it('should support tuple', () => {
        const arrTuple: readonly [string, number] = ["Hello", 1];
        console.info(arrTuple);
    });
});