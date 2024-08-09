/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
    console.log(l1,l2,carry)
    if(l1 == undefined && l2 == undefined && carry == 0) return null
    n1 = (l1 && l1.val) ? l1.val : 0
    n2 = (l2 && l2.val) ? l2.val : 0
    currSum = n1 + n2 + carry
    if(l1 && l2 && l1.next && l2.next) {
        return new ListNode(currSum%10, addTwoNumbers(l1.next, l2.next, Math.floor(currSum/10)))
    } else if (l1 && l1.next) {
        return new ListNode(currSum%10, addTwoNumbers(l1.next, undefined, Math.floor(currSum/10)))
    } else if (l2 && l2.next) {
        return new ListNode(currSum%10, addTwoNumbers(undefined, l2.next, Math.floor(currSum/10)))
    } else{
        return new ListNode(currSum%10, addTwoNumbers(undefined, undefined, Math.floor(currSum/10)))
    }
};

var addTwo = function(l1, l2, carry) {

}