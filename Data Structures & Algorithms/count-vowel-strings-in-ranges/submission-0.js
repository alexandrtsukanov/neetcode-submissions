class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowelCountsIncludingStart = new Array(words.length).fill(0);
        const vowelCountsExcludingStart = new Array(words.length).fill(0);

        for (let i = 0; i < words.length; i += 1) {
            if (this.isStrVowel(words[i])) {
                vowelCountsIncludingStart[i] = (vowelCountsIncludingStart[i - 1] || 0) + 1;
            } else {
                vowelCountsIncludingStart[i] = (vowelCountsIncludingStart[i - 1] || 0);
            }
            if (i > 0) {
                if (this.isStrVowel(words[i - 1])) {
                    vowelCountsExcludingStart[i] = vowelCountsExcludingStart[i - 1] + 1;
                } else {
                    vowelCountsExcludingStart[i] = vowelCountsExcludingStart[i - 1];
                }
            }
        }

        const result = new Array(queries.length);

        for (let i = 0; i < queries.length; i += 1) {
            const [start, end] = queries[i];
            result[i] = vowelCountsIncludingStart[end] - vowelCountsExcludingStart[start];
        }

        return result;
    }
    isStrVowel(str) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        return vowels.has(str[0]) && vowels.has(str[str.length - 1]);
    }
}
