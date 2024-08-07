let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinal_numbers.forEach((one_num) => {
  if (one_num === 1) {
    console.log(`${one_num}st`);
  } else if (one_num === 2) {
    console.log(`${one_num}nd`);
  } else if (one_num === 3) {
    console.log(`${one_num}rd`);
  } else {
    console.log(`${one_num}th`);
  }
});
