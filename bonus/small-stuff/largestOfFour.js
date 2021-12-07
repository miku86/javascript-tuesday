function largestOfFour(arr) {
  const result = [];

  for (let subarray of arr) {
    result.push(Math.max(...subarray));
  }

  return result;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
