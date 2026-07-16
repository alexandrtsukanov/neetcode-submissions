class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const result = [];
        let i = 0;
        let j = 0;
        let counter = 0;

        while (i < word1.length || j < word2.length) {
            if (!word1[i]) {
                result.push(word2[j]);
                j += 1;
                continue;
            }
            if (!word2[j]) {
                result.push(word1[i]);
                i += 1;
                continue;
            }
            if (counter % 2 === 0) {
                result.push(word1[i]);
                i += 1;
            } else {
                result.push(word2[j]);
                j += 1;
            }
            counter += 1;
        }

        return result.join('');
    }
}
