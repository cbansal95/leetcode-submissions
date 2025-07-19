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
var mergeNodes = function(head) {
    let pointer1 = head
    let pointer2 = head
    while(pointer1 !== null){
        if(pointer1.val == 0){
            pointer2 = pointer1.next
            if(pointer2 == null) break
            sum = 0
            while(pointer2 !== null && pointer2.val !== 0){
                sum+=pointer2.val
                pointer2 = pointer2.next
            }
            pointer1.next = new ListNode(sum)
            pointer1 = pointer1.next
            pointer1.next = pointer2
        }
        pointer1 = pointer1.next
    }
    let temp = new ListNode(0, head)
    pointer1 = temp
    pointer2 = pointer1.next
    while(pointer1 !== null && pointer2 !== null){
        if(pointer2.val == 0){
            pointer2 = pointer2.next
            pointer1.next = pointer2
            continue
        }
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return temp.next
};