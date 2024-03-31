/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let par = Array.from({ length: edges.length + 1 }, (_, i) => i)
    let rank = Array(edges.length+1).fill(1)
    function find(n){
        let p = par[n]
        while(p != par[p]){
            par[p] = par[par[p]]
            p = par[p]
        }
        return p
    }
    function union(n1,n2){
        let p1 = find(n1)
        let p2 = find(n2)

        if(p1 == p2) return true

        if(rank[p1] > rank[p2]){
            rank[p1]+=rank[p2]
            par[p2] = p1
        } else {
            rank[p2]+=rank[p1]
            par[p1] = p2
        }
        return false
    }

    for(let [n1,n2] of edges){
        if(union(n1,n2)) return [n1,n2]
    }
};