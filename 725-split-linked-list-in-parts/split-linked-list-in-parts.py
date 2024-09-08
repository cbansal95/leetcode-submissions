# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        curr = head
        length = 0
        out = []
        while curr:
            curr = curr.next
            length+=1
        
        minEach = length//k
        extras = length%k
        numNodes = [minEach] * k
        for i in range(extras):
            numNodes[i]+=1
        
        curr = head
        #print(minEach, extras, numNodes)
        for num in numNodes:
            count = 1
            out.append(curr)
            while count < num:
                if curr:
                    curr = curr.next
                count+=1
            if curr:
                temp = curr.next
                curr.next = None
                curr = temp
        return out