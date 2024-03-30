/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let tempA = headA
    let tempB = headB
    let la = 0, lb = 0
    while(tempA){
        tempA = tempA.next
        la++
    }
    while(tempB){
        tempB = tempB.next
        lb++
    }
    tempA = headA
    tempB = headB
    let diff = Math.abs(la - lb)
    if(la > lb){
        while(diff){
            tempA = tempA.next
            diff--
        }
    } else if(lb > la){
        while(diff){
            tempB = tempB.next
            diff--
        }
    }
    while(tempA && tempB){
        if(tempA == tempB) return tempA
        else {
            tempA = tempA.next
            tempB = tempB.next
        }
    }
};