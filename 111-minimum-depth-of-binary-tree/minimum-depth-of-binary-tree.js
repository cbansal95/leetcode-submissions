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
var minDepth = function(root) {
    function minRoute(root){
        if(!root) return 0
        let leftH = root.left ? minRoute(root.left) + 1 : null
        let rightH = root.right ? minRoute(root.right) + 1 : null
        if(leftH == null && rightH == null) return 1
        if(leftH == null) return rightH
        if(rightH == null) return leftH
        return(leftH > rightH ? rightH : leftH)
    }

    return minRoute(root)
};