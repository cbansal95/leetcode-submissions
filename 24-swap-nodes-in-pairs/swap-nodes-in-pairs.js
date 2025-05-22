/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head

    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy

    while(head && head.next) {
        let a = head
        let b = head.next

        a.next = b.next
        b.next = a
        prev.next = b

        prev = a
        head = a.next
    }
    return dummy.next
};