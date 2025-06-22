/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let out = []
    let visited = {}
    function rec(curr, left){
        if(!left.length && visited[curr.join("_")] == undefined){
            out.push(curr)
            visited[curr.join("_")] = true
            return
        }
        for(let i = 0; i < left.length; i++){
            rec([...curr, left[i]], [...left.slice(0,i), ...left.slice(i+1)])
        }
    }
    rec([], nums)
    return out
};