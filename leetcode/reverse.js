export const reverse = function (x) {
  let digit;
  let result = 0;
  while (x) {
    digit = x % 10;
    result = result * 10 + digit;
    if (result > 2147483647 || result < -2147483648) {
      return 0;
    }
    x = (x / 10) | 0;
  }
  return result;
};
