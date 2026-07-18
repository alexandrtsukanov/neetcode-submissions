class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const map = new Map();
        for (let i = 0; i < arr.length; i += 1) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        }
        let max = -Infinity;
        for (const [el, freq] of map.entries()) {
            if (el === freq && el > max) {
                max = el;
            }
        }
        if (max === -Infinity) return -1;
        return max;
    }
}
