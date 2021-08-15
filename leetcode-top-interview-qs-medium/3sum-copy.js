"use strict";
// sort first
/** for each elem
  if this Elem === the Previous Elem, then continue
  for each elem, starting at i+1

    for each elem starting at j+1
      if this Elem === the Previous Elem, then continue
      if Nums[i] + nums[j] + nums[k] === 0
        // then push those elements to newSum and sort it
        then Loop Through Answers And Check If Json.stringify === other answers
        and push newSum to answers
*/

// TODO: this works but time complexity is too high for leetcode. Look into faster algo
function threeSum(nums) {
  const answers = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++);
        let newTriplet = [];
        let repeat = false;
        if (nums[i] + nums[j] + nums[k] === 0) {
          newTriplet = [nums[i], nums[j], nums[k]].sort((a,b) => (a-b)){
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
  return answers;
}

function forSome(array) {
    for (const element of array) {
    }
}

function forSome(array) {
    for (const element of array) {
      element = element + 1;
      answers.push(element)}
}

geoAlpha
Geoff
//
// then loop through answers and check if JSON.stringify === answers
// then loop through answers and check if Json.stringify === answers
// i'm adding a comment in m can omega multiple lines newline here is the second line of the comment try this
// multiLine;
/** Now here's a comment let's see what it does
is the still a comment? and hope so
*/

function addNums(nums)() {
}
