-- Create the table
CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    desc VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    cover VARCHAR(45) NOT NULL
);

-- Insert some sample data
INSERT INTO books (title, desc, price, cover) VALUES
    ('Title 1', 'Description 1', 100, 'cover1.jpg'),
    ('Title 2', 'Description 2', 150, 'cover2.jpg'),
    ('Title 3', 'Description 3', 200, 'cover3.jpg');
