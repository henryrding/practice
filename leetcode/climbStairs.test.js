import { climbStairs } from './climbStairs';

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
describe('climbStairs(x)', () => {
  it('returns the number of distinct ways you can climb to the top', () => {
    const n = 2;
    const result = climbStairs(n);
    expect(result).toEqual(2);
  });

  it('handles large number of steps', () => {
    const n = 10;
    const result = climbStairs(n);
    expect(result).toEqual(89);
  });

  it('handles larger number of steps', () => {
    const n = 45;
    const result = climbStairs(n);
    expect(result).toEqual(1836311903);
  });
});
