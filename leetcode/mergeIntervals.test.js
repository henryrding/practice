import { mergeIntervals } from './mergeIntervals';

// Given an array of intervals where intervals[i] = [starti, endi]

describe('mergeIntervals(intervals)', () => {
  it('returns an array of the non-overlapping intervals that cover all the intervals in the input', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = mergeIntervals(intervals);
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('merges intervals with the same end', () => {
    const intervals = [
      [1, 4],
      [0, 4],
    ];
    const result = mergeIntervals(intervals);
    expect(result).toEqual([[0, 4]]);
  });

  it('merges intervals that are contained in another', () => {
    const intervals = [
      [1, 4],
      [2, 3],
    ];
    const result = mergeIntervals(intervals);
    expect(result).toEqual([[1, 4]]);
  });

  it('merges intervals that are not in order', () => {
    const intervals = [
      [1, 4],
      [2, 3],
      [0, 2],
    ];
    const result = mergeIntervals(intervals);
    expect(result).toEqual([[0, 4]]);
  });
});
