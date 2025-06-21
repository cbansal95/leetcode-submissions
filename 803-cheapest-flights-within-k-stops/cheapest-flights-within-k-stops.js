/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let lowestCost = new Array(n).fill(Infinity)
    lowestCost[src] = 0

    for(let i = 0; i<=k; i++){
        let temp = lowestCost.slice()
        for(const [s,d,c] of flights){
            if(lowestCost[s] + c < temp[d]){
                temp[d] = lowestCost[s] + c
            }
        }
        lowestCost = temp
    }

    if(lowestCost[dst] == Infinity) return -1
    return lowestCost[dst]
};