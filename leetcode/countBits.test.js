import { countBits } from './countBits';

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i
describe('countBits(n)', () => {
  it("returns an array of number of 1's in binary representation of n", () => {
    const n = 0;
    const result = countBits(n);
    expect(result).toEqual([0]);
  });

  it('handles n of 1', () => {
    const n = 1;
    const result = countBits(n);
    expect(result).toEqual([0, 1]);
  });

  it('handles n of 2', () => {
    const n = 2;
    const result = countBits(n);
    expect(result).toEqual([0, 1, 1]);
  });

  it("handles larger n's where number of 1's is greater than 1", () => {
    const n = 7;
    const result = countBits(n);
    expect(result).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
  });
});
