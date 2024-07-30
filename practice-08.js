//asociacion

class Person {
  constructor(fullName, email) {
    this.fullName = fullName;
    this.email = email;
  }
}

class Profession {
  constructor(job, monthlyServiceCost, yearsOfExperience) {
    this.job = job;
    this.monthlyServiceCost = monthlyServiceCost;
    this.yearsOfExperience = yearsOfExperience;
  }
}

const firstUser = new Person("adam johnson", "adam@oracle.com");
const firstProfession = new Profession("architect", 4000, 5);
firstUser.Profession = firstProfession;
console.log(firstUser);
