class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const hashmap = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            if (hashmap.has(nums[i])) {
                hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
            } else {
                hashmap.set(nums[i], 1);
            }
        }

        function comparator(a, b){
            if (hashmap.get(a) > hashmap.get(b)) {
                return 1;
            } else if (hashmap.get(a) < hashmap.get(b)) {
                return -1;
            } else {
                return a > b ? -1 : 1;
            }
        }

        return nums.sort(comparator);
    }
}
