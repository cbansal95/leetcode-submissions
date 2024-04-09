/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let n = rooms.length
    let keys = {
        0: true
    }
    let visited = {}
    let stack = [0]

    while(stack.length){
        let curr = stack.pop()
        visited[curr] = true
        let curr_keys = rooms[curr]
        if(curr_keys == [] || !curr_keys) continue
        for(let key of curr_keys){
            keys[key] = true
            if(!(key in visited)){
                stack.push(key)
            }
        }
    }

    return (Object.keys(visited).length == rooms.length)
};