var grades = [22, 33, 44, 55, 66];
var average = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(average);
