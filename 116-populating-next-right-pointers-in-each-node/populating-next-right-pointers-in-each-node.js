/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root
    let queue = [root]
    while (queue.length) {
        let nextQ = []
        while (queue.length) {
            let curr = queue.shift()
            curr.next = queue[0]||null
            if (curr && curr.left && curr.right) {
                nextQ.push(curr.left)
                nextQ.push(curr.right)
            }

        }
        queue = nextQ
    }
    return root
};