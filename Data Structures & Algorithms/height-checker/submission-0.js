class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const sorted = [...heights].sort((a, b) => a - b);

        let unmatched = 0;

        for (let i = 0; i < heights.length; i += 1) {
            if (heights[i] !== sorted[i]) {
                unmatched += 1;
            }
        }

        return unmatched;
    }
}
