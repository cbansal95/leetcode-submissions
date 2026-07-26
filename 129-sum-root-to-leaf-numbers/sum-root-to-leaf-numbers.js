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
var sumNumbers = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return root.val
    let arr = [], sum = 0
    let base = root.val.toString()
    arr.push(...test(base,root.left))
    arr.push(...test(base,root.right))
    console.log(arr)
    for(const a of arr){
        sum+=Number(a) 
    }
    return sum
};

function test(base, root){
    if(!root) return []
    if(!root.left && !root.right) return [base + root.val]
    let arr = []
    arr.push(...test(base+root.val,root.left))
    arr.push(...test(base+root.val,root.right))
    return arr
}