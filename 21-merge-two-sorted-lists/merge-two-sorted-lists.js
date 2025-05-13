/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const output = new ListNode()
    let temp = output

    while(list1 && list2){
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val)
            temp = temp.next
            list1 = list1.next
        }
        else if (list2.val < list1.val) {
            temp.next = new ListNode(list2.val)
            temp = temp.next
            list2 = list2.next
        }
        else if (list1.val == list2.val) {
            temp.next = new ListNode(list1.val)
            temp = temp.next
            list1 = list1.next
            temp.next = new ListNode(list2.val)
            temp = temp.next
            list2 = list2.next
        }
    }
    while(list1) {
        temp.next = new ListNode(list1.val)
        temp = temp.next
        list1 = list1.next
    }
    while(list2) {
        temp.next = new ListNode(list2.val)
        temp = temp.next
        list2 = list2.next
    }
    return output.next
};