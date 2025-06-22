/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = []
    function createSubset(i, subset){
        if(i == nums.length){
            output.push(subset.slice())
            return
        }

        subset.push(nums[i])
        createSubset(i+1, subset)
        subset.pop()
        createSubset(i+1,subset)
    }
    createSubset(0, [])
    return output
};