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
var findBottomLeftValue = function(root) {
    if(!root) return null
    let queue = [root]
    let output = root
    while(queue.length){
        let curr = queue.shift()
        output = curr
        if(curr.right) queue.push(curr.right)
        if(curr.left) queue.push(curr.left)
    }
    return output.val
};