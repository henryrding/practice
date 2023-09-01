import { wordPattern } from './wordPattern';

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

describe('wordPattern(pattern, s)', () => {
  it('returns true if s follows the same pattern', () => {
    const pattern = 'ab';
    const s = 'hello world';
    const result = wordPattern(pattern, s);
    expect(result).toEqual(true);
  });

  it("returns false if s doesn't follow the same pattern", () => {
    const pattern = 'aba';
    const s = 'red blue blue';
    const result = wordPattern(pattern, s);
    expect(result).toEqual(false);
  });

  it('handles not allowing different letters mapping to the same word', () => {
    const pattern = 'aa';
    const s = 'hello world';
    const result = wordPattern(pattern, s);
    expect(result).toEqual(false);
  });
});
