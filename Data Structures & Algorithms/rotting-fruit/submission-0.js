class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let times = 0;
        let fresh = 0;
        const queue = [];
        let pos = 0;

        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                if (grid[i][j] === 1) {
                    fresh += 1;
                }
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        while (pos < queue.length && fresh > 0) {
            let len = queue.length - pos;
            while (len) {
                const [r, c] = queue[pos];
                const neighbors = [[r - 1, c], [r, c + 1], [r + 1, c], [r, c - 1]];
                for (const [nr, nc] of neighbors) {
                    if (
                        (nr < 0 || nr >= grid.length) ||
                        (nc < 0 || nc >= grid[0].length) ||
                        grid[nr][nc] !== 1
                    ) {
                        continue;
                    }
                    grid[nr][nc] = 2;
                    fresh -= 1;
                    queue.push([nr, nc]);
                }
                len -= 1;
                pos += 1;
            }
            times += 1;
        }

        return fresh !== 0 ? -1 : times;
    }
}
