class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];

        for (let operation of operations) {
            if (operation === 'C') {
                record.pop();
            } else if (operation === 'D') {
                const lastScore = record[record.length - 1];
                if (!lastScore) {
                    continue;
                }
                record.push(lastScore * 2);
            } else if (operation === '+') {
                const lastScore = record[record.length - 1];
                const prelastScore = record[record.length - 2];
                if (!lastScore || !prelastScore) {
                    continue;
                }
                record.push(Number(lastScore) + Number(prelastScore));
            } else {
                record.push(operation)
            }
        }

        return record.reduce((sum, score) => sum + Number(score), 0);
    }
}
