import { longestSubarray } from './longestSubarray';

describe('longestSubarray(nums)', () => {
  it("returns the size of the longest non-empty subarray containing only 1's after deleting one element from it", () => {
    const nums = [1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(3);
  });

  it("handles multiple 0's that can create a longer subarray after deletion", () => {
    const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(5);
  });

  it("handles no 0's that can create a longer subarray after deletion", () => {
    const nums = [1, 1, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(2);
  });
});
