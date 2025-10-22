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
var maxLevelSum = function(root) {
    let maxsum = root.val
    let maxlevel = 1, currlevel = 1
    let curr = [root]
    let next = []
    while(curr.length){
        let currSum = 0
        next = []
        for(const c of curr){
            currSum += c.val
            if(c.left) next.push(c.left)
            if(c.right) next.push(c.right)
        }
        if (currSum > maxsum) {
            maxsum = currSum
            maxlevel = currlevel
        }
        curr = next
        currlevel++
        
    }
    return maxlevel
};