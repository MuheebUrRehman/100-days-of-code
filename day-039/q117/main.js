function checkGrade(grade) {
    switch (grade) {
        case "A":
            console.log("fab");
            break;
        case "B":
            console.log("excellent");
            break;
        case "C":
            console.log("good");
            break;
        case "D":
            console.log("nice");
            break;
        default:
            console.log("invalid");
            break;
    }
}
checkGrade("E");
