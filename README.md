# Day_10
Solution of day_10 from 24 days GitHub question series.


##  To check ending of the string matches with given character/s using inbuilt function  
     
// Approach_01  
function lastCharCheck(str, char) {  
  return str.charAt(str.length - 1) === char;  
}  
    
console.log(lastCharCheck("bott", "t"));  
  
// Approach_02  
// function confirmEnding(str, target) {  
//   return str.endsWith(target); //true  
// }  
  
      
## // To find the largest elements fro the 2 dimensional array.  
const input = [  
  [1, 2, 3, 4],  
  [5, 6, 7, 9],  
  [45, 76, 2, 1],  
  [89, 90, 87, 9],  
];  
  
// Output  
// [4, 9, 76, 90];  
// console.log(Math.max(...input[1]));  
  
// Approach_01  
let res = input.map((elem) => Math.max(...elem));  
console.log(res);  
  
// Approach_02  
function maxFrom2DimenArray(arr) {  
  let res = [];  
  for (let i = 0; i < arr.length; i++) {  
    let max = [];  
    // console.log(arr[i]);  
    for (let j = 0; j < arr[i].length; j++) {  
      if (max < arr[i][j]) {  
        max = arr[i][j];  
      }  
    }  
    res.push(max);  
  }  
  return res;  
}  
console.log(maxFrom2DimenArray(input));  
     
         
           
##  Print string n times using inbuilt function    
    
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
         
