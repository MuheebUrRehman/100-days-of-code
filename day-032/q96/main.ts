function arraySum(arrsum: number[]) {
  return arrsum.reduce((a, b) => a + b, 0);
}

let arraysum = [10, 15, 10, 20];

console.log(arraySum(arraysum));
