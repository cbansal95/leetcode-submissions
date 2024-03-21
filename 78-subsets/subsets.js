/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]

    for(let num of nums){
        let temp = []
        for(r of res){
            temp.push([...r, num])
        }
        res = [...res,...temp]
    }
    return res
};