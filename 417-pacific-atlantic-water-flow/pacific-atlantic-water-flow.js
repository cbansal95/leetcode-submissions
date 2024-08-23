/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let rows = heights.length
    let cols = heights[0].length
    let solutionPacific = {}
    let solutionAtlantic = {}
    let visitedPacific = {}
    let visitedAtlantic = {}
    let solution = []
    for (let i = 0; i < cols; i++) { solutionPacific[`${0}_${i}`] = true}
    for (let i = 0; i < rows; i++) { solutionPacific[`${i}_${0}`] = true}
    for (let i = 0; i < cols; i++) { solutionAtlantic[`${rows - 1}_${i}`] = true}
    for (let i = 0; i < rows; i++) { solutionAtlantic[`${i}_${cols - 1}`] = true}

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(!visitedPacific[`${i}_${j}`] && solutionPacific[`${i}_${j}`]){
                dfsPacific(i,j)
            }
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(!visitedAtlantic[`${i}_${j}`] && solutionAtlantic[`${i}_${j}`]){
                dfsAtlantic(i,j)
            }
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(solutionPacific[`${i}_${j}`] && solutionAtlantic[`${i}_${j}`]){
                solution.push([i,j])
            }
        }
    }

    return solution

    function inRange(i,j){
        if (i < 0 || i >= rows || j < 0 || j >= cols) return false
        return true
    }

    function dfsPacific(i,j){
        if(visitedPacific[`${i}_${j}`]) return
        visitedPacific[`${i}_${j}`] = true
        
        let stack = []
        for(const index of [[i-1,j],[i+1,j],[i,j-1],[i,j+1]]){
            if(inRange(...index) && heights[index[0]][index[1]] >= heights[i][j] && !visitedPacific[`${index[0]}_${index[1]}`]){
                stack.push(index)
            }
        }

        while(stack.length){
            let [i,j] = stack.pop()
            solutionPacific[`${i}_${j}`] = true
            dfsPacific(i,j)
        }
    }

    function dfsAtlantic(i,j){
        if(visitedAtlantic[`${i}_${j}`]) return
        visitedAtlantic[`${i}_${j}`] = true
        
        let stack = []
        for(const index of [[i-1,j],[i+1,j],[i,j-1],[i,j+1]]){
            if(inRange(...index) && heights[index[0]][index[1]] >= heights[i][j] && !visitedAtlantic[`${index[0]}_${index[1]}`]){
                stack.push(index)
            }
        }

        while(stack.length){
            let [i,j] = stack.pop()
            solutionAtlantic[`${i}_${j}`] = true
            dfsAtlantic(i,j)
        }
    }
};