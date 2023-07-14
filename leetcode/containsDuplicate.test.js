import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate(nums, target)', () => {
  it('returns true if any value appears at least twice in the array', () => {
    const nums = [1, 2, 3, 1];
    const result = containsDuplicate(nums);
    expect(result).toEqual(true);
  });

  it('returns false if every element is distinct', () => {
    const nums = [1, 2, 3, 4];
    const result = containsDuplicate(nums);
    expect(result).toEqual(false);
  });

  it('handles more than two duplicates', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const result = containsDuplicate(nums);
    expect(result).toEqual(true);
  });

  it('handles array of length 1', () => {
    const nums = [0];
    const result = containsDuplicate(nums);
    expect(result).toEqual(false);
  });

  it('handles array of length 0', () => {
    const nums = [];
    const result = containsDuplicate(nums);
    expect(result).toEqual(false);
  });

  it('handles negative numbers', () => {
    const nums = [-1, -2, -3, -4];
    const result = containsDuplicate(nums);
    expect(result).toEqual(false);
  });
});
