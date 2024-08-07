function replaceElement(fruit: string[]) {
  let bm = fruit.indexOf("banana");
  fruit[bm] = "mango";
  return fruit;
}
let fruit = ["banana", "cherry", "grapes"];
console.log(replaceElement(fruit));
