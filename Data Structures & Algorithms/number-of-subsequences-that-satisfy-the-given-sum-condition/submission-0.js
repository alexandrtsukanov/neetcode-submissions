class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        nums.sort((a, b) => a - b);

        const MOD = 10 ** 9 + 7;
        let count = 0;
        let l = 0;
        let r = nums.length - 1;

        const power = new Array(nums.length).fill(1); 

        for (let i = 1; i < nums.length; i += 1) {
            power[i] = (power[i - 1] * 2) % MOD;
        }

        while (l <= r) {
            const currentSum = nums[l] + nums[r];
            if (currentSum <= target) {
                count = (count + power[r - l]) % MOD;
                l += 1;
            } else {
                r -= 1;
            }
        }

        return count;
    }
}