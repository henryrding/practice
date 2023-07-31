import { plusOne } from './plusOne';

describe('plusOne(digits)', () => {
  it('returns the resulting array of digits after incrementing the large integer by one', () => {
    const digits = [1, 2, 3];
    const result = plusOne(digits);
    expect(result).toEqual([1, 2, 4]);
  });

  it('handles last digit of 9', () => {
    const digits = [1, 1, 9];
    const result = plusOne(digits);
    expect(result).toEqual([1, 2, 0]);
  });

  it("handles consecutive 9's at the end", () => {
    const digits = [9, 9, 9, 9, 9];
    const result = plusOne(digits);
    expect(result).toEqual([1, 0, 0, 0, 0, 0]);
  });
});
