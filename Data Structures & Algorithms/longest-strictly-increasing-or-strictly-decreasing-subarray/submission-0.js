class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let maxInc = 1;
        let maxDec = 1;
        let currentInc = 1;
        let currentDec = 1;

        for (let i = 0; i < nums.length - 1; i += 1) {
            if (nums[i + 1] > nums[i]) {
                currentInc += 1;
                maxInc = Math.max(maxInc, currentInc);
            }
            if (nums[i + 1] < nums[i]) {
                currentDec += 1;
                maxDec = Math.max(maxDec, currentDec);            
            }
            if (nums[i + 1] <= nums[i]) currentInc = 1;
            if (nums[i + 1] >= nums[i]) currentDec = 1
        }

        return Math.max(maxInc, maxDec);
    }
}
