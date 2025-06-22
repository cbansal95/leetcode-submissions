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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let output = [], output2 = []

    const dfs = node => {
        if(!node) return []
        let left = dfs(node.left)
        let right = dfs(node.right)
        let temp = [...left, ...right]
        if(!temp.length){
            return [node.val]
        }
        for(let i = 0; i < temp.length; i++) {
            if(Array.isArray(temp[i])){
                temp[i] = [node.val, ...temp[i]]
            } else {
                temp[i] = [node.val, temp[i]]
            }
            
        }
        return temp
    }

    output = dfs(root)
    for(const o of output){
        if(Array.isArray(o)){
            output2.push(o.join("->"))
        } else {
            output2.push(String(o))
        }
        
    }
    return output2
};