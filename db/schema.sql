DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
id INT PRIMARY KEY,
name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
id INT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
department_id INT,
CONSTRAINT fk_department
FOREIGN KEY (department_id)
REFERENCES departments (id)
ON DELETE SET NULL,
salary DECIMAL(8,2) NOT NULL
);

CREATE TABLE employees (
id INT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
salary DECIMAL(8,2) NOT NULL,
CONSTRAINT fk_role
FOREIGN KEY (role_id)
REFERENCES roles (id)
ON DELETE SET NULL,
manager_id INT DEFAULT NULL,
CONSTRAINT fk_manager
FOREIGN KEY (manager_id)
REFERENCES employees (id)
ON DELETE SET NULL
);
