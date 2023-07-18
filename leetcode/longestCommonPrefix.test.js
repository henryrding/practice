import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix(strs)', () => {
  it('returns the longest common prefix string amongst an array of strings', () => {
    const strs = ['flower', 'flow', 'fligt'];
    const result = longestCommonPrefix(strs);
    expect(result).toEqual('fl');
  });

  it('returns an empty string if there is no common prefix', () => {
    const strs = ['dog', 'racecar', 'car'];
    const result = longestCommonPrefix(strs);
    expect(result).toEqual('');
  });

  it('handles an empty array', () => {
    const strs = [];
    const result = longestCommonPrefix(strs);
    expect(result).toEqual('');
  });
});
