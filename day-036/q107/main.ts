function checkdivisor(num: number): boolean {
  return num % 2 === 0 && num % 3 === 0;
}

console.log(checkdivisor(6));
console.log(checkdivisor(2));
