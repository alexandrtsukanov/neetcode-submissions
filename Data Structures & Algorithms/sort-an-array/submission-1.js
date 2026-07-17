class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) {
            return nums;
        }

        const pivotIndex = Math.floor(nums.length / 2);
        const pivot = nums[pivotIndex];
        const smaller = [];
        const greater = [];

        for (let i = 0; i < nums.length; i += 1) {
            if (i === pivotIndex) {
                continue;
            }
            if (nums[i] < pivot) {
                smaller.push(nums[i]);
            } else {
                greater.push(nums[i]);
            }
        }

        return [
            ...this.sortArray(smaller),
            pivot,
            ...this.sortArray(greater),
        ];
    }
}
