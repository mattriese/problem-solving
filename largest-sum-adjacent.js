function solution(inputArray) {
  let max = -Infinity;
  for (let i = 1; i < inputArray.length - 1; i + 2) {
    let largestNeighbor = Math.max(inputArray[i - 1], inputArray[i + 1]);
    let localSum = largestNeighbor + inputArray[i];
    if (localSum > max) {
      max = localSum;
    }
  }
  return max;
}
