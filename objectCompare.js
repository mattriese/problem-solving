/** objectCompare() takes two objects, which could be an array or
 * object literal, containing nested arrays and/or object literals.
 *
 * returns true if all values in the objects are the same and in the same order
 * returns false if not.
 */

function objectCompare(obj1, obj2) {
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
    obj1 = Object.values(obj1);
    obj2 = Object.values(obj2);
  }
  if (obj1.length !== obj2.length) return false;
  for (let i = 0; i < obj1.length; i++) {
    if (typeof obj1[i] === 'object' && typeof obj2[i] === 'object') {
      if (!objectCompare(obj1[i], obj2[i])) return false;
    } else {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
  }
  return true;
}
/** Alternative version with worse runtime (recursively loops through both objects completely,
 * even if there is a mismatch in the first pair of values)
 *
function objectCompare1(obj1, obj2) {
  /** flatten() recursively pushes elements/values of the nested arrays/objects
   * into a values array and returns values array.
  function flatten(obj, values = []) {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      for (let key in obj) {
        if (typeof obj[key] === 'object') values = flatten(obj[key], values);
        else values.push(obj[key]);
      }
    } else if (Array.isArray(obj)) {
      for (let elem of obj) {
        if (typeof elem === 'object') values = flatten(elem, values);
        else values.push(elem);
      }
    }
    return values;
  }
  if (flatten(obj1).join('') === flatten(obj2).join('')) return true;
  else return false;
}
 */

module.exports = objectCompare;
