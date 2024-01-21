INSERT INTO departments (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles (id, title, department_id, salary)
VALUES 
(1, 'Sales Lead', 1, 100000.00),
(2, 'Salesperson', 1, 80000.00),
(3, 'Lead Engineer', 2, 150000.00),
(4, 'Software Engineer', 2, 120000.00),
(5, 'Account Manager', 3, 160000.00),
(6, 'Accountant', 3, 125000.00),
(7, 'Legal Team Lead', 4, 250000.00),
(8, 'Lawyer', 4, 190000.00);

INSERT INTO employees (id, first_name, last_name, role_id, department_id, salary, manager_id)
VALUES
(1, 'John', 'Doe', 1, 1, 100000.00, NULL),
(2, 'Mike', 'Chan', 2, 1, 80000.00, 1),
(3, 'Ashley', 'Rodriguez', 3, 2, 150000.00, NULL),
(4, 'Kevin', 'Tupik', 4, 2, 120000.00, 3),
(5, 'Kunal', 'Singh', 5, 3, 160000.00, NULL),
(6, 'Malia', 'Brown', 6, 3, 125000.00, 5),
(7, 'Sarah', 'Lourd', 7, 4, 250000.00, NULL),
(8, 'Tom', 'Allen', 8, 4, 190000.00, 7);
