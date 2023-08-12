import { increasingTriplet } from './increasingTriplet';

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

describe('increasingTriplet(nums)', () => {
  it('returns true if an increasing triplet subsequence exists', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = increasingTriplet(nums);
    expect(result).toEqual(true);
  });

  it('returns false if an increasing triplet subsequence does not exist', () => {
    const nums = [5, 4, 3, 2, 1];
    const result = increasingTriplet(nums);
    expect(result).toEqual(false);
  });

  it('returns true for triplet index that are not together', () => {
    const nums = [2, 1, 5, 0, 4, 6];
    const result = increasingTriplet(nums);
    expect(result).toEqual(true);
  });
});
