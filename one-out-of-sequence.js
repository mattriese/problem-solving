/**Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
 * [1, 2, 10, 3, 4] --remove high--  if i+2 > i-1
 * [1, 2, 10, 1, 4] --return FALSE--
 * [1, 2, 10, 3, 11] --remove either--
 * [1, 2, 3, 1, 4] --remove low--
 * [10, 1, 11, 12] --remove either--
 * [10, 1, -1, 11, 12] --
 * [1, 2, 0, 0, 5]
 */

function solution(sequence) {
  let removed = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i + 1] <= sequence[i]) {
      //try removing current
      if (i === 0 || sequence[i + 1] > sequence[i - 1]) {
        removed++;
        //try removing i+1
      } else if (i === sequence.length - 2 || sequence[i + 2] > sequence[i]) {
        removed++;
        i++;
      } else {
        console.log(`i=${i}, removed=${removed},  FIRST FALSE`);
        return false;
      }
    }
    console.log(`i=${i}, removed=${removed}, `);
    if (removed > 1) return false;
  }
  return true;
}
