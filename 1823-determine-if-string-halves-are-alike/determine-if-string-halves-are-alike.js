/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    function isVowel(c){
        if(['a','e','i','o','u'].indexOf(c.toLowerCase()) > -1) return true
        return false
    }
    let v1 = 0, v2 = 0
    for(let i = 0;i < s.length; i++){
        if(isVowel(s[i])){
            i < (s.length)/2 ? v1++ : v2++
        }
    }
    console.log(v1,v2)
    return v1 == v2
};