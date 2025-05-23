/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nums = 0
    const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    const visited = {}
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == "1" && visited[`${i}_${j}`] !== true){
                nums++
                dfs(i,j)
            }
        }
    }
    function dfs(i,j){
        visited[`${i}_${j}`] = true
        for (const [di, dj] of dirs){
            const newLoc = [i + di, j + dj]
            if (newLoc[0] >= 0 && newLoc[1] >= 0 && newLoc[0] < grid.length && newLoc[1] < grid[0].length && visited[`${newLoc[0]}_${newLoc[1]}`] !== true && grid[newLoc[0]][newLoc[1]] == "1") {
                dfs(newLoc[0], newLoc[1])
            }
        }
        return
    }
    return nums
};