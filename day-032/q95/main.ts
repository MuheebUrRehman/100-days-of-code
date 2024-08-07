function greaterNum(num: number[]) {
  return num.filter((onenum) => onenum > 10);
}

let num = [10, 15, 5, 20, 25];

console.log(greaterNum(num));
