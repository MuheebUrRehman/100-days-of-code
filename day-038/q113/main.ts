let countries = new Map<string, string>();
countries.set("china", "beijing");
countries.set("srilanka", "columbo");
countries.set("pakistan", "islamabad");
countries.set("canada", "Ottawa");

console.log(countries);

if (countries.has("canada")) {
  console.log(`the capital of canada is ${countries.get("canada")}`);
} else {
  console.log("canada is not in the map");
}
