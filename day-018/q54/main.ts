function createUserKeyValue(key: string, value: string) {
  let obj = {};
  obj[key] = value;
  return obj;
}

console.log(createUserKeyValue("theme", "blue"));
