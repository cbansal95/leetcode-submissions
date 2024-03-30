/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return new ListNode().next
    if (lists.length == 1) return lists[0]
    let final = lists[0]
    for (i = 1; i < lists.length; i++) {
        final = merge(final, lists[i])
    }
    return final
};

function merge(l1, l2) {
    let temp = new ListNode(null)
    let list = temp
    while (l1 && l2) {
        if (l1.val > l2.val) {
            list.next = new ListNode(l2.val)
            list = list.next
            l2 = l2.next
        } else if (l2.val > l1.val) {
            list.next = new ListNode(l1.val)
            list = list.next
            l1 = l1.next
        } else if (l2.val == l1.val) {
            list.next = new ListNode(l2.val)
            list = list.next
            l2 = l2.next
            list.next = new ListNode(l1.val)
            list = list.next
            l1 = l1.next
        }
    }
    if (l1) {
        list.next = l1
    }
    if (l2) {
        list.next = l2
    }
    return temp.next
}