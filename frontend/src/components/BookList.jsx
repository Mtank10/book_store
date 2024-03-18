import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <p>${book.price}</p>
          <Link to={`/book/${book.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
