class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        let sum = 0;

        for (let i = 0; i < k; i += 1) {
            sum += arr[i];
        }
        const average = sum / k;
        if (average >= threshold) {
            count += 1;
        }

        for (let i = k; i < arr.length; i += 1) {
            sum += arr[i];
            sum -= arr[i - k];
            const average = sum / k;
            if (average >= threshold) {
                count += 1;
            }
        }

        return count;
    }
}
