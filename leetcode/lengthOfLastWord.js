export const lengthOfLastWord = function (s) {
  // const arr = s.trim().split(' ');
  // return arr[arr.length - 1].length;

  // return s.trim().split(' ').pop().length;
  let i = s.length - 1;
  let length = 0;
  while (i >= 0) {
    if (s[i] !== ' ') {
      while (i >= 0 && s[i] !== ' ') {
        length += 1;
        i -= 1;
      }
      return length;
    }
    i -= 1;
  }
};
