/**
 * @param {number[]} prices
 * @return {number}


 */
 var maxProfit = function(prices) {
  let profit = 0;
  let currentBuy = null;
  for (let i = 0; i < prices.length; i++) {
      if (i === prices.length-1) {
          if (currentBuy !== null) {
              profit = profit += prices[i] - currentBuy;
          }
          break;
      }
      if (prices[i+1] > prices[i] && currentBuy === null) {
          currentBuy = prices[i];
      }
      if ((prices[i+1] < prices[i]) && currentBuy !== null) {
          profit = profit += prices[i] - currentBuy;
          currentBuy = null;
      }
      console.log("i, curr, profit= ", i, currentBuy, profit);
  }

  return profit;
};
