/**You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve
any profit, return 0.

best way to approach:
- what is the maxProfit so far
- what is the minimum price so far
- if current price is new minimum, reset minimum an move on (no need to check if this is good
  time to sell if it's the min price)
- if current-min > maxPRofit, update maxProfit
 */

function bestTime(prices) {
  let minprice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) minprice = prices[i];
    else if (prices[i] - minprice > maxProfit) {
      maxProfit = prices[i] - minprice;
    }
  }
  return maxProfit;
}

module.exports = { bestTime };

/**
 * Modification of brute-force gets into 60-90th percentile
 *
 * let maxProfit = 0;
  let lowestPrice = prices[0];
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }
    if (i > 0 && prices[i] > lowestPrice) {
      continue;
    }
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
 *
 *
 *
 *
 * brute force solution works but times out in leetcode:
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
