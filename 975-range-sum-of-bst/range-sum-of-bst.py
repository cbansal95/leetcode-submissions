# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        s = 0

        def dfs(root, s):
            if not root: return 0
            left = dfs(root.left, 0)
            if left: s+=left
            right = dfs(root.right, 0)
            if right: s+=right
            if root.val >= low and root.val <=high:
                s+=root.val
            return s
        return dfs(root, s)