/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let completed = {}, visiting = {}, solution = [], courses = {}
    //if(!prerequisites || !prerequisites.length) return solution
    for (let i = 0; i < numCourses; i++) {
        courses[i] = []
    }
    for (const prereq of prerequisites) {
        console.log(prereq)
        courses[prereq[0]].push(prereq[1])
    }
    for (const course of Object.keys(courses)) {
        if (visiting[course]) return []
        if (completed[course]) continue
        if (dfs(course) == false) return []
    }
    return solution

    function dfs(course) {
        visiting[course] = true
        let stack = []
        if(courses[course])
        for (const p of courses[course]) {
            if (visiting[p]) return false
            if (completed[p]) continue
            stack.push(p)
        }

        while (stack.length) {
            let curr = stack.pop()
            if(completed[curr]) continue
            let temp = dfs(curr)
            if (temp == false) return temp
        }

        solution.push(course)
        completed[course] = true
        delete visiting[course]
    }
};