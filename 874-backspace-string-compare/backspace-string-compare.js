/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let s1 = s.split('')
    let s2 = ''
    let t1 = t.split('')
    let t2 = ''

    let bkspc = 0
    while (s1.length > 0) {
        if (s1[s1.length - 1] == '#') {
            bkspc++
            s1.pop()
        } else if (bkspc > 0) {
            bkspc--
            s1.pop()
        } else {
            s2 = s2.concat(s1.pop())
        }
    }
    bkspc = 0
    while (t1.length > 0) {
        if (t1[t1.length - 1] == '#') {
            bkspc++
            t1.pop()
        } else if (bkspc > 0) {
            bkspc--
            t1.pop()
        } else {
            t2 = t2.concat(t1.pop())
        }
    }
    return s2 == t2

};