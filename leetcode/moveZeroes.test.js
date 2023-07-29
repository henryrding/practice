import { moveZeroes } from './moveZeroes';

describe('moveZeroes(nums)', () => {
  it("moves all 0's to the end of the array while maintaining the relative order of the non-zero elements", () => {
    const nums = [0, 1, 0, 3, 12];
    const result = moveZeroes(nums);
    expect(result).toEqual([1, 3, 12, 0, 0]);
  });

  it("handles an array with only 0's", () => {
    const nums = [0];
    const result = moveZeroes(nums);
    expect(result).toEqual([0]);
  });

  it('handles an array with only non-zero elements', () => {
    const nums = [1, 2, 3, 4];
    const result = moveZeroes(nums);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
