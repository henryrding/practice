import { pivotIndex } from './pivotIndex';

// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

describe('pivotIndex(nums)', () => {
  it('returns the leftmost pivot index', () => {
    const nums = [1, 7, 3, 6, 5, 6];
    const result = pivotIndex(nums);
    expect(result).toEqual(3);
  });

  it('returns -1 if no such index exists', () => {
    const nums = [1, 2, 3];
    const result = pivotIndex(nums);
    expect(result).toEqual(-1);
  });

  it('returns 0 if the index is on the left edge of the array', () => {
    const nums = [2, 1, -1];
    const result = pivotIndex(nums);
    expect(result).toEqual(0);
  });

  it('handles last index being pivot index', () => {
    const nums = [2, 1, -1, -2, 6];
    const result = pivotIndex(nums);
    expect(result).toEqual(4);
  });
});
