/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    for(let i = 0; i<words.length; i++){
        words[i] = words[i].split('').sort().join('')
    }
    words = words.sort()
    let count = 0
    while(words.length > 1) {
        let len = words.length
        if(words[len - 1] == words [len - 2]){
            count++
            words.pop()
            words.pop()
        } else words.pop()
    }
    return count
};