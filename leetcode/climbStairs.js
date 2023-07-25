export const climbStairs = function (n) {
  // if (n < 4) {
  //   return n;
  // }
  // return climbStairs(n - 1) + climbStairs(n - 2);

  if (n < 4) {
    return n;
  }
  return 2 * climbStairs(n - 2) + climbStairs(n - 3);
};
