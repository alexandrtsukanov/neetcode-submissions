class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        let start = 0;
        let sum = 0;
        let max = 0;

        for (let end = 0; end < nums.length; end += 1) {
            const rightNum = nums[end];
            sum += rightNum;
            while (rightNum * (end - start + 1) - sum > k) {
                const leftNum = nums[start];
                sum -= leftNum;
                start += 1;
            }
            max = Math.max(end - start + 1, max);
        }

        return max;
    }
}
