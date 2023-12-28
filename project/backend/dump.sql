-- Create the table
CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    desc VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    cover VARCHAR(45) NOT NULL
);

