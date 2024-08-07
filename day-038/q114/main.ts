const students = new Map<number, string>();
students.set(1, "muheeb");
students.set(2, "arshad");
students.set(3, "kashif");

students.forEach((name, id) => {
  console.log(`student id: ${id}, student name: ${name}`);
});
