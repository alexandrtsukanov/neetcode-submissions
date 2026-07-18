class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count = 0;
        let metLetter = false;
        for (let i = s.length - 1; i >= 0; i -= 1) {
            if (s[i] === ' ') {
                if (metLetter) {
                    return count;
                }
            } else {
                count += 1;
                metLetter = true;
            }
        }
        return count;
    }
}
