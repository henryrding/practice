export const isIsomorphic = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      for (const value of map.values()) {
        if (value === t[i]) {
          return false;
        }
      }
      map.set(s[i], t[i]);
    }
  }

  return true;
};
