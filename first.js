// To check ending of the string matches with given character/s using inbuilt function

// Approach_01
function lastCharCheck(str, char) {
  return str.charAt(str.length - 1) === char;
}

console.log(lastCharCheck("bott", "t"));

// Approach_02
// function confirmEnding(str, target) {
//   return str.endsWith(target); //true
// }
