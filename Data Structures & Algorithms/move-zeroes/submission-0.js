class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let distance = 0;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] === 0) {
                distance += 1;
            } else {
                this.swap(nums, i - distance, i);
            }
        }

        nums.length - distance;
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
