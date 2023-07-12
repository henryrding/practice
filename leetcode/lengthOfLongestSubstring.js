export const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  // let longestLength = 0;
  // function hasRepeats(substring) {
  //   return /(.).*\1/.test(substring);
  // }
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = longestLength + 1; j <= s.length - i; j++) {
  //     if (hasRepeats(s.slice(i, i + j)) === false) {
  //       longestLength = j;
  //     }
  //   }
  // }
  // return longestLength;

  // const window = [];
  // let longestLength = 0;

  // for (let i = 0; i < s.length; i++) {
  //   const currentCharacterIndexInWindow = window.indexOf(s[i]);
  //   if (currentCharacterIndexInWindow >= 0) {
  //     window.splice(0, currentCharacterIndexInWindow + 1);
  //   }
  //   window.push(s[i]);
  //   if (window.length > longestLength) {
  //     longestLength = window.length;
  //   }
  // }

  let longestLength = 0;
  let left = 0;
  let right = 0;
  const map = {};

  while (right < s.length) {
    const rChar = s[right];
    const seenCharIndex = map[rChar];
    if (seenCharIndex >= left) {
      left = seenCharIndex + 1;
    }
    map[rChar] = right;
    right += 1;
    longestLength = Math.max(longestLength, right - left);
  }

  return longestLength;
};
