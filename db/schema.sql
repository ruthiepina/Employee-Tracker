DROP DATABASE IF EXISTS tracker_db; 
CREATE DATABASE tracker_db;
USE tracker_db;   -- Makes it so following code will affect tracker_db --

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
id INT NOT NULL PRIMARY KEY,
name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
id INT NOT NULL PRIMARY KEY,
title VARCHAR(30) NOT NULL,
department_id INT,
CONSTRAINT fk_department
FOREIGN KEY (department_id)
REFERENCES departments (id)
ON DELETE SET NULL,
salary DECIMAL(8,2) NOT NULL    --DECIMAL(p,s) p is tot num of digits in value, s is scale so dig after decimal point.--
);

CREATE TABLE employees (
id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
CONSTRAINT fk_role
FOREIGN KEY (role_id)
REFERENCES roles (id)
ON DELETE SET NULL,
department_id INT NOT NULL,
CONSTRAINT fk_department
FOREIGN KEY (department_id)
REFERENCES departments (id)
ON DELETE SET NULL,
salary DECIMAL(8,2) NOT NULL,
manager_id INT DEFAULT NULL,
CONSTRAINT fk_manager
FOREIGN KEY (manager_id)
REFERENCES employees (id)
ON DELETE SET NULL
);
