class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        if (nums.length === 0) return 0;

        let maxInc = 1;
        let maxDec = 1;
        let currentInc = 1;
        let currentDec = 1;

        for (let i = 1; i < nums.length; i += 1) {
            if (nums[i] > nums[i - 1]) {
                currentInc += 1;
                maxInc = Math.max(currentInc, maxInc);
            }
            if (nums[i] < nums[i - 1]) {
                currentDec += 1;
                maxDec = Math.max(currentDec, maxDec);
            }
            if (nums[i] <= nums[i - 1]) currentInc = 1;
            if (nums[i] >= nums[i - 1]) currentDec = 1;
        }

        return Math.max(maxInc, maxDec);
    }
}
