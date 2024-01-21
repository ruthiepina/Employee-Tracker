//* WHEN I choose to view all roles
//* THEN I am presented with the job title, role id, the department that role belongs to,
//* and the salary for that role

class Role {
   constructor(id, title, department_id, salary) {
      this.id = id;
      this.title = title;
      this.department_id = department_id;
      this.salary = salary;
   }

   getId() {
      return this.id;
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
}

module.exports = Role;
