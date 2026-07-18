class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const dp = [];
        for (let i = 0; i < numRows; i += 1) {
            const row = new Array(i + 1);
            row[0] = 1;
            row[i] = 1;
            for (let j = 1; j < row.length - 1; j += 1) {
                row[j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
            dp.push(row);
        }
        return dp;
    }
}
