class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;
        for (let i = 0; i < s.length - 1; i += 1) {
            sum += Math.abs(s[i].codePointAt() - s[i + 1].codePointAt());
        }
        return sum;
    }
}
