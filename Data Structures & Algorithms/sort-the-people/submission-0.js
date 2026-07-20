class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        const pairs = names.map((n, i) => [n, heights[i]]);
        pairs.sort((a, b) => b[1] - a[1]);

        return pairs.map(p => p[0]);
    }
}
