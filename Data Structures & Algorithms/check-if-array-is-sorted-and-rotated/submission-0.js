class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let wasBreak = false;

        for (let i = 1; i < nums.length; i += 1) {
            if (nums[i] < nums[i - 1]) {
                if (wasBreak) {
                    return false;
                } else {
                    wasBreak = true;
                }
            }
            if (wasBreak && nums[i] > nums[0]) {
                return false;
            }
        }

        return true;
    }
}
