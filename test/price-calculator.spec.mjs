import { expect } from "chai";
import { calculatePrice } from "./../price-calculator.js";

describe("price calculator", () => {
  it("should calc price right", () => {
    const userType = 0;
    const productType = 0;
    const price = 1;
    const publishedDate = new Date();

    const expected = 16;
    const actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});
