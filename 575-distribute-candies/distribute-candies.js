/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const map = {}
    const max = (candyType.length)/2

    for (const candy of candyType){
        map[candy] = true
    }
    const unique = Object.keys(map).length
    if (max > unique) return unique
    return max
};