class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const patternMap = new Map();
        const sMap = new Map();
        const str = s.split(' ');

        if (pattern.length !== str.length) return false;

        for (let i = 0; i < pattern.length; i += 1) {
            if (patternMap.has(pattern[i])) {
                if (patternMap.get(pattern[i]) !== str[i]) return false;
            } else {
                patternMap.set(pattern[i], str[i]);
            }
        }

        for (let i = 0; i < str.length; i += 1) {
            if (sMap.has(str[i])) {
                if (sMap.get(str[i]) !== pattern[i]) return false;
            } else {
                sMap.set(str[i], pattern[i]);
            }        
        }

        return true;
    }
}
