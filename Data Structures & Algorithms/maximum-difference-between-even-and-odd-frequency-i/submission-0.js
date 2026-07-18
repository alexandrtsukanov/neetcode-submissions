class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const abc = new Array(26).fill(0);
        const ASCII_DIFF = 97;

        for (let i = 0; i < s.length; i += 1) {
            const index = s[i].codePointAt() - ASCII_DIFF;
            abc[index] += 1;
        }

        let min = s.length;
        let max = 0; 

        for (let i = 0; i < abc.length; i += 1) {
            if (abc[i] === 0) continue;
            if (abc[i] % 2 === 0) {
                min = Math.min(abc[i], min);
            } else {
                max = Math.max(abc[i], max);
            }
        }

        return max - min;
    }
}
