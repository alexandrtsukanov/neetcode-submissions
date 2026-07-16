class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let distance = 0;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] === val) {
                distance += 1;
            } else {
                this.swap(nums, i - distance, i);
            }
        }

        return nums.length -= distance;
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
