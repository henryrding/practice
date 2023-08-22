import { maxArea } from './maxArea';

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

describe('maxArea(height)', () => {
  it('returns the maximum amount of water a container can store', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
    expect(result).toEqual(49);
  });

  it('handles a single container', () => {
    const height = [1, 1];
    const result = maxArea(height);
    expect(result).toEqual(1);
  });

  it('handles a single container with different heights', () => {
    const height = [1, 100];
    const result = maxArea(height);
    expect(result).toEqual(1);
  });
});
