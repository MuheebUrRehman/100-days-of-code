function arraySum(arrsum) {
    return arrsum.reduce(function (a, b) { return a + b; }, 0);
}
var arraysum = [10, 15, 10, 20];
console.log(arraySum(arraysum));
