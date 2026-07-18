class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const ASCII_DIFF = 97;
        const magazineCounts = new Array(26).fill(0);

        for (let i = 0; i < magazine.length; i += 1) {
            const code = magazine[i].codePointAt() - ASCII_DIFF;
            magazineCounts[code] += 1;
        }

        for (let i = 0; i < ransomNote.length; i += 1) {
            const code = ransomNote[i].codePointAt() - ASCII_DIFF;
            magazineCounts[code] -= 1;

            if (magazineCounts[code] < 0) {
                return false;
            }
        }

        return true;
    }
}
