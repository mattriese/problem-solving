const { contiguousSubarray } = require("./contiguousSubarray");

it("pass 1st test", () => {
  let res = contiguousSubarray([0,0,0]);
  expect(res).toEqual(3);
});

it("pass 2st test", () => {
  let res2 = contiguousSubarray([1,2,1,2,3]);
  expect(res2).toEqual(1);
});
