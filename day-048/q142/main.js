"use strict";
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});
greeting.then((v) => {
    console.log(v);
});
