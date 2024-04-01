/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let temp = s.split(' ')
    for(i = temp.length - 1; i >= 0; i--){
        if(temp[i] !== ' ' && temp[i]!== '') return temp[i].length
    }
};