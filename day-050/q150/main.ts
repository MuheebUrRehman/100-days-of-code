// synchronous
console.log("synchronous start");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("synchronous end");

// asynchronous
console.log("asynchronous start");

setTimeout(() => {
  console.log("asynchronous execution");
}, 3000);

console.log("asynchronous end");
