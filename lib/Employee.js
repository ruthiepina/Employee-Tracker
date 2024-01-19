//* WHEN I choose to view all employees
//* THEN I am presented with a formatted table showing employee data,
//*including employee ids, first names, last names, job titles, departments,
//* salaries, and managers that the employees report to

class Employee {
   constructor(employee_id, first_name, last_name, title, department_id, salary, manager_id) {
      this.employee_id = employee_id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.title = title;
      this.department_id = department_id;
      this.salary = salary;
      this.manager_id = manager_id;
   }
   getEmployeeId() {
      return this.employee_id;
   }
   getFirstName() {
      return this.first_name;
   }
   getLastName() {
      return this.last_name;
   }
   getTitle() {
      return this.title;
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
