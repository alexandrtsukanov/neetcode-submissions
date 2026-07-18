class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const map = new Map();

        for (let i = 0; i < text.length; i += 1) {
            map.set(text[i], (map.get(text[i]) || 0) + 1);
        }

        return Math.min(
            map.get('b') || 0,
            map.get('a') || 0,
            Math.floor((map.get('l') || 0) / 2),
            Math.floor((map.get('o') || 0) / 2),
            map.get('n') || 0,
        );
    }
}
