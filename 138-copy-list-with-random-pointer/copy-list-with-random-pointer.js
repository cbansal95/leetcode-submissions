/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const nodeMap = new Map()
    let curr = head
    while (curr) {
        nodeMap.set(curr, new Node(curr.val, null, null))
        curr = curr.next
    }
    curr = head
    while (curr) {
        let currClone = nodeMap.get(curr)
        if (curr.next == null) {
            currClone.next = null
        } else {
            let nextClone = nodeMap.get(curr.next)
            currClone.next = nextClone
        }
        if (curr.random == null) {
            currClone.random = null
        } else {
            let randomClone = nodeMap.get(curr.random)
            currClone.random = randomClone
        }

        curr = curr.next
    }
    return nodeMap.get(head)
};