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
var oddEvenList = function(head) {
    if(!head) return head
    let flag = false
    let l1t = new ListNode()
    let l2t = new ListNode()
    let temp = head, l1 = l1t, l2 = l2t
    while(temp){
        if (flag){
            l1.next = new ListNode(temp.val)
            l1 = l1.next
        } else {
            l2.next = new ListNode(temp.val)
            l2 = l2.next
        }
        flag = !flag
        temp = temp.next
    }
    l1t = l1t.next
    l2t = l2t.next
    let out = new ListNode()
    let curr = out
    while(l2t){
        curr.next = new ListNode(l2t.val)
        l2t = l2t.next
        curr = curr.next
    }
    while(l1t){
        curr.next = new ListNode(l1t.val)
        l1t = l1t.next
        curr = curr.next
    }
    
    return out.next
};