class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let index = 0;
        for (let i = 0; i < s.length; i += 1) {
            if (s[i] === t[index]) {
                index += 1;
            }
        }
        return t.length - index;
    }
}

// coaching coding | index = 2 |
