/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}

 loop thru array, calculating distance for each point.
 assign distance. as key  of a map.
 sort by keys
 take k first keys, push values. to answer array
 */
 var kClosest = function(points, k) {
    function getDist(point) {
        return Math.sqrt(Math.pow(Math.abs(point[0]), 2) + Math.pow(Math.abs(point[1]), 2));
    }

    for (let point of points) {
        point.push(getDist(point));
    }
    points.sort((a,b) => a[2] - b[2]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(points[i].slice(0, 2));
    }
    return result;
};
