/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let output = []
    for(let i = 0; i<digits.length; i++){
        let curr = digits[i]
        let chars = keyboard[curr].split('')
        if(output.length == 0){
            for(let char of chars) output.push(char)
        } else {
            let newPut = []
            for(let i = 0; i<output.length; i++){
                for(let char of chars) newPut.push(output[i].concat(char))
            }
            output = newPut
        }
    }
    return output
};