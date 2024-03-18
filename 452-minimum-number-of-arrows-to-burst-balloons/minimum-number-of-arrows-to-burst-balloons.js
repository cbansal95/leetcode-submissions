/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[0] - b[0])
    let minArrows = points.length

    for(let i = 0; i < points.length - 1; i++){
        //compare current to next

        //if no overlap do nothing

        if(points[i][1] < points[i+1][0]){
            continue;
        }
        // reduce next element to the overlap
        // decrement min
        points[i+1][0] = Math.max(points[i][0], points[i+1][0])
        points[i+1][1] = Math.min(points[i][1], points[i+1][1])
        minArrows--

    }
    return minArrows
};