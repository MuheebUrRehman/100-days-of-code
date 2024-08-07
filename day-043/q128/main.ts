const product = (...arr: number[]) => {
  return arr.reduce((total, num1) => total + num1);
};

console.log(product(2, 4, 6));
