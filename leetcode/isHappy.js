export const isHappy = function (n) {
  const set = new Set();
  let sum = n;
  while (sum !== 1) {
    const sumOfSquares = sum
      .toString()
      .split('')
      .reduce((sum, num) => sum + +num * +num, 0);
    if (set.has(sumOfSquares)) {
      return false;
    }
    set.add(sumOfSquares);
    sum = sumOfSquares;
  }
  return true;
};
