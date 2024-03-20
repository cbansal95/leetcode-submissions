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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return !subRoot
    return (isEqual(root,subRoot) || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot))
};
var isEqual = function(tree1,tree2){
    if(!tree1 || !tree2) return !tree1 && !tree2
    if((tree1 || {}).val !== (tree2 || {}).val) return false
    return isEqual(tree1.left, tree2.left) && isEqual(tree1.right,tree2.right)
}