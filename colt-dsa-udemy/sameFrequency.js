function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let freqs = {};
  for (let char of str1) {
    freqs[char] = ++freqs[char] || 1;
  }
  for (let char of str2) {
    if (freqs[char]) {
      --freqs[char];
    } else {
      return false;
    }
  }
  return true
}
module.exports = {sameFrequency};
