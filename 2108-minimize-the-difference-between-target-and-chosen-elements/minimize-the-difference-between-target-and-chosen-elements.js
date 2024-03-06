var minimizeTheDifference = function(mat, target) {
    let topSet = new Set()
    topSet.add(0)

    for(const row of mat){
        let rowSet = new Set()
        for(let cell of row){
            for(let prevSum of topSet){
                //console.log(typeof prevSum)
                rowSet.add(Number(prevSum + cell))
            }
        }
        topSet = rowSet
    }
    let min = Infinity
    for(let sum of  topSet){
        min = Math.min(min, Math.abs(target-sum))
    }
    return min
};