let grades = [22, 33, 44, 55, 66];
let average = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(average);
