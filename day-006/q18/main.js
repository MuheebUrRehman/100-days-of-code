var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["dubai", "paris", "china", "japan", "america"];
console.log("original order", favPlaces);
console.log("alphabatical order", __spreadArray([], favPlaces, true).sort());
console.log("original order", favPlaces);
console.log("alphabatical order", __spreadArray([], favPlaces, true).sort().reverse());
console.log("original order", favPlaces);
console.log("alphabatical order", favPlaces.reverse());
console.log("original order", favPlaces);
console.log("alphabatical order", favPlaces.reverse());
console.log("original order", favPlaces);
console.log("alphabatical order", favPlaces.sort());
console.log("original order", favPlaces);
console.log("alphabatical order", favPlaces.sort());
console.log("original order", favPlaces);
