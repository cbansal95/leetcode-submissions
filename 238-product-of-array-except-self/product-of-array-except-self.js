/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [], suffix = [], out = []

    for(let i = 0; i < nums.length; i++){
        if(i == 0) prefix[i] = 1; else prefix[i] = nums[i-1] * prefix[i-1]
    }
    for(let i = nums.length - 1; i >=0; i--){
        if(i == nums.length-1) suffix[i] = 1; else suffix[i] = suffix[i+1] * nums[i+1]
    }
    for(let i = 0; i < nums.length; i++){
        out[i] = suffix[i]*prefix[i]
    }
    return out
};