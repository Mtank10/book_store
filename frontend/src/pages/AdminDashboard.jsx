import  { useState } from 'react';
import {  Link } from 'react-router-dom';
import AdminLogin from '../pages/AdminLogin';
import BookManagement from '../pages/BookManagement';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (data) => {
    try {
        setIsLoggedIn(true);
        localStorage.setItem('adminToken', data.token); // Store token in localStorage
    }catch(error) {
        console.log(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminToken'); // Remove token from localStorage
  };

  return (
    <>
        {!isLoggedIn ? <AdminLogin handleLogin={handleLogin} />:
      <div className="admin-dashboard">
        <div className="sidebar">
          <h2>Admin Dashboard</h2>
          <ul>
            <li>
              <Link to="/admin/books">Books</Link>

            </li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="content">      
             
            :<BookManagement />
        </div>
      </div>
    }
    </>
  );
};

export default AdminDashboard;
