export const reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const reversed = s.split('');
  let left = 0;
  let right = reversed.length - 1;
  while (right > left) {
    if (!vowels.includes(reversed[left])) {
      left++;
    }
    if (!vowels.includes(reversed[right])) {
      right--;
    }
    if (vowels.includes(reversed[left]) && vowels.includes(reversed[right])) {
      [reversed[left], reversed[right]] = [reversed[right], reversed[left]];
      left++;
      right--;
    }
  }
  return reversed.join('');
};
