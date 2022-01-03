/**Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
 *  */
function solution(n) {
  let nString = n.toString();
  let beg = 0;
  let end = nString.length - 1;
  let nArr = nString.split('');
  let firstHalf = 0;
  let secondHalf = 0;
  while (beg < end) {
    firstHalf += +nArr[beg];
    secondHalf += +nArr[end];
    beg++;
    end--;
  }
  if (firstHalf === secondHalf) return true;
  return false;
}
