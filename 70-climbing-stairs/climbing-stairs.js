/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = []
    let temp = n
    arr[temp] = 1
    temp = temp -1
    arr[temp] = 1
    while(temp > 0){
        temp = temp - 1
        arr[temp] = arr[temp + 1] + arr[temp + 2]
    }
    return arr[0]
};