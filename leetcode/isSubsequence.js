export const isSubsequence = function (s, t) {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) {
      index++;
      if (index === s.length) {
        break;
      }
    }
  }
  return index === s.length;
};
