class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const map = new Map();
        let result = 0;

        for (let i = 0; i < nums.length; i += 1) {
            if (map.has(nums[i])) {
                result += map.get(nums[i]);
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        return result;
    }
}
