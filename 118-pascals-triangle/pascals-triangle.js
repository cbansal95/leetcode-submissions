/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1]]
    function recurse(n, memo = {}){
        if(n in memo) return memo[n]
        if(n==1) return [1]

        let pascalRow = [1]
        let preRow = recurse(n-1, memo)
        for(let i = 1; i<preRow.length; i++){
            pascalRow.push(preRow[i-1]+preRow[i])
        }
        pascalRow.push(1)

        memo[n] = pascalRow
        output.push(pascalRow)
        return pascalRow
    }
    recurse(numRows)
    return output
};