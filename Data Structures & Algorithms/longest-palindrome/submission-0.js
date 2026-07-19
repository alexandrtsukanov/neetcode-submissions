class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let result = 0;
        const map = {};

        for (let i = 0; i < s.length; i += 1) {
            if (map[s[i]]) {
                map[s[i]] += 1;
            } else {
                map[s[i]] = 1;
            }
            if (map[s[i]] % 2 === 0) result += 2;
        }

        return s.length > result ? result + 1 : result;
    }
}
