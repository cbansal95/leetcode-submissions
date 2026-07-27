/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const completed = {}, pending = {}, courses = {}
    for(const [a,b] of prerequisites){
        if(courses[a]){
            courses[a].push(b)
        } else courses[a] = [b]
    }

    for(const course of Object.keys(courses)){
        if(dfs(course) == false) return false
    }
    return true

    function dfs(course) {
        if (pending[course]) return false
        if (completed[course]) return true

        pending[course] = true
        const prereqs = courses[course] || []

        for (const p of prereqs) {
            if (!dfs(p)) return false
        }

        completed[course] = true
        delete pending[course]
        return true
    }
};