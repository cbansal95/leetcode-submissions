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
 let curr = head
    let newLL = null
    while(curr){
        if(newLL == null) {
            newLL = {val: curr.val, next: null}
        } else {
            newLL = {val: curr.val, next: newLL}
        }
        curr = curr.next
    }
    return newLL
};

function reverseIter(
    head
){

}