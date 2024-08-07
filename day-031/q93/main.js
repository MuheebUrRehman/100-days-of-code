function replaceElement(fruit) {
    var bm = fruit.indexOf("banana");
    fruit[bm] = "mango";
    return fruit;
}
var fruit = ["banana", "cherry", "grapes"];
console.log(replaceElement(fruit));
