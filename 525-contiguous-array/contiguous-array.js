/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let zero = 0, one = 0
    let max = 0
    let map = {}
    for(let i = 0; i< nums.length; i++){
        if(nums[i] == 0) zero ++; else one++;
        if(!((one-zero) in map)){
            map[one-zero] = i
        }
        if(zero == one) max = one + zero; else {
            let temp = map[one - zero]
            max = Math.max(max, i - temp)
        }
    }
    return max
};