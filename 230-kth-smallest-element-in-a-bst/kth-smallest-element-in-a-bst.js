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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = []
    const dfs = (root)=>{
        if(!root) return null
        if (root.left){
            dfs(root.left)
        }
        arr.push(root.val)
        if (root.right) {
            dfs(root.right)
        }
    }
    dfs(root)
    return arr[k-1]
};