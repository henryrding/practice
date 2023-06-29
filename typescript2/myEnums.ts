/* eslint-disable no-unused-vars */
const enum SeatChoice {
  AISLE = 'aisle',
  MIDDLE = 3,
  WINDOW,
}

const seat1 = SeatChoice.AISLE;
const seat2 = SeatChoice.MIDDLE;
const seat3 = SeatChoice.WINDOW;
console.log(seat1);
console.log(seat2);
console.log(seat3);

const triplePrice = (price: number) => price * 3;

enum SeatPrices {
  aislePrice = 10,
  middlePrice = aislePrice + 5,
  windowPrice = triplePrice(3),
}

const aisleP = SeatPrices.aislePrice;
const middleP = SeatPrices.middlePrice;
const windowP = SeatPrices.windowPrice;

console.log(aisleP);
console.log(middleP);
console.log(windowP);

const seatPrices = {
  aislePrice1: 10,
  middlePrice1: 15,
  windowPrice1: triplePrice(3),
} as const;

const aislePrice = seatPrices.aislePrice1;
const middlePrice = seatPrices.middlePrice1;
const windowPrice = seatPrices.windowPrice1;

console.log(aislePrice);
console.log(middlePrice);
console.log(windowPrice);
