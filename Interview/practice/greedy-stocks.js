// function getMaxProfit(stockPrices) {
//   if (!stockPrices || stockPrices.length < 2) {
//     throw new Error();
//   }
//   let min = stockPrices[0];
//   let max = stockPrices[1];

//   for (let i = 2; i < stockPrices.length; i++) {
//     if (stockPrices[i] > max) {
//       const temp = max;
//       max = stockPrices[i];
//       if (min > temp) {
//         min = temp;
//       }
//     } else if (stockPrices[i] < min) {
//       const temp = min;
//       min = stockPrices[i];

//       if (max < temp) {
//         min = temp;
//       }
//     }
//   }
//   console.log(max, min);
//   return max - min;
// }

function getMaxProfit(stockPrices) {
  if (!stockPrices || stockPrices.length < 2) {
    throw new Error();
  }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - minPrice;

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    maxProfit = Math.max(currentPrice - minPrice, maxProfit);
    minPrice = Math.max(currentPrice, minPrice);
  }

  return maxProfit;
}

getMaxProfit([10, 7, 5, 8, 11, 9]);
// we know the smallest value index must be before the largest
// we need to return the largest - smallest

// go through array and keep the largest and smallest value


// learned:
// using the greedy approch
// To try it on a new problem, start by asking yourself:
// "Suppose we could come up with the answer in one pass through the input, by simply 
// updating the 'best answer so far' as we went. What additional values would we need 
// to keep updated as we looked at each item in our input, in order to be able to 
// update the 'best answer so far' in constant time?"