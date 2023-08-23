import { maxVowels } from './maxVowels';

describe('maxVowels(s, k)', () => {
  it('returns the maximum number of vowel letters in any substring of s with length k', () => {
    const s = 'abc';
    const k = 1;
    const result = maxVowels(s, k);
    expect(result).toEqual(1);
  });

  it('handles multiple vowels in substrings', () => {
    const s = 'aeiou';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toEqual(3);
  });

  it('handles s and k of equal length', () => {
    const s = 'abc';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toEqual(1);
  });

  it('handles multiple max number of vowels in different substrings', () => {
    const s = 'leetcode';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toEqual(2);
  });
});
