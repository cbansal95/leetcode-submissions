/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    s1 = fillStr(num1)
    s2 = fillStr(num2)
    s3 = fillStr(num3)
    let out = ""
    for(let i = 0; i < 4; i++){
        out = out + Math.min(Number(s1[i]), Number(s2[i]), Number(s3[i]))
    }
    return Number(out)
};

const fillStr = (s) => {
    s = String(s)
    while(s.length < 4){
        s = "0" + s
    }
    return s
}