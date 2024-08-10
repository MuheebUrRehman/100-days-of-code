"use strict";
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("start p1");
        resolve("p1 resolved");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("start p2");
        resolve("p2 resolved");
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("start p3");
        resolve("p3 resolved");
    }, 3000);
});
Promise.all([p1, p2, p3])
    .then((v) => {
    console.log(v);
})
    .catch((e) => {
    console.log(e);
});
