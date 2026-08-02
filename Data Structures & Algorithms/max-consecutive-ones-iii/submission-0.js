class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let max = 0;
        let start = 0;
        let currentOnes = 0;
        let currentZeroes = 0;

        for (let end = 0; end < nums.length; end += 1) {
            const rightNum = nums[end];
            if (rightNum === 1) {
                currentOnes += 1;
            } else {
                currentZeroes += 1;
            }
            while (currentZeroes > k) {
                const leftNum = nums[start];
                if (leftNum === 1) {
                    currentOnes -= 1;
                } else {
                    currentZeroes -= 1;
                }
                start += 1;
            }
            max = Math.max(max, end - start + 1);
        }

        return max;
    }
}
