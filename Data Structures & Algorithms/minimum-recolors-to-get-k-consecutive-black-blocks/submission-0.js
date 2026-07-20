class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let min = Infinity;
        const map = new Map();
        let start = 0;

        for (let i = 0; i < blocks.length; i += 1) {
            if (map.has(blocks[i])) {
                map.set(blocks[i], map.get(blocks[i]) + 1);
            } else {
                map.set(blocks[i], 1);
            }

            let blacks = map.get('B') || 0;
            let whites = map.get('W') || 0;

            while (blacks + whites > k) {
                const leftBlock = blocks[start];
                map.set(leftBlock, map.get(leftBlock) - 1);
                if (map.get(leftBlock) === 0) {
                    map.delete(leftBlock);
                }
                start += 1;
                blacks = map.get('B') || 0;
                whites = map.get('W') || 0;
            }

            if (blacks + whites === k) {
                min = Math.min(whites, min);
            }
        }

        return min;
    }
}
