class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let islands = 0;

        const dfs = (start, graph) => {
            const stack = [start];
            while (stack.length) {
                const [r, c] = stack.pop();
                if (!visited.has([r, c].join('.'))) {
                    visited.add([r, c].join('.'));
                    const heighbors = [[r - 1, c], [r, c + 1], [r + 1, c], [r, c - 1]];
                    for (const [nr, nc] of heighbors) {
                        if (
                            !visited.has([nr, nc].join('.')) &&
                            nr >= 0 && nr < graph.length &&
                            nc >= 0 && nc < graph[0].length &&
                            graph[nr][nc] === '1'
                        ) {
                            stack.push([nr, nc]);
                        }
                    }
                }
            }
        }

        for (let i = 0; i < grid.length; i += 1) {
            for (let j = 0; j < grid[i].length; j += 1) {
                const point = [i, j];
                if (grid[i][j] === '1' && !visited.has(point.join('.'))) {
                    dfs(point, grid);
                    islands += 1;
                }
            }
        }

        return islands;
    }
}
