class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = 0;

        for(let i = 1; i < prices.length; i++){
            if (prices[i] < prices[buy]){
                buy = i
            } else if (prices[i] - prices[buy] > profit) {
                profit = prices[i] - prices[buy]
            }
        }

        return profit
    }
}
