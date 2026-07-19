class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let start = 0;
        let shortest = Infinity;
        let sum = 0;
        let found = false;

        for (let end = 0; end < nums.length; end += 1) {
            sum += nums[end];

            while (sum >= target) {
                shortest = Math.min(shortest, end - start + 1);
                sum -= nums[start];
                start += 1;
                found = true;
            }
        }

        if (!found) return 0;

        return shortest;
    }
}
