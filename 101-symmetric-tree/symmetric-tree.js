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

function compareFunc(a,b){
    if(!a && !b) return true
    try {
        if(a.val != b.val) return false
    } catch {
        return false
    }
    
    return (compareFunc(a.right, b.left) && compareFunc(a.left,b.right))
}
var isSymmetric = function(root) {
    if(!root) return true
    if(!root.left && !root.right) return true
    return compareFunc(root.right, root.left)
};
