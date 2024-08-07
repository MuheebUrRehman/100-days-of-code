function campareString(str: string, str2: string): boolean {
  return str.toLowerCase() === str2.toLowerCase();
}

console.log(campareString("hello world", "hello world"));
console.log(campareString("hello world", "hello word"));
