// Print string n times using inbuilt function

function repeatStrinNumTimes(str, num) {
  if (num < 1) return "";
  return str.repeat(num);
}
// console.log(repeatStrinNumTimes("priya ", 100));

// By Recursion
let i = 0;
function repeatString(str, num) {
  i = i + 1;
  console.log(i, str);
  if (num === 1) {
    return;
  } else {
    num = num - 1;
    return repeatString(str, num);
  }
}
console.log(repeatString("Ritesh", 50));
