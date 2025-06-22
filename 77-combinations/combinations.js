/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const output = []
    function backtrack(start, curr){
        if(curr.length == k) {
            output.push(curr.slice())
            return
        }
        for(let i = start; i <=n; i++){
            curr.push(i)
            backtrack(i+1, curr)
            curr.pop()
        }
    }

    backtrack(1, [])
    return output
};