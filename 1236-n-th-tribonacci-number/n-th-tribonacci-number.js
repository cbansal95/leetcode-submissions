/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    function tmem(n, memo = {}){
        if(n in memo) return memo[n]
        if(n == 1 || n == 0) return n
        if(n == 2) return 1

        memo[n] = tmem(n-1, memo) + tmem(n-2, memo) +tmem(n-3, memo)
        return memo[n] 
    }
    return tmem(n)
};