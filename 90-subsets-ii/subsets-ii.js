/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b) => a - b)

    function rec(i, curr){
        if(i >= nums.length){
            res.push([...curr])
            return
        }
        curr.push(nums[i])
        rec(i+1, curr)
        curr.pop()
        while(nums[i] == nums[i+1] && i+1 < nums.length) i++
        rec(i+1, curr)
    }
    rec(0, [])
    return res
};