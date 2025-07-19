/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let second = slow.next
    slow.next = null
    function reverse(head) {
        let prev = null, curr = head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
    second = reverse(second)
    merge(head,second)
    function merge(l1, l2) {
        let l1Next = null;
        let l2Next = null;

        while (l2 !== null) {
            l1Next = l1.next;
            l2Next = l2.next;

            l1.next = l2;
            l2.next = l1Next;

            l1 = l1Next;
            l2 = l2Next;
        }
        return head
    }
};