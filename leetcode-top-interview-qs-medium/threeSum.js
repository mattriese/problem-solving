"use strict";
/** sort first
 * for each elem
 *  // if this elem === the previous elem, then continue
 *  for each elem, starting at i+1
 *
 *    for each elem starting at j+1
 *      // if this elem === the previous elem, then continue
 *      if nums[i] + nums[j] + nums[k] === 0
 *        then push those elements to newSum, and sort it.
 *        then loop through answers and check if json.stringify === other answers
 *        and push newSum to answers
 */

// TODO: this works but time complexity is too high for leetcode. Look into better algo
function threeSum(nums) {
  const answers = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let newTriplet = [];
        let repeat = false;
        if (nums[i] + nums[j] + nums[k] === 0) {
          newTriplet = [nums[i], nums[j], nums[k]].sort((a, b) => (a - b));
          for (let answer of answers) {
            if (JSON.stringify(newTriplet) === JSON.stringify(answer)) {
              repeat = true;
              break;
            }
          }
        if (!repeat) answers.push(newTriplet);
        }
      }
    }
  }
  return answers;
}
