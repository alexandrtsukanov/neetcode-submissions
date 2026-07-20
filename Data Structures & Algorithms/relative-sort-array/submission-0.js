class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        const map = new Map();
        const set = new Set(arr2);
        const rest = [];
        for (let i = 0; i < arr1.length; i += 1) {
            map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
            if (!set.has(arr1[i])) {
                rest.push(arr1[i]);
            }
        }
        const result = [];
        for (let i = 0; i < arr2.length; i += 1) {
            const amount = map.get(arr2[i]);
            for (let j = 1; j <= amount; j += 1) {
                result.push(arr2[i]);
            }
        }

        rest.sort((a, b) => a - b);

        return result.concat(rest);
    }
}
