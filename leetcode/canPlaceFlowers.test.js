import { canPlaceFlowers } from './canPlaceFlowers';

describe('canPlaceFlowers(haystack, needle)', () => {
  it('returns true if n new flowers can be planted in the flowerbed without violating the no-adjacent flowers rule', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toEqual(true);
  });

  it('returns false if n new flowers can not be planted in the flowerbed without violating the no-adjacent flowers rule', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toEqual(false);
  });

  it('handles flower being planted in first index', () => {
    const flowerbed = [0, 0, 1, 0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toEqual(true);
  });

  it('handles flower being planted in last index', () => {
    const flowerbed = [1, 0, 1, 0, 0];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toEqual(true);
  });
});
