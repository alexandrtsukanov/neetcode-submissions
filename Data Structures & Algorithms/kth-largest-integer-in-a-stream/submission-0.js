class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinPriorityQueue();
        this.k = k;
        for (let i = 0; i < nums.length; i += 1) {
            this.heap.enqueue(nums[i]);
        }
        while(this.heap.size() > k) {
            this.heap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);
        if (this.heap.size() > this.k) {
            this.heap.dequeue();
        }
        return  this.heap.front();
    }
}
