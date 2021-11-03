const { canReachEnd } = require('./triplebyte-tile-jumping');

test('passes tests from screenshot', function () {
  expect(canReachEnd([1, 2, 3])).toEqual(true);
  expect(canReachEnd([5, 0, 0, 0])).toEqual(true);
  expect(canReachEnd([0])).toEqual(true);
  expect(canReachEnd([0, 2, 4])).toEqual(false);
  expect(canReachEnd([1, 2, 0, 0, 1])).toEqual(false);
});
