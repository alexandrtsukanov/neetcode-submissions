class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let max = -1;
        let result = '';

        for (let i = 2; i < num.length; i += 1) {
            if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
                if (num[i] > max) {
                    max = num[i];
                    result = `${num[i]}${num[i]}${num[i]}`;
                }
            }
        }

        return result;
    }
}
