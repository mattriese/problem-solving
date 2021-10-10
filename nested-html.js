/* Have the function StringChallenge(str) read the str parameter being passed
*  which will be a string of HTML DOM elements and plain text. The elements
* that will be used are: b, em, dev, p. For example: if str is
* “<div><b><p>hello world</p></b></div>” then this string of DOM
* elements is nested correctly so your program should return true.

If a string is not tested correctly, return the first element encountered
where, if changed into a different element, would result in a properly
formatted string. If the string is not formatted properly, then it will
only be one element that needs to be changed, For example: if str is
“<div><i>hello</>world</b>” then your program should return the string
“div” because if the first <div> element were changed into a <b>, the
string would be properly formatted.

Examples
Input: “<div><div><b></b></div></p>”
Output: “div”

Input: “<div>abc</div><p><em><i>test test test</b></em></p>”
Output: “i”

Input: “<div>abc</div><p><em><i><div></div>test test test</b></em></p>”
Output: “i”

-------------------------------------



*/

function nestedHTML(str) {
  let stack = [];
  let beg = 0;
  let end = 0;
  let isOpening = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      beg = i+1;
      isOpening = str[i+1] === "/" ? false : true;
      continue;
    }
    if (str[i] === ">") {
      if (isOpening) {
        console.log("i, pushing: ", i, str.substring(beg, i));
        stack.push(str.substring(beg, i));
      } else {
        let last = stack.pop();
        let curr = str.substring(beg+1, i);
        console.log("i, last, curr= ", i, last, curr);
        if (last !== curr) return last;
      }
    }
  }
  return true;
}

module.exports = {nestedHTML}
