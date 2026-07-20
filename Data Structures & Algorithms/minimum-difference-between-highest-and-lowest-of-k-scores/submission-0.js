class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);

        let min = nums[k - 1] - nums[0];

        for (let i = k; i < nums.length; i += 1) {
            const start = nums[i - k + 1];
            const end = nums[i];
            const diff = end - start;
            if (diff < min) {
                min = diff;
            }
        }

        return min;
    }
}
