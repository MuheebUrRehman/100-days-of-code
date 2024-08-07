function avergeScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0) / scores.length;
    return total;
}
console.log(avergeScore(22, 33, 44, 55));
