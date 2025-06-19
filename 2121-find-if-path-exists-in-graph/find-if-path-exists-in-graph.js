/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adj = {}
    if (source == destination) return true
    for (const [a,b] of edges) {
        if(adj[a] == undefined) adj[a] = {}
        if(adj[b] == undefined) adj[b] = {}

        adj[a][b] = true
        adj[b][a] = true
    }

    const visited = {}

    function dfs(x, target){
        if(visited[x]) return false
        visited[x] = true
        if (adj[x][target]) return true
        const neighbours = adj[x]
        let flag = false
        for (const n of Object.keys(neighbours)) {
            let temp = dfs(n,target)
            if(temp) flag = temp
        }
        return flag
    }
    return dfs(source, destination)
};