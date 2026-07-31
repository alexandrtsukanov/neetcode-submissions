class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;

        this.reverse(nums, 0, nums.length - 1);
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, nums.length - 1);
    }
    reverse(arr, l, r) {
        while (l < r) {
            const temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l += 1;
            r -= 1;
        }
    }
}
