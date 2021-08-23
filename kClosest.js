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
  let distToPoint = {};
  for (let point of points) {
      distToPoint[getDist(point)] = point;
  }
  console.log("dist2p=", distToPoint);
  let keys = Object.keys(distToPoint);
  //console.log("d2p.keys = ", distToPoint.keys());
  keys.sort((a,b) => a - b);
  console.log("keys=", keys);
  let result = [];
  for (let i = 0; i < k; i++) {
      result.push(distToPoint[keys[i]]);
  }
  return result;
};
