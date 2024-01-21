INSERT INTO departments (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles (title, department_id, salary)
VALUES 
('Sales Lead', 1, 100000.00),
('Salesperson', 1, 80000.00),
('Lead Engineer', 2, 150000.00),
('Software Engineer', 2, 120000.00),
('Account Manager', 3, 160000.00),
('Accountant', 3, 125000.00),
('Legal Team Lead', 4, 250000.00),
('Lawyer', 4, 190000.00);

INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
VALUES
('John', 'Doe', 1, 100000.00, NULL),
('Mike', 'Chan', 2, 80000.00, 1),
('Ashley', 'Rodriguez', 3, 150000.00, NULL),
('Kevin', 'Tupik', 4, 120000.00, 3),
('Kunal', 'Singh', 5, 160000.00, NULL),
('Malia', 'Brown', 6, 125000.00, 5),
('Sarah', 'Lourd', 7, 250000.00, NULL),
('Tom', 'Allen', 8, 190000.00, 7);
