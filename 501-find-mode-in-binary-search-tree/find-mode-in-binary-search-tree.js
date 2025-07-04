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
 * @return {number[]}
 */
var findMode = function(root) {
    let currentVal = null, currentCount = 0, maxCount = 0, modes = []

    function inOrderTraversal(node) {
        if(!node) return

        inOrderTraversal(node.left)

        if (node.val == currentVal) {
            currentCount++
        } else {currentCount = 1}
        if (currentCount == maxCount) {modes.push(node.val)} else if (currentCount > maxCount) {
            maxCount = currentCount
            modes = [node.val]
        }
        currentVal = node.val

        inOrderTraversal(node.right)
    }
    inOrderTraversal(root)
    return modes
};