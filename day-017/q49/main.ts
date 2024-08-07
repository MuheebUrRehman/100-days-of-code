function hobbies(...hobbies: string[]) {
  hobbies.forEach((hobbie) => {
    console.log(`i enjoy ${hobbie}`);
  });
}

hobbies("tennis", "cricket", "gaming", "movies");
