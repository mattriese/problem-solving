/**
 * @param {number[]} height
 * @return {number}

 multiple pointers, subtract the i from j to get the distance between, then multiply by the
 shortest of the 2.


 */
 var maxArea = function(height) {
  let maxVol= 0;
  for (let i = 0; i < height.length -1; i++) {
      for (let j = i + 1; j < height.length; j++) {
          let shortest = Math.min(height[i], height[j])
          if (((j-i) * shortest) > maxVol) {
              maxVol = (j-i) * shortest;
          }
      }
  }
  return maxVol;
};
