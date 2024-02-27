/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0
    let obj = {}
    let length = 1, maxlen = 1
    let p1 = 0, p2 = 1

    obj[s[p1]] = true

    while(p2 < s.length){
        if(obj[s[p2]]) {
            obj = {}
            length = 1
            p1++
            p2 = p1 + 1
            obj[s[p1]] = true
        } else {
            obj[s[p2]] = true
            p2++
            length++
            if(length > maxlen) maxlen = length
        }
    }
    console.log(maxlen)
    return maxlen
};