class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {
        nums.sort(this.compare);

        let wasNonZero = false;
        let strings = [];

        nums.forEach((num, i, arr) => {
            if (i === arr.length - 1 && !wasNonZero && num === 0) {
                strings = ['0'];
                return;
            }
            if (num !== 0) {
                wasNonZero = true;
            }
            strings.push(num.toString());
        })
        
        return strings.reduce((acc, curr) => acc + curr, '');
    }
    compare(n1, n2) {
        const s1 = n1.toString();
        const s2 = n2.toString();

        if (Number(s1 + s2) > Number(s2 + s1)) {
            return -1;
        } else {
            return 1;
        }
    }
}
