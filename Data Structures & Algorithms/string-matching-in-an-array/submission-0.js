class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const hashSet = new Set();

        for (let i = 0; i < words.length; i += 1) {
            const word = words[i];
            for (let j = 0; j < words.length; j += 1) {
                if (i === j) continue;
                if (word.length > words[j].length) continue;
                if (words[j].includes(word)) {
                hashSet.add(word); 
                }
            }
        }

        return Array.from(hashSet);
    }
}
