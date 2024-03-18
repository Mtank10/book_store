import  { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import ApiRequests from '../services/ApiService';


const RegisterForm = ( ) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Admin', // Default role is Admin for registration
  });
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiRequests.register(formData);
      return redirect('/admin/login');
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };


  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? 

        <Link to="/admin/login">Login</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;
