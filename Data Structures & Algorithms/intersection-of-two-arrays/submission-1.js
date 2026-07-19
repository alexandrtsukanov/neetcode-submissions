class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set = new Set(nums1);
        const intersection = new Set();
        const result = [];

        for (let i = 0; i < nums2.length; i += 1) {
            if (set.has(nums2[i]) && !intersection.has(nums2[i])) {
                result.push(nums2[i])
                intersection.add(nums2[i]);
            }
        }

        return result;
    }
}
