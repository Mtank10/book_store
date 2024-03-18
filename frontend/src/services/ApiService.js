import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Allow sending cookies with requests
});

const setAuthToken = (token) => {
  if (token) {
    ApiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete ApiService.defaults.headers.common['Authorization'];
  }
};

const ApiRequests = {
  // User authentication
  login: async (userData) => {
    
      const response = await ApiService.post('/auth/login', userData);
      const { data } = await response.json();
      setAuthToken(data);
      return data;

  },

  logout: async () => {
  
      await ApiService.post('/auth/logout');
      setAuthToken(null);
    
  },

  // User registration
  register: async (userData) => {
    
      const response = await ApiService.post('/auth/register', userData);
      const { token } = response.json();
      setAuthToken(token);
      return token;
  },
  adminRegister: async (userData) => {
    
      const response = await ApiService.post('/auth/admin/register', userData);
      const { token } = response.json();
      setAuthToken(token);
      return  token
    
    },
 adminLogin : async (userData) => {
  
    const response = await ApiService.post('/auth/admin/login', userData);
    const { token } = response.json();
    setAuthToken(token);
    return token;
 },
  // CRUD operations for books
  getAllBooks: async () => {
    const response = await ApiService.get('/books');
    return await response.json()
  },

  getBookById: async (id) => {
    const response = await ApiService.get(`/books/${id}`);
    return await response.json()
  },

  createBook: async (bookData) => {
    const response = await ApiService.post('/books', bookData);
    return await response.json()
  },

  updateBook: async (id, bookData) => {
    const response = await ApiService.put(`/books/${id}`, bookData);
    return await response.json()
  },

  deleteBook: async (id) => {
    const response = await ApiService.delete(`/books/${id}`);
    return await response.json()
  },

  // Checkout functionality
  checkout: async (cartData) => {
    const response = await ApiService.post('/checkout', cartData);
    return await response.json()
  },

};

export default ApiRequests;
//write full code for github 
