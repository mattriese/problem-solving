function binarySearch(list, target) {
  let high = list.length() - 1;
  let low = 0;
  let mid = (low + high) / 2;
  let guess = list[mid];

  while (low <= high) {
    if (target === guess) {
      return mid;
    }
    if (target > guess) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
