function greaterNum(num) {
    return num.filter(function (onenum) { return onenum > 10; });
}
var num = [10, 15, 5, 20, 25];
console.log(greaterNum(num));
