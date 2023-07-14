export const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  // const number = x.toString();
  // for (let i = 0; i < ((number.length-1)/2); i++) {
  //     if (number[i] !== number[number.length - 1 - i]) {
  //         return false;
  //     }
  // }
  // return true;
  let number = x;
  let digit;
  let result = 0;
  while (number) {
    digit = number % 10;
    result = result * 10 + digit;
    number = (number / 10) | 0;
  }
  return result === x;
};
