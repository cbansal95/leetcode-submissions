/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const visited = {}, hashbank = {}
    let minSol = -1
    for(const gene of bank){
        hashbank[gene] = true
    }
    function bfs(start){
        const stack = [[start, 0]]
        while(stack.length){
            console.log(stack)
            let [currGene, currMutations] = stack.pop()
            if (currGene == endGene) {
                if(minSol == -1 || currMutations < minSol) minSol = currMutations
                continue
            }
            if (visited[currGene] < currMutations) continue
            visited[currGene] = currMutations
            for(let i = 0; i < startGene.length; i++){
                for(const m of ["A", "T", "C", "G"]){
                    let testGene = currGene.substring(0,i) +m+ currGene.substring(i+1)
                    if(hashbank[testGene]){
                        stack.push([testGene, currMutations + 1])
                    }
                }
            }
            // generate mutations
            // validate mutation
            // push to stack
        }
    }
    bfs(startGene)
    return minSol
};