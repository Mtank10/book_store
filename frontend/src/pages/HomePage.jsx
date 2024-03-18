import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiRequests from '../services/ApiService';
import BookList from '../components/BookList';
import NavBar from '../components/Navbar';
import Pagination from '../components/Pagination';
const HomePage = ({ user, handleLogout }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await ApiRequests.getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Get current books based on pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter books based on search term
  const filteredBooks = currentBooks.filter(
    (book) =>
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <h1>Welcome to Bookstore</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by author or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <BookList books={filteredBooks} />
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default HomePage;
