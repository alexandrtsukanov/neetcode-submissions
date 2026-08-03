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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null)
            return null;
        if (key < root.val)
            root.left = this.deleteNode(root.left, key);
        else if (key > root.val)
            root.right = this.deleteNode(root.right, key);
        else {
            if (root.left === null && root.right === null) {
                return null;
            }
            else if (root.left === null) {
                return root.right;
            }
            else if (root.right === null) {
                return root.left;
            }
            else {
                let successor = this.findSubtreeMin(root.right);
                root.val = successor.val;
                root.right = this.deleteNode(root.right, successor.val);
            }
        }
        return root;
    }
    findSubtreeMin(node) {
        while (node !== null && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
