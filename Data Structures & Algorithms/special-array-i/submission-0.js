class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        for (let i = 1; i < nums.length; i += 1) {
            if (
                (nums[i - 1] % 2 === 1 && nums[i] % 2 === 1) ||
                (nums[i - 1] % 2 === 0 && nums[i] % 2 === 0)
            ) {
                return false;
            }
        }

        return true;
    }
}
