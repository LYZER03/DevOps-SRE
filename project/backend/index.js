import express from "express";
import mysql from "mysql2";
import 'dotenv/config';
import cors from "cors";

const port = process.env.port || 8880
const app = express();

// MySQL
const db = mysql.createConnection({
    host: process.env.DOCKER_MYSQL_HOST || process.env.MYSQL_HOST,
    user: 'root',
    password:'root',
    database: 'test'
});

//console.log('Connecting to MySQL on host:', process.env.MYSQL_HOST);

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
    db.connected = true;
});

app.use(express.json());
app.use(cors());

// Function to handle GET /books
export const getBooks = (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

// Function to handle POST /books
export const createBook = (req, res) => {
    const q = "INSERT INTO books (`id`,`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        const successMessage = "Book has been created successfully.";
        return res.json({ data, successMessage });
    });
};

// Function to handle DELETE /books/:id
export const deleteBook = (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    });
};

// Function to handle PUT /books/:id
export const updateBook = (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price`= ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.");
    });
};

// Routes
app.get("/", (req, res) => {
    res.json("Hello, this is the backend side!");
});

app.get("/books", getBooks);
app.post("/books", createBook);
app.delete("/books/:id", deleteBook);
app.put("/books/:id", updateBook);

// Server
export const server = app.listen(8880, () => {
    console.log(`Connected to backend! listening port: ${port}`);
});

export default db;


