/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arrMap = new Map()
    let inserted = new Map()

    for(let i = 0; i < nums1.length; i++){
        arrMap.set(nums1[i],true)
    }

    let out = []

    for(let i = 0; i< nums2.length; i++){
        if(arrMap.get(nums2[i]) && !inserted.get(nums2[i])){
            out.push(nums2[i])
            inserted.set(nums2[i],true)
        }
    }
    return out
};