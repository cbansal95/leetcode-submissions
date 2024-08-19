/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    const map = new Map()
    return dfs(map, node)
};

function dfs(map, node) {
    if (!node) return null

    if (map.get(node)) return map.get(node)
    let newNode = new Node(node.val)
    map.set(node, newNode)
    newNode.neighbors = []
    for (const n of node.neighbors) {
        newNode.neighbors.push(dfs(map, n))
    }
    return map.get(node)
}