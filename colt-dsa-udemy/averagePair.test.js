"use strict";

const {averagePair} = require("./averagePair");

test("works with colt's examples", function() {
  expect(averagePair([1,2,3], 2.5)).toEqual(true);
  expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toEqual(true);
  expect(averagePair([-1,0,3,4,5,6], 4.1)).toEqual(false);
  expect(averagePair([], 4)).toEqual(false);
})
