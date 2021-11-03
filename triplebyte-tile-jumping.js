function canReachEnd(nums) {
  let currTile = 0;
  let tries = 0;
  if (nums.length <= 1) return true;
  while (tries < nums.length) {
    currTile += nums[currTile];
    tries++;
    console.log(
      'currTile, tries, nums[currTile]===',
      currTile,
      tries,
      nums[currTile]
    );
    if (currTile >= nums.length) return true;
  }
  return false;
}

module.exports = { canReachEnd };
