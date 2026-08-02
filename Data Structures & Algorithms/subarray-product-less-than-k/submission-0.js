class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let start = 0;
        let count = 0;
        let product = 1;

        for (let end = 0; end < nums.length; end += 1) {
            product *= nums[end];
            while (start <= end && product >= k) {
                product /= nums[start];
                start += 1;
            }
            count += end - start + 1;
        }
        
        return count;
    }
}
