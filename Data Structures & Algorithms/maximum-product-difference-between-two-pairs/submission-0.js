class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        if (nums.length < 4) return null;

        let max1 = -Infinity;
        let max2 = -Infinity;
        let min1 = Infinity;
        let min2 = Infinity;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] >= max1) {
                max2 = max1;
                max1 = nums[i];
            }
            if (nums[i] > max2 && nums[i] < max1) {
                max2 = nums[i];
            }
            if (nums[i] <= min1) {
                min2 = min1;
                min1 = nums[i];
            }
            if (nums[i] < min2 && nums[i] > min1) {
                min2 = nums[i];
            }
        }

        return max1 * max2 - min1 * min2;
    }
}
