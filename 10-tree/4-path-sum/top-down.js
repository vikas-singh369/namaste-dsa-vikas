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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let ans = false;
    if (!root) return ans;

    const traversal = (curr, currSum) => {
        if (!curr) return;
        let newSum = currSum + curr.val;

        if (!curr.left && !curr.right) {
            if (newSum === targetSum) {
                ans = ans || true;
            }
        }

        curr.left && traversal(curr.left, newSum);
        curr.right && traversal(curr.right, newSum);
    }

    traversal(root, 0);

    return ans;
};