class Solution:
    def firstUniqChar(self, s: str) -> int:
        visited = {}
        for c in s:
            if visited.get(c,False): visited[c] = visited[c] + 1
            else: visited[c] = 1
        for index,c in enumerate(s):
            if visited[c] == 1:
                return index
        return -1       