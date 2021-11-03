function findMistake(nums) {
  let extra;
  let missing;
  nums.sort((a, b) => a - b);
  console.log('nums after sort==', nums);
  if (nums[0] !== 1) missing = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      extra = nums[i];
    }
    if (nums[i + 1] === nums[i] + 2) {
      missing = nums[i] + 1;
    }
    console.log('i, missing, extra---', i, missing, extra);
  }
  return extra + missing;
}

module.exports = { findMistake };
