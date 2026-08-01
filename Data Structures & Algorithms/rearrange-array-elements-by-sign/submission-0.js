class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    rearrangeArray(nums) {
        const result = new Array(nums.length);
        let indexPos = 0;
        let indexNeg = 1;

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] > 0) {
                result[indexPos] = nums[i];
                indexPos += 2;
            } else {
                result[indexNeg] = nums[i];
                indexNeg += 2;
            }
        }

        return result;
    }
}
