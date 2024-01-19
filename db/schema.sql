DROP DATABASE IF EXISTS tracker_db; 
CREATE DATABASE tracker_db;
USE tracker_db;   -- Makes it so following code will affect tracker_db --

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
department_id INT NOT NULL PRIMARY KEY,
name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
role_id INT NOT NULL PRIMARY KEY,
title VARCHAR(30) NOT NULL,
department_id INT,
salary DECIMAL(8,2) NOT NULL    --DECIMAL(p,s) p is tot num of digits in value, s is scale so dig after decimal point.--
);

CREATE TABLE employees (
employee_id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
title VARCHAR(30) NOT NULL,
department_id INT,
salary DECIMAL(8,2) NOT NULL,
manager_id INT
)
