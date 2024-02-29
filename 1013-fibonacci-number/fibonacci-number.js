/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    function fibmem(n, memo = {}){
        if(n in memo) return memo[n]
        if(n == 0) return 0
        if(n == 1) return 1
        if(n==2) return 1

        memo[n] = fibmem(n-1) + fibmem(n-2)
        return memo[n]
    }
    return fibmem(n)
};