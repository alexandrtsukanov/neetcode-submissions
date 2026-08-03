class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let max = 0;

        const dfs = (start, graph) => {
            let counter = 0;
            const stack = [start];
            while (stack.length) {
                const [r, c] = stack.pop();
                if (!visited.has([r, c].join('.'))) {
                    visited.add([r, c].join('.'));
                    counter += 1;
                    const heighbors = [[r - 1, c], [r, c + 1], [r + 1, c], [r, c - 1]];
                    for (const [nr, nc] of heighbors) {
                        if (
                            !visited.has([nr, nc].join('.')) &&
                            nr >= 0 && nr < graph.length &&
                            nc >= 0 && nc < graph[0].length &&
                            graph[nr][nc] === 1
                        ) {
                            stack.push([nr, nc]);
                        }
                    }
                }
            }

            return counter;
        }

        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                const point = [i, j];
                if (grid[i][j] === 1 && !visited.has(point.join('.'))) {
                    const counter = dfs(point, grid);
                    max = Math.max(counter, max);
                }
            }
        }

        return max;
    }
}
