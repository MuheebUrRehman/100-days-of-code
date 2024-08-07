function avergeScore(...scores: number[]) {
  let total = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return total;
}

console.log(avergeScore(22, 33, 44, 55));
