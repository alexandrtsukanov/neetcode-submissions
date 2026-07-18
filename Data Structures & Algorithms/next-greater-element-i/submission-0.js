class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const result = new Array(nums1.length);

        for (let i = 0; i < nums1.length; i += 1) {
            let index;
            let found = false;
            for (let j = 0; j < nums2.length; j += 1) {
                if (index !== undefined && nums2[j] > nums1[i]) {
                    result[i] = nums2[j];
                    found = true;
                    break;
                }
                if (nums2[j] === nums1[i]) {
                    index = j;
                }
            }
            if (!found) {
                result[i] = -1;
            }
        }

        return result;
    }
}
