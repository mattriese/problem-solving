/**
 * loop thru inputarray, add each string into a map, the key of which is the length
 * Keep a 'longest length' variable. at end, return value of longest legnth in map

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/
function solution(inputArray) {
  let longest = 0;
  const stringsToLengths = new Map();
  for (let string of inputArray) {
    if (stringsToLengths.has(string.length)) {
      let strings = stringsToLengths.get(string.length);
      strings.push(string);
      stringsToLengths.set(string.length, strings);
    } else {
      stringsToLengths.set(string.length, [string]);
    }
    if (string.length > longest) {
      longest = string.length;
    }
  }
  return stringsToLengths.get(longest);
}
