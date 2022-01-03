/** create freq counter for each char for each string
 * loop thru fq1, ask if
 *
 * Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer


 */

function solution(s1, s2) {
  let sharedChars = 0;
  function makeFQ(string) {
    const fq = {};
    for (let char of string) {
      if (fq[char]) {
        fq[char]++;
      } else {
        fq[char] = 1;
      }
    }
    return fq;
  }
  let fq1 = makeFQ(s1);
  let fq2 = makeFQ(s2);
  for (let char in fq1) {
    if (fq2[char]) {
      sharedChars += Math.min(fq1[char], fq2[char]);
    }
  }
  return sharedChars;
}
