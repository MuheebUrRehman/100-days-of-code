function checkLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(checkLeapYear(2020));
console.log(checkLeapYear(2022));
