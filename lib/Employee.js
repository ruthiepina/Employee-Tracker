//* WHEN I choose to view all employees
//* THEN I am presented with a formatted table showing employee data,
//*including employee ids, first names, last names, job titles, departments,
//* salaries, and managers that the employees report to

class Employee {
   constructor(id, first_name, last_name, role_id, department_id, salary, manager_id) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.role_id = role_id;
      this.department_id = department_id;
      this.salary = salary;
      this.manager_id = manager_id;
   }
   getId() {
      return this.id;
   }
   getFirstName() {
      return this.first_name;
   }
   getLastName() {
      return this.last_name;
   }
   getRoleId() {
      return this.role_id;
   }
   getDepartmentId() {
      return this.department_id;
   }
   getSalary() {
      return this.salary;
   }
   getManagerId() {
      return this.manager_id;
   }
}

module.exports = Employee;
