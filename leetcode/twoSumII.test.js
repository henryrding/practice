import { twoSum } from './twoSumII';

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

describe('twoSum(numbers, target)', () => {
  it('returns indices of the two numbers such that they add up to target', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(numbers, target);
    expect(result).toEqual([1, 2]);
  });

  it('returns indices correctly when there are negative nums', () => {
    const nums = [-11, -2, 7, 15];
    const target = 13;
    const result = twoSum(nums, target);
    expect(result).toEqual([2, 4]);
  });

  it('returns indices correctly when target is negative', () => {
    const nums = [-15, -7, 2, 11];
    const target = -5;
    const result = twoSum(nums, target);
    expect(result).toEqual([2, 3]);
  });
});
