/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const uniqueTrees = new Array(n+1).fill(1)

    for(let nodes = 2; nodes <= n; nodes++){
        let total = 0
        for (let root = 1; root <= nodes; root++){
            total += uniqueTrees[root - 1] * uniqueTrees[nodes - root]
        }
        uniqueTrees[nodes] = total
    }
    return uniqueTrees[n]
};