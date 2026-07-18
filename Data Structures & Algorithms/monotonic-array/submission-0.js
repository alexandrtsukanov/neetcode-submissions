class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        if (!nums.length) return false;

        let direction = 0;

        for (let i = 1; i < nums.length; i += 1) {
            if (!direction) {
                if (nums[i] > nums[i - 1]) {
                    direction = 1;
                } else if (nums[i] < nums[i - 1]) {
                    direction = -1;
                } else {
                    continue;
                }
            } else {
                if (direction === 1 && nums[i] < nums[i - 1]) {
                    return false;
                }
                if (direction === -1 && nums[i] > nums[i - 1]) {
                    return false;
                }
            }
        }

        return true;
    }
}
