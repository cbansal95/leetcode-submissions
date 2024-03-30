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
var sortList = function (head) {
    if (!head || !head.next) return head
    if (head && head.next && head.next.next == null) {
        if (head.val < head.next.val) return head; else {
            let x = head.next
            head.next = null
            x.next = head
            return x
        }
    }
    let mid = split(head)
    let left = head
    let temp = mid.next
    mid.next = null
    let right = temp

    left = sortList(left)
    right = sortList(right)
    return merge(left, right)
};

function split(head) {
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function merge(l1, l2) {
    let head = new ListNode(null)
    let temp = head
    while (l1 && l2) {
        if (l1.val > l2.val) {
            head.next = new ListNode(l2.val)
            head = head.next
            l2 = l2.next
        } else if (l2.val > l1.val) {
            head.next = new ListNode(l1.val)
            head = head.next
            l1 = l1.next
        } else if (l2.val == l1.val) {
            head.next = new ListNode(l1.val)
            head = head.next
            l1 = l1.next
            head.next = new ListNode(l2.val)
            head = head.next
            l2 = l2.next
        }
    }
    if (l1) head.next = l1
    if (l2) head.next = l2
    return temp.next
}