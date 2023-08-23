import { largestAltitude } from './largestAltitude';

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n).

describe('largestAltitude(gain)', () => {
  it('returns the highest altitude of a point', () => {
    const gain = [1, 1, 1, 1, 1];
    const result = largestAltitude(gain);
    expect(result).toEqual(5);
  });

  it('handles negative net gains', () => {
    const gain = [-5, 1, 5, 0, -7];
    const result = largestAltitude(gain);
    expect(result).toEqual(1);
  });

  it('returns 0 as highest altitude if gains do not surpass starting altitude', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2];
    const result = largestAltitude(gain);
    expect(result).toEqual(0);
  });
});
