let guests = ["shahrukh", "vicky", "fawad"];
guests.forEach((guests) =>
  console.log(`${guests} would you like to dinner with me`)
);

let removedguest = guests[1];
console.log(`${removedguest} sorry you are not invited`);

let newguest = "asad";
guests[guests.indexOf(removedguest)] = newguest;

console.log(`${newguest} would you like to dinner with me`);

console.log(guests);

console.log(`${guests} we just found a bigger dining table`);

guests.unshift("arham");
guests.splice(guests.length / 2, 0, "zaid");
guests.push("mehmood");

guests.forEach((guests) =>
  console.log(`${guests} would you like to dinner with me`)
);

console.log(guests);

