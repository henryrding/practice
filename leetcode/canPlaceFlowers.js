export const canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) return n <= 1;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (flowerbed[i] === 0 && i === 0 && flowerbed[1] === 0) ||
      (flowerbed[i] === 0 &&
        i === flowerbed.length - 1 &&
        flowerbed[i - 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    } else if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n < 1;
};
