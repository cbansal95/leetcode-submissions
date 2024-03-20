/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let nodeA = null, nodeB = null, counter = 0
    let curr = list1
    while(curr) {
        if(counter+1 == a) nodeA = curr
        if(counter-1 == b) nodeB = curr
        counter++
        curr = curr.next
    }
    nodeA.next = list2
    curr = list2
    while(curr){
        if(curr.next == null){
            curr.next = nodeB
            break
        }
        curr = curr.next
    }
    return list1
};