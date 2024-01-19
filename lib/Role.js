//* WHEN I choose to view all roles
//* THEN I am presented with the job title, role id, the department that role belongs to,
//* and the salary for that role

class Role {
   constructor(role_id, title, department_id, salary) {
      this.role_id = role_id;
      this.title = title;
      this.department_id = department_id;
      this.salary = salary;
   }

   getRoleId() {
      return this.role_id;
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
