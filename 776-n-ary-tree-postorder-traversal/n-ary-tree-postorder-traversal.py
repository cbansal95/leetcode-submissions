"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        out = []

        def dfs(root):
            if not root:
                return None
            for child in root.children:
                dfs(child)
                out.append(child.val)
        dfs(root)
        if root:
            out.append(root.val)
        return out