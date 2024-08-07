var guests = ["shahrukh", "vicky", "fawad"];
guests.forEach(function (guests) {
    return console.log("".concat(guests, " would you like to dinner with me"));
});
var removedguest = guests[1];
console.log("".concat(removedguest, " sorry you are not invited"));
var newguest = "asad";
guests[guests.indexOf(removedguest)] = newguest;
console.log("".concat(newguest, " would you like to dinner with me"));
console.log(guests);
console.log("".concat(guests, " we just found a bigger dining table"));
guests.unshift("arham");
guests.splice(guests.length / 2, 0, "zaid");
guests.push("mehmood");
guests.forEach(function (guests) {
    return console.log("".concat(guests, " would you like to dinner with me"));
});
console.log(guests);
