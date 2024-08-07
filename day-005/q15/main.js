var guests2 = ["shahrukh", "vicky", "fawad"];
guests2.forEach(function (guests2) {
    return console.log("".concat(guests2, " would you like to dinner with me"));
});
var removedguest = guests2[1];
console.log("".concat(removedguest, " sorry you are not invited"));
var newguest = "asad";
guests2[guests2.indexOf(removedguest)] = newguest;
console.log("".concat(newguest, " would you like to dinner with me"));
