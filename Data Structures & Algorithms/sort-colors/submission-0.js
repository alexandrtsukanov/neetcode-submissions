class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const COLORS_NUM = 3;
        const counts = new Array(COLORS_NUM).fill(0);

        for (let i = 0; i < nums.length; i += 1) {
            counts[nums[i]] += 1;
        }

        let index = 0;
        for (let i = 0; i < counts.length; i += 1) {
            while (counts[i] > 0) {
                nums[index] = i;
                counts[i] -= 1;
                index += 1;
            }
        }
    }
}
