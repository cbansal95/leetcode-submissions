/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0
    function dfs(node, depth) {
        
        if (!node) {
            return
        }
        if (node.children) {
            for (const child of node.children) {
                dfs(child, depth + 1)
            }
        }
        max = Math.max(max, depth)
    }
    dfs(root, 1)
    return max
};