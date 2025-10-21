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
var reverseList = function(head) {
    let nextLL = null
    let curr = head
    while(curr){
        if(nextLL == null){
            nextLL = {val: curr.val, next: null}
        } else {
            nextLL = {val: curr.val, next: nextLL}
        }
        curr = curr.next
    }
    return nextLL
};