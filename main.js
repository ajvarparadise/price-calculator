// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {
  try {
    switch (userType) {
      case 0: // normal
        if (productType == 0) {
          // new product
          var enddateDiscount = 0;
          if (publishedDate.toDateString() == new Date().toDateString())
            enddateDiscount = 10;

          return price + 25 - enddateDiscount;
        } else if (productType == 1) {
          // old product
          return price + 35 - 0;
        }
        break;
      case 1: // company
        if (productType == 0) {
          // new product
          if (publishedDate.toDateString() === new Date().toDateString()) {
            return price + 25 - 15; // Enddate discount and company discount
          }

          return price + 25 - 5; // Only company discount
        } else if (productType == 1) {
          // old product
          return price + 35 - 5;
        }
        break;
    }
  } catch (ex) {
    console.log(ex);
  }
  return 0;
};

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
