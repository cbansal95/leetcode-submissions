# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        if root == None: return []

        output = []

        def dfs(root):
            if not root:
                return
            out = []
            left = dfs(root.left)
            right = dfs(root.right)
            if left:
                for l in left:
                    out.append([str(root.val)] + l)
            if right:
                for r in right:
                    out.append([str(root.val)] + r)
            if len(out) == 0:
                return [[str(root.val)]]
            return out
        temp = dfs(root)
        for path in temp:
            if(len(path) == 1): output.append(str(path[0]))
            else:
                output.append("->".join(path))
        return output
