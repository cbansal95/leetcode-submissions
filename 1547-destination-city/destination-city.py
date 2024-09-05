class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        adj = {}
        for path in paths:
            if path[0] not in adj:
                adj[path[0]] = []
            adj[path[0]].append(path[1])
            if path[1] not in adj:
                adj[path[1]] = []
        for dest in list(adj.keys()):
            if adj[dest] == []:
                return dest
        return ""
        