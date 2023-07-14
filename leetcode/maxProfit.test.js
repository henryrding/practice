import { maxProfit } from './maxProfit';

describe('maxProfit(prices)', () => {
  it('returns the maximum profit from choosing a single day to buy one stock and choosing a different day in the future to sell that stock', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const result = maxProfit(prices);
    expect(result).toEqual(5);
  });

  it('returns 0 if you cannot achieve any profit', () => {
    const prices = [7, 6, 4, 3, 1];
    const result = maxProfit(prices);
    expect(result).toEqual(0);
  });

  it('handles maximum profit being later', () => {
    const prices = [2, 4, 1, 6];
    const result = maxProfit(prices);
    expect(result).toEqual(5);
  });

  it('handles lowest price not being part of maximum profit', () => {
    const prices = [2, 4, 1];
    const result = maxProfit(prices);
    expect(result).toEqual(2);
  });

  it('handles highest price not being part of maximum profit', () => {
    const prices = [14, 2, 4, 1];
    const result = maxProfit(prices);
    expect(result).toEqual(2);
  });
});
