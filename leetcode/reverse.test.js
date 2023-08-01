import { reverse } from './reverse';

describe('reverse(x)', () => {
  it('returns x with its digits reversed', () => {
    const x = 123;
    const result = reverse(x);
    expect(result).toEqual(321);
  });

  it('handles negative numbers', () => {
    const x = -123;
    const result = reverse(x);
    expect(result).toEqual(-321);
  });

  it('handles integers that end in 0', () => {
    const x = 120;
    const result = reverse(x);
    expect(result).toEqual(21);
  });
});
