import { isValid } from './isValid';

describe('isValid(s)', () => {
  it('returns if the input string is valid if brackets are closed correctly', () => {
    const s = '()';
    const result = isValid(s);
    expect(result).toEqual(true);
  });

  it('handles parentheses, brackets, and curly braces', () => {
    const s = '()[]{}';
    const result = isValid(s);
    expect(result).toEqual(true);
  });

  it('returns false if input string is not valid', () => {
    const s = '(]';
    const result = isValid(s);
    expect(result).toEqual(false);
  });

  it('handles nested brackets', () => {
    const s = '[({}())]';
    const result = isValid(s);
    expect(result).toEqual(true);
  });
});
