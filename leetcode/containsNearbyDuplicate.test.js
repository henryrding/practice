import { containsNearbyDuplicate } from './containsNearbyDuplicate';

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

describe('containsNearbyDuplicate(nums, k)', () => {
  it('returns true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k', () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toEqual(true);
  });

  it('returns false if there are no two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k', () => {
    const nums = [1, 2, 3, 1];
    const k = 2;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toEqual(false);
  });

  it('handles more than two duplicate numbers', () => {
    const nums = [1, 2, 1, 1];
    const k = 1;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toEqual(true);
  });
});
