/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let table = new Map()
    for (item of nums) {
        if (table.get(item)) {
            table.set(item, table.get(item) + 1)
        } else {
            table.set(item, 1)
        }
    }
    let max = 0, sum = 0
    table.forEach(mapElem => {
        if(mapElem == max){
            sum+=mapElem
        } else if(mapElem > max) {
            sum = mapElem
            max = mapElem
        }
    })

    return sum
};