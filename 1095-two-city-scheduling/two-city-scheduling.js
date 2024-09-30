/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => {
        if (a[0] - a[1] > b[0] - b[1]) return 1; else return -1
    })
    let ans = 0, count = 0, n = costs.length/2
    for (let cost of costs){
        ans+= count < n? cost[0] : cost[1]
        count++
    }
    return ans
};