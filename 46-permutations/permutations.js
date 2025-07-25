/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let out = []
    function rec(curr, left){
        if(!left.length){
            out.push(curr)
            return
        }
        for(let i = 0; i < left.length; i++){
            rec([...curr, left[i]], [...left.slice(0,i), ...left.slice(i+1)])
        }
    }
    rec([], nums)
    return out
};