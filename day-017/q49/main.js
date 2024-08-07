function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobbie) {
        console.log("i enjoy ".concat(hobbie));
    });
}
hobbies("tennis", "cricket", "gaming", "movies");
