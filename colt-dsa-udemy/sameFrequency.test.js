const {sameFrequency} = require("./sameFrequency");

test("works with colt's examples", function() {
  expect(sameFrequency(182, 281)).toEqual(true);
  expect(sameFrequency(34, 14)).toEqual(false);
  expect(sameFrequency(3589578, 5879385)).toEqual(true);
  expect(sameFrequency(22, 222)).toEqual(false);
})
