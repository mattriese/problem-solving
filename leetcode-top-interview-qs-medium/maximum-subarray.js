
// O(n^2) nested loop / brute force
var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      let localSum = nums[i];
      if (localSum > maxSum) maxSum = localSum;
      for (let j = i+1; j < nums.length; j++) {
          localSum += nums[j];
          if (localSum > maxSum) maxSum = localSum;
      }
  }
  return maxSum;
};

/**
 * set the first elem as maxSum, then test every sub-array as above, but if one sub-array has
 * a negative value, then skip and increment i.
 */
 var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      let localSum = nums[i];
      if (localSum > maxSum) maxSum = localSum;
      for (let j = i+1; j < nums.length; j++) {
          localSum += nums[j];
          if (localSum < 0) break;
          if (localSum > maxSum) maxSum = localSum;
      }
  }
  return maxSum;
};

/**
 only need to increment i if localSum is < 0
 loop through rest of array, adding each value to localSum and checking if localSum is > 0,
 and if it is > maxSum. If so, update maxSum to localSum.

 basic idea: while localSum is > 0,
 */
var maxSubArray = function(nums) {
  let i = 0;
  let localSum;
  let maxSum = -Infinity;
  while (i < nums.length) {
    localSum = nums[i];
    if (localSum > maxSum) maxSum = localSum;
    for (let j = i+1; j < nums.length; j++) {
      localSum += nums[j];
      if (localSum > maxSum) maxSum = localSum;
      if (localSum < 0) {
        i = j;
        break;
      }
    }
    i++;
  }
  return maxSum;
};

//works! 95th percentile lol
var maxSubArray = function(nums) {
  let i = 0;
  let localSum;
  let maxSum = -Infinity;
  while (i < nums.length) {
    localSum = 0;
    let j = i;
    while (j < nums.length) {
      localSum += nums[j];
      if (localSum > maxSum) maxSum = localSum;
      if (localSum < 0) {
        i = j;
        break;
      }
      j++;
    }
    i++;
  }
  return maxSum;
};

var maxSubArray = function(nums) {
  let curr = 0;
  let localSum = 0;
  let maxSum = -Infinity;
  while (curr < nums.length) {
    localSum += nums[curr];
    if (localSum > maxSum) maxSum = localSum;
    if (localSum <= 0) localSum = 0;
    curr++;
  }
  return maxSum;
};
