let magicians = ["muheeb", "sana", "kashif"];

function show_magicians(magiNames: string[]) {
  magiNames.forEach((onename) => {
    console.log(onename);
  });
}

function make_great(magicians) {
  for (let index = 0; index < magicians.length; index++) {
    magicians[index] = "the great" + " " + magicians[index];
  }
}

make_great(magicians);
show_magicians(magicians);

// incompleted