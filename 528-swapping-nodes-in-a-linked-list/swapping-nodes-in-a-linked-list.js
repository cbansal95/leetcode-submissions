/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let temp = head
    let length = 0
    let v1, v2 = null
    let map = {}
    while(temp) {
        length++
        map[length] = temp.val
        temp = temp.next
    }
    const pos2 = length - (k-1)
    temp = head
    let i = 0
    while(temp) {
        i++
        if (i == k) {
            temp.val = map[pos2]
        }
        if (i==pos2) {
            temp.val = map[k]
        }
        temp = temp.next
    }
    return head
};