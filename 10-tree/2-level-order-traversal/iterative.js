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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(!root) return [];
    let ans = [];
    let queue = [root];

    while (queue.length) {
        let queueSize = queue.length;
        let row = [];

        for (let i = 0; i < queueSize; i++) {
            let shiftElement = queue.shift();

            row.push(shiftElement.val);

            shiftElement.left && queue.push(shiftElement.left);
            shiftElement.right && queue.push(shiftElement.right);
        }

        ans.push(row);
    }

    return ans;
};