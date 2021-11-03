/**You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve
any profit, return 0.
 */

function bestTime(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
      if (prices[j] <= prices[i]) {
        i = j - 1;
        break;
      }
    }
  }
  return maxProfit;
}

module.exports = { bestTime };

/** brute force solution works but times out in leetcode:
 *   let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - [prices[i]] > maxProfit) {
        maxProfit = prices[j] - [prices[i]];
      }
    }
  }
  return maxProfit;
}
 */
