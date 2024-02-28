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
var maxAncestorDiff = function (root) {
    let maxdiff = 0
    function dfs(root) {
        if (!root || root == null) return []
        let temp = [root.val]
        if (root.right) {
            temp = temp.concat(dfs(root.right))
        }
        if (root.left) temp = temp.concat(dfs(root.left))
        let diffArr = temp.map(t => Math.abs(root.val - t))
        if (Math.max(...diffArr) > maxdiff) maxdiff = Math.max(...diffArr)
        console.log(root.val, temp)
        return [Math.max(...temp), Math.min(...temp)]
    }
    dfs(root)
    return maxdiff

};