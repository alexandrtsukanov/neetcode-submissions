class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const sums = new Array(nums.length);
        let leftSum = 0;
        let rightSum = 0;

        for (let i = nums.length - 1; i >= 0; i -= 1) {
            sums[i] = rightSum;
            rightSum += nums[i];
        }

        for (let i = 0; i < nums.length; i += 1) {
            if (leftSum === sums[i]) {
                return i;
            } 
            leftSum += nums[i];
        }

        return -1;
    }
}
