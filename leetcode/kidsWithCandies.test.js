import { kidsWithCandies } from './kidsWithCandies';

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

describe('kidsWithCandies(candies, extraCandies)', () => {
  it('returns a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids', () => {
    const candies = [1, 2, 3, 4, 5];
    const extraCandies = 5;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true, true, true, true]);
  });

  it('returns false if, after giving the ith kid all the extraCandies, they will not have the greatest number of candies among all the kids', () => {
    const candies = [2, 3, 5, 1, 3];
    const extraCandies = 3;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true, true, false, true]);
  });
});
