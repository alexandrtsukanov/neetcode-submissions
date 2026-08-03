class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = {};
        for (let i = 0; i < numCourses; i += 1) {
            adj[i] = [];
        }
        for (const [course, prereq] of prerequisites) {
            adj[course].push(prereq);
        }

        const visited = new Set();
        const dfs = course => {
            if (visited.has(course)) {
                return false;
            }
            if (adj[course].length === 0) {
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
            return true;
        }

        for (let i = 0; i < numCourses; i += 1) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
