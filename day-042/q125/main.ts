let student = {
  name: "muheeb",
  age: 22,
  getName: function () {
    return `${this.name}, ${this.age}`;
  },
};

console.log(student.getName());
