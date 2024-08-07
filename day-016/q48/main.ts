let laptop1 = [1800, 4000, 9000, 1000];
let laptop2 = [5000, 6000, 1000, 500];
let comparision = [...laptop1, ...laptop2].sort((a, b) => a - b);

console.log(comparision);
