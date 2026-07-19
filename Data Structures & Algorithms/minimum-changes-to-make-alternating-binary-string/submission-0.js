class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        const arr0first = [];
        const arr1first = [];
        let count0first = 0;
        let count1first = 0;

        for (let i = 0; i < s.length; i += 1) {
            if (i % 2 === 0) {
                arr0first.push('0');
            } else {
                arr0first.push('1');
            }
        }

        for (let i = 0; i < s.length; i += 1) {
            if (i % 2 === 0) {
                arr1first.push('1');
            } else {
                arr1first.push('0');
            }
        }

        for (let i = 0; i < s.length; i += 1) {
            if (s[i] !== arr0first[i]) {
                count0first += 1;
            }
            if (s[i] !== arr1first[i]) {
                count1first += 1;
            }
        }

        return Math.min(count0first, count1first);
    }
}
