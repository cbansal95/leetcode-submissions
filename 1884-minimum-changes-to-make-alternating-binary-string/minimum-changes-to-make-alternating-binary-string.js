/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let s1 = '', s2 = '', s1d = 0, s2d = 0
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] != '1') s1d++
            if (s[i] != '0') s2d++
        } else {
            if (s[i] != '0') s1d++
            if (s[i] != '1') s2d++
        }
    }

    return s1d > s2d ? s2d : s1d
};