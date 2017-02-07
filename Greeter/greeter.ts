class Student {
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Student) {
  return ("Hello, "+person.firstName+" "+ person.middleName + " " +person.lastName);
}
var user = new Student("Nimish", "David", "Mathew");
document.body.innerHTML = greeter(user);
