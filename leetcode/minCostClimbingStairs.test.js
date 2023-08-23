import { minCostClimbingStairs } from './minCostClimbingStairs';

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.

describe('minCostClimbingStairs(cost)', () => {
  it('returns the minimum cost to reach the top of the floor', () => {
    const cost = [1, 2];
    const result = minCostClimbingStairs(cost);
    expect(result).toEqual(1);
  });

  it('handles minimum cost route containing both one and two steps', () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    const result = minCostClimbingStairs(cost);
    expect(result).toEqual(6);
  });
});
