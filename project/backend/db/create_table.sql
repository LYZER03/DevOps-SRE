use test;

-- create_table.sql
CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    cover VARCHAR(255) NOT NULL
);

INSERT INTO books(
       title, 
       `desc`,
       price,
       cover) 
VALUES(
       "The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations", 
       "This award-winning and bestselling business handbook for digital transformation is now fully updated and expa",
       36,
       "https://i.ibb.co/KKjtSg2/819-Ow-Bru-Pl-L-SL1500.jpg"
);

INSERT INTO books(
       title, 
       `desc`,
       price,
       cover) 
VALUES(
       "Hands-on Machine Learning With Scikit-learn, Keras, and Tensorflow: Concepts, Tools, and Techniques to Build Intelligent Systemss", 
       "Through a recent series of breakthroughs, deep learning has boosted the entire field of machine learning.",
       77,
       "https://i.ibb.co/X8m4yzd/81q-HV3-ACap-L-SL1500.jpg"
);
