import { maxOperations } from './maxOperations';

// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

describe('maxOperations(nums, k)', () => {
  it('returns the maximum number of operations you can perfrom on the array', () => {
    const nums = [1, 4];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toEqual(1);
  });

  it('handles more than one operation', () => {
    const nums = [1, 2, 3, 4];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toEqual(2);
  });

  it('handles leftover nums when no more operations can be performed', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toEqual(2);
  });

  it('handles one number in nums', () => {
    const nums = [5];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toEqual(0);
  });

  it('handles odd number of numbers in nums', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toEqual(2);
  });

  it('handles duplicate numbers in nums', () => {
    const nums = [3, 3, 2, 4, 6];
    const k = 6;
    const result = maxOperations(nums, k);
    expect(result).toEqual(2);
  });
});
