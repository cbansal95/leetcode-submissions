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
var countNodes = function (root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1
    let left = checkDepthLeft(root.left), right = checkDepthRight(root.right)
    if(left == right) return (2**left) - 1
    return 1 + countNodes(root.left) + countNodes(root.right)

};
function checkDepthRight(root) {
    if(!root) return 1
    return checkDepthRight(root.right) + 1
}
function checkDepthLeft(root) { 
    if(!root) return 1
    return checkDepthLeft(root.left) + 1
}