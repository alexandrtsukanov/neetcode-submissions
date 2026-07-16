class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            for (let j = i + 1; j < nums.length; j += 1) {
                while (j > i + 1 && nums[j] === nums[j - 1]) {
                    j += 1;
                }
                const firstSum = nums[i] + nums[j];
                let l = j + 1;
                let r = nums.length - 1;
                while (l < r) {
                    const sum = firstSum + nums[l] + nums[r];
                    if (sum === target) {
                        result.push([nums[i], nums[j], nums[l], nums[r]]);
                        l += 1;
                        while (l < r && nums[l] === nums[l - 1]) {
                            l += 1;
                        }
                    } else {
                        if (sum < target) {
                            l += 1;
                        } else {
                            r -= 1;
                        }
                    }
                }
            }
        }

        return result;
    }
}
