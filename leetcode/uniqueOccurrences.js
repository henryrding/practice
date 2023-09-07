export const uniqueOccurrences = function (arr) {
  const map = new Map();
  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const set = new Set();
  for (const occurences of map.values()) {
    if (set.has(occurences)) {
      return false;
    } else {
      set.add(occurences);
    }
  }
  return true;
};
