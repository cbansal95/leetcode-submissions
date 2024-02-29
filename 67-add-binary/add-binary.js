/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let a1 = a.split('')
    let b1 = b.split('')
    let fin = ''  
    let carry = 0

    while(a1.length > 0 || b1.length > 0 || carry == '1'){
        let a2 = (a1.pop()) || 0
        let b2 = (b1.pop()) || 0

        let curr = '0'

        if(a2 == '1' && b2 == '1'){
            if(carry == '1') {
                curr = '1'
            } carry = '1'
        } else if (a2 == '0' && b2 == '0'){
            if(carry == '1'){
                curr = '1'
            }
            carry = '0'
        } else if(carry == '0') {
            curr = '1'
        }
        console.log(carry,a2,b2)
        fin = `${curr}${fin}`
    }
    return fin
};