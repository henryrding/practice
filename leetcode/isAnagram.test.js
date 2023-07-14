import { isAnagram } from './isAnagram';

describe('isAnagram(s)', () => {
  it('returns true if t is an anagram of s', () => {
    const s = 'anagram';
    const t = 'nagaram';
    const result = isAnagram(s, t);
    expect(result).toEqual(true);
  });

  it('returns false if t is not an anagram of s', () => {
    const s = 'rat';
    const t = 'car';
    const result = isAnagram(s, t);
    expect(result).toEqual(false);
  });
});
