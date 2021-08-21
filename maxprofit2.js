/**
 * @param {number[]} prices
 * @return {number}


 */
//clever solution. study this
 var maxProfit = function(prices) {
  let profit = 0;
  let valley = prices[0];
  let peak = prices[0];
  let i = 0;
  while (i < prices.length-1) {
      while (i< prices.length-1 && prices[i] >= prices[i + 1]) {
          i++;
      }
      valley = prices[i];
      while (i < prices.length-1 && prices[i] <= prices[i+1]) {
          i++;
      }
      peak = prices[i];
      profit += peak - valley;
      console.log("i, peak, valley, profit= ", i, peak, valley, profit);

  }
  return profit;

//  var maxProfit = function(prices) {
//   let profit = 0;
//   let currentBuy = null;
//   for (let i = 0; i < prices.length; i++) {
//       if (i === prices.length-1) {
//           if (currentBuy !== null) {
//               profit = profit += prices[i] - currentBuy;
//           }
//           break;
//       }
//       if (prices[i+1] > prices[i] && currentBuy === null) {
//           currentBuy = prices[i];
//       }
//       if ((prices[i+1] < prices[i]) && currentBuy !== null) {
//           profit = profit += prices[i] - currentBuy;
//           currentBuy = null;
//       }
//       console.log("i, curr, profit= ", i, currentBuy, profit);
//   }

//   return profit;
// };
