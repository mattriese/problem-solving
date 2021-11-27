/**
 *
 */
function quickSort(arr) {
  //base case
  if (arr.length < 2) return arr;
  // if (arr.length === 2) {
  //   if (arr[0] < arr[1]) {
  //     return arr;
  //   } else {
  //     return [arr[1], arr[0]];
  //   }
  // }
  // pick a pivot
  let pivot = Math.floor(Math.random() * arr.length);
  console.log('arr, pivot=======', arr, pivot);
  let lesser = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) continue;
    if (arr[i] <= arr[pivot]) lesser.push(arr[i]);
    else greater.push(arr[i]);
  }
  return [...quickSort(lesser), arr[pivot], ...quickSort(greater)];
  // let left = quickSort(arr.slice(0, arr[pivot]));
  // let right = quickSort(arr.slice(arr[pivot + 1]));
  // return [...left, pivot, ...right];
}

//[3, 23, 2, 100, 1, -3]
//left = [3,23]
module.exports = { quickSort };
