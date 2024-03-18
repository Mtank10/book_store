import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiRequests from '../services/ApiService';

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await ApiRequests.login(formData);
      setUser(data.user); // Set user data in parent component
      // Redirect or perform actions after successful login
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
