//red social

class User {
  constructor(fullName, email, yearOfBirth, password) {
    this.fullname = fullName;
    this.email = email;
    this.yearOfBirth = yearOfBirth;
    this.password = password;
  }
  showFullName() {
    return this.fullname;
  }
  showEmail() {
    return this.email;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
  showCurrentAge() {
    const fecha = new Date();
    let currentAge = fecha.getFullYear() - this.yearOfBirth;
    return currentAge;
  }
}

const firstUser = new User("james gunz", "jam@oracle.com", 1990, "aeiou");
console.log(firstUser.showCurrentAge());
