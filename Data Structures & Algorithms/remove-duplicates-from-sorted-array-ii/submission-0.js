class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let distance = 0;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
                while (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
                    distance += 1;
                    i += 1;
                }
            }
            this.swap(nums, i - distance, i);
        }

        nums.length -= distance;
        
        return nums.length;
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    };
}
