class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (i === arr.length - 1) {
                arr[i] = -1;
                break;
            }
            let max = -Infinity;
            for (let j = i + 1; j < arr.length; j += 1) {
                if (arr[j] > max) {
                    max = arr[j];
                }
            }
            arr[i] = max;
        }

        return arr;
    }
}
