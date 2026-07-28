class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let total = 0;
        let currentMin = prices[0];
        let direction = 0;
        
        for (let i = 1; i < prices.length; i += 1) {
            if (prices[i] < prices[i - 1]) {
                if (direction === 1) {
                    total += prices[i - 1] - currentMin;
                }
                currentMin = prices[i];
                direction = -1;
            } else {
                direction = 1;
            }
        }

        if (direction === 1) {
            total += prices[prices.length - 1] - currentMin;
        }
        
        return total;
    }
}
