class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = {};
        for (let i = 0; i < numCourses; i += 1) {
            adj[i] = [];
        }
        for (const [course, prereq] of prerequisites) {
            adj[course].push(prereq);
        }

        const result = new Set();
        const visited = new Set();

        const dfs = course => {
            if (visited.has(course)) {
                return false;
            }
            if (adj[course].length === 0) {
                result.add(course);
                return true;
            }
            visited.add(course);
            for (const prereq of adj[course]) {
                if (!dfs(prereq)) {
                    return false;
                }
            }
            visited.delete(course);
            adj[course] = [];
            result.add(course);
            return true;
        }

        for (let i = 0; i < numCourses; i += 1) {
            if (!result.has(i)) {
                if (!dfs(i)) {
                    return [];
                }
            }
        }

        return Array.from(result);
    }
}
