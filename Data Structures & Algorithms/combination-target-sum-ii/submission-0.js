class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const result = [];

        const dfs = (arr, i, slate, sum) => {
            if (sum === target) {
                result.push([...slate]);
                return;
            }

            if (sum > target || i >= arr.length) {
                return;
            }

            slate.push(arr[i]);
            dfs(arr, i + 1, slate, sum + arr[i]);
            slate.pop();

            while (i + 1 < arr.length && arr[i + 1] === arr[i]) {
                i += 1;
            }

            dfs(arr, i + 1, slate, sum);
        }

        dfs(candidates, 0, [], 0);

        return result;
    }
}
