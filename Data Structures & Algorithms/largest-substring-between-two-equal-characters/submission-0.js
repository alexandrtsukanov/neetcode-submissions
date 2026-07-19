class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        const hashMap = new Map();
        let longest = -1;

        for (let i = 0; i < s.length; i += 1) {
            if (hashMap.has(s[i])) {
                const distance = i - hashMap.get(s[i]) - 1;
                longest = Math.max(distance, longest);
            } else {
                hashMap.set(s[i], i);
            }
        }

        return longest;
    }
}
