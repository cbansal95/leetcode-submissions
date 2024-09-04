# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        output = [-1,-1]
        first, last = None,None
        counter = 0
        while(head and head.next and head.next.next):
            a = head.val
            b = head.next.val
            c = head.next.next.val
            #identify critical point
            if (b>a and b>c) or (b<a and b<c):
                if first == None:
                    first = counter
                if last != None:
                    if output[0] == -1: 
                        output[0] = counter - last
                    else: 
                        output[0] = min(output[0], counter - last)
                last = counter
            counter+=1
            head=head.next
        if first != None and last != None and first != last:
            output[1] = last - first
        return output