var student = {
    name: "muheeb",
    age: 22,
    getName: function () {
        return "".concat(this.name, ", ").concat(this.age);
    },
};
console.log(student.getName());
