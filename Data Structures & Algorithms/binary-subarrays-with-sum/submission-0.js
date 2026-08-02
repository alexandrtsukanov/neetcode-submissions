class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        return this.getLen(nums, goal) - this.getLen(nums, goal - 1);
    }
    getLen(nums, n) {
        if (n < 0) {
            return 0;
        }

        let start = 0;
        let sum = 0;
        let len = 0;

        for (let end = 0; end < nums.length; end += 1) {
            sum += nums[end];
            while (sum > n) {
                sum -= nums[start];
                start += 1;
            }
            len += end - start + 1;
        }

        return len
    }
}
