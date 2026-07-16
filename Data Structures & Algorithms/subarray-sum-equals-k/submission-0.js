class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        const map = new Map([[0, 1]]);
        let sum = 0;
        
        for (let i = 0; i < nums.length; i += 1) {
            sum += nums[i];
            const diff = sum - k;

            if (map.has(diff)) {
                count += map.get(diff);
            }

            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1);
            } else {
                map.set(sum, 1);
            }
        }

        return count;
    }
}
