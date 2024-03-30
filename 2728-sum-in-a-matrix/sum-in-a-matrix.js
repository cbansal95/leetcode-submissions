/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    for(let numList of nums){
        numList = numList.sort((a,b) => a- b)
    }
    let r=nums.length, c=nums[0].length
    let sum = 0
    for(i = 0; i < c; i++){
        let temp = []
        for(j = 0; j < r; j++){
            temp.push(nums[j][i])
        }
        sum+= Math.max(...temp)
    }
    return sum
};