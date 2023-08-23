export const maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let left = 0;
  let count = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    if (vowels.includes(s[right])) {
      count++;
    }

    if (right - left + 1 > k) {
      if (vowels.includes(s[left])) {
        count--;
      }
      left++;
    }

    max = Math.max(max, count);
    if (max === k) {
      return max;
    }
  }

  return max;
};
