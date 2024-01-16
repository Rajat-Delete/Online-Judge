/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
*/


//this solution is giving TLE
var maxProfit = function(prices) {
    
    //2 pointers , one for the 1st element and 2nd for the n-1 elements
    //we will store max profit and verify everytime.
    let profit=0;
    for(let i = 0;i<prices.length-1;i++){
        for(let j = i+1;j<prices.length;j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i];
            }
        }
    }
    return profit;
};

var optimised = function(prices) {
    
    //so we will iterare the entire array and check for two things
    //If we can sell the item today, what will be profit
    //If we can buy the item today or not
    let curr_min = prices[0];
    let profit = 0;
    //we will iterate over the loop and check for max profit and current min
    for(let i = 0;i<prices.length;i++){
        //checking if we sell today what will be the profit
        if(prices[i] > curr_min){
            profit = Math.max(profit , prices[i] - curr_min);
        }

        //checking if we can buy today or not
        if(prices[i]<curr_min){
            curr_min = prices[i];
        }
    }
    return profit;
};


console.log(optimised([7,1,5,3,6,4]));
