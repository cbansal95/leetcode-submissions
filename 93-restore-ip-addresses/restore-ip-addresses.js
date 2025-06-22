/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let out = []
    const visited = {}
    function backtrack(curr, parts, left){
        if(parts == 4 && left == "" && visited[curr] == undefined){
            if(validate(curr)){
                visited[curr] = true
                out.push(curr)
                return
            }
        }
        if(parts > 4) return
        for(let i = 1; i < 4; i++){
            let temp = left.slice(0, i)
            if(Number(temp) > 255) continue
            if(parts > 0){
                temp = "." + temp
            }
            backtrack(curr+temp, parts + 1, left.slice(i))
        }
    }
    function validate(str){
        let parts = str.split(".")
        if(parts.length !== 4) return false
        for(const part of parts){
            if(part.length < 1 || part.length > 4) return false
            if(part.length > 1 && part[0] == "0") return false
        }
        return true
    }
    backtrack("", 0, s)
    return out
};