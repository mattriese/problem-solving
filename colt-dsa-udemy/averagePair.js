function averagePair(arr, targetAvg) {
  if (arr.length < 2) return false;
  let small = 0;
  let big = arr.length-1;
  while (small < big) {
    let avg = (arr[small] + arr[big]) / 2;
    console.log("small, big, avg =", small, big, avg);
    if (avg === targetAvg) return true;
    if (avg < targetAvg) {
      small++;
    } else {
      big--;
    }
  }
  return false;
}

module.exports = {averagePair}
