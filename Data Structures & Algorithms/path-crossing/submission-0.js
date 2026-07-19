class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        if (!path.length) return false;

        const set = new Set();
        let pos = [0, 0];
        set.add(pos.join('.'));

        for (const direction of path) {
            if (direction === 'N') pos[1] += 1;
            if (direction === 'S') pos[1] -= 1;
            if (direction === 'E') pos[0] += 1;
            if (direction === 'W') pos[0] -= 1;
            const joined = pos.join('.');
            if (set.has(joined)) return true;
            set.add(joined);
        }

        return false;
    }
}
