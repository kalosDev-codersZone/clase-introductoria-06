//encapsulamiento
class User {
  #age; //private class fields

  constructor(fullName, email) {
    this.fullName = fullName;
    this.email = email;
    this.#age = 30;
  }
  action() {
    return this.#age;
  }
}

const firstUser = new User("rene cross", "userOne@oracle.com");
console.log(firstUser.action());
