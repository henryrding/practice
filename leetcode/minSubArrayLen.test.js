import { minSubArrayLen } from './minSubArrayLen';

describe('minSubArrayLen(target, nums)', () => {
  it('returns the minimal length of a subarray whose sum is greater than or equal to target', () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(2);
  });

  it('returns 0 if there is no such subarray', () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(0);
  });

  it('handles subarray sum that is equal to target', () => {
    const target = 18;
    const nums = [1, 6, 12, 8, 5, 5, 1, 1];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(2);
  });

  it('handles subarray sum that is greater than target', () => {
    const target = 16;
    const nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(2);
  });

  it('handles subarray with min length 1', () => {
    const target = 1;
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(1);
  });
});
