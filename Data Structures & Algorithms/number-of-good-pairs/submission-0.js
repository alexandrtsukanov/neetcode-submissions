class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const map = new Map();
        let result = 0;

        for (let i = 0; i < nums.length; i += 1) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for (const frequency of map.values()) {
            result += Math.floor(frequency * (frequency - 1) / 2);
        }

        return result;
    }
}
