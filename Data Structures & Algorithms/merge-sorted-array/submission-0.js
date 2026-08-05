class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m - 1;
        let j = n - 1;
        let commonIndex = m + n - 1;

        while (j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[commonIndex] = nums1[i];
                i -= 1;
            } else {
                nums1[commonIndex] = nums2[j];
                j -= 1;
            }
            commonIndex -= 1;
        }
    }
}
