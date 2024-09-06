# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        vals = {}
        for num in nums:
            vals[num] = True
        while head and head.val in vals:
            head = head.next
        curr = head
        while curr and curr.next:
            if curr.next.val in vals:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return head