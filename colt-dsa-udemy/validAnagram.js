function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frq1 = {};
  for (let char of str1) {
    frq1[char] = ++frq1[char] || 1;
  }
  // loop through str2, for each char, if the value in frq1 is 0,
  //return false. if you make it all the way through, return true
  for (let char of str2) {
    if (!frq1[char]) {
      return false;
    } else {
      frq1[char]--;
    }
  }
  return true;
}

module.exports = {validAnagram}
