import { strStr } from './strStr';

describe('strStr(haystack, needle)', () => {
  it('returns the index of the first occurence of needle in haystack', () => {
    const haystack = 'sadbuts';
    const needle = 'sad';
    const result = strStr(haystack, needle);
    expect(result).toEqual(0);
  });

  it('returns -1 if needle is not part of haystack', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';
    const result = strStr(haystack, needle);
    expect(result).toEqual(-1);
  });

  it('handles multiple occurences of needle in haystack', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    const result = strStr(haystack, needle);
    expect(result).toEqual(0);
  });
});
