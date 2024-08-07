function changeInstance(sentence: string) {
  return sentence.replace(/javascript/g, "typescript");
}

console.log(
  changeInstance(
    "i was new to javascript and now i am very profient at javascript"
  )
);
