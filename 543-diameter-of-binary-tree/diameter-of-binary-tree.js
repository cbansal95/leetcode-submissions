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
var diameterOfBinaryTree = function(root) {
    let max = 0

    function dfs(root){
        if(root == null) return 0
        let leftH = dfs(root.left) || 0
        let rightH = dfs(root.right) || 0
        let currentHeight = leftH + rightH
        if(currentHeight > max) max = currentHeight
        return Math.max(leftH + 1, rightH + 1)
    }
    dfs(root)
    return max
};