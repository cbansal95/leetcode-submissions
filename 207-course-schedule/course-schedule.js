/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let courses = {}
    let visited = {}
    let visiting = {}
    for (prereq of prerequisites) {
        if (courses[prereq[0]] == undefined) {
            courses[prereq[0]] = [prereq[1]]
        } else {
            courses[prereq[0]].push(prereq[1])
        }
    }
    console.log(courses)
    for (let course of Object.keys(courses)) {
        if (dfs(course)) return false
    }
    function dfs(course) {
        visiting[course] = true

        let preqs = courses[course]
        console.log(preqs)
        if (!preqs || preqs == undefined || preqs == []) {
            visited[course] = true
            visiting[course] = false
            return false

        }
        for (let preq of preqs) {
            if (visited[preq] && visited[preq] == true) continue;
            if (visiting[preq] && visiting[preq] == true) return true
            if (dfs(preq)) return true
        }
        visited[course] = true
        delete visiting[course]
        return false
    }
    console.log(visited, visiting, courses)
    return true
};