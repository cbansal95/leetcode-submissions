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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true
    function balanceCheck(root){
        if(!root) return 0
        let leftH = root.left ? balanceCheck(root.left) : 0
        let rightH = root.right ? balanceCheck(root.right) : 0
        if(Math.abs(leftH - rightH) > 1) flag = false
        return(Math.max(leftH, rightH) + 1)
    }
    balanceCheck(root)
    return flag
};