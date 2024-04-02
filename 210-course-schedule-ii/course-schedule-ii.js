/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let obj = {}, completed = {}, doing = {}
    let order = []
    for(let i = 0; i < numCourses; i++){
        obj[i] = []
    }
    for(let prereq of prerequisites){
        obj[prereq[0]].push(prereq[1])
    }
    for(let course of Object.keys(obj)){
        if (dfs(course)){return []}
    }

    function dfs(course){
        //check if already completed
        if(completed[course]) return false
        //check if can't be completed
        if(doing[course]) return true

        //mark as doing
        doing[course] = true

        //dfs on preqs
        for(let prqs of obj[course]){
            if(dfs(prqs)) return true
        }

        //mark completed
        doing[course] = false
        completed[course] = true

        //add to array
        order.push(course)
        return false
    }
    return order
};