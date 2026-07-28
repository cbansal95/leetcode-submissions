/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    if (s.length == 1) return s
    let firstPart = s.substring(0,Math.floor((s.length)/2)), mid
    firstPart = firstPart.split('').sort().join('')
    if(s.length%2 == 1) mid = s[Math.floor((s.length)/2)]
    if(mid) return firstPart + mid + firstPart.split('').reverse().join('')
    return firstPart + firstPart.split('').reverse().join('')
};