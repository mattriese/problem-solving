// import { findMistake } from './triplebyte-duplicated-number';
const { findMistake } = require('./triplebyte-duplicated-number');

test('passes default tests from screenshot', function () {
  expect(findMistake([4, 1, 3, 1])).toEqual(3);
  expect(findMistake([4, 3, 3, 1])).toEqual(5);
  expect(findMistake([6, 3, 2, 4, 3, 1])).toEqual(8);
  expect(findMistake([10, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(11);
  expect(findMistake([2, 2])).toEqual(3);
});
