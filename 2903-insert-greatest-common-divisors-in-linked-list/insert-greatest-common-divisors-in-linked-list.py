# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        #gcm = []
        def findgcm(x,y):
            if x == y:
                return x
            target = x
            if y < x:
                target = y
            if y%target == 0 and x%target == 0:
                return target
            max = 1
            for i in range(1,target):
                if x%i == 0 and y%i == 0:
                    max = i
            return max

        while curr:
            if curr and curr.next:
                nextNode = curr.next
                gcm = findgcm(curr.val,curr.next.val)
                newNode = ListNode(gcm,curr.next)
                curr.next = newNode
                curr = nextNode
            else:
                break
        return head