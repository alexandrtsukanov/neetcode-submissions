class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const hashMap = new Map();

        for (let i = 0; i < arr.length; i += 1) {
            if (hashMap.has(arr[i])) {
                hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
            } else {
                hashMap.set(arr[i], 1);
            }
        }

        const frequencies = Array.from(hashMap.entries());
        let count = 0;

        for (let i = 0; i < frequencies.length; i += 1) {
            if (frequencies[i][1] === 1) {
                count += 1;
                if (count === k) {
                    return frequencies[i][0];
                }
            }
        }

        return '';
    }
}
