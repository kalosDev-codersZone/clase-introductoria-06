class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }

  whatsYourJob() {
    return `${this.name} is a/an ......`;
  }
}

const person = new Person("miguel");
console.log(person.greet());

class Programmer extends Person {
  constructor(name) {
    super(name);
  }
  writeCode(coffee) {
    coffee
      ? console.log("I am programming")
      : console.log("I can't, I don't have coffee.");
  }
  whatsYourJob() {
    return `${this.name} is a/an programmer`;
  }
}

const programmer = new Programmer("Miguel");
console.log(programmer);
programmer.writeCode();
console.log(programmer.whatsYourJob());
