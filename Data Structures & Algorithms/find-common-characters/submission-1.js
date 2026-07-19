class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        if (words.length === 0) return [];
        if (words.length === 1) return words[0].split('');

        const result = [];
        const maps = [];
        const firstWordMap = this.getMap(words[0]);

        for (let i = 1; i < words.length; i += 1) {
            maps.push(this.getMap(words[i]));
        }

        for (const [char, count] of firstWordMap.entries()) {
            const amount = Math.min(count, ...maps.map(m => m.get(char)));
            for (let i = 1; i <= amount; i += 1) {
                result.push(char);;
            }
        }

        return result;
    }
    getMap(word) {
        const map = new Map();
        for (const char of word) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        return map;
    }
}
