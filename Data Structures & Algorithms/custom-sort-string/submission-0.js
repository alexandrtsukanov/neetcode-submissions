class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const hashMap = new Map();

        for (let i = 0; i < order.length; i += 1) {
            hashMap.set(order[i], i);
        }

        const presented = [];
        const appended = [];

        for (let i = 0; i < s.length; i += 1) {
            if (hashMap.has(s[i])) {
                presented.push(s[i])
            } else {
                appended.push(s[i]);
            }
        }

        presented.sort((a, b) => hashMap.get(a) - hashMap.get(b));

        return presented.join('') + appended.join('');
    }
}
