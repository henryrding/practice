import { isHappy } from './isHappy';

// A happy number is a number defined by the following process:
//   Starting with any positive integer, replace the number by the sum of the squares of its digits.
//   Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//   Those numbers for which this process ends in 1 are happy.

describe('isHappy(s, t)', () => {
  it('returns true if n is a happy number', () => {
    const n = 100;
    const result = isHappy(n);
    expect(result).toEqual(true);
  });

  it('returns false if n is not a happy number', () => {
    const n = 2;
    const result = isHappy(n);
    expect(result).toEqual(false);
  });
});
