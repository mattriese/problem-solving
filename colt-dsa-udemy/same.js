function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const freqs1 = {};
  for (let elem of arr1) {
    freqs1[elem*elem] = ++freqs1[elem*elem] || 1;
  }
  const freqs2 = {};
  for (let elem of arr2) {
    freqs2[elem] = ++freqs2[elem] || 1;
  }
  for (let key in freqs1) {
    if (freqs1[key] !== freqs2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = {same};
