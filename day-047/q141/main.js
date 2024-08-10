"use strict";
function fetchSomething() {
    return new Promise((resolve, reject) => {
        resolve("good");
    });
}
async function awaitUseCase() {
    const word = await fetchSomething();
    console.log(word);
}
awaitUseCase();
console.log("await is use to achieve asynchronous nature");
