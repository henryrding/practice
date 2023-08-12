import { rob } from './rob';

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

describe('rob(nums)', () => {
  it('handles a single house', () => {
    const nums = [1];
    const result = rob(nums);
    expect(result).toEqual(1);
  });

  it('return the maximum amount of money between two houses', () => {
    const nums = [1, 2];
    const result = rob(nums);
    expect(result).toEqual(2);
  });
  it('returns the maximum amount of money you can rob without alerting the police', () => {
    const nums = [1, 2, 3, 1];
    const result = rob(nums);
    expect(result).toEqual(4);
  });

  it('handles skipping more than one house in a row', () => {
    const nums = [2, 7, 9, 3, 1];
    const result = rob(nums);
    expect(result).toEqual(12);
  });
});
