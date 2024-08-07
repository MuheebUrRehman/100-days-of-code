function birthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthdate = new Date(year, month - 1, day);
    if (birthdate > today) {
        birthdate.setFullYear(year + 1);
    }
    return birthdate;
}
var birth = birthday(3, 22);
console.log(birth.toLocaleDateString(), "is your birthday");
