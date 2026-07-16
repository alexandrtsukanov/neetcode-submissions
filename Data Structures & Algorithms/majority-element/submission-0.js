class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = 0;
        let current;

        for (let i = 0; i < nums.length; i += 1) {
            if (majority === 0) {
                current = nums[i];
            }
            majority += nums[i] === current ? 1 : -1;
        }

        return current;
    }
}
