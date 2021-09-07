import { expect } from "chai";
import { calculatePrice, getRebate, COMPANY_REBATE, NORMAL_REBATE, NO_REBATE } from "./../price-calculator.js";

describe("calculatePrice", () => {
  it("should give normal rebate", () => {
    const userType = 0;
    const productType = 0;
    const price = 1;
    const publishedDate = new Date();

    const expected = 16;
    const calculatedPrice = calculatePrice(
      userType,
      productType,
      price,
      publishedDate
    );

    expect(calculatedPrice).to.equal(expected);
  });
});

describe("getRebate", () => {
  it("should give company rebate", () => {
    expect(getRebate(0, 0, false)).to.equal(COMPANY_REBATE);
  });
  it("should give normal rebate", () => {
    expect(getRebate(0, 0, true)).to.equal(NORMAL_REBATE);
  });
  it("should give no rebate", () => {});
  expect(getRebate(1, 0, false)).to.equal(NO_REBATE);
});
