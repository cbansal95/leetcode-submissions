/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let obj = {}, flag = false
    function rec(curr, wordDict,obj){
        if(obj[curr]) return
        if(curr.length == 0) {
            flag = true
            return true
        }

        for(let word of wordDict)
        {
            if(curr.startsWith(word)){
                rec(curr.slice(word.length), wordDict,obj)
                obj[curr] = true
            }
        }
    }
    rec(s,wordDict,obj)
    return flag
};