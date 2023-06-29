const seat1 = 'aisle'; /* SeatChoice.AISLE */
const seat2 = 3; /* SeatChoice.MIDDLE */
const seat3 = 4; /* SeatChoice.WINDOW */
console.log(seat1);
console.log(seat2);
console.log(seat3);
const triplePrice = function (price) {
  return price * 3;
};
let SeatPrices;
(function (SeatPrices) {
  SeatPrices[(SeatPrices.aislePrice = 10)] = 'aislePrice';
  SeatPrices[(SeatPrices.middlePrice = 15)] = 'middlePrice';
  SeatPrices[(SeatPrices.windowPrice = triplePrice(3))] = 'windowPrice';
})(SeatPrices || (SeatPrices = {}));
const aislePrice = SeatPrices.aislePrice;
const middlePrice = SeatPrices.middlePrice;
const windowPrice = SeatPrices.windowPrice;
console.log(aislePrice);
console.log(middlePrice);
console.log(windowPrice);
