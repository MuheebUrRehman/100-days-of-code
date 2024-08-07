"use strict";
let Name = "muheeb";
let age = 19;
let fruits = ["apple", "banana", "grapes"];
if (Name === "muheeb") {
    console.log("name is muheeb");
}
if ("MUHEEB" === Name.toUpperCase()) {
    console.log("true");
}
if (age === 19) {
    console.log("age is 19");
}
if (age != 19) {
    console.log("age is 19");
}
if (age < 10) {
    console.log("age is less then 10");
}
if (age > 10) {
    console.log("age is greater then 10");
}
if (age >= 10) {
    console.log("age is greater then equal to 10");
}
if (age <= 10) {
    console.log("age is less then equal to 10");
}
if (age != 10 && age > 10) {
    console.log("age is not equal and lesser then 10 using and");
}
if (age == 10 || age > 10) {
    console.log("age is not equal and lesser then 10 using or");
}
console.log(fruits.includes("apple"));
console.log(!fruits.includes("watermelon"));
