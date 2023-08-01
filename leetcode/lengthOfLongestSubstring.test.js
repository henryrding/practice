import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring(s)', () => {
  it('returns the length of the longest substring without repeating characters', () => {
    const s = 'abcabcbb';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(3);
  });

  it('handles empty string', () => {
    const s = '';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(0);
  });

  it('handles repeating characters', () => {
    const s = 'bbbbb';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(1);
  });

  it('handles longest substring not starting at 0 index', () => {
    const s = 'pwwkew';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(3);
  });

  it('handles multiple longest substrings', () => {
    const s = 'xyzyxxpn';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(3);
  });

  it('handles non-letter characters', () => {
    const s = '192847562*@!()$%)^#:></';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(13);
  });
});
