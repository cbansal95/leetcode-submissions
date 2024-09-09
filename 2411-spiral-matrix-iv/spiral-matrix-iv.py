# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        out = []
        for i in range(m):
            out.append([-1 for j in range(n)])
        curr = head
        x,y = 0,0
        direction = 'R'

        def isValid(x,y):
            if x > -1 and y > -1 and x < m and y < n and out[x][y] == -1:
                return True
            return False
        
        def getNextPos(x,y,direction):
            match direction:
                case 'D':
                    nx = x + 1
                    if isValid(nx, y):
                        return nx,y,direction
                    return getNextPos(x,y,'L')
                case 'U':
                    nx = x - 1
                    if isValid(nx,y):
                        return nx,y,direction
                    return getNextPos(x,y,'R')
                case 'L':
                    ny = y - 1
                    if isValid(x,ny):
                        return x,ny,direction
                    return getNextPos(x,y,'U')
                case 'R':
                    ny = y + 1
                    if isValid(x,ny):
                        return x,ny,direction
                    return getNextPos(x,y,'D')

        while curr:
            out[x][y] = curr.val
            curr = curr.next
            if curr:
                x,y,direction = getNextPos(x,y,direction)
        return out