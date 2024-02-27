/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length
    let column = grid[0].length
    let soln = [...Array(row)].map(e => Array(column))

    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            if(i == 0 && j == 0){
                soln[i][j] = grid[i][j]
                console.log(grid[i][j])
                continue
            }
            if(i == 0) {
                //add left val
                soln[i][j] = grid[i][j] + soln[i][j-1]
                continue
            }
            if(j == 0){
                //add top val
                soln[i][j] = grid[i][j] + soln[i-1][j]
                continue
            }
            soln[i][j] = grid[i][j] + Math.min(soln[i-1][j], soln[i][j-1])
        }
    }
    console.log(soln)
    return soln[row-1][column-1]
};