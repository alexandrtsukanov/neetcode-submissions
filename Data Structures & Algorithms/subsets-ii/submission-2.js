class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const result = [];

        const dfs = (arr, i, slate) => {
            if (i >= arr.length) {
                result.push([...slate]);
                return;
            }

            slate.push(arr[i]);
            dfs(arr, i + 1, slate);
            slate.pop();

            while (i + 1 < arr.length && arr[i + 1] === arr[i]) {
                i += 1;
            }

            dfs(arr, i + 1, slate);
        }

        dfs(nums, 0, []);

        return result;
    }
}
