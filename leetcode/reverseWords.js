export const reverseWords = function (s) {
  return s.split(' ').filter(Boolean).reverse().join(' ');
};
