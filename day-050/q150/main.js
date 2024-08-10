// synchronous
console.log("synchronous start");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("synchronous end");
// asynchronous
console.log("asynchronous start");
setTimeout(function () {
    console.log("asynchronous execution");
}, 3000);
console.log("asynchronous end");
