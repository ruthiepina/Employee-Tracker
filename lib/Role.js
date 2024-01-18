//* WHEN I choose to view all roles
//* THEN I am presented with the job title, role id, the department that role belongs to,
//* and the salary for that role

class Role {
   constructor(id, title, departmentId, salary) {
      this.id = id;
      this.title = title;
      this.departmentId = departmentId;
      this.salary = salary;
   }

   getId() {
      return this.id;
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
}

module.exports = Role;