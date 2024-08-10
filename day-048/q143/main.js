"use strict";
const thenCatchUse = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("success");
    }
    else {
        reject("failure");
    }
});
thenCatchUse
    .then((v) => {
    console.log(v);
})
    .catch((e) => {
    console.log(e);
});
