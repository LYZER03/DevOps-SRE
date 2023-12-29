import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../books.css'; // Adjust the path based on your project structure

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8880/books');
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8880/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="book-container">
      <h1 className="library-title">Tech Library</h1>
      <div className="books-container">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img className="book-cover" src={book.cover} alt={book.title} />}
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-description">{book.desc}</p>
              <span className="book-price">${book.price}</span>
            </div>
            <div className="book-actions">
              <button className="delete-button" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <button className="update-button">
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-book-button">
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};

export default Books;
