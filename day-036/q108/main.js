function campareString(str, str2) {
    return str.toLowerCase() === str2.toLowerCase();
}
console.log(campareString("hello world", "hello world"));
console.log(campareString("hello world", "hello word"));
