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
    goodNodes(root) {
        const dfs = (node, max) => {
            if (!node) {
                return 0;
            }
            let good = 0;
            if (node.val >= max) {
                good = 1;
            }
            max = Math.max(node.val, max);
            return dfs(node.left, max) + dfs(node.right, max) + good;
        }

        return dfs(root, -Infinity);
    }
}
