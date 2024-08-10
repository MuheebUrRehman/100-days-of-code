try {
  let person1: object = person();
  console.log(person1);
} catch (error: any) {
  console.error("error occured : ", error.message);
}
