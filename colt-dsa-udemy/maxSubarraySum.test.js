const {maxSubarraySum} = require("./maxSubarraySum");

test("works with Colt's examples", function(){
  expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
  expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
  expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
  expect(maxSubarraySum([4,2,1,6,2], 4)).toEqual(13);
  expect(maxSubarraySum([], 4)).toEqual(null);
})
