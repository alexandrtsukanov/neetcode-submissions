class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
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
            dfs(arr, i, slate, sum + arr[i]);
            slate.pop();

            dfs(arr, i + 1, slate, sum);
        }

        dfs(nums, 0, [], 0);

        return result;
    }
}
