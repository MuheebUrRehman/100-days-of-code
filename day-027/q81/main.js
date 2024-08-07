var car = { make: "toyota", model: "a70", year: 2022 };
function objfunc(obj) {
    for (var property in obj) {
        console.log("".concat(property, " : ").concat(obj[property]));
    }
}
objfunc(car);
