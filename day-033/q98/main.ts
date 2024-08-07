function daysleft(): number {
  let today = new Date();
  let year = new Date(today.getFullYear() + 1, 0, 1);
  let diff = year.getTime() - today.getTime();
  let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

console.log(daysleft(), "days left");
