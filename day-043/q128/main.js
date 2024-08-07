var product = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (total, num1) { return total + num1; });
};
console.log(product(2, 4, 6));
