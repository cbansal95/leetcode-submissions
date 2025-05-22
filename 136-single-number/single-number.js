/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {}
    for(const num of nums){
        if (map[num]) map[num] = map[num] + 1; else map[num] = 1 
    }
    for(const num of nums){
        if (map[num] == 1) return num
    }
};