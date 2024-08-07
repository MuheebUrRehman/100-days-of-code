function anwser_remainder(num1, num2) {
    var quotient = num1 / num2;
    var remainder = num1 % num2;
    return { quotient: quotient, remainder: remainder };
}
console.log(anwser_remainder(5, 2));
