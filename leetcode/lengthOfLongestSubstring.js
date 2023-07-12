export const lengthOfLongestSubstring = function (s) {
  function hasRepeats(substring) {
    return /(.).*\1/.test(substring);
  }
  let longestLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = longestLength + 1; j <= s.length - i; j++) {
      if (hasRepeats(s.slice(i, i + j)) === false) {
        longestLength = j;
      }
    }
  }
  return longestLength;
};
