function findMax() {

}
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
var maxPathSum = function (root) {
    let max = -Infinity
    let dfs = function(root){
        if(root == null) return -Infinity
        if(root.right == null && root.left == null) {
            max = Math.max(max, root.val)
            return root.val
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        max = Math.max(max, root.val, (root.left || {}).val ?? -Infinity, (root.right || {}).val ?? -Infinity, left ?? -Infinity, right ?? -Infinity, 
        (root.val + (left ?? -Infinity)), (root.val + (right ?? -Infinity)), (root.val + (left ?? -Infinity) +(right ?? -Infinity)))
        return Math.max(root.val, root.val+left, root.val+right)

    }
    dfs(root)
    return max
};
var maxPathSum1 = function (root) {
    console.log(root)
    if (root == null) return null
    //if(root.right == null && root.left == null) return null
    let left = maxPathSum(root.left)
    let right = maxPathSum(root.right)
    // if(left == null) left = -Infinity
    // if(right == null) right = -Infinity
    let testnums = [root.val, left, right, (root.val + left + right), (root.val + left), (root.val + right)]
    testnums = testnums.filter((nn) => nn != null)
    console.log(testnums)
    return Math.max(...testnums)
};