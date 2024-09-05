# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        arr = []
        arr2 = []
        out = [root.val]
        arr.append(root)
        while len(arr):
            curr = arr.pop()
            if curr.left:
                arr2.append(curr.left)
            if curr.right:
                arr2.append(curr.right)
            if len(arr) == 0 and arr2:
                aaa = 0
                for node in arr2:
                    aaa+=node.val
                out.append(aaa/len(arr2))
                arr = arr2
                arr2 = []
        return out