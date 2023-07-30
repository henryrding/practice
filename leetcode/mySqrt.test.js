import { mySqrt } from './mySqrt';

describe('mySqrt(x)', () => {
  it('returns the square root of x', () => {
    const x = 4;
    const result = mySqrt(x);
    expect(result).toEqual(2);
  });

  it('returns the square root of x rounded down to the nearest integer', () => {
    const x = 8;
    const result = mySqrt(x);
    expect(result).toEqual(2);
  });
});
