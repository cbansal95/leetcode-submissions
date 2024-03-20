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
var goodNodes = function (root) {
    let count = 0
    function dfs(root, max) {
        if (root == null) return
        dfs(root.left, Math.max(max, root.val))
        dfs(root.right, Math.max(max, root.val))
        if (root.val >= max) count++
    }

    dfs(root, root.val)
    return count
};