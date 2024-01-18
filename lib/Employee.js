//* WHEN I choose to view all employees
//* THEN I am presented with a formatted table showing employee data,
//*including employee ids, first names, last names, job titles, departments,
//* salaries, and managers that the employees report to

class Employee {
   constructor(id, firstName, lastName, title, departmentId, salary, managerId) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.title = title;
      this.departmentId = departmentId;
      this.salary = salary;
      this.managerId = managerId;
   }
   getId() {
      return this.id;
   }
   getFirstName() {
      return this.firstName;
   }
   getLastName() {
      return this.lastName;
   }
   getTitle() {
      return this.title;
   }
   getDepartmentId() {
      return this.departmentId;
   }
   getSalary() {
      return this.salary;
   }
   getManagerId() {
      return this.managerId;
   }
}

module.exports = Employee;
