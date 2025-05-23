var searchMatrix = function(matrix, target) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return false
    let m = matrix.length, n = matrix[0].length
    let row = 0, col = n - 1
    while(row < m && col >= 0) {
        const current = matrix[row][col]
        if (current == target) return true; 
        else if (current > target) col --; else row++
    }
    return false
};
