/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let aliceSum = 0
    let bobSum = 0

    for (let num of nums) {
        if (num < 10) aliceSum+=num; else bobSum+=num
    } 

    return aliceSum != bobSum
};