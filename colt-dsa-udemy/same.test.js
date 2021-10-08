const { same } = require("./same");

test("works with int arrays", function() {
  let arr1 = [1, 2, 3];
  let arr2 = [1, 4, 9];
  let arr3 = [2, 5, 6];
  expect(same(arr1, arr2)).toEqual(true);
  expect(same(arr1, arr3)).toEqual(false);
})
