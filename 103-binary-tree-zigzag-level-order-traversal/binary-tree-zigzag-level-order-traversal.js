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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let flag = true, output = [], nodes = []
    nodes.push(root)
    while(nodes.length){
        let temp = []
        let nextNodes = []
        while(nodes.length) {
            let curr = nodes.shift()
            temp.push(curr.val)
            if(curr.left) nextNodes.push(curr.left)
            if(curr.right) nextNodes.push(curr.right)
        }
        if(flag){
            output.push(temp)
        } else {
            output.push(temp.reverse())
        }
        flag = !flag
        nodes = nextNodes
    }
    return output
};