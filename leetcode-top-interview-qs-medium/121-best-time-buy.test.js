const { bestTime } = require('./121-best-time-buy');

test('works with two leetcode examples', function () {
  expect(bestTime([7, 1, 5, 3, 6, 4])).toEqual(5);
  expect(bestTime([7, 6, 4, 3, 1])).toEqual(0);
  expect(bestTime([4, 1, 2])).toEqual(1);
});
