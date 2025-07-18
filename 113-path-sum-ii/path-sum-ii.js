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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ret = []
    function dfs(node,pathSum,path){
        if(!node) return
        pathSum += node.val
        path.push(node.val)

        if(!node.left && !node.right && pathSum == targetSum){
            ret.push([...path])
        }
        dfs(node.left, pathSum, path)
        dfs(node.right, pathSum, path)
        path.pop()
    }
    dfs(root, 0, [])
    return ret
};