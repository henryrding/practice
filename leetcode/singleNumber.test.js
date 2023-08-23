import { singleNumber } from './singleNumber';

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

describe('singleNumber(nums)', () => {
  it('returns the single number', () => {
    const nums = [1];
    const result = singleNumber(nums);
    expect(result).toEqual(1);
  });

  it('returns the single number in array with length > 1', () => {
    const nums = [2, 2, 1];
    const result = singleNumber(nums);
    expect(result).toEqual(1);
  });

  it('handles negative numbers', () => {
    const nums = [2, -2, 2];
    const result = singleNumber(nums);
    expect(result).toEqual(-2);
  });

  it('handles multiple elements appearing twice', () => {
    const nums = [2, -2, 2, 4, -2, 8, 1, 4, 1];
    const result = singleNumber(nums);
    expect(result).toEqual(8);
  });
});
