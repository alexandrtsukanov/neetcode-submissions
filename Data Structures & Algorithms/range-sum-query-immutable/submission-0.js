class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sum = 0;

        for (let i = left; i <= right; i += 1) {
            sum += this.nums[i]
        }

        return sum;
    }
}
