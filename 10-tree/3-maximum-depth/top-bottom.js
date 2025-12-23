/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let maxDepth = 0;

    let traversal = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth);

        curr.left && traversal(curr.left, depth + 1)
        curr.right && traversal(curr.right, depth + 1)
    }

    traversal(root, 1);

    return maxDepth;
};