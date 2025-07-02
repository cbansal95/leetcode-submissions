/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ret = false
    const count = {};
    for (const c of word) {
        count[c] = (count[c] || 0) + 1;
    }

    if (count[word[0]] > count[word[word.length - 1]]) {
        word = word.split('').reverse().join('');
    }

    function isValid(x,y){
        if(x < 0 || x >= board.length) return false
        if(y < 0 || y >= board[0].length) return false
        return true
    }
    function dfs(i, j, visited = {}, currIndex = 1){
        if(currIndex == word.length) return true
        visited[`${i}_${j}`] = true
        let neighbours = []
        for(const [a,b] of [[1,0], [0,1], [-1,0], [0,-1]]){
            if(isValid(i+a, j+b) && visited[`${i+a}_${j+b}`] == undefined && board[i+a][j+b] == word[currIndex]){
                neighbours.push([i+a, j+b])
            }
        }
        for(const n of neighbours){
            let temp = dfs(n[0], n[1], {...visited}, currIndex+1)
            if(temp) return temp
        }
        return false
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == word[0]){ 
                const temp = dfs(i,j)
                if(temp) ret = temp
            }
        }
    }
    return ret
};