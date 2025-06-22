/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const col = {}, pos = {}, neg = {}
    const output = []
    const board = []
    for (let i = 0; i < n; i++){
        board.push(new Array(n).fill("."))
    }
    function backtrack(r){
        if(r == n){
            let temp = []
            for(const b of board){
                temp.push(b.join(""))
            }
            output.push(temp)
            return
        }
        for(let c = 0; c < n; c++){
            if(col[c] || pos[r+c] || neg[r-c]) continue
            
            col[c] = true
            pos[r+c] = true
            neg[r-c] = true
            board[r][c] = "Q"

            backtrack(r+1)

            delete col[c]
            delete pos[r+c]
            delete neg[r-c]
            board[r][c] = "."
        }

    }
    backtrack(0)
    return output
};