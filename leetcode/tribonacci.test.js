import { tribonacci } from './tribonacci';

// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

describe('tribonacci(nums)', () => {
  it('returns the correct value of T0', () => {
    const n = 0;
    const result = tribonacci(n);
    expect(result).toEqual(0);
  });

  it('returns the correct value of T1', () => {
    const n = 1;
    const result = tribonacci(n);
    expect(result).toEqual(1);
  });

  it('returns the correct value of T2', () => {
    const n = 2;
    const result = tribonacci(n);
    expect(result).toEqual(1);
  });

  it('returns the value of Tn given n', () => {
    const n = 4;
    const result = tribonacci(n);
    expect(result).toEqual(4);
  });

  it('returns the value of Tn given a large n', () => {
    const n = 25;
    const result = tribonacci(n);
    expect(result).toEqual(1389537);
  });
});
