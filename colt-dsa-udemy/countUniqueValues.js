function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let left = 0;
  let right = 1;
  let count = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
    }
    right++;
  }
  return count;
}

/** using colt's strategy:
 *
 * function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
      if (arr[left] !== arr[right]) {
          left++;
          arr[left] = arr[right];
      }
      right++;
  }
  return left + 1;
} */
module.exports = {countUniqueValues}
