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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let curr = root;
    let stack = [];
    let ans = [];
    let visitedNode = null;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peakNode = stack[stack.length - 1];

        if (peakNode.right && peakNode.right != visitedNode) {
            curr = peakNode.right;
        } else {
            ans.push(peakNode.val);
            visitedNode = stack.pop();
        }
    }

    return ans;


};