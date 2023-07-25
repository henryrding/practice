import { removeElement } from './removeElement';

const test = (nums, result, expectedNums) => {
  nums = nums.slice(0, result).sort();
  expectedNums = expectedNums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== expectedNums[i]) {
      return false;
    }
  }
  return true;
};

describe('removeElement(nums, val)', () => {
  it('returns the number of elements in nums which are not equal to val and removes all occurrences of val in nums in-place', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    expect(result).toEqual(2);
    expect(test(nums, result, [2, 2])).toEqual(true);
  });

  it('handles elements being in any order after removal of val', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const result = removeElement(nums, val);
    expect(result).toEqual(5);
    expect(test(nums, result, [0, 0, 1, 3, 4])).toEqual(true);
  });
});
