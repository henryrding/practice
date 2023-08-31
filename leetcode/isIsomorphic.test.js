import { isIsomorphic } from './isIsomorphic';

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

describe('isIsomorphic(s, t)', () => {
  it('returns true is the characters in s can be replaced to get t', () => {
    const s = 'bat';
    const t = 'you';
    const result = isIsomorphic(s, t);
    expect(result).toEqual(true);
  });

  it('handles no two characters mapped to the same character', () => {
    const s = 'foo';
    const t = 'bar';
    const result = isIsomorphic(s, t);
    expect(result).toEqual(false);
  });

  it('handles a character mapped to itself', () => {
    const s = 'bat';
    const t = 'man';
    const result = isIsomorphic(s, t);
    expect(result).toEqual(true);
  });
});
