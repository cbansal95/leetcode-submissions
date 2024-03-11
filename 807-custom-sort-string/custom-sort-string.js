/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let wordkey = {}

    for(let i = 0; i<s.length; i++){
        if(s[i] in wordkey){
            wordkey[s[i]]++
        } else {
            wordkey[s[i]] = 1
        }
    }

    let out = ''
    for(char of order){
        if(char in wordkey){
            out = out.concat(char.repeat(wordkey[char]))
            delete wordkey[char]
        }
    }
    Object.keys(wordkey).forEach((char) => {
        out = out.concat(char.repeat(wordkey[char]))
    })
    return out
};