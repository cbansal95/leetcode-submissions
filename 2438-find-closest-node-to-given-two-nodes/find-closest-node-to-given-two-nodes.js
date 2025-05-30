/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
    const distances1 = new Array(edges.length).fill(-1)
    const distances2 = new Array(edges.length).fill(-1)

    let currentNode = node1
    let distance = 0
    while (currentNode != -1 && distances1[currentNode] == -1) {
        distances1[currentNode] = distance
        currentNode = edges[currentNode]
        distance++
    }
    // console.log(distances1)
    currentNode = node2
    distance = 0
    while (currentNode != -1 && distances2[currentNode] == -1) {
        distances2[currentNode] = distance
        currentNode = edges[currentNode]
        distance++
    }
    // console.log(distances2)

    let minDistance = Infinity, mins = []
    for (let i = 0; i < edges.length; i++) {
        if (distances1[i] !== -1 && distances2[i] !== -1) {
            if (minDistance >= Math.max(distances1[i], distances2[i])) {
                minDistance = Math.max(distances1[i], distances2[i])
                mins.push({ "index": i, "distance": minDistance })
            }
        }
    }
    console.log(mins)
    if (mins.length) {
        if (mins.length == 1) return mins[0].index
        if (mins.at(-1).distance == mins.at(-2).distance) return Math.min(mins.at(-1).index, mins.at(-2).index)
        return mins.at(-1).index
    } else return -1
};