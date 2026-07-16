class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return nums.sort((a, b) => a - b)
        const sort = (arr, l, r) => {
            if (l === r) {
                return arr;
            }
            if (arr[l] > arr[r]) {
                this.swap(arr, l, r);
            }
            const midIndex = Math.floor((r - l) / 2);
            return [
                ...this.sortArray(arr, l, midIndex),
                ...this.sortArray(arr, midIndex + 1, r),
            ]
        }

        return sort(nums, 0, nums.length - 1);
    }
    swap(arr, l, r) {
        const temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
    }
}
