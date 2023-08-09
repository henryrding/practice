export const mergeAlternately = function (word1, word2) {
  const length = Math.max(word1.length, word2.length);
  let s = '';
  for (let i = 0; i < length; i++) {
    word1[i] && (s += word1[i]);
    word2[i] && (s += word2[i]);
  }
  return s;
};
