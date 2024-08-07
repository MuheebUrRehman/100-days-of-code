function checkStage(age: number) {
  if (age < 13) {
    console.log("child");
  } else if (age <= 19) {
    console.log("teenager");
  } else {
    console.log("adult");
  }
}
checkStage(18);
