/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n == 1) return 1
    if(trust.length == 0) return -1
    const adj = {}, potentials = {}, adj2 = {}
    for (const t of trust){
        if (adj[t[0]]) {adj[t[0]].push(t[1])} else {
            adj[t[0]] = []
            adj[t[0]].push(t[1])
        }
        if (adj2[t[1]]) {adj2[t[1]].push(t[0])} else {
            adj2[t[1]] = []
            adj2[t[1]].push(t[0])
        }
    }
    for(let i = 1; i <= n; i++){
        if(!adj[i] && Object.keys(adj).length == (n-1) && adj2[i] && adj2[i].length == (n-1)){
            return i
        }
    }
    return -1
};