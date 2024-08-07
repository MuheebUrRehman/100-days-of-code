let guests2 = ["shahrukh", "vicky", "fawad"];
guests2.forEach((guests2) =>
  console.log(`${guests2} would you like to dinner with me`)
);

let removedguest = guests2[1];
console.log(`${removedguest} sorry you are not invited`);

let newguest = "asad";
guests2[guests2.indexOf(removedguest)] = newguest;

console.log(`${newguest} would you like to dinner with me`);
