var mixed_array = ["muheeb", 22, "car", true];
var string_array = mixed_array.filter(function (item) { return typeof item === "string"; });
console.log(string_array);
