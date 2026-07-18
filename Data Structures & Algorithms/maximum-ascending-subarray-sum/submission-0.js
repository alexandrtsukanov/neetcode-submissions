class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let max = nums[0];
        let current = nums[0];

        for (let i = 1; i < nums.length; i += 1) {
            if (nums[i] > nums[i - 1]) {
                current += nums[i];
                max = Math.max(current, max);
            } else {
                current = nums[i];
            }
        }

        return max;
    }
}
