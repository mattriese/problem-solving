const { quickSort } = require('./ga-quicksort');

test('sorts my examples', function () {
  expect(quickSort([3, 23, 2, 100, 1, -3])).toEqual([-3, 1, 2, 3, 23, 100]);
  expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(quickSort([3, 2])).toEqual([2, 3]);
  expect(quickSort([1])).toEqual([1]);
  expect(quickSort([])).toEqual([]);
});
