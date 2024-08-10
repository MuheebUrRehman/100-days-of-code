export class person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`hello ${this.name} how you doing!`);
  }
}
