/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let oranges = 0, queue = [], time = 0

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) oranges++
            else if (grid[r][c] == 2) queue.push([r,c,0])
        }
    }

    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]

    while(oranges && queue.length){
        const [curR, curC, mins] = queue.shift()
        if (grid[curR][curC] == 1){
            grid[curR][curC] = 2;
            oranges--
            time = mins
        }
        for (let [addR, addC] of dirs) {
            const [newR, newC] = [curR + addR, curC + addC]
            if (newR < 0 || newR > grid.length - 1 || newC < 0 || newC > grid[0].length - 1) continue
            if (grid[newR][newC] == 1) {
                queue.push([newR, newC, mins+1])
            }
        }
    }
    if (oranges) return -1; else return time
};