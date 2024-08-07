function daysleft() {
    var today = new Date();
    var year = new Date(today.getFullYear() + 1, 0, 1);
    var diff = year.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysleft(), "days left");
