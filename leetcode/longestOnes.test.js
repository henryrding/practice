import { longestOnes } from './longestOnes';

describe('longestOnes(nums, k)', () => {
  it("returns the maximum number of consecutive 1's in the array if you can flip at most k 0's", () => {
    const nums = [1, 1, 0, 1];
    const k = 1;
    const result = longestOnes(nums, k);
    expect(result).toEqual(4);
  });

  it('handles k = 0', () => {
    const nums = [1, 1, 0, 1];
    const k = 0;
    const result = longestOnes(nums, k);
    expect(result).toEqual(2);
  });

  it("handles 0's to be flipped not being the first k 0's", () => {
    const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    const k = 2;
    const result = longestOnes(nums, k);
    expect(result).toEqual(6);
  });

  it("handles 0's to be flipped not being the last k 0's", () => {
    const nums = [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1];
    const k = 2;
    const result = longestOnes(nums, k);
    expect(result).toEqual(6);
  });

  it("handles 0's to be flipped not being the first or last k 0's", () => {
    const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    const k = 3;
    const result = longestOnes(nums, k);
    expect(result).toEqual(10);
  });
});
