function maxSubarraySum(arr, len) {
  if (arr.length < len || arr.length === 0) return null;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  let max = sum
  console.log("sum 1st =", sum);
  for (let i = 0, j = len; j < arr.length; i++, j++) {
    sum -= arr[i];
    sum += arr[j];
    if (sum > max) max = sum;
    console.log ("sum, max = ", sum, max);
  }
  return max;
}

module.exports = {maxSubarraySum};
