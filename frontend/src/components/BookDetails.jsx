import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequests from '../services/ApiService';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await ApiRequests.getBookById(id);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <p>${book.price}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
