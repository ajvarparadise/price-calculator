/** Product prices per type */
const PRODUCT_TYPE_PRICES = {
  NEW: 25,
  OLD: 35,
};

/** User Types */
const COMPANY_USER = 0;

/** Product Types */
const PRODUCT_TYPE = {
  0: "NEW",
  1: "OLD",
};

const PRODUCT_TYPE_NEW = 'NEW';

/** Rebates */
export const COMPANY_REBATE = 5;
export const NORMAL_REBATE = 10;
export const NO_REBATE = 0;

export function getRebate(userType, productType, isPublishedToday) {
  if (isPublishedToday && PRODUCT_TYPE[productType] === PRODUCT_TYPE_NEW) {
    return NORMAL_REBATE;
  } else if (userType === COMPANY_USER) {
    return COMPANY_REBATE;
  } else {
    return NO_REBATE
  }
}

const getIsPublishedToday = (publishedDate) =>
  publishedDate.toDateString() === new Date().toDateString();

const getCalculatedPrice = (productPrice, productTypePrice, rebate) =>
  productPrice + productTypePrice - rebate;

export function calculatePrice(userType, productType, price, publishedDate) {
  const isPublishedToday = getIsPublishedToday(publishedDate);
  const productTypePrice = PRODUCT_TYPE_PRICES[PRODUCT_TYPE[productType]];
  const rebate = getRebate(userType, productType, isPublishedToday);
  return getCalculatedPrice(price, productTypePrice, rebate);
}

