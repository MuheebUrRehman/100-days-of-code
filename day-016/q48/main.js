var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop1 = [1800, 4000, 9000, 1000];
var laptop2 = [5000, 6000, 1000, 500];
var comparision = __spreadArray(__spreadArray([], laptop1, true), laptop2, true).sort(function (a, b) { return a - b; });
console.log(comparision);
