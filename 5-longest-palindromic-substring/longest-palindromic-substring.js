/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const reversed = [...s].reverse().join("");
    if(s === reversed) return s
    let res = {}
    let out = ''
    for(i = 1; i<=s.length;i++){
        for(j=0; j<s.length;j++){
            if(j+i > s.length) break
            let temp = s.substring(j,j+i)
            if(i == 1){
                res[temp] = true
                out = out.length > temp.length? out : temp
            } else if(i == 2 && temp[0] == temp[1] && !res[temp]){
                res[temp] = true
                out = out.length > temp.length? out : temp
            } else {
                if(temp[0] == temp[i-1] && res[temp.substring(1,i-1)] == true && !res[temp]){
                    res[temp] = true
                    out = out.length > temp.length? out : temp
                }
            }
        }
        // console.log(Object.keys(res))
    }
    return out
};