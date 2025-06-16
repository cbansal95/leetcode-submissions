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
var sumOfLeftLeaves = function(root) {
    let sum = 0

    function dfs(node){
        if (!node) return
        if(node.left){
            if(!node.left.right && !node.left.left) {
                sum = sum + node.left.val
            } else {
                dfs(node.left)
            }
        }
        dfs(node.right)
    }
    dfs(root)
    return sum
};