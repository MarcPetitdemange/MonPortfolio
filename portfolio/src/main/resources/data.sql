DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
                           id INT AUTO_INCREMENT  PRIMARY KEY,
                           first_name VARCHAR(250) NOT NULL,
                           last_name VARCHAR(250) NOT NULL,
                           mail VARCHAR(250) NOT NULL,
                           password VARCHAR(250) NOT NULL
);

INSERT INTO employees (first_name, last_name, mail, password) VALUES
('Laurent', 'GINA', 'laurentgina@mail.com', 'laurent'),
('Sophie', 'FONCEK', 'sophiefoncek@mail.com', 'sophie'),
('Agathe', 'FEELING', 'agathefeeling@mail.com', 'agathe'),
('Marc', 'PETITDEMANGE', 'marc.petitdemange57@mail.com', 'marc');

DROP TABLE IF EXISTS PROJECT;

CREATE TABLE PROJECT (
                           ID INT AUTO_INCREMENT  PRIMARY KEY,
                           TITLE VARCHAR(250) NOT NULL,
                           DESCRIPTION TEXT NOT NULL
);

INSERT INTO PROJECT (TITLE, DESCRIPTION) VALUES
('Test','Project cool'),
('Projet Ionic', 'Professionnalisant');