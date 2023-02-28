// L#1 121

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.



// konse din kharide or konse din beche taki sabse jyda profit ho ske
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note: that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//  days = [1, 2, 3, 4, 5, 6]
//prices = [7, 1, 5, 3, 6, 4]
//profit = [_, 0, 4, 2, 5, 3] // if we choose the day 2 where as the price is 1 and day 5 price is 6, so profit is 5
// if purchecing on the first day so we can not get profit, beacause all the other day's price are lesser then the 7


// m1
// T: O(N*N) S: O(1)
// one loop for buy and secon for sell



// m2 two pointer
// [7, 1, 5, 3, 6, 4]
//  b  b  b  b  b   b
//  s           s   s
//  0  


// T: O(N) S: O(1)  

function bestTimeToBuySellStock(prices) {
    let len = prices.length;
    let sellIdx = len - 1;
    let profit = 0;
    for (let buyIdx = len - 1; buyIdx >= 0; buyIdx--) {

        if (prices[buyIdx] - prices[sellIdx] >= 0) {
            sellIdx = buyIdx;
        } else {
            let currPrice = prices[sellIdx] - prices[buyIdx];
            profit = Math.max(profit, currPrice);
        }
    }
    return profit;
}

const result = bestTimeToBuySellStock([7, 1, 5, 3, 6, 4]);
console.log(result);