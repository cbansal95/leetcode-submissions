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
var removeZeroSumSublists = function(head) {
    let dummy = {}
    dummy.next = head
    let pSum = 0
    let map = new Map()
    map.set(pSum, dummy)
    while(head){
        pSum+=head.val
        if(map.has(pSum)){
            let toRemove = map.get(pSum).next, rSum = pSum
            while(toRemove !== head){
                rSum+= toRemove.val
                map.delete(rSum)
                toRemove = toRemove.next
            }
            map.get(pSum).next = head.next
        } else {
            map.set(pSum, head)
        }
        head = head.next
    }
    return dummy.next
};