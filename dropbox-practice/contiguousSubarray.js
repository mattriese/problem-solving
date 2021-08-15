/**
 * Codewriting
 * You are given an array of integers arr.
 * Your task is to count the number of contiguous subarrays, such that each element of the subarray appears at least twice.
 * ExampleFor arr = [0, 0, 0], the output should be duplicatesOnSegment(arr) = 3.
 * There are 3 subarrays that satisfy the criteria of containing only duplicate elements:
 * arr[0..1] = [0, 0]arr[1..2] = [0, 0]arr[0..2] = [0, 0, 0]
 * For arr = [1, 2, 1, 2, 3],
 * the output should be duplicatesOnSegment(arr) = 1.
 * There is only 1 applicable subarray: arr[0..3] = [1, 2, 1, 2].
 * Input/Output[execution time limit] 4 seconds (js)[input] array.integer arrAn array of integers.
 * Guaranteed constraints:
3 ≤ arr.length ≤ 1800,
0 ≤ arr[i] ≤ 104.[output] integerReturn the number of contiguous subarrays in which each element occurs at least twice.
 */


/** * multiple pointer brute force solution: multiple pointers: i starts at 0, j starts at 1 *
 *  in inner loop, loop through sub-array, build an object of numbers, increment value each time you find one
 * * check if any value is 1, if so continue, if not, increment counter,
 * */
function contiguousSubarray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      const hist = {};
      for (let k = i; k <= j; k++) {
        hist[arr[k]] ? hist[arr[k]] += 1 : hist[arr[k]] = 1;
      };
      let isValid = true;
      for (let value of Object.values(hist)) {
        if (value < 2){
          isValid = false;
          break;
        }
      }
      if (isValid) count++;
    }
  }
return count;
}

module.exports = {contiguousSubarray};
