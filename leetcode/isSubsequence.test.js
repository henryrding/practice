import { isSubsequence } from './isSubsequence';

describe('isSubsequence(s, t)', () => {
  it('returns true if s is a subsequence of t', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    const result = isSubsequence(s, t);
    expect(result).toEqual(true);
  });

  it('returns false if s is not a subsequence of t', () => {
    const s = 'axc';
    const t = 'ahbgdc';
    const result = isSubsequence(s, t);
    expect(result).toEqual(false);
  });

  it('handles empty strings', () => {
    const s = '';
    const t = 'ahbgdc';
    const result = isSubsequence(s, t);
    expect(result).toEqual(true);
  });
});
