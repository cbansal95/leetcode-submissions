/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let n1 = 0, final = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') n1++
    }
    for (let i = 0; i < s.length; i++) {
        if (i == s.length - 1) {
            final = final.concat('1')
            break
        }
        if (n1 > 1) {
            final = final.concat('1')
            n1--
        } else final = final.concat('0')
    }
    return final
};