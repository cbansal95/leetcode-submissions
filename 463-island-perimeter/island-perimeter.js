/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let visited = {}
    let sum = 0
    let l = grid.length, w=grid[0].length
    function isValid(a,b){
        if(a < l && a > -1 && b < w && b > -1) return true
    }

    function dfs(a,b) {
        if (visited[`${a}_${b}`]) return
        visited[`${a}_${b}`] = true
        const neighbours = [[1,0],[0,1], [-1,0], [0,-1]]
        const next = []
        for(const [c,d] of neighbours){
            if(isValid(a+c, b+d) && grid[a+c][b+d] == 1){
                next.push([a+c, b+d])
            }
        }
        sum+= 4-next.length
        for(const [e,f] of next) {
            dfs(e,f)
        }

    }    

    for(let i = 0; i < grid.length; i++){
        for(let j =0; j < grid[0].length; j++){
            if (grid[i][j] == 1){
                dfs(i,j)
            }
        }
    }

    return sum
};