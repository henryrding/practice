import { summaryRanges } from './summaryRanges';

// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
//    "a->b" if a != b
//    "a" if a == b

describe('summaryRanges(nums)', () => {
  it('returns the smallest sorted list of ranges that cover all the numbers in the array exactly', () => {
    const nums = [1];
    const result = summaryRanges(nums);
    expect(result).toEqual(['1']);
  });

  it('returns an empty array if nums is empty', () => {
    const nums = [];
    const result = summaryRanges(nums);
    expect(result).toEqual([]);
  });

  it('returns ranges', () => {
    const nums = [1, 2, 3, 4];
    const result = summaryRanges(nums);
    expect(result).toEqual(['1->4']);
  });

  it('returns more than one range', () => {
    const nums = [1, 2, 3, 4, 7, 8, 9];
    const result = summaryRanges(nums);
    expect(result).toEqual(['1->4', '7->9']);
  });

  it('handles last range being a single integer', () => {
    const nums = [1, 2, 3, 4, 6, 7, 9];
    const result = summaryRanges(nums);
    expect(result).toEqual(['1->4', '6->7', '9']);
  });

  it('handles handles multi-digit numbers', () => {
    const nums = [1, 2, 3, 4, 12, 13, 14, 5555, 5556, 5557, 5558, 999999];
    const result = summaryRanges(nums);
    expect(result).toEqual(['1->4', '12->14', '5555->5558', '999999']);
  });

  it('handles negative numbers', () => {
    const nums = [-2, -1, 0, 1, 3, 4, 6, 7, 9];
    const result = summaryRanges(nums);
    expect(result).toEqual(['-2->1', '3->4', '6->7', '9']);
  });
});
