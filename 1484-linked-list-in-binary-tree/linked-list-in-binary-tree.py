# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        def checkIfLL(node, head):
            if not node and not head:
                return True
            if not head:
                return True
            if not node:
                return False
            if (node.val == head.val):
                return checkIfLL(node.right,head.next) or checkIfLL(node.left, head.next)
            else: return False
        
        def dfs(root):
            if not root:
                return False
            return checkIfLL(root, head) or dfs(root.left) or dfs(root.right)
    
        return dfs(root)