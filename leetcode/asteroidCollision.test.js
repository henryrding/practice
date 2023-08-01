import { asteroidCollision } from './asteroidCollision';

// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

describe('asteroidCollision(asteroids)', () => {
  it('handles left-moving asteroid exploding', () => {
    const asteroids = [5, 10, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([5, 10]);
  });

  it('handles right-moving asteroid exploding', () => {
    const asteroids = [2, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([-5]);
  });

  it('handles two asteroids both exploding', () => {
    const asteroids = [5, 5, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([5]);
  });

  it('handles multiple explosions', () => {
    const asteroids = [10, 2, -5];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([10]);
  });

  it('handles asteroids different direction asteroids never meeting', () => {
    const asteroids = [-5, -3, 1, 4];
    const result = asteroidCollision(asteroids);
    expect(result).toEqual([-5, -3, 1, 4]);
  });
});
