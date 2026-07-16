class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            this.swap(s, l, r);
            l += 1;
            r -= 1;
        }
    }
    swap(arr, l, r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
