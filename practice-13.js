//ax+b=c c=ax+b ax=c c=ax
//x=c-b/a
//3x+4=7  ---3x+4  7
//a  --->

let myRegex = /[x]/i;
class First {
  constructor(list) {
    this.list = list;
  }
  action() {
    let index = myRegex.test(this.list[0]) ? 0 : 1;
    let match = this.list[index].match(/([-+]?\d*\.?\d*)x/g);
    return parseFloat(match);
  }
}
class Second {
  constructor(list, parameter) {
    this.list = list;
    this.parameter = parameter;
  }
  action() {
    let index = myRegex.test(this.list[0]) ? 0 : 1;
    let numbers = this.list[index].match(/([-+]?\d*\.?\d*)/g);
    let filtered = numbers.filter((item) => {
      return item !== "";
    });
    let converted = filtered.map((item) => {
      return parseFloat(item);
    });
    return converted.length === 1
      ? 0
      : converted[0] === this.parameter
      ? converted[1]
      : converted[0];
  }
}
class Third {
  constructor(list) {
    this.list = list;
  }
  action() {
    let index = myRegex.test(this.list[0]) ? 1 : 0;
    return parseFloat(this.list[index]);
  }
}
class Result {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  action() {
    return (this.c - this.b) / this.a;
  }
}
function print() {
  let inputEquation = document.getElementById("equation").value;
  let sidesOfEquation = inputEquation.split("=");
  let one = new First(sidesOfEquation);
  let two = new Second(sidesOfEquation, one.action());
  let three = new Third(sidesOfEquation);
  let result = new Result(one.action(), two.action(), three.action());
  console.log(one.action());
  console.log(two.action());
  console.log(three.action());
  let valorX = result.action();
  document.getElementById("result").textContent = `El valor de x es: ${valorX}`;
}
