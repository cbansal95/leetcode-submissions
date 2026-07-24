/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let counter = 0, arr = [], curr = dummy
    while(curr){
        arr.push(curr)
        curr = curr.next
    }
    numNodes = arr.length
    arr[numNodes - (n+1)].next = arr[(numNodes - n) + 1] || null
    return dummy.next
};