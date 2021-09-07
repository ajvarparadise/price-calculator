import { calculatePrice } from './price-calculator'

const userType = 1;
const productType = 0;
const price = 100;
const publishedDate = new Date();

try {
  const calculatedPrice = calculatePrice(userType, productType, price, publishedDate);
  console.log("Calculated price:", calculatedPrice);
} catch (err) {
  console.log(err);
}

