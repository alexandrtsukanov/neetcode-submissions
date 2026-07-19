class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const sort = (arr, left, right) => {
            if (left >= right) {
                return;
            }
            let l = left;
            let r = right;
            let pivotIndex = Math.floor((left + right) / 2);
            const pivot = arr[pivotIndex];

            while (l <= r) {
                while (arr[l] < pivot) {
                    l += 1;
                }
                while (arr[r] > pivot) {
                    r -= 1;
                }
                if (l <= r) {
                    this.swap(arr, l, r);
                    l += 1;
                    r -= 1;
                }
            }

            sort(arr, left, r);
            sort(arr, l, right);
        }

        sort(nums, 0, nums.length - 1);

        return nums;
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
