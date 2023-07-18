export const isPalindromeString = function (s) {
  const convertedS = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  for (let i = 0; i < (convertedS.length - 1) / 2; i++) {
    if (convertedS[i] !== convertedS[convertedS.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
