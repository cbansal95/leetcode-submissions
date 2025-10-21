/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let l1 = leaves(root1), l2 = leaves(root2)
    if (l1.length !== l2.length) return false
    for (let i = 0; i< l1.length; i++){
        if(l1[i] !== l2[i]) return false
    }
    return true
};

function leaves(root){
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    let out = []
    out = [...out, ...leaves(root.left), ...leaves(root.right)]
    return out
}