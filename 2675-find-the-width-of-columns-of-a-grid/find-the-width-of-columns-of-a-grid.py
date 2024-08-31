class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        out = []
        for i in range(0,len(grid[0])):
            max = 0
            for j in range(0,len(grid)):
                if len(str(grid[j][i])) > max:
                    max = len(str(grid[j][i]))
            out.append(max)
        return out