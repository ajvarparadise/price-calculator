import { calculatePrice } from './price-calculator'

var calculatedPrice = 0;
var userType = 1;
var productType = 0;
var price = 100;
var publishedDate = new Date();

try {
  calculatedPrice = calculatePrice(userType, productType, price, publishedDate);
} catch (ex) {
  console.log(ex);
}

console.log("Calculated price:", calculatedPrice);
