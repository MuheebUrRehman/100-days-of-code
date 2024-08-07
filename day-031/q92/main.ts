function printRemovedFruit(fruits: string[]) {
  return fruits.pop();
}

let fruits = ["banana", "cherry", "grapes"];

console.log(printRemovedFruit(fruits));
console.log(fruits);
