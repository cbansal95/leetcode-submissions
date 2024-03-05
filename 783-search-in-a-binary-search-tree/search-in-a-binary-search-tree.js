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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let l = null,r = null
    if(root == null) return null
    if(root.val == val) return root
    if(root.val > val) {
        l = searchBST(root.left,val)
    }
    if(root.val < val) {
        r = searchBST(root.right,val)
    }

    if(l) return l; else return r
};