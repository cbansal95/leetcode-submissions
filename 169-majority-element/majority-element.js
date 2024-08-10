/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, candidate = -1
    for(let i = 0; i<nums.length; i++){
        if(count == 0) {
            candidate = nums[i]
            count++
        } else {
            if(nums[i] == candidate) {count++} else {count--}
        }
    }
    return candidate
};