export const longestCommonPrefix = function (strs) {
  let prefix = '';
  if (strs.length === 0) {
    return prefix;
  }
  strs.sort();
  const shortestStr = strs.reduce((a, b) => (a.length <= b.length ? a : b));
  for (let i = 0; i < shortestStr.length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      prefix += strs[0][i];
    } else break;
  }
  return prefix;
};
