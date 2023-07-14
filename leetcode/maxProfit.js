export const maxProfit = function (prices) {
  let lowest = prices[0];
  let highest = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
      highest = prices[i];
    } else if (prices[i] > lowest) {
      highest = prices[i];
      profit = Math.max(profit, highest - lowest);
    }
  }
  return profit;
};
