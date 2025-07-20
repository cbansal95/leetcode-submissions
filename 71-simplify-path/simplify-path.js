/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let temp = path.split("/")
    let out = ""
    let count = 0
    while(temp.length){
        let curr = temp.pop()
        if(curr == "..") {
            count++
            continue
        }
        if(curr == "" || curr == " " || curr == ".") continue
        if(count){
            count--
            continue
        }
        if(out) {
            out = curr + `/` + out
        } else out = curr
        
    }
    return "/" + out
};