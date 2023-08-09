import { mergeAlternately } from './mergeAlternately';

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

describe('mergeAlternately(word1, word2)', () => {
  it('returns the merged string', () => {
    const word1 = 'abc';
    const word2 = 'pqr';
    const result = mergeAlternately(word1, word2);
    expect(result).toEqual('apbqcr');
  });

  it('handles strings having different lengths, appending additional letter onto the end of the merged string', () => {
    const word1 = 'ab';
    const word2 = 'pqrs';
    const result = mergeAlternately(word1, word2);
    expect(result).toEqual('apbqrs');
  });

  it('handles string1 being longer than string2', () => {
    const word1 = 'abcd';
    const word2 = 'pq';
    const result = mergeAlternately(word1, word2);
    expect(result).toEqual('apbqcd');
  });
});
