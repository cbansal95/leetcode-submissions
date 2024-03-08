/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    if(low >= 123456789){
        return []
    }
    function generateNext(num) {
        let s = String(num)
        let temp = s[s.length - 1]
        if (temp == '9') {
            let newLow = 10 ** s.length
            let initial = 1
            while (initial < newLow) {
                let s = String(initial)
                initial = Number(s.concat(Number(s[s.length - 1]) + 1))
            }
            return initial
        } else {
            let t = s.concat(Number(s[s.length - 1]) + 1)
            return Number(t.substring(1,))
        }
    }
    //check if low valid
    //else increase
    let initial = Number(String(low)[0])
    while (String(initial).length < String(low).length) {
        let s = String(initial)
        let l = s[s.length - 1]
        if (l == '9') {
            low = 10 ** String(low).length
            initial = 1
        } else {
            initial = Number(s.concat(Number(s[s.length - 1]) + 1))
        }
    }
    console.log(low, initial)
    if (initial < low) initial = generateNext(initial)

    let max = initial, out = []
    while (max <= high) {
        out.push(max)
        max = generateNext(max)
        console.log(max)
    }
    return out
};