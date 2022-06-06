INSERT INTO departments (name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Manager", "300000", 1),
    ("Software Engineer", "160000", 1),
    ("Intern", "50000", 1),
    ("Manager", "300000", 2),
    ("Sales Associate", "125000", 2),
    ("Sales Coordinator", "100000", 2),
    ("Manager", "300000", 3),
    ("DNI Officer", "70000", 3),
    ("Community Manager", "60000", 3);
    

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 3, 1),
    ('Charles', 'LeRoi', 4, NULL),
    ('Katherine', 'Mansfield', 5, 4),
    ('Dora', 'Carrington', 6, 4),
    ('Edward', 'Bellamy', 7, NULL),
    ('Montague', 'Summers', 8, 7),
    ('Octavia', 'Butler', 9, 7),
    ('Unica', 'Zurn', NULL, NULL);
