/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let curr = head, counter = 0
    while(curr && counter < k) {
        curr = curr.next
        counter++
    }
    if (counter < k) return head
    else {
        curr = reverseKGroup(curr, k)
        while (counter-- > 0) {
            let temp = head.next
            head.next = curr
            curr = head
            head = temp
        }
        return curr
    }
};