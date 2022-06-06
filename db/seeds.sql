INSERT INTO departments (name)
VALUES
    ("Enginnering"),
    ("Sales"),
    ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Manager", "300000", 1),
    ("Software Engineer", "160000", 1),
    ("Intern", "50000", 1),
    ("Manager", "300000", 2),
    ("Sales Associate", "125000", 2),
    ("Sales Coordiator", "100000", 2),
    ("Manager", "300000", 3),
    ("DNI Officer", "70000", 3),
    ("Community Manager", "60000", 3);
    

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 1, 2),
    ('Piers', 'Gaveston', 1, 3),
    ('Charles', 'LeRoi', 2, NULL),
    ('Katherine', 'Mansfield', 2, 5),
    ('Dora', 'Carrington', 3, 6),
    ('Edward', 'Bellamy', 3, NULL),
    ('Montague', 'Summers', 3, 8),
    ('Octavia', 'Butler', 3, 9),
    ('Unica', 'Zurn', NULL, NULL);
