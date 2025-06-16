/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next) return null
    let fast = head
    let slow = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow == fast) break;
    }

    if(!fast||!fast.next) return null

    fast = head
    while(fast != slow) {
        fast = fast.next
        slow = slow.next
    }

    return slow
};