class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return '';

        for (let i = 0; i < strs[0].length; i += 1) {
            for (let j = 1; j < strs.length; j += 1) {
                if (strs[j][i] !== strs[0][i]) {
                    return strs[0].slice(0, i);
                }
            }
        }

        return strs[0];
    }
}
