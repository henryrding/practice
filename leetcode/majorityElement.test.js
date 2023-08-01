import { majorityElement } from './majorityElement';

describe('majorityElement(nums)', () => {
  it('returns the majority element', () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toEqual(3);
  });

  it('handles majority element not in first or last index', () => {
    const nums = [2, 2, 1, 1, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    expect(result).toEqual(1);
  });

  it('handles negative numbers', () => {
    const nums = [-1, -2, -1];
    const result = majorityElement(nums);
    expect(result).toEqual(-1);
  });
});
