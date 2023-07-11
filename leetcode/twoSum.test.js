import { twoSum } from './twoSum';

describe('twoSum(nums, target)', () => {
  it('returns indices of the two numbers such that they add up to target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('returns indices from non-ascending nums', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 2]);
  });

  it('returns indices correctly when there are duplicate nums', () => {
    const nums = [3, 2, 3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 2]);
  });

  it('returns indices correctly when there are negative nums', () => {
    const nums = [-2, 7, -11, 15];
    const target = 13;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 3]);
  });

  it('returns indices correctly when target is negative', () => {
    const nums = [2, -7, 11, -15];
    const target = -5;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });
});
