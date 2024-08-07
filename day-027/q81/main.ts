let car = { make: "toyota", model: "a70", year: 2022 };

function objfunc(obj: object) {
  for (let property in obj) {
    console.log(`${property} : ${obj[property]}`);
  }
}

objfunc(car);
