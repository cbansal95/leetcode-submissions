/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const less = [], more = []
    let temp = head
    while(temp) {
        if(temp.val < x) less.push(temp.val); else more.push(temp.val)
        temp = temp.next
    }
    const final = [...less, ...more]
    let output = new ListNode()
    temp = output
    for(let i = 0; i < final.length; i++){
        temp.next = new ListNode(final[i])
        temp = temp.next
    }
    return output.next
};