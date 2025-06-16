/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = []
    let curr = head
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }
    let result = a => {
        if(!a.length) return null

        let i = Math.floor(a.length/2), v = a[i]
        let node = new TreeNode(v)

        node.left = result(a.slice(0,i))
        node.right = result(a.slice(i+1))

        return node
    }
    return result(arr)
};