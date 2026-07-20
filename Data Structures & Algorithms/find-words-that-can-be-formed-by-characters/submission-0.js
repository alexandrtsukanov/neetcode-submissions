class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        const mapFromChars = this.getMap(chars);
        let result = 0;
        for (let i = 0; i < words.length; i += 1) {
            const wordMap = this.getMap(words[i]);
            if (this.isStringGood(wordMap, mapFromChars)) {
                result += words[i].length;
            }
        }
        return result;
    }
    getMap(str) {
        const map = {};
        for (let i = 0; i < str.length; i += 1) {
            map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
        }
        return map;
    }
    isStringGood(strMap, baseStrMap) {
        for (let key in strMap) {
            if (!baseStrMap[key] || strMap[key] > baseStrMap[key]) {
                return false;
            }
        }
        return true;
    }
}
