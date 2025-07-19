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
var addTwoNumbers = function(l1, l2) {
    let stack1 = [], stack2 = [], stack3 = []

    let curr = l1
    while(curr){
        stack1.push(curr.val)
        curr = curr.next
    }
    curr = l2
    while(curr){
        stack2.push(curr.val)
        curr = curr.next
    }
    let tenFlag = false
    while(stack1.length || stack2.length || tenFlag){
        let sum = 0
        if(tenFlag) {
            sum++
            tenFlag = false
        }
        let n1 = stack1.pop()
        if(n1) sum+=n1
        let n2 = stack2.pop()
        if(n2) sum+=n2

        if(sum > 9){
            sum = sum%10
            tenFlag = true
        }
        stack3.push(sum)
    }
    console.log(stack3)
    let out = new ListNode(0)
    curr = out
    while(stack3.length){
        let currVal = stack3.pop()
        let currNode = new ListNode(currVal)
        curr.next = currNode
        curr = currNode
    }

    return out.next

};