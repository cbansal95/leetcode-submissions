/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums || nums.length == 0) return 0
    let dp = new Array(nums.length).fill(1)
    let max = 1

    for(let i = 1; i<nums.length; i++){
        for(let j = 0; j<i;j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(dp[i], max)
            }
        }
    } 
    return max
};
