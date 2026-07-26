class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const hashMap = new Map();

        for (let i = 0; i < s.length; i += 1) {
            if (hashMap.has(s[i])) {
                hashMap.set(s[i], hashMap.get(s[i]) + 1);
            } else {
                hashMap.set(s[i], 1);
            }
        }

        const result = [];
        const hashSet = new Set();

        for (let i = 0; i < order.length; i += 1) {
            hashSet.add(order[i]);
            if (hashMap.has(order[i])) {
                const amount = hashMap.get(order[i]);
                for (let j = 1; j <= amount; j += 1) {
                    result.push(order[i]);
                }
            }
        }

        for (let i = 0; i < s.length; i += 1) {
            if (!hashSet.has(s[i])) {
                result.push(s[i]);
            }
        }

        return result.join('');
    }
}
