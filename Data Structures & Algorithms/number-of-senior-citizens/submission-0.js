class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;

        for (let i = 0; i < details.length; i += 1) {
            const age = Number(details[i].substring(11, 13));
            if (age > 60) {
                count += 1;
            }
        }

        return count;
    }
}
