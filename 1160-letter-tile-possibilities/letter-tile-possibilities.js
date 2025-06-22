/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let out = []
    let visited = {}
    function rec(curr, left){
        if(left == ""){
            if(curr.length && visited[curr] == undefined){
                out.push(curr)
                visited[curr] = true
            }
            return
        }
        for(let i = 0; i < left.length; i++){
            rec(curr + left[i], left.slice(0,i)+left.slice(i+1))
            rec(curr, left.slice(0,i)+left.slice(i+1))
        }

    }
    rec("", tiles)
    return out.length
};