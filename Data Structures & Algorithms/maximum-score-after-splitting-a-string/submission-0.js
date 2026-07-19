class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        const zeroesLeft = new Array(s.length).fill(0);
        const onesRight = new Array(s.length).fill(0);

        for (let i = 0; i < s.length; i += 1) {
            zeroesLeft[i] = s[i] === '0' 
                ? (zeroesLeft[i - 1] || 0) + 1
                : (zeroesLeft[i - 1] || 0)
        }

        for (let i = s.length - 1; i >= 0; i -= 1) {
            onesRight[i] = s[i] === '1' 
                ? (onesRight[i + 1] || 0) + 1
                : (onesRight[i + 1] || 0)
        }

        let max = 0;

        for (let i = 0; i < zeroesLeft.length - 1; i += 1) {
            const sum = zeroesLeft[i] + onesRight[i + 1];
            if (sum > max) {
                max = sum;
            }
        }

        return max;
    }
}
