class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const set = new Set(allowed);
        let count = 0;

        for (const word of words) {
            let ok = true;
            for (const char of word) {
                if (!set.has(char)) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                count += 1;
            }
        }

        return count;
    }
}
