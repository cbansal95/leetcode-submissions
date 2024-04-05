/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 1 || n == 1) return 1
    let dp = Array.from(Array(m), () => Array(n).fill(0))
    dp[0][1] = 1
    dp[1][0] = 1
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n;j++){
            if(i == 0 && j == 0) continue
            if((i == 1 && j == 0) || (i == 0 && j == 1)) continue
            dp[i][j] = getVal(dp,i,j)
        }
    }
    return dp[m-1][n-1]
};

function getVal(dp, i, j){
    if(i == 0) return 1
    if(j == 0) return 1
    return dp[i-1][j] + dp[i][j-1]
}