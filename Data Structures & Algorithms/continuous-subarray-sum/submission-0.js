class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        if (nums.length < 2) return false;

        let sum = 0;
        let map = new Map([[0, -1]]);

        for (let i = 0; i < nums.length; i += 1) {
            sum += nums[i];
            const rem = sum % k;
            if (map.has(rem)) {
                if (i - map.get(rem) > 1) {
                    return true;
                }
            } else {
                map.set(rem, i);
            }
        }

        return false;
    }
}
