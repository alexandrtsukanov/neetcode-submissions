class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i += 1) {
            if (sMap.has(s[i])) {
                if (sMap.get(s[i]) !== t[i]) return false;
            } else {
                sMap.set(s[i], t[i]);
            }
        }

        for (let i = 0; i < t.length; i += 1) {
            if (tMap.has(t[i])) {
                if (tMap.get(t[i]) !== s[i]) return false;
            } else {
                tMap.set(t[i], s[i]);
            }        
        }

        return true;
    }
}
