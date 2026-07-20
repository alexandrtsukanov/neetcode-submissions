class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        const result = [];
        let l = 0;
        let r = nums.length - 1;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] % 2 === 0) {
                result[l] = nums[i];
                l += 1;
            } else {
                result[r] = nums[i];
                r -= 1;
            }
        }

        return result;
    }
}
