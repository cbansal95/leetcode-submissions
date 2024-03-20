/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let present = new Map()

    for(let num of nums){
        if(present.has(num)) return true;
        present.set(num, true)
    }
    return false
};