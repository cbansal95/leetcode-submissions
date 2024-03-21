/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a,b) => a - b)
    function rec(i,curr,total){
        if(total == target){
            res.push([...curr])
            return
        }
        if(total > target || i >= candidates.length) return
        curr.push(candidates[i])
        rec(i+1,curr,total+candidates[i])
        curr.pop()
        while(candidates[i] == candidates[i+1] && i+1 < candidates.length) {i++}
        rec(i+1,curr,total)
    }
    rec(0,[],0)
    return res

};