const {validAnagram} = require("./validAnagram");

test("works on simple anagrams", function() {
  let str1 = "matt";
  let str2 = "ttam";
  let str3 = "meena";
  let str4 = "meen";
  expect(validAnagram(str1, str2)).toEqual(true);
  expect(validAnagram(str1, str3)).toEqual(false);
  expect(validAnagram(str1, str4)).toEqual(false);
})
