function anwser_remainder(num1: number, num2: number) {
  let quotient = num1 / num2;
  let remainder = num1 % num2;
  return { quotient, remainder };
}

console.log(anwser_remainder(5, 2));
