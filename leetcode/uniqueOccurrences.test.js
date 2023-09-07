import { uniqueOccurrences } from './uniqueOccurrences';

describe('uniqueOccurrences(arr)', () => {
  it('returns true if the number of occurrences of each value in the array is unique', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const result = uniqueOccurrences(arr);
    expect(result).toEqual(true);
  });

  it('returns false if the number of occurrences of each value in the array is not unique', () => {
    const arr = [1, 2];
    const result = uniqueOccurrences(arr);
    expect(result).toEqual(false);
  });

  it('handles negative numbers', () => {
    const arr = [1, 2, -1];
    const result = uniqueOccurrences(arr);
    expect(result).toEqual(false);
  });
});
