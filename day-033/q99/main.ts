function birthday(month: number, day: number) {
  const today = new Date();
  const year = today.getFullYear();
  const birthdate = new Date(year, month - 1, day);
  if (birthdate > today) {
    birthdate.setFullYear(year + 1);
  }
  return birthdate;
}

const birth = birthday(3, 22);
console.log(birth.toLocaleDateString(), "is your birthday");
