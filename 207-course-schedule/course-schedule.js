/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let completed = {}
    let pending = {}
    let courses = {}
    for (const [c1,c2] of prerequisites) {
        if (courses[c1]) {
            courses[c1].push(c2)
        } else {
            courses[c1] = [c2]
        }
    }
    const toComplete = Object.keys(courses)
    for(const course of toComplete){
        if(dfs(course) == false) return false
    }
    function dfs(course){
        pending[course] = true
        const prereqs = courses[course]

        if(!prereqs || prereqs == undefined || prereqs == []) {
            completed[course] = true
            delete pending[course]
            return true
        }
        for(let prereq of prereqs){
            if(completed[prereq] && completed[prereq] == true) continue
            if(pending[prereq] && pending[prereq] == true) return false
            if(dfs(prereq) == false) return false
        }
        completed[course] = true
        delete pending[course]
        return true
    }
    return true
};