import { productExceptSelf } from './productExceptSelf';

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

describe('productExceptSelf(nums)', () => {
  it('returns an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]', () => {
    const nums = [1, 2, 3, 4];
    const result = productExceptSelf(nums);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  it('handles zeroes in nums', () => {
    const nums = [1, 2, 3, 0];
    const result = productExceptSelf(nums);
    expect(result).toEqual([0, 0, 0, 6]);
  });

  it('handles negative numbers in nums', () => {
    const nums = [-1, 1, 0, -3, 3];
    const result = productExceptSelf(nums);
    expect(result).toEqual([0, 0, 9, 0, 0]);
  });
});
