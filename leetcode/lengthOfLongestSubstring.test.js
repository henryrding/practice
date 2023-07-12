import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring(s)', () => {
  it('returns indices of the two numbers such that they add up to target', () => {
    const s = 'abcabcbb';
    const result = lengthOfLongestSubstring(s);
    expect(result).toEqual(3);
  });
});
