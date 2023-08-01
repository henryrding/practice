export const mySqrt = function (x) {
  let n = 0;
  while (n * n < x) {
    n++;
  }
  return n * n > x ? n - 1 : n;
};
