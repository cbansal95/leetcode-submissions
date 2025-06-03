/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let length = 0, curr = head
    let sum = 0
    while(curr){
        length++
        curr = curr.next
    }
    let i = 0, temp = []
    curr = head
    while(curr){
        if (i >= length/2){
            temp.push(curr.val)
        }
        i++
        curr = curr.next
    }
    i = 0, curr = head
    while(i < length/2){
        let s = curr.val + temp.at(-1*(i+1))
        if (s > sum) sum = s
        i++
        curr = curr.next
    }
    return sum
};