/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const completed = {}, pending = {}, solution = [], adj = {}
    for(let i = 0; i < numCourses; i++){
        adj[i] = []
    }
    for(const [a,b] of prerequisites){
        if(adj[a]) {adj[a].push(b)}
    }

    for(const a of Object.keys(adj)){
        if (pending[a]) return []
        if (completed[a]) continue
        if(dfs(a) == false) return []
    }
    function dfs(course){
        if(completed[course]) return true
        if(pending[course]) return false
        pending[course] = true
        for(const c of adj[course]){
            if(dfs(c) == false) return false
        }
        delete pending[course]
        completed[course] = true
        solution.push(Number(course))
    }
    return solution
    
};