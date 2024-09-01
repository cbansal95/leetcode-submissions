class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        def valid(i):
            if(i[0] < 0 or i[1] < 0): return False
            if(i[0] >= len(image) or i[1] >= len(image[0])): return False
            return True
        
        visited = {}
        stack = []
        stack.append([sr,sc])
        while len(stack):
            curr = stack.pop()
            visited[f"{curr[0]}_{curr[1]}"] = True
            for i in [[curr[0] - 1,curr[1]],[curr[0] + 1,curr[1]],[curr[0],curr[1] -1 ],[curr[0],curr[1] + 1]]:
                if valid(i) and visited.get(f"{i[0]}_{i[1]}", False) == False and image[sr][sc] == image[i[0]][i[1]]:
                    stack.append(i)
        for i in list(visited.keys()):
            a = int(i.split('_')[0])
            b = int(i.split('_')[1])
            image[a][b] = color
        return image