import { useState } from 'react';
import { Link,redirect} from 'react-router-dom';
import ApiRequests from '../services/ApiService';

const AdminLogin = ({  handleLogin }) => {
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
      const data = await ApiRequests.adminLogin(formData);
      handleLogin(data); 
      return redirect('/admin/dashboard');// Assuming handleLogin updates the state to mark the user as logged in
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? 
        <Link to="/admin/register">Register</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;
