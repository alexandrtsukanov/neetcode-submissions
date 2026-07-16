class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                const rightShift = this.isPal(s, l + 1, r);
                const leftShift = this.isPal(s, l, r - 1);
                return leftShift || rightShift;
            }
            l += 1;
            r -= 1;
        }

        return true;
    }
    isPal(str, l, r) {
        while (l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    }
}
