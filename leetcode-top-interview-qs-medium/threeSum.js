"use strict";
/**
 * for each elem
 *  for each elem, starting at i+1
 *
 *    for each elem starting at j+1
 *      const newSum = []
 *      if nums[i] + nums[j] + nums[k] === 0
 *        then push those elements into newSum
 *        and push newSum to answers
 */

function threeSum(nums) {
  const answers = [];
  if (nums.length < 3) {
    return answers;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          answers.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return answers;
}
