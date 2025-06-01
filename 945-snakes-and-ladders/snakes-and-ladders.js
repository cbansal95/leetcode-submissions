/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length
    const size = n*n
    const visited = {}
    const queue = [[1,0]]

    function get_coordinates(pos) {
        let r = Math.floor((pos-1)/n)
        let c = (pos-1)%n
        let row = n - 1 - r
        let col = c
        if (r%2 == 1) {col = n - 1 - c}
        return [row, col]
    }
    while(queue.length) {
        const [pos, moves] = queue.shift()
        for(let i = 6; i > 0; i--){
            let nextPos = pos + i
            if (nextPos > size) continue
            let [r,c] = get_coordinates(nextPos)
            if (board[r][c] !== -1) {nextPos = board[r][c]}
            if (nextPos == size) return moves + 1
            if (visited[nextPos] == undefined){
                visited[nextPos] = true
                queue.push([nextPos, moves+1])
            }
        }
    }
    return -1
};