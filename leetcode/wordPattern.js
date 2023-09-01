export const wordPattern = function (pattern, s) {
  const map = new Map();
  const strings = s.split(' ');
  if (
    strings.length !== pattern.length ||
    new Set(pattern).size !== new Set(strings).size
  ) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== strings[i]) {
      return false;
    }
    map.set(pattern[i], strings[i]);
  }
  return true;
};
