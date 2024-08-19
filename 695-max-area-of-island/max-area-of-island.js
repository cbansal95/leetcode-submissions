/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0, visited = {}
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && visited[`${i}_${j}`] == undefined) {
                visited[`${i}_${j}`] = true
                max = Math.max(max, dfs(i, j) + 1)
            }
        }
    }

    return max

    function checkinRange(i, j) {
        if (i < 0 || j < 0) return false
        if (i >= grid.length || j >= grid[0].length) return false
        return true
    }

    function dfs(i, j) {
        let stack = [], count = 0
        for (const index of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
            if (checkinRange(index[0], index[1]) && grid[index[0]][index[1]] == '1' && visited[`${index[0]}_${index[1]}`] == undefined) {
                stack.push(index)
                visited[`${index[0]}_${index[1]}`] = true
            }
        }
        count += stack.length
        while (stack.length) {
            let index = stack.pop()
            count += dfs(index[0], index[1])
        }
        return count
    }
};