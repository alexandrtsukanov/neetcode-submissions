class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        let longest = 0;
        let start = 0;
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (let end = 0; end < nums.length; end += 1) {
            minHeap.push([nums[end], end]);
            maxHeap.push([nums[end], end]);
        
            while (maxHeap.front()?.[0] - minHeap.front()?.[0] > limit) {
                start += 1;
                while (!maxHeap.isEmpty() && maxHeap.front()[1] < start) {
                    maxHeap.pop();
                }
                while (!minHeap.isEmpty() && minHeap.front()[1] < start) {
                    minHeap.pop();
                }
            }

            longest = Math.max(end - start + 1, longest);
        }

        return longest;
    }
}
