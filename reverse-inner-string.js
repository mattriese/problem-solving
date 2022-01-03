/**
 * keep open variable, replace it with the index of each open paren you find
 * when hit a closed paren, reverse the substring and splice it into the main string
 * keep calling revSplice until open === 0 at the end of loop
 *
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

Guaranteed constraints:
0 ≤ inputString.length ≤ 50.

[output] string

Return inputString, with all the characters that were in parentheses reversed.
 */
function solution(inputString) {
  function revSplice(open, close, input) {
    let reversed = '';
    for (let i = close - 1; i >= open + 1; i--) {
      reversed = reversed + input[i];
    }
    let fixedString = '';
    if (open > 0) {
      fixedString = input.slice(0, open);
    }
    fixedString = fixedString + reversed;
    if (close < input.length - 1) {
      fixedString = fixedString + input.slice(close + 1, input.length);
    }
    return fixedString;
  }
  let open = null;
  let closed = null;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      open = i;
    }
    if (inputString[i] === ')') {
      closed = i;
      inputString = revSplice(open, closed, inputString);
      //console.log(`INSIDE=== i=${i}, inputSTring=${inputString}, open=${open}, closed=${closed}`);
      i = -1;
      open = null;
      closed = null;
    }
    //console.log(`i=${i}, inputSTring=${inputString}, open=${open}, closed=${closed}`);
  }
  return inputString;
}
