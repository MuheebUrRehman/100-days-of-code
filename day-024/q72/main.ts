{
  let num1 = 22;
  const num2 = 10;
  console.log(num1);
  console.log(num2);
}
try {
  console.log(num1);
} catch (error) {
  console.log("cannot use it");
}
try {
  console.log(num2);
} catch (error) {
  console.log("cannot use it");
}
