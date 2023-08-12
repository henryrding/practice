export const kidsWithCandies = function (candies, extraCandies) {
  // const max = Math.max(...candies);
  // const result = candies.map((candy) => candy + extraCandies >= max);
  // return result;
  return candies.map((candy) => candy + extraCandies >= Math.max(...candies));
};
