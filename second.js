// To find the largest elements fro the 2 dimensional array.
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
