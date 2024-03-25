/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let out = []
    for(let num of nums){
        let temp = Math.abs(num)
        if(nums[temp - 1] < 0){
            out.push(temp)
        } else {
            nums[temp - 1] = nums[temp - 1] * -1 
        }
    }
    return out
};