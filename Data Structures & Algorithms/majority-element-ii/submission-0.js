class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const n = nums.length / 3;
        const map = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        const result = [];

        for (const [num, freq] of map.entries()) {
            if (freq > n) {
                result.push(num);
            }
        }

        return result;
    }
}
