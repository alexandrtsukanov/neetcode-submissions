class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    countServers(grid) {
        let count = 0;
        const rows = new Map();
        const columns = new Map();

        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                if (grid[i][j] === 1) {
                    rows.set(i, (rows.get(i) || 0) + 1);
                    columns.set(j, (columns.get(j) || 0) + 1);
                }
            }
        }

        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                if (grid[i][j] === 1) {
                    if (rows.get(i) > 1 || columns.get(j) > 1) {
                        count += 1;
                    }
                }
            }
        }

        return count;
    }
}
