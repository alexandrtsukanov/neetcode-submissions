class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let result = 0;

        for (let i = 1; i < s.length; i += 1) {
            const currentDiff = Math.abs(s[i - 1].codePointAt() - s[i].codePointAt());
            result += currentDiff;
        }

        return result;
    }
}
