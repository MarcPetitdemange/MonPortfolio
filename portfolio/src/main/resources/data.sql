SET FOREIGN_KEY_CHECKS=0;
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

DROP TABLE IF EXISTS CATEGORIES CASCADE ;

CREATE TABLE CATEGORIES (
                         ID INT AUTO_INCREMENT  PRIMARY KEY,
                         TITLE VARCHAR(250) NOT NULL
);

INSERT INTO CATEGORIES (TITLE) VALUES
('Angular'),
('React'),
('Android'),
('Java'),
('C'),
('C#'),
('C++'),
('VueJs'),
('Python'),
('PHP'),
('Ionic'),
('Nativescript'),
('Javascript'),
('HTML / CSS');

DROP TABLE IF EXISTS CATEGORIES_AFFECTATION;

CREATE TABLE CATEGORIES_AFFECTATION (
                            CATEGORIE_ID INT,
                            PROJECT_ID INT,
                            PRIMARY KEY (CATEGORIE_ID, PROJECT_ID)
);


DROP TABLE IF EXISTS PROJECTS;

CREATE TABLE PROJECTS (
                           ID INT AUTO_INCREMENT  PRIMARY KEY,
                           TITLE VARCHAR(250) NOT NULL,
                           DESCRIPTION TEXT NOT NULL
);

INSERT INTO PROJECTS (TITLE, DESCRIPTION) VALUES
('Test','Project cool'),
('Projet Ionic', 'Professionnalisant');

SET FOREIGN_KEY_CHECKS=1;