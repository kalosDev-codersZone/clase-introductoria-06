//agregacion
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

class Announcement {
  constructor(title, company, position) {
    this.title = title;
    this.company = company;
    this.position = position;
    this.applicants = [];
  }
  addApplicant(applicant) {
    this.applicants.push(applicant);
  }
}

const firstAnnouncement = new Announcement(
  "i need an architech",
  "HDR",
  "architect"
);

firstAnnouncement.addApplicant(firstUser);
console.log(firstAnnouncement);
