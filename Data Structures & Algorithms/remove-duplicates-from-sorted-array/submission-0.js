class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let distance = 0;

        for (let i = 0; i < nums.length; i += 1) {
            while (nums[i + 1] === nums[i]) {
                distance += 1;
                i += 1;
            }
            this.swap(nums, i - distance, i);
        }

        return nums.length - distance;
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}