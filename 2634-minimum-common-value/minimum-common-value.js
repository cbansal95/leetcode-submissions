/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let min = -1
    let p1 = 0, p2 = 0

    while(p1 < nums1.length && p2 < nums2.length){
        if(nums1[p1] == nums2[p2]){
            min = nums1[p1]
            break
        } else if(nums1[p1] > nums2[p2]){
            p2++
        } else if(nums1[p1] < nums2[p2]){
            p1++
        }
    }
    return min 
};