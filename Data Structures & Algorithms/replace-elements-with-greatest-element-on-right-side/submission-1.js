class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const greaters = [-1];
        let max = -Infinity;

        for (let i = arr.length - 1; i > 0; i -= 1) {
            if (arr[i] > max) {
                max = arr[i];
            }
            greaters.push(max);
        }

        let lastIndex = greaters.length - 1;

        for (let i = 0; i < arr.length; i += 1) {
            arr[i] = greaters[lastIndex];
            lastIndex -= 1;
        }

        return arr;
    }
}