/** Given an array of numbers, returns a new array with every third number
 *
 * example: everyThird([10, 20, 30, 40, 50, 60, 70])
 * returns [30, 60]
 */

function everyThird(nums, results=[], i=2) {
  if (nums[i] === undefined) return results;
  results.push(nums[i]);
  everyThird(nums, results, i+3);
  return results;
}

module.exports = everyThird;
