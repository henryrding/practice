import { searchInsert } from './searchInsert';

describe('searchInsert(nums, target)', () => {
  it('returns the index if the target is found', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const result = searchInsert(nums, target);
    expect(result).toEqual(2);
  });

  it('if not found, return the index where it would be if it were inserted in order', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const result = searchInsert(nums, target);
    expect(result).toEqual(1);
  });

  it('handles inserting at end', () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const result = searchInsert(nums, target);
    expect(result).toEqual(4);
  });
});
