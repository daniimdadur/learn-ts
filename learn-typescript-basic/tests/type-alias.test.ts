import {describe, it} from "@jest/globals";
import type {Category, Product} from "../src/type-alias";

describe('type alias', () => {
    it('should support in typescript', () => {

        const category: Category = {
            id: "1",
            name: "handphone"
        };

        const product: Product = {
            id: "2",
            name: "Samsung Galaxy S21",
            price: 10000000,
            category: category
        };

        console.info(category);
        console.info(product);
    });
});