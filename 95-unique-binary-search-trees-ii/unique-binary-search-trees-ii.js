/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n == 0) return []
    if (n == 1) return [new TreeNode(1)]

    function gt(start, end){
        if(start > end) return [null]
        const all_trees = []
        for(let i = start; i<=end; i++){
            const left_trees = gt(start, i-1)
            const right_trees = gt(i+1, end)

            for(const l of left_trees){
                for(const r of right_trees){
                    const curr = new TreeNode(i)
                    curr.left = l
                    curr.right = r
                    all_trees.push(curr)
                }
            }
        }
        return all_trees
    }
    return gt(1,n)
};