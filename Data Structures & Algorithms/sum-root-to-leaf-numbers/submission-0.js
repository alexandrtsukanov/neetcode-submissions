/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    sumNumbers(root) {
        let result = 0;

        const dfs = (node, slate) => {
            if (!node.left && !node.right) {
                slate.push(node.val);
                result += this.getNum(slate);
                slate.pop();
            }

            if (node.left) {
                slate.push(node.val);
                dfs(node.left, slate);
                slate.pop();
            }

            if (node.right) {
                slate.push(node.val);
                dfs(node.right, slate);
                slate.pop();
            }
        }

        dfs(root, []);

        return result;
    }
    getNum(arr) {
        let num = 0;
        for (let i = 0; i < arr.length; i += 1) {
            num += arr[i] * 10 ** (arr.length - 1 - i);
        }
        return num;
    }
}
