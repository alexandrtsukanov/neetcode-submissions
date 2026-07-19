class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        if (!words.length) return false;
        if (words.length === 1) return true;

        const total = new Map();

        for (let i = 0; i < words.length; i += 1) {
            for (const char of words[i]) {
                if (total.has(char)) {
                    total.set(char, total.get(char) + 1);
                } else {
                    total.set(char, 1);
                }
            }
        }

        for (const [char, freq] of total.entries()) {
            if (total.get(char) % words.length !== 0) {
                return false;
            }
        }

        return true;
    }
}
