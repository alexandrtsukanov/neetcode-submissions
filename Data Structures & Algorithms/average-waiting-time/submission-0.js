class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        if (customers.length === 0) return 0;

        let total = customers[0][1];
        let currentTime = customers[0][0] + total;

        for (let i = 1; i < customers.length; i += 1) {
            currentTime = customers[i][0] > currentTime
                ? customers[i][0] + customers[i][1]
                : currentTime + customers[i][1];
            total += currentTime - customers[i][0];
        }

        return total / customers.length;
    }
}
