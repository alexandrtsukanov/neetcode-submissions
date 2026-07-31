class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums) {
        const map = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        let result = 0;

        for (const count of map.values()) {
            if (count === 1) {
                return -1;
            }

            result += this.getRemovalsAmount(count);
        }

        return result;
    }
    getRemovalsAmount(num) {
        if (num % 3 === 0) return num / 3;
        if (num % 3 === 1) return (num - 4) / 3 + 2;
        if (num % 3 === 2) return Math.floor(num / 3) + 1;
    }
}
