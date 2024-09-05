# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k==0:
            return head
        
        length = 1
        curr = head
        while curr.next:
            length+=1
            curr = curr.next
        k = k%length

        curr.next = head

        tempNode = head
        for _ in range(length - k - 1):
            tempNode = tempNode.next
        answer = tempNode.next
        tempNode.next = None

        return answer
        

        