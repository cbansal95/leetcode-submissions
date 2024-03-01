/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = 0, maxSum = -Infinity
    for (let i = 0; i < nums.length; i++) {
        max+=nums[i]

        max = max > nums[i] ? max : nums[i]
        if(max > maxSum) maxSum = max
    }
    return maxSum
};