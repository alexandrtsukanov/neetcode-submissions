class Solution {
    /**
     * @param {number[][]} firstList
     * @param {number[][]} secondList
     * @return {number[][]}
     */
    intervalIntersection(firstList, secondList) {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < firstList.length && j < secondList.length) {
            const [start1, end1] = firstList[i];
            const [start2, end2] = secondList[j];
            const start = Math.max(start1, start2);
            const end = Math.min(end1, end2);
            if (end >= start) {
                result.push([start, end]);
            }
            if (end1 < end2) {
                i += 1
            } else {
                j += 1;
            }
        }

        return result;
    }
}
