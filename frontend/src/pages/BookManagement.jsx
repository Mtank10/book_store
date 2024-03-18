import { useState, useEffect } from 'react';
import ApiRequests from '../services/ApiService';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [checkoutDetails, setCheckoutDetails] = useState([]);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: 0,
  });
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    fetchBooks();
    fetchCheckoutDetails();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await ApiRequests.getAllBooks();
      setBooks(data);
    } catch (error) {
      setError(error.message || 'Error fetching books');
    }
  };

  const fetchCheckoutDetails = async () => {
    try {
      const data = await ApiRequests.getCheckoutDetails();
      setCheckoutDetails(data);
    } catch (error) {
      setError(error.message || 'Error fetching checkout details');
    }
  };

  const handleAddBook = async () => {
    try {
      await ApiRequests.addBook(formData);
      setShowAddForm(false);
      setFormData({ title: '', author: '', category: '', price: 0 });
      fetchBooks();
    } catch (error) {
      setError(error.message || 'Error adding book');
    }
  };

  const handleUpdateBook = async () => {
    try {
      await ApiRequests.updateBook(selectedBookId, formData);
      setShowUpdateForm(false);
      setFormData({ title: '', author: '', category: '', price: 0 });
      fetchBooks();
    } catch (error) {
      setError(error.message || 'Error updating book');
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await ApiRequests.deleteBook(id);
      fetchBooks();
    } catch (error) {
      setError(error.message || 'Error deleting book');
    }
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
  };

  const handleShowUpdateForm = (id) => {
    const bookToUpdate = books.find((book) => book.id === id);
    setFormData({ ...bookToUpdate });
    setSelectedBookId(id);
    setShowAddForm(false);
    setShowUpdateForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Book Management</h2>
      {error && <p>{error}</p>}
      <button onClick={handleShowAddForm}>Add Book</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>${book.price}</td>
              <td>
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                <button onClick={() => handleShowUpdateForm(book.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Checkout Details</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {checkoutDetails.map((checkout) => (
            <tr key={checkout.id}>
              <td>{checkout.userId}</td>
              <td>{checkout.bookId}</td>
              <td>{checkout.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddForm && (
        <div>
          <h3>Add Book</h3>
          <form onSubmit={handleAddBook}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
      {showUpdateForm && (
        <div>
          <h3>Update Book</h3>
          <form onSubmit={handleUpdateBook}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookManagement;
